import { abs, addFN, bipsDiff, divFN, FixedNumber, mulFN, subFN } from '../../../fixedNumber'
import { countSignificantDigits, precisionFromNumber } from '../../common/helper'
import type { TVBar } from '../../interfaces/V1/IAdapterV1'
import type { OBData, OBLevel, OrderType, TimeInForce, TriggerData } from '../../interfaces/V1/IRouterAdapterBaseV1'
import { roundedPrice } from './api/client'
import type { L2Book, Level, ModifyRequest, Tif } from './api/types'

export function indexBasisSlippage(val: Level[], slippageBp: string): number {
  const val0p = FixedNumber.fromString(val[0].px)
  let index = 0
  for (let i = 1; i < val.length; i++) {
    const bidp = FixedNumber.fromString(val[i].px)
    if (abs(bipsDiff(val0p, bidp)).lte(FixedNumber.fromString(slippageBp, val0p.decimals))) {
      index = i
    } else {
      break
    }
  }
  return index
}

export function hlMarketIdToCoin(marketId: string): string {
  return marketId.split('-')[2]
}

export function toTif(tif: TimeInForce): Tif {
  return (tif[0].toUpperCase() + tif.slice(1).toLowerCase()) as Tif
}

export function validateTrigger(isBuy: boolean, midPrice: number, triggerPrice: number, isStop: boolean): boolean {
  return (
    (isBuy && (isStop ? triggerPrice > midPrice : triggerPrice < midPrice)) ||
    (!isBuy && (isStop ? triggerPrice < midPrice : triggerPrice > midPrice))
  )
}

export function populateTrigger(
  isBuy: boolean,
  midPrice: number,
  orderType: OrderType,
  triggerData: TriggerData,
  skipLimitPrice = false
): {
  orderData: ModifyRequest['order']['order_type']
  limitPrice: ModifyRequest['order']['limit_px']
} {
  if (orderType == 'MARKET' || orderType == 'LIMIT') throw new Error('trigger used with wrong order type')

  if (!triggerData.triggerLimitPrice && skipLimitPrice) {
    triggerData.triggerLimitPrice = FixedNumber.fromValue(0)
  }

  if (!triggerData.triggerLimitPrice) throw new Error('trigger price required')

  const isStop = orderType == 'STOP_LOSS' || orderType == 'STOP_LOSS_LIMIT'

  const triggerPrice = roundedPrice(Number(triggerData.triggerPrice._value))

  const triggerLimitPriceCheck = triggerData.triggerLimitPrice.lt(FixedNumber.fromValue(2n ** 64n))

  if (!triggerLimitPriceCheck && !skipLimitPrice) throw new Error('cannot convert to number')

  const triggerLimitPrice = Number(triggerData.triggerLimitPrice)

  // this check is required, otherwise it is not considered resting order and executes immidiately
  if (!validateTrigger(isBuy, midPrice, triggerPrice, isStop))
    throw new Error('trigger orderType, current price & trigger activation price are not compatible')

  if (isStop) {
    const orderData: ModifyRequest['order']['order_type'] = {
      trigger: {
        triggerPx: triggerPrice,
        isMarket: !orderType.includes('LIMIT'),
        tpsl: 'sl'
      }
    }

    return { orderData, limitPrice: triggerLimitPrice }
  } else {
    const orderData: ModifyRequest['order']['order_type'] = {
      trigger: {
        triggerPx: triggerPrice,
        isMarket: !orderType.includes('LIMIT'),
        tpsl: 'tp'
      }
    }

    return { orderData, limitPrice: triggerLimitPrice }
  }
}

