import { ethers } from 'ethers'
import { getAddress } from 'ethers-v6'
import type { WalletClient } from 'viem'

import {
  CANCEL_ORDER_H,
  EMPTY_DESC,
  getClosePositionHeading,
  getIncreasePositionHeading,
  HYPERLIQUID_ENABLE_TRADING_H,
  HYPERLIQUID_MULTIPLE_POSITION_H,
  HYPERLIQUID_SET_REF_H,
  HYPERLIQUID_SPOT_PERP_TRANSFER,
  HYPERLIQUID_UPDATE_LEVERAGE_H,
  HYPERLIQUID_UPDATE_MARGIN_H,
  HYPERLIQUID_UPDATE_ORDER_H,
  HYPERLIQUID_WITHDRAW_H
} from '../../../common/buttonHeadings'
import type { Token } from '../../../common/tokens'
import type { RequestSignerFnWithMetadata } from '../../../interfaces/IActionExecutor'
import type { AgentState, TradeDirection } from '../../../interfaces/V1/IRouterAdapterBaseV1'
import { HL_EXCHANGE_URL, HL_INFO_URL } from './configTestnet'
import { signAgent, signL1Action, signReadOnlyAuth, signWithdrawFromBridgeAction } from './signingTestnet'
import type {
  ActiveAssetData,
  AllMids,
  CancelRequest,
  ClearinghouseState,
  ExtraAgent,
  FundingHistory,
  L2Book,
  Meta,
  MetaAndAssetCtx,
  ModifyRequest,
  ModifyWire,
  OpenOrders,
  OrderRequest,
  OrderStatusInfo,
  OrderType,
  OrderTypeWire,
  OrderWire,
  PointsResponse,
  ReferralResponse,
  Side,
  SpotClearinghouseState,
  SpotMeta,
  SpotMetaAndAssetCtx,
  TokenDetails,
  UserFill,
  UserFunding,
  WebData2
} from './types'

const REFERRAL_CODE = 'RAGETRADE'

export const HL_TOKENS_MAP: Record<
  string,
  Token & {
    assetIndex: number // To be used in some api's
  }
> = {}
export const HL_COLLATERAL_TOKEN = {
  symbol: 'HL-USD',
  name: 'HL USD',
  decimals: 6,
  address: {
    42161: undefined,
    10: undefined
  }
} as Token

export function updateTokensMap(meta: Meta) {
  meta.universe.forEach((u, index) => {
    HL_TOKENS_MAP[u.name] = {
      symbol: u.name,
      name: u.name,
      decimals: u.szDecimals,
      address: {
        42161: undefined,
        10: undefined,
        81457: undefined
      },
      assetIndex: index
    }
  })
}

async function makeRequest(url: string, reqData: string) {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: reqData
  }).then((res) => {
    if (res.ok) return res.json()
    return res
  })
}

export async function makeRequestExecutable(url: string, reqData: string): Promise<Parameters<typeof fetch>> {
  const params: Parameters<typeof fetch> = [
    url,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: reqData
    }
  ]

  return params
}

export async function getMeta(): Promise<Meta> {
  const reqData = JSON.stringify({
    type: 'meta'
  })
  const meta = (await makeRequest(HL_INFO_URL, reqData)) as Meta
  updateTokensMap(meta)
  return meta
}

export async function getSpotMeta(): Promise<SpotMeta> {
  const reqData = JSON.stringify({
    type: 'spotMeta'
  })
  const meta = await makeRequest(HL_INFO_URL, reqData)
  // updateTokensMap(meta)
  return meta
}

export async function getAllMids(): Promise<AllMids> {
  const reqData = JSON.stringify({
    type: 'allMids'
  })
  return makeRequest(HL_INFO_URL, reqData)
}

export async function getMetaAndAssetCtxs(): Promise<MetaAndAssetCtx> {
  const reqData = JSON.stringify({
    type: 'metaAndAssetCtxs'
  })
  return makeRequest(HL_INFO_URL, reqData)
}

export async function getSpotMetaAndAssetCtxs(): Promise<SpotMetaAndAssetCtx> {
  const reqData = JSON.stringify({
    type: 'spotMetaAndAssetCtxs'
  })
  return makeRequest(HL_INFO_URL, reqData)
}

