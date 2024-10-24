import {
  getActiveAssetData,
  getAllMids,
  getClearinghouseState,
  getFundingHistory,
  getL2Book,
  getMeta,
  getMetaAndAssetCtxs,
  getOpenOrders,
  getOrderStatus,
  getUserFills,
  getUserFillsByTime,
  getUserFunding
} from '../src/configs/hyperliquid/api/client'
import { Token } from '../src/common/tokens'
import { estLiqPrice } from '../src/configs/hyperliquid/liqPrice'
import {
  hlGetCachedOrderBook,
  hlSubscribeOrderBook,
  hlUnsubscribeOrderBook
} from '../src/configs/hyperliquid/api/wsclient'
import { blast } from 'viem/chains'

const ethMarketId = '42161-HL-ETH'
const btcMarketId = '42161-HL-BTC'

const normalAddress = '0x2f88a09ed4174750a464576FE49E586F90A34820'
const w = normalAddress

async function meta() {
  const meta = await getMeta()
  console.log(meta)
}

async function allMids() {
  const allMids = await getAllMids()
  console.log(allMids)
}

async function metaAndAssetCtxs() {
  const metaAndAssetCtxs = await getMetaAndAssetCtxs()
  console.log(metaAndAssetCtxs)
}

async function clearinghouseState() {
  const clearinghouseState = await getClearinghouseState(w)
  console.dir(clearinghouseState, { depth: 4 })
}

async function openOrders() {
  const openOrders = await getOpenOrders(w)
  console.dir(openOrders, { depth: 4 })
}

async function userFills() {
  const userFills = await getUserFills(w)
  console.dir(userFills, { depth: 4 })
}

async function userFillsByTime() {
  const userFills = await getUserFillsByTime(w, 1701925640407 /* , 1701925690309 */)
  console.dir(userFills, { depth: 4 })
}

async function userFunding() {
  const userFunding = await getUserFunding(w, 1701928800056, 1701932400248)
  console.dir(userFunding, { depth: 4 })
}

async function fundingHistory() {
  const fundingHistory = await getFundingHistory('ETH', 1701928800056, 1701932400248)
  console.dir(fundingHistory, { depth: 4 })
}

async function l2Book() {
  const l2Book = await getL2Book('ETH')
  console.dir(l2Book, { depth: 4 })
}

async function orderStatus() {
  const orderStatus = await getOrderStatus(w, 4653919675)
  console.dir(orderStatus, { depth: 4 })
}

async function generateTokens() {
  const tokens: Token[] = []
  const meta = await getMeta()
  meta.universe.forEach((u) => {
    tokens.push({
      symbol: u.name,
      name: u.name,
      decimals: u.szDecimals,
      address: {
        [blast.id]: undefined,
        42161: undefined,
        10: undefined
      }
    })
  })
  const tokenMap: Record<string, Token> = {}
  tokens.forEach((t) => {
    tokenMap[t.symbol] = t
  })
  console.log(tokenMap)
}

async function activeAssetData() {
  const activeAssetData = await getActiveAssetData(w, 1)
  console.log(activeAssetData)
}

async function getLiqPrice() {
  const request = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: `{"type":"webData2","user":"${w}"}`
  }
  const url = 'https://api-ui.hyperliquid.xyz/info'
  const web2Data = await fetch(url, request).then((resp) => resp.text())

  // cross testing
  const btc = 'BTC'

  const mids = await getAllMids()
  const mpBtc = parseFloat(mids[btc])
  // console.log('mpBtc: ', mpBtc)
  estLiqPrice(w, mpBtc, 4, false, 0.00068, mpBtc, false, btc, web2Data, 0)

  // isolated testing
  const eth = 'ETH'
  const mpEth = parseFloat(mids[eth])
  // console.log('mpEth: ', mpEth)

  estLiqPrice(w, mpEth, 3, true, 0.02, mpEth, false, eth, web2Data, 0)
}

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms))

async function getWSSOrderbook() {
  const coin = 'BTC'
  const precision = undefined

  hlSubscribeOrderBook(btcMarketId, precision)
  await delay(4000)

  hlUnsubscribeOrderBook(btcMarketId, precision)
  await delay(2000)

  for (let i = 1; i <= 4; i++) {
    const cachedOB = hlGetCachedOrderBook(coin, i)
    console.dir({ precision: i, cachedOB }, { depth: 4 })
  }
}

getWSSOrderbook()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