export function hlMapLevelsToOBLevels(levels: Level[]): OBLevel[] {
  const obLevels: OBLevel[] = []
  let totalSz = FixedNumber.fromString('0')
  let totalSzUsd = FixedNumber.fromString('0')
  for (const level of levels) {
    const price = FixedNumber.fromString(level.px)
    const sizeToken = FixedNumber.fromString(level.sz)
    const sizeUsd = mulFN(price, sizeToken)
    totalSz = addFN(totalSz, sizeToken)
    totalSzUsd = addFN(totalSzUsd, sizeUsd)
    obLevels.push({
      price: FixedNumber.fromString(level.px),
      sizeToken: FixedNumber.fromString(level.sz),
      sizeUsd: sizeUsd,
      totalSizeToken: totalSz,
      totalSizeUsd: totalSzUsd
    })
  }

  return obLevels
}

export type HlMaxSigFigsData = {
  maxSigFigs: number
  maxSigFigPrice: number
  actualPrecision: FixedNumber
}

export function calcHlMaxSigFigData(l2Book: L2Book): HlMaxSigFigsData {
  let maxSigFigs = 0
  let maxSigFigPrice = 0
  l2Book.levels[0].forEach((l) => {
    const price = Number(l.px)
    const sigFigs = countSignificantDigits(price)
    if (sigFigs > maxSigFigs) {
      maxSigFigs = sigFigs
      maxSigFigPrice = price
    }
  })
  l2Book.levels[1].forEach((l) => {
    const price = Number(l.px)
    const sigFigs = countSignificantDigits(price)
    if (sigFigs > maxSigFigs) {
      maxSigFigs = sigFigs
      maxSigFigPrice = price
    }
  })

  const actualPrecision = precisionFromNumber(maxSigFigPrice)

  return {
    maxSigFigs,
    maxSigFigPrice,
    actualPrecision: FixedNumber.fromString(actualPrecision)
  }
}

export function hlCalcActualPrecision(l2Book: L2Book, precision: number): string {
  const reqSigFigs = precision + 1
  let isFound = false
  let foundPrice = 0

  // find relevant price in bids
  for (let i = 0; i < l2Book.levels[0].length; i++) {
    const price = Number(l2Book.levels[0][i].px)
    const sigFigs = countSignificantDigits(price)
    if (sigFigs == reqSigFigs) {
      foundPrice = price
      isFound = true
      break
    }
  }
  // find relevant price in asks if not already found
  if (!isFound) {
    for (let i = 0; i < l2Book.levels[1].length; i++) {
      const price = Number(l2Book.levels[1][i].px)
      const sigFigs = countSignificantDigits(price)
      if (sigFigs == reqSigFigs) {
        foundPrice = price
        isFound = true
        break
      }
    }
  }

  if (!isFound) throw new Error('No price found with required precision')

  return precisionFromNumber(foundPrice)
}

export function hlMapL2BookToObData(l2Book: L2Book, precision: number): OBData {
  const bids = hlMapLevelsToOBLevels(l2Book.levels[0])
  const asks = hlMapLevelsToOBLevels(l2Book.levels[1])

  const spread = subFN(asks[0].price, bids[0].price)
  const spreadPercent = mulFN(divFN(spread, asks[0].price), FixedNumber.fromString('100'))

  const obData: OBData = {
    actualPrecision: FixedNumber.fromString(hlCalcActualPrecision(l2Book, precision)),
    bids: bids,
    asks: asks,
    spread: spread,
    spreadPercent: spreadPercent
  }

  return obData
}

export const hlResolutions: Record<string, string> = {
  '1': '1m',
  '3': '3m',
  '5': '5m',
  '15': '15m',
  '30': '30m',
  '60': '1h',
  '120': '2h',
  '240': '4h',
  '360': '6h',
  '480': '8h',
  '720': '12h',
  D: '1d',
  '1D': '1d',
  '3D': '3d',
  W: '1w',
  '1W': '1w',
  M: '1M',
  '1M': '1M'
}

export type HlCandle = {
  T: number
  c: string
  h: string
  i: string
  l: string
  n: number
  o: string
  s: string
  t: number
  v: string
}

export function hlCandleToBar(candle: HlCandle): TVBar {
  return {
    time: candle.T,
    low: Number(candle.l),
    high: Number(candle.h),
    open: Number(candle.o),
    close: Number(candle.c),
    volume: Number(candle.v)
  }
}