export async function getClearinghouseState(wallet: string): Promise<ClearinghouseState> {
  const user = getAddress(wallet)
  const reqData = JSON.stringify({
    type: 'clearinghouseState',
    user: user
  })
  return makeRequest(HL_INFO_URL, reqData)
}

export async function getSpotClearinghouseState(wallet: string): Promise<SpotClearinghouseState> {
  const user = getAddress(wallet)
  const reqData = JSON.stringify({
    type: 'spotClearinghouseState',
    user: user
  })
  return makeRequest(HL_INFO_URL, reqData)
}

export async function getSpotTokenDetails(token: string): Promise<TokenDetails | undefined> {
  const reqData = JSON.stringify({
    type: 'tokenDetails',
    tokenId: token
  })
  return makeRequest(HL_INFO_URL, reqData)
}

export async function getUserFills(wallet: string): Promise<UserFill[]> {
  const user = getAddress(wallet)
  const reqData = JSON.stringify({
    type: 'userFills',
    user: user
  })
  return makeRequest(HL_INFO_URL, reqData)
}

export async function getWebdata2(wallet: string): Promise<WebData2> {
  const user = getAddress(wallet)
  const reqData = JSON.stringify({
    type: 'webData2',
    user: user
  })
  return makeRequest(HL_INFO_URL, reqData)
}

export async function getExtraAgents(wallet: string): Promise<ExtraAgent[]> {
  const user = getAddress(wallet)
  const reqData = JSON.stringify({
    type: 'extraAgents',
    user: user
  })
  return makeRequest(HL_INFO_URL, reqData)
}

// Number of fills is limited to 2000
export async function getUserFillsByTime(wallet: string, startTimeMs: number, endTimeMs?: number): Promise<UserFill[]> {
  const user = getAddress(wallet)
  const reqData = JSON.stringify({
    type: 'userFillsByTime',
    user: user,
    startTime: startTimeMs,
    endtime: endTimeMs
  })
  return makeRequest(HL_INFO_URL, reqData)
}

export async function getUserFunding(wallet: string, startTimeMs: number, endTimeMs?: number): Promise<UserFunding[]> {
  const user = getAddress(wallet)
  const reqData = JSON.stringify({
    type: 'userFunding',
    user: user,
    startTime: startTimeMs,
    endtime: endTimeMs
  })
  return makeRequest(HL_INFO_URL, reqData)
}

export async function getFundingHistory(
  coin: string,
  startTimeMs: number,
  endTimeMs?: number
): Promise<FundingHistory[]> {
  const reqData = JSON.stringify({
    type: 'fundingHistory',
    coin: coin,
    startTime: startTimeMs,
    endtime: endTimeMs
  })
  return makeRequest(HL_INFO_URL, reqData)
}

export async function getL2Book(coin: string, nSigFigs: number = 5): Promise<L2Book> {
  const reqData = JSON.stringify({
    type: 'l2Book',
    coin: coin,
    nSigFigs: nSigFigs
  })
  return makeRequest(HL_INFO_URL, reqData)
}

export async function getOpenOrders(wallet: string): Promise<OpenOrders[]> {
  const user = getAddress(wallet)
  const reqData = JSON.stringify({
    type: 'openOrders',
    user: user
  })
  return makeRequest(HL_INFO_URL, reqData)
}

export async function getOrderStatus(wallet: string, oid: number): Promise<OrderStatusInfo> {
  const user = getAddress(wallet)
  const reqData = JSON.stringify({
    type: 'orderStatus',
    user: user,
    oid: oid
  })
  return makeRequest(HL_INFO_URL, reqData)
}

export async function getActiveAssetData(wallet: string, assetIndex: number): Promise<ActiveAssetData> {
  const user = getAddress(wallet)
  const reqData = JSON.stringify({
    type: 'activeAssetData',
    user: user,
    asset: assetIndex
  })
  return makeRequest(HL_INFO_URL, reqData)
}

