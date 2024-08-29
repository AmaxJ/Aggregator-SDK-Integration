import WebSocket from 'isomorphic-ws'
import { clearInterval } from 'timers'

import { AevoClient } from '../../../generated/aevo'
import { CACHE_DAY } from '../../common/cache'
import type { SubscribeCandleArgs } from '../../interfaces'
import { aevoCacheGetAllMarkets } from './aevoCacheHelper'
import { aevoMarketIdToAsset } from './helper'

const aevoClient = new AevoClient()
const publicApi = aevoClient.publicApi

const AEVO_WS_URL = 'wss://ws.aevo.xyz'

// Ping interval for the websocket to keep the connection alive
const PING_INTERVAL = 10 * 60 * 1000 // 10 minutes

// flag to check if the connection is open already
let isConnectionOpen = false
let ws: WebSocket | undefined = undefined

export type AevoWssTicker = {
  instrument_id: string
  instrument_name: string
  instrument_type: string
  index_price: string
  mark: {
    price: string
  }
  open_interest: string
  bid: {
    price: string
    amount: string
  }
  ask: {
    price: string
    amount: string
  }
  funding_rate: string
}

export type AevoWssOrderBook = Awaited<ReturnType<(typeof AevoClient)['prototype']['publicApi']['getOrderbook']>>

const aevoTickerMap: Record<string, AevoWssTicker> = {}
const aevoOrderBookMap: Record<string, AevoWssOrderBook> = {}

export async function openAevoWssConnection() {
  if (isConnectionOpen) return
  isConnectionOpen = true

  ws = new WebSocket(AEVO_WS_URL)

  const intervalId = setInterval(() => {
    if (ws && ws.readyState === 1) ws.send(getPingMsg())
  }, PING_INTERVAL)

  ws.onopen = async function open() {
    // console.log(`Aevo wss connection opened`)

    // subscribe to all tickers
    // @dev: this takes about 2.5secs to complete
    ws!.send(await getSubTickersMsg())
  }

  ws.onmessage = function incoming(data) {
    const res = JSON.parse(data.data as string)
    processRes(res)
  }

  ws.onerror = function error() {
    // console.log(`Aevo wss connection error`)
    isConnectionOpen = false
    try {
      clearInterval(intervalId)
    } catch (_) {
      /* empty */
    }
    // openAevoWssConnection()
  }

  ws.onclose = function close() {
    // console.log(`Aevo wss connection closed`)
    isConnectionOpen = false
    try {
      clearInterval(intervalId)
    } catch (_) {
      /* empty */
    }
    // TODO: reconnect only if the connection was not closed intentionally
    openAevoWssConnection()
  }
}

export function closeAevoWssConnection() {
  if (ws) ws.close()
  isConnectionOpen = false
}

function processRes(res: any) {
  if (res['channel'] && res['channel'].includes('ticker')) {
    processTickerResponse(res)
  }
  if (res['channel'] && res['channel'].includes('orderbook')) {
    processOBResponse(res)
  }
  if (res['channel'] && res['channel'].includes('index')) {
    const candle = res.data as AevoCandleRes['data']
    if (aevoRealtimeCallback)
      aevoRealtimeCallback({
        close: Number(candle.price),
        high: Number(candle.price),
        low: Number(candle.price),
        open: Number(candle.price),
        time: Number(candle.timestamp) / 1e6,
        volume: 0
      })
  }
}

function getPingMsg() {
  return JSON.stringify({
    op: 'ping'
  })
}

//// ORDERBOOK RELATED FUNCTIONS ////
export function aevoSubscribeOrderBook(marketId: string, precision: number | undefined) {
  const asset = aevoMarketIdToAsset(marketId)
  if (!asset) return

  if (ws && ws.readyState === 1) ws.send(getSubOBMsg(asset, precision))
}

export function aevoUnsubscribeOrderBook(marketId: string, precision: number | undefined) {
  const asset = aevoMarketIdToAsset(marketId)
  if (!asset) return

  if (ws && ws.readyState === 1) ws.send(getUnsubOBMsg(asset, precision))
}

export function getAevoWssOrderBook(asset: string): AevoWssOrderBook | undefined {
  return aevoOrderBookMap[asset]
}

function getSubOBMsg(asset: string, precision: number | undefined): string {
  return JSON.stringify({
    op: 'subscribe',
    data: [`orderbook-100ms:${asset}-PERP`]
  })
}

function getUnsubOBMsg(asset: string, precision: number | undefined): string {
  return JSON.stringify({
    op: 'unsubscribe',
    data: [`orderbook:${asset}-PERP`]
  })
}

function processOBResponse(res: any) {
  const data = res['data']
  const asset = _obChannelToAsset(res['channel'])
  const orderBook = data as AevoWssOrderBook
  if (orderBook.type === 'snapshot') {
    aevoOrderBookMap[asset] = orderBook
  }
}

//// TICKER RELATED FUNCTIONS ////

export function getAevoWssTicker(asset: string): AevoWssTicker | undefined {
  return aevoTickerMap[asset]
}

async function getSubTickersMsg(): Promise<string> {
  return aevoCacheGetAllMarkets(publicApi, CACHE_DAY, CACHE_DAY).then((allMarkets) => {
    const assets = allMarkets.map((m) => m.underlying_asset)

    const data = assets.map((a) => `ticker-500ms:${a}:PERPETUAL`)

    return JSON.stringify({
      op: 'subscribe',
      data: data
    })
  })
}

function processTickerResponse(res: any) {
  const data = res['data']
  const asset = _tickerChannelToAsset(res['channel'])
  const tickers = data['tickers'] as AevoWssTicker[]
  tickers.forEach((t) => {
    aevoTickerMap[asset] = t
  })
  //   console.log('tickers:', tickers)
}

////// Internal helper functions //////
function _tickerChannelToAsset(channel: string): string {
  return channel.split(':')[1]
}

function _obChannelToAsset(channel: string): string {
  return channel.split(':')[1].split('-')[0]
}

////// CANDLES RELATED FUNCTIONS //////
const candleMessageMap = new Map<string, string>()
let aevoRealtimeCallback: SubscribeCandleArgs['onRealtimeCallback'] | undefined = undefined
type AevoCandleRes = {
  channel: string
  data: { price: string; timestamp: string }
}

export function subscribeAevoCandles({ symbolInfo, subscriberUID, onRealtimeCallback }: SubscribeCandleArgs) {
  const symbol = symbolInfo.name.split('-')[0]

  //Subscribe to the channel
  const message = {
    op: 'subscribe',
    data: [`index:${symbol}`]
  }

  candleMessageMap.set(subscriberUID, JSON.stringify(message.data))

  if (!ws || ws.readyState !== 1) {
    openAevoWssConnection().then(() =>
      new Promise((resolve) => setTimeout(resolve, 2000)).then(() => {
        ws!.send(JSON.stringify(message))
        candleMessageMap.set(subscriberUID, JSON.stringify(message.data))
        aevoRealtimeCallback = onRealtimeCallback
      })
    )
  }
}

export function unSubscribeAevoCandles(subscriberUID: string) {
  if (ws && ws.readyState === 1) {
    ws.send(
      JSON.stringify({
        op: 'unsubscribe',
        data: JSON.parse(candleMessageMap.get(subscriberUID) || '[]')
      })
    )
  }
  candleMessageMap.delete(subscriberUID)
  aevoRealtimeCallback = undefined
}
