import type { WalletClient } from 'viem'

import { FixedNumber } from '../../../fixedNumber'
import { EMPTY_DESC } from '../../common/buttonHeadings'
import type { RequestSignerFnWithMetadata, TradeDirection } from '../../interfaces'
import {
  approveAgent,
  cancelOrders,
  checkIfRageTradeAgent,
  floatToWire,
  getAllMids,
  getClearinghouseState,
  getExtraAgents,
  getOpenOrders,
  getSpotClearinghouseState,
  getSpotMeta,
  getSpotTokenDetails,
  getUserFills,
  makeRequestExecutable,
  orderTypeToWire,
  roundedPrice,
  roundedSize,
  slippagePrice,
  spotPerpTransfer
} from './api/clientTestnet'
import { HL_EXCHANGE_URL } from './api/configTestnet'
import { signL1Action } from './api/signingTestnet'
import type { OrderWire } from './api/types'
import { hlSubscribeOrderBook } from './api/wsclientTestnet'
import { traverseHLBook } from './obTraversalTestnet'

export const SPOT_TICKER = 'TOKFIN'
export const INTERNAL_TICKER = '@720'

export const SPOT_ADDRESS = '0xdc1abe2e304b2366f303c7260c2a30dd'
export const BOT_ADDRESS = '0x34568C46aFdC5524DFdA63ebAB637Adb0c88Ac77'

export async function getLBPTokenDetails() {
  const data = await getSpotTokenDetails(SPOT_ADDRESS)

  if (data && !data.midPx) {
    const mids = await getAllMids()
    data.midPx = Number(mids[INTERNAL_TICKER]) || 0
  }

  return data
}

export async function getUserBalances(wallet: string) {
  const [spot, perp] = await Promise.all([getSpotClearinghouseState(wallet), getClearinghouseState(wallet)])
  const spotBalances = spot.balances.filter((v) => v.coin === SPOT_TICKER || v.coin === 'USDC')
  spotBalances.push({ coin: 'USDC (perp)', total: perp.withdrawable, hold: '0' })

  return spotBalances
}

export async function getInvestorsCount() {
  return Promise.resolve(562)
}

export async function getLBPMetrics() {
  const spot = await getSpotClearinghouseState(BOT_ADDRESS)
  const remainingTokens = spot.balances.find((v) => v.coin === SPOT_TICKER)?.total || 0
  const fundsRaised = spot.balances.find((v) => v.coin === 'USDC')?.total || 0

  return {
    remainingTokens,
    fundsRaised
  }
}

interface Candle {
  t: number
  T: number
  s: string
  i: string
  o: string
  c: string
  h: string
  l: string
  v: string
  n: number
}

export async function getVolumeCandles(startTime: number, endTime: number): Promise<Candle[]> {
  const request = await fetch('https://api.hyperliquid-testnet.xyz/info', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      req: {
        coin: INTERNAL_TICKER,
        endTime: endTime,
        interval: '15m',
        startTime: startTime
      },
      type: 'candleSnapshot'
    })
  })

  return request.json()
}

export async function getLBPOpenOrders(wallet: string) {
  const data = await getOpenOrders(wallet)
  return data.filter((v) => v.coin === INTERNAL_TICKER)
}

export async function getLBPTradeHistory(wallet: string) {
  const data = await getUserFills(wallet)
  return data.filter((v) => v.coin === INTERNAL_TICKER)
}

export async function buyLBP(
  amount: number,
  slippage: number,
  isNotional: boolean,
  limitPrice: number | undefined
): Promise<RequestSignerFnWithMetadata> {
  const timestamp = Math.floor(new Date().getTime() - 100)

  const tokenInfo = await getLBPTokenDetails()

  if (!tokenInfo || (!tokenInfo.midPx && !tokenInfo.markPx)) throw new Error('mid price not found')

  const limitPx = limitPrice
    ? roundedPrice(Number(limitPrice))
    : roundedPrice(slippagePrice(true, slippage, tokenInfo.midPx || tokenInfo.markPx))

  const size = isNotional
    ? roundedSize(amount / limitPx, tokenInfo.szDecimals)
    : roundedSize(amount, tokenInfo.szDecimals)

  const wireData: OrderWire = {
    a: 10_000 + 158,
    b: true,
    p: floatToWire(limitPx),
    s: floatToWire(size),
    r: false,
    t: orderTypeToWire({ limit: { tif: !limitPrice ? 'Ioc' : 'Gtc' } })
  }

  return {
    fn: async (wallet: WalletClient) => {
      const orderAction = {
        type: 'order',
        orders: [wireData],
        grouping: 'na'
      }

      const signature = (await signL1Action(wallet, orderAction, timestamp)).slice(2)

      const rawSignature = {
        r: '0x' + signature.slice(0, 64),
        s: '0x' + signature.slice(64, 128),
        v: parseInt(signature.slice(128), 16)
      }

      const reqData = JSON.stringify({
        action: orderAction,
        nonce: timestamp,
        signature: rawSignature
      })

      return makeRequestExecutable(HL_EXCHANGE_URL, reqData)
    },
    chainId: 1337,
    isEoaSigner: false,
    isUserAction: true,
    isAgentRequired: true,
    desc: EMPTY_DESC,
    heading: 'Buy Spot LBP'
  }
}