export async function getReferralData(wallet: string): Promise<ReferralResponse> {
  const user = getAddress(wallet)
  const reqData = JSON.stringify({
    type: 'referral',
    user: user
  })
  return makeRequest(HL_INFO_URL, reqData)
}

export function floatToWire(x: number): string {
  const rounded: string = x.toFixed(8)
  if (Math.abs(parseFloat(rounded) - x) >= 1e-12) {
    throw new Error(`floatToWire causes rounding ${x}`)
  }

  return parseFloat(rounded).toString()
}

export function floatToIntForHashing(x: number): number {
  return floatToInt(x, 8)
}

export function floatToUsdInt(x: number): number {
  return floatToInt(x, 6)
}

export function floatToInt(x: number, power: number): number {
  const withDecimals: number = x * Math.pow(10, power)
  if (Math.abs(Math.round(withDecimals) - withDecimals) >= 1e-3) {
    throw new Error(`floatToInt causes rounding ${x}`)
  }
  const res: number = Math.round(withDecimals)
  return res
}

export function slippagePrice(isBuy: boolean, slippage: number, px: number): number {
  px *= isBuy ? 1 + slippage : 1 - slippage
  return px
}

export function roundedPrice(input: number): number {
  if (isNaN(input) || !isFinite(input)) {
    throw new Error('input is not a number')
  }

  const roundedValue = Number(input.toFixed(6))
  const roundedString = roundedValue.toPrecision(5)

  const result = parseFloat(roundedString)

  return result
}

export function roundedSize(size: number, szDecimals: number): number {
  if (isNaN(size) || !isFinite(size) || isNaN(szDecimals) || !Number.isInteger(szDecimals) || szDecimals < 0) {
    throw new Error('invalid size input')
  }

  const multiplier = Math.pow(10, szDecimals)
  const result = Math.floor(size * multiplier) / multiplier

  return result
}

export function cmpSide(side: Side, direction: TradeDirection): boolean {
  return (side === 'B' && direction === 'LONG') || (side === 'A' && direction === 'SHORT')
}

export function orderTypeToTuple(orderType: OrderType): [number, number] {
  if (orderType.limit !== undefined) {
    const tif = orderType.limit.tif
    if (tif === 'Gtc') {
      return [2, 0]
    } else if (tif === 'Alo') {
      return [1, 0]
    } else if (tif === 'Ioc') {
      return [3, 0]
    }
  } else if (orderType.trigger !== undefined) {
    const trigger = orderType.trigger
    const triggerPx = trigger.triggerPx
    if (trigger.isMarket && trigger.tpsl === 'tp') {
      return [4, triggerPx]
    } else if (!trigger.isMarket && trigger.tpsl === 'tp') {
      return [5, triggerPx]
    } else if (trigger.isMarket && trigger.tpsl === 'sl') {
      return [6, triggerPx]
    } else if (!trigger.isMarket && trigger.tpsl === 'sl') {
      return [7, triggerPx]
    }
  }

  throw new Error('Invalid order type')
}

export function orderTypeToWire(orderType: OrderType): OrderTypeWire {
  if (orderType.limit !== undefined) {
    return { limit: orderType.limit }
  } else if (orderType.trigger !== undefined) {
    const { triggerPx, tpsl, isMarket } = orderType.trigger
    return {
      trigger: {
        isMarket,
        triggerPx: floatToWire(triggerPx),
        tpsl
      }
    }
  }
  throw new Error('Invalid order type')
}

export function orderRequestToOrderWire(order: OrderRequest, asset: number): OrderWire {
  const orderWire: OrderWire = {
    a: asset,
    b: order.is_buy,
    p: floatToWire(order.limit_px),
    s: floatToWire(order.sz),
    r: order.reduce_only,
    t: orderTypeToWire(order.order_type)
  }

  if (order.cloid !== undefined && order.cloid !== null) {
    orderWire.c = order.cloid
  }

  return orderWire
}

export function coinToAsset(coin: string, meta: Meta): number {
  return meta.universe.findIndex((e) => e.name === coin)
}

