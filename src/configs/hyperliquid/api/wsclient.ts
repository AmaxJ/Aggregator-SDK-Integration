import WebSocket from 'isomorphic-ws'

import type { SubscribeCandleArgs } from '../../../interfaces'
import type { OBData } from '../../../interfaces/V1/IRouterAdapterBaseV1'
import type { HlCandle } from '../helper'
import { hlCandleToBar, hlMapL2BookToObData, hlMarketIdToCoin, hlResolutions } from '../helper'
import { HL_WSS_URL } from './config'
import type { L2Book } from './types'

const PING_INTERVAL = 50_000 // 50 seconds
const MAX_PRECISION = 4

type WebsocketData = {
  ws: WebSocket
  isOpen: boolean
  precision: number
  intervalId: NodeJS.Timeout
}

// 'coin-precision' => websocket connection
const connectionMap: Record<string, WebsocketData> = {}
// coin => precision => L2Book
const cachedBooks: Record<string, Record<number, L2Book>> = {}

// candles websocketData
let candleWs: WebsocketData | undefined = undefined
const candleMessageMap = new Map<string, string>()

export function hlGetCachedL2Book(coin: string, precision: number): L2Book | undefined {
  const preBook = cachedBooks[coin]
  if (!preBook) return undefined
  return preBook[precision]
}

export function hlGetCachedOrderBook(coin: string, precision: number): OBData | undefined {
  const preBook = cachedBooks[coin]
  if (!preBook) return undefined
  const l2Book = preBook[precision]
  if (!l2Book) return undefined

  return hlMapL2BookToObData(l2Book, precision)
}

export function hlSubscribeOrderBook(marketId: string, precision: number | undefined) {
  const coin = hlMarketIdToCoin(marketId)
  // create websockets for all precisions separately
  if (precision) {
    makeWebSocket(coin, precision)
  } else {
    for (let i = 1; i <= MAX_PRECISION; i++) {
      makeWebSocket(coin, i)
    }
  }
}

export function hlUnsubscribeOrderBook(marketId: string, precision: number | undefined) {
  const coin = hlMarketIdToCoin(marketId)
  // close websockets for all precisions separately
  if (precision) {
    const wsKey = coin + '-' + precision
    if (connectionMap[wsKey]) {
      connectionMap[wsKey]?.ws?.close()
      try {
        clearInterval(connectionMap[wsKey].intervalId)
      } catch (_) {
        /* empty */
      }
      connectionMap[wsKey].isOpen = false
      // console.log(`HL wss connection closed for ${coin} with precision: ${precision}`)
    }
  } else {
    for (let i = 1; i <= MAX_PRECISION; i++) {
      const wsKey = coin + '-' + i
      if (connectionMap[wsKey]) {
        connectionMap[wsKey]?.ws?.close()
        try {
          clearInterval(connectionMap[wsKey].intervalId)
        } catch (_) {
          /* empty */
        }
        connectionMap[wsKey].isOpen = false
        // console.log(`HL wss connection closed for ${coin} with precision: ${i}`)
      }
    }
  }
}

function makeWebSocket(coin: string, precision: number) {
  const wsKey = coin + '-' + precision
  const prevWsData = connectionMap[wsKey]

  // if an active connection is already there return
  if (prevWsData && prevWsData.isOpen) return

  // close the previous connection just in case
  if (prevWsData && prevWsData.ws) prevWsData.ws.close()
  // clear the previous interval just in case
  if (prevWsData && prevWsData.intervalId) {
    try {
      clearInterval(prevWsData.intervalId)
    } catch (_) {
      /* empty */
    }
  }

  // create a new connection
  const ws = new WebSocket(HL_WSS_URL)
  // set ping interval every 50 seconds
  const intervalId = setInterval(() => {
    if (ws && ws.readyState === 1) ws.send(getPingMsg())
  }, PING_INTERVAL)
  // setting isOpen = true to prevent recurring calls
  connectionMap[wsKey] = { ws: ws, isOpen: true, precision: precision, intervalId: intervalId }

  ws.onopen = function open() {
    // console.log(`HL wss connection opened for ${coin} with precision: ${precision}`)
    const msg = getSubscribeMsg(coin, precision)
    ws.send(msg)
  }

  ws.onmessage = function incoming(data) {
    const res = JSON.parse(data.data as string)

    if (res['channel'] && res['channel'] == 'l2Book') {
      const l2Book: L2Book = res['data']
      processBookRes(l2Book, precision)
    }
  }

  ws.onerror = function error() {
    // console.error(`In onerror() for ${coin} with precision: ${precision}`)
    connectionMap[wsKey].isOpen = false
  }

  ws.onclose = function close() {
    // console.error(`In close() for ${coin} with precision: ${precision}`)
    connectionMap[wsKey].isOpen = false
  }
}

function getSubscribeMsg(coin: string, precision: number): string {
  return JSON.stringify({
    method: 'subscribe',
    subscription: { type: 'l2Book', coin: coin, nSigFigs: precision + 1 }
  })
}

function getPingMsg(): string {
  return JSON.stringify({ method: 'ping' })
}

function processBookRes(l2Book: L2Book, precision: number) {
  const coin = l2Book.coin
  // console.dir({ book: l2Book }, { depth: 4 })

  if (cachedBooks[coin] == undefined) cachedBooks[coin] = {}
  cachedBooks[coin][precision] = l2Book
}

export function subscribeHLCandles({ symbolInfo, resolution, subscriberUID, onRealtimeCallback }: SubscribeCandleArgs) {
  // close the previous connection
  if (candleWs && candleWs.ws) candleWs.ws.close()
  // clear the previous interval just in case
  if (candleWs && candleWs.intervalId) {
    try {
      clearInterval(candleWs.intervalId)
    } catch (_) {
      /* empty */
    }
  }

  // create a new connection
  const ws = new WebSocket(HL_WSS_URL)
  // set ping interval every 50 seconds
  const intervalId = setInterval(() => {
    if (ws && ws.readyState === 1) ws.send(getPingMsg())
  }, PING_INTERVAL)
  // setting isOpen = true to prevent recurring calls
  candleWs = { ws: ws, isOpen: true, precision: 0, intervalId: intervalId }

  const symbol = symbolInfo.name.split('-')[0]

  //Subscribe to the channel
  const message = {
    method: 'subscribe',
    subscription: {
      type: 'candle',
      coin: symbol,
      interval: hlResolutions[resolution]
    }
  }

  ws.onopen = function open() {
    ws.send(JSON.stringify(message))
    candleMessageMap.set(subscriberUID, JSON.stringify(message.subscription))
  }

  ws.onmessage = function incoming(msg) {
    const data = JSON.parse(msg.data as string) as { channel: string; data: HlCandle }

    if (data.channel === 'candle') {
      const candle = data.data
      candle.i === hlResolutions[resolution] && onRealtimeCallback(hlCandleToBar(candle))
    }
  }

  ws.onerror = function error() {
    if (candleWs) candleWs.isOpen = false
  }

  ws.onclose = function close() {
    if (candleWs) candleWs.isOpen = false
  }
}

export function unSubscribeHLCandles(subscriberUID: string) {
  if (candleWs)
    candleWs.ws.send(
      JSON.stringify({
        method: 'unsubscribe',
        subscription: candleMessageMap.get(subscriberUID)
      })
    )
  candleMessageMap.delete(subscriberUID)
}