export async function sellLBP(
  amount: number,
  slippage: number,
  isNotional: boolean,
  limitPrice: number | undefined
): Promise<RequestSignerFnWithMetadata> {
  const timestamp = Math.floor(new Date().getTime() - 100)
  const tokenInfo = await getLBPTokenDetails()

  if (!tokenInfo || (!tokenInfo.midPx && !tokenInfo.markPx)) throw new Error('mid price not found')

  const limitPx = limitPrice
    ? roundedPrice(Number(limitPrice))
    : roundedPrice(slippagePrice(false, slippage, tokenInfo.midPx || tokenInfo.markPx))

  const size = isNotional
    ? roundedSize(amount / limitPx, tokenInfo.szDecimals)
    : roundedSize(amount, tokenInfo.szDecimals)

  const wireData: OrderWire = {
    a: 10_000 + 158,
    b: false,
    p: floatToWire(limitPx),
    s: floatToWire(size),
    r: false,
    t: orderTypeToWire({ limit: { tif: !limitPrice ? 'Ioc' : 'Gtc' } })
  }

  return {
    fn: async (wallet: WalletClient) => {
      const orderAction = {
        type: 'order',
        orders: [wireData],
        grouping: 'na'
      }

      const signature = (await signL1Action(wallet, orderAction, timestamp)).slice(2)

      const rawSignature = {
        r: '0x' + signature.slice(0, 64),
        s: '0x' + signature.slice(64, 128),
        v: parseInt(signature.slice(128), 16)
      }

      const reqData = JSON.stringify({
        action: orderAction,
        nonce: timestamp,
        signature: rawSignature
      })

      return makeRequestExecutable(HL_EXCHANGE_URL, reqData)
    },
    chainId: 1337,
    isEoaSigner: false,
    isUserAction: true,
    isAgentRequired: true,
    desc: EMPTY_DESC,
    heading: 'Sell Spot LBP'
  }
}

export async function lbpCheckAgent(eoaAddress: string, agentAddress: string) {
  const data = await getExtraAgents(eoaAddress)
  return checkIfRageTradeAgent(data, agentAddress)
}

export function start() {
  hlSubscribeOrderBook(`1337-HL-${INTERNAL_TICKER}`, undefined)
}

export async function getTradeEstimation(
  direction: TradeDirection,
  size: string,
  isNotional: boolean,
  marketPrice: string
) {
  const tokenInfo = await getLBPTokenDetails()

  if (!tokenInfo || (!tokenInfo.midPx && !tokenInfo.markPx)) throw new Error('mid price not found')

  size = isNotional ? roundedSize(Number(size) / tokenInfo.midPx, tokenInfo.szDecimals).toString() : size

  return traverseHLBook(
    `1337-HL-${INTERNAL_TICKER}`,
    direction,
    FixedNumber.fromString(size.toString()),
    FixedNumber.fromString(marketPrice.toString()),
    undefined
  )
}

export const spotMeta = getSpotMeta
export const lbpCancelOrder = cancelOrders
export const lbpApproveAgent = approveAgent
export const lbpSpotPerpTransfer = spotPerpTransfer
export const lbpCheckIfRageTradeAgentInternal = checkIfRageTradeAgent

// getLBPTokenDetails()
// getUserBalances('0x988ad4c62fce5ae756A77AfAfd4A27094967749F')
// getInvestorsCount()
// getLBPMetrics()
// getVolumeCandles(0, 1716195569000)
// getLBPOpenOrders(BOT_ADDRESS)
// getLBPTradeHistory(BOT_ADDRESS)