export async function checkIfRageTradeAgentInternal(
  agents: Awaited<ReturnType<typeof getExtraAgents>>
): Promise<boolean> {
  for (const agent of agents) {
    if (agent.name === 'rage_trade') {
      return true
    }
  }

  return false
}
export async function checkIfRageTradeAgent(
  agents: Awaited<ReturnType<typeof getExtraAgents>>,
  expectedAgentAddress: string
): Promise<AgentState[]> {
  for (const agent of agents) {
    if (agent.name === 'rage_trade') {
      return [
        {
          protocolId: 'HL',
          agentAddress: agent.address,
          isAuthenticated: getAddress(agent.address) === getAddress(expectedAgentAddress)
        }
      ]
    }
  }

  return [
    {
      protocolId: 'HL',
      agentAddress: ethers.constants.AddressZero,
      isAuthenticated: false
    }
  ]
}

export function withdrawFromBridge(amount: string): RequestSignerFnWithMetadata {
  const timestamp = Math.floor(new Date().getTime() - 10)

  return {
    fn: async (wallet: WalletClient) => {
      const action = {
        destination: (await wallet.getAddresses())[0].toLowerCase(),
        amount: amount,
        time: timestamp,
        type: 'withdraw3'
      }

      const signature = (await signWithdrawFromBridgeAction(wallet, action)).slice(2)

      const rawSignature = {
        r: '0x' + signature.slice(0, 64),
        s: '0x' + signature.slice(64, 128),
        v: parseInt(signature.slice(128), 16)
      }

      const reqData = JSON.stringify({
        action,
        nonce: timestamp,
        signature: rawSignature
      })

      return makeRequestExecutable(HL_EXCHANGE_URL, reqData)
    },
    chainId: 1337,
    isEoaSigner: true,
    isUserAction: true,
    isAgentRequired: false,
    desc: EMPTY_DESC,
    heading: HYPERLIQUID_WITHDRAW_H
  }
}

export function approveAgent(): RequestSignerFnWithMetadata {
  return {
    fn: async (wallet: WalletClient, agentAddress: string | undefined) => {
      if (!agentAddress) throw new Error('agent address required')

      const timestamp = Math.floor(new Date().getTime() - 20)

      const action = {
        type: 'approveAgent',
        agentAddress: agentAddress,
        agentName: 'rage_trade',
        nonce: timestamp
      }

      const signature = (await signAgent(wallet, action)).slice(2)

      const rawSignature = {
        r: '0x' + signature.slice(0, 64),
        s: '0x' + signature.slice(64, 128),
        v: parseInt(signature.slice(128), 16)
      }

      const reqData = JSON.stringify({
        action,
        nonce: timestamp,
        signature: rawSignature
      })

      return makeRequestExecutable(HL_EXCHANGE_URL, reqData)
    },
    chainId: 1337,
    isEoaSigner: true,
    isUserAction: true,
    isAgentRequired: true,
    desc: EMPTY_DESC,
    heading: HYPERLIQUID_ENABLE_TRADING_H
  }
}

export function placeOrders(orders: OrderRequest[], meta: Meta, isIncrease: boolean): RequestSignerFnWithMetadata {
  const timestamp = Math.floor(new Date().getTime() - 30)

  const orderWires: OrderWire[] = []

  for (const each of orders) {
    const asset = coinToAsset(each.coin, meta)
    orderWires.push(orderRequestToOrderWire(each, asset))
  }

  const isSingleOrderRequest = orders.length === 1

  let heading

  if (isSingleOrderRequest) {
    const orderReq = orders[0]

    if (isIncrease) {
      heading = getIncreasePositionHeading('HL', orderReq.is_buy ? 'LONG' : 'SHORT', orderReq.coin)
    } else {
      heading = getClosePositionHeading(
        'HL',
        orderReq.coin,
        orderReq.order_type.trigger
          ? orderReq.order_type.trigger.tpsl == 'tp'
            ? 'TAKE_PROFIT'
            : 'STOP_LOSS'
          : 'MARKET'
      )
    }
  } else {
    heading = HYPERLIQUID_MULTIPLE_POSITION_H
  }

  return {
    fn: async (wallet: WalletClient) => {
      const orderAction = {
        type: 'order',
        orders: orderWires,
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
    isAgentRequired: false,
    desc: EMPTY_DESC,
    heading: heading
  }
}

export function cancelOrders(orders: CancelRequest[], meta: Meta): RequestSignerFnWithMetadata {
  const timestamp = Math.floor(new Date().getTime() - 40)

  const processedOrderSpecs: any[] = []

  for (const each of orders) {
    const result = []

    result.push(meta.universe.length !== 0 ? coinToAsset(each.coin, meta) : 10_000 + Number(each.coin.split('@')[1]))
    result.push(each.oid)

    processedOrderSpecs.push(result)
  }

  return {
    fn: async (wallet: WalletClient) => {
      const wireOrders: { a: number; o: number }[] = processedOrderSpecs.map((v) => {
        return { a: v[0], o: v[1] }
      })

      const cancelAction = {
        type: 'cancel',
        cancels: wireOrders
      }

      const signature = (await signL1Action(wallet, cancelAction, timestamp)).slice(2)

      const rawSignature = {
        r: '0x' + signature.slice(0, 64),
        s: '0x' + signature.slice(64, 128),
        v: parseInt(signature.slice(128), 16)
      }

      const reqData = JSON.stringify({
        action: cancelAction,
        nonce: timestamp,
        signature: rawSignature
      })

      return makeRequestExecutable(HL_EXCHANGE_URL, reqData)
    },
    chainId: 1337,
    isEoaSigner: false,
    isUserAction: true,
    isAgentRequired: false,
    desc: EMPTY_DESC,
    heading: CANCEL_ORDER_H
  }
}

export function modifyOrders(orders: ModifyRequest[], meta: Meta): RequestSignerFnWithMetadata {
  const timestamp = Math.floor(new Date().getTime() - 50)

  const modifyWires: ModifyWire[] = []

  for (const each of orders) {
    modifyWires.push({
      oid: each.oid,
      order: orderRequestToOrderWire(each.order, coinToAsset(each.order.coin, meta))
    })
  }

  return {
    fn: async (wallet: WalletClient) => {
      const modifyAction = {
        type: 'batchModify',
        modifies: modifyWires
      }

      const signature = (await signL1Action(wallet, modifyAction, timestamp)).slice(2)

      const rawSignature = {
        r: '0x' + signature.slice(0, 64),
        s: '0x' + signature.slice(64, 128),
        v: parseInt(signature.slice(128), 16)
      }

      const reqData = JSON.stringify({
        action: modifyAction,
        nonce: timestamp,
        signature: rawSignature
      })

      return makeRequestExecutable(HL_EXCHANGE_URL, reqData)
    },
    chainId: 1337,
    isEoaSigner: false,
    isUserAction: true,
    isAgentRequired: false,
    desc: EMPTY_DESC,
    heading: HYPERLIQUID_UPDATE_ORDER_H
  }
}

export function updateLeverage(
  leverage: number,
  coin: string,
  is_cross: boolean,
  meta: Meta
): RequestSignerFnWithMetadata {
  const timestamp = Math.floor(new Date().getTime() - 60)
  const asset = coinToAsset(coin, meta)

  return {
    fn: async (wallet: WalletClient) => {
      const updateLeverageAction = {
        type: 'updateLeverage',
        asset,
        isCross: is_cross,
        leverage
      }

      const signature = (await signL1Action(wallet, updateLeverageAction, timestamp)).slice(2)

      const rawSignature = {
        r: '0x' + signature.slice(0, 64),
        s: '0x' + signature.slice(64, 128),
        v: parseInt(signature.slice(128), 16)
      }

      const reqData = JSON.stringify({
        action: updateLeverageAction,
        nonce: timestamp,
        signature: rawSignature
      })

      return makeRequestExecutable(HL_EXCHANGE_URL, reqData)
    },
    chainId: 1337,
    isEoaSigner: false,
    isUserAction: false,
    isAgentRequired: false,
    desc: EMPTY_DESC,
    heading: HYPERLIQUID_UPDATE_LEVERAGE_H
  }
}

export function updateIsolatedMargin(amount: number, coin: string, meta: Meta): RequestSignerFnWithMetadata {
  const timestamp = Math.floor(new Date().getTime() - 70)
  const asset = coinToAsset(coin, meta)

  const amountInt = floatToUsdInt(amount)

  return {
    fn: async (wallet: WalletClient) => {
      const updateIsolatedMarginAction = {
        type: 'updateIsolatedMargin',
        asset,
        isBuy: true,
        ntli: amountInt
      }

      const signature = (await signL1Action(wallet, updateIsolatedMarginAction, timestamp)).slice(2)

      const rawSignature = {
        r: '0x' + signature.slice(0, 64),
        s: '0x' + signature.slice(64, 128),
        v: parseInt(signature.slice(128), 16)
      }

      const reqData = JSON.stringify({
        action: updateIsolatedMarginAction,
        nonce: timestamp,
        signature: rawSignature
      })

      return makeRequestExecutable(HL_EXCHANGE_URL, reqData)
    },
    chainId: 1337,
    isEoaSigner: false,
    isUserAction: true,
    isAgentRequired: false,
    desc: EMPTY_DESC,
    heading: HYPERLIQUID_UPDATE_MARGIN_H
  }
}

export function setReferralCode(): RequestSignerFnWithMetadata {
  const timestamp = Math.floor(new Date().getTime() - 80)

  return {
    fn: async (wallet: WalletClient) => {
      const setRefCodeAction = {
        type: 'setReferrer',
        code: REFERRAL_CODE
      }

      const signature = (await signL1Action(wallet, setRefCodeAction, timestamp)).slice(2)

      const rawSignature = {
        r: '0x' + signature.slice(0, 64),
        s: '0x' + signature.slice(64, 128),
        v: parseInt(signature.slice(128), 16)
      }

      const reqData = JSON.stringify({
        action: setRefCodeAction,
        nonce: timestamp,
        signature: rawSignature
      })

      return makeRequestExecutable(HL_EXCHANGE_URL, reqData)
    },
    chainId: 1337,
    isEoaSigner: false,
    isUserAction: false,
    isAgentRequired: false,
    desc: EMPTY_DESC,
    heading: HYPERLIQUID_SET_REF_H
  }
}

export function spotPerpTransfer(usdcAmount: number, toPerp: boolean): RequestSignerFnWithMetadata {
  const usdcAmt = Math.round(usdcAmount * 1e2) * 1e4
  const timestamp = Math.floor(new Date().getTime() - 90)

  return {
    fn: async (wallet: WalletClient) => {
      const spotUserAction = {
        type: 'spotUser',
        classTransfer: {
          usdc: usdcAmt,
          toPerp: toPerp
        }
      }

      const signature = (await signL1Action(wallet, spotUserAction, timestamp)).slice(2)

      const rawSignature = {
        r: '0x' + signature.slice(0, 64),
        s: '0x' + signature.slice(64, 128),
        v: parseInt(signature.slice(128), 16)
      }

      const reqData = JSON.stringify({
        action: spotUserAction,
        nonce: timestamp,
        signature: rawSignature
      })

      return makeRequestExecutable(HL_EXCHANGE_URL, reqData)
    },
    chainId: 1337,
    isEoaSigner: false,
    isUserAction: true,
    isAgentRequired: false,
    desc: EMPTY_DESC,
    heading: HYPERLIQUID_SPOT_PERP_TRANSFER
  }
}

export async function getPoints(wallet: string, agentWallet: WalletClient): Promise<PointsResponse> {
  const timestamp = Math.floor(new Date().getTime() / 1000)

  const signatureTypes = [ethers.utils.ParamType.from('string'), ethers.utils.ParamType.from('uint64')]

  const signatureData = ['userPoints', timestamp]

  const signature = (await signReadOnlyAuth(agentWallet, signatureTypes, signatureData)).slice(2)

  const rawSignature = {
    r: '0x' + signature.slice(0, 64),
    s: '0x' + signature.slice(64, 128),
    v: parseInt(signature.slice(128), 16)
  }

  const user = getAddress(wallet)

  const reqData = JSON.stringify({
    signature: rawSignature,
    timestamp: timestamp,
    user: user,
    type: 'userPoints'
  })

  return makeRequest(HL_INFO_URL, reqData)
}
