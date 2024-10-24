import type { BigNumberish } from 'ethers'
import { BigNumber, ethers } from 'ethers'

import { BASIS_POINTS_DIVISOR } from '../config/factors'

export const PRECISION = expandDecimals(1, 30)
export const USD_DECIMALS = 30
const MAX_EXCEEDING_THRESHOLD = '1000000000'
const MIN_EXCEEDING_THRESHOLD = '0.01'
export const TRIGGER_PREFIX_ABOVE = '>'
export const TRIGGER_PREFIX_BELOW = '<'

export function bigNumberify(n?: BigNumberish) {
  return BigNumber.from(n)
}

export function expandDecimals(n: BigNumberish, decimals: number): BigNumber {
  return bigNumberify(n).mul(bigNumberify(10).pow(decimals))
}

export const trimZeroDecimals = (amount: string) => {
  if (parseFloat(amount) === parseInt(amount)) {
    return parseInt(amount).toString()
  }
  return amount
}

export const limitDecimals = (amount: BigNumberish, maxDecimals?: number) => {
  let amountStr = amount.toString()
  if (maxDecimals === undefined) {
    return amountStr
  }
  if (maxDecimals === 0) {
    return amountStr.split('.')[0]
  }
  const dotIndex = amountStr.indexOf('.')
  if (dotIndex !== -1) {
    const decimals = amountStr.length - dotIndex - 1
    if (decimals > maxDecimals) {
      amountStr = amountStr.substr(0, amountStr.length - (decimals - maxDecimals))
    }
  }

  return amountStr
}

export const padDecimals = (amount: BigNumberish, minDecimals: number) => {
  let amountStr = amount.toString()
  const dotIndex = amountStr.indexOf('.')
  if (dotIndex !== -1) {
    const decimals = amountStr.length - dotIndex - 1
    if (decimals < minDecimals) {
      amountStr = amountStr.padEnd(amountStr.length + (minDecimals - decimals), '0')
    }
  } else {
    amountStr = amountStr + '.0000'
  }
  return amountStr
}

export const formatAmount = (
  amount: BigNumberish | undefined,
  tokenDecimals: number,
  displayDecimals?: number,
  useCommas?: boolean,
  defaultValue?: string
) => {
  if (!defaultValue) {
    defaultValue = '...'
  }
  if (amount === undefined || amount.toString().length === 0) {
    return defaultValue
  }
  if (displayDecimals === undefined) {
    displayDecimals = 4
  }
  let amountStr = ethers.utils.formatUnits(amount, tokenDecimals)
  amountStr = limitDecimals(amountStr, displayDecimals)
  if (displayDecimals !== 0) {
    amountStr = padDecimals(amountStr, displayDecimals)
  }
  if (useCommas) {
    return numberWithCommas(amountStr)
  }
  return amountStr
}

export const formatKeyAmount = (
  map: any,
  key: string,
  tokenDecimals: number,
  displayDecimals: number,
  useCommas?: boolean
) => {
  if (!map || !map[key]) {
    return '...'
  }

  return formatAmount(map[key], tokenDecimals, displayDecimals, useCommas)
}

export const formatArrayAmount = (
  arr: any[],
  index: number,
  tokenDecimals: number,
  displayDecimals?: number,
  useCommas?: boolean
) => {
  if (!arr || !arr[index]) {
    return '...'
  }

  return formatAmount(arr[index], tokenDecimals, displayDecimals, useCommas)
}

export const formatAmountFree = (amount: BigNumberish, tokenDecimals: number, displayDecimals?: number) => {
  if (!amount) {
    return '...'
  }
  let amountStr = ethers.utils.formatUnits(amount, tokenDecimals)
  amountStr = limitDecimals(amountStr, displayDecimals)
  return trimZeroDecimals(amountStr)
}

export function formatPercentage(percentage?: BigNumber, opts: { fallbackToZero?: boolean; signed?: boolean } = {}) {
  const { fallbackToZero = false, signed = false } = opts

  if (!percentage) {
    if (fallbackToZero) {
      return `${formatAmount(BigNumber.from(0), 2, 2)}%`
    }

    return undefined
  }

  let sign = ''

  if (signed && !percentage.eq(0)) {
    sign = percentage?.gt(0) ? '+' : '-'
  }

  return `${sign}${formatAmount(percentage.abs(), 2, 2)}%`
}

export const parseValue = (value: string, tokenDecimals: number) => {
  const pValue = parseFloat(value)

  if (isNaN(pValue)) {
    return undefined
  }
  value = limitDecimals(value, tokenDecimals)
  const amount = ethers.utils.parseUnits(value, tokenDecimals)
  return bigNumberify(amount)
}

export function numberWithCommas(x: BigNumberish) {
  if (!x) {
    return '...'
  }

  const parts = x.toString().split('.')
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return parts.join('.')
}

export function roundUpDivision(a: BigNumber, b: BigNumber) {
  return a.add(b).sub(1).div(b)
}

export function roundUpMagnitudeDivision(a: BigNumber, b: BigNumber) {
  if (a.lt(0)) {
    return a.sub(b).add(1).div(b)
  }

  return a.add(b).sub(1).div(b)
}

export function applyFactor(value: BigNumber, factor: BigNumber) {
  return value.mul(factor).div(PRECISION)
}

export function getBasisPoints(numerator: BigNumber, denominator: BigNumber) {
  return numerator.mul(BASIS_POINTS_DIVISOR).div(denominator)
}

export function basisPointsToFloat(basisPoints: BigNumber) {
  return basisPoints.mul(PRECISION).div(BASIS_POINTS_DIVISOR)
}

export function roundToTwoDecimals(n: number) {
  return Math.round(n * 100) / 100
}

export function sumBigNumbers(...args: any[]) {
  return args.filter((value) => !isNaN(Number(value))).reduce((acc, value) => acc.add(value || 0), BigNumber.from(0))
}

export function removeTrailingZeros(amount: string | number) {
  const amountWithoutZeros = Number(amount)
  if (!amountWithoutZeros) return amount
  return amountWithoutZeros
}

function getLimitedDisplay(
  amount: BigNumber,
  tokenDecimals: number,
  opts: { maxThreshold?: string; minThreshold?: string } = {}
) {
  const { maxThreshold = MAX_EXCEEDING_THRESHOLD, minThreshold = MIN_EXCEEDING_THRESHOLD } = opts
  const max = expandDecimals(maxThreshold, tokenDecimals)
  const min = ethers.utils.parseUnits(minThreshold, tokenDecimals)
  const absAmount = amount.abs()

  if (absAmount.eq(0)) {
    return {
      symbol: '',
      value: absAmount
    }
  }

  const symbol = absAmount.gt(max) ? TRIGGER_PREFIX_ABOVE : absAmount.lt(min) ? TRIGGER_PREFIX_BELOW : ''
  const value = absAmount.gt(max) ? max : absAmount.lt(min) ? min : absAmount

  return {
    symbol,
    value
  }
}

export function formatTokenAmount(
  amount?: BigNumber,
  tokenDecimals?: number,
  symbol?: string,
  opts: {
    showAllSignificant?: boolean
    displayDecimals?: number
    fallbackToZero?: boolean
    useCommas?: boolean
    minThreshold?: string
    maxThreshold?: string
  } = {}
) {
  const {
    displayDecimals = 4,
    showAllSignificant = false,
    fallbackToZero = false,
    useCommas = false,
    minThreshold = '0',
    maxThreshold
  } = opts

  const symbolStr = symbol ? ' ' + `${symbol}` : ''

  if (!amount || !tokenDecimals) {
    if (fallbackToZero) {
      amount = BigNumber.from(0)
      tokenDecimals = displayDecimals
    } else {
      return undefined
    }
  }

  let amountStr: string

  if (showAllSignificant) {
    amountStr = formatAmountFree(amount, tokenDecimals, tokenDecimals)
  } else {
    const exceedingInfo = getLimitedDisplay(amount, tokenDecimals, { maxThreshold, minThreshold })
    const symbol_ = exceedingInfo.symbol ? `${exceedingInfo.symbol} ` : ''
    amountStr = `${symbol_}${formatAmount(exceedingInfo.value, tokenDecimals, displayDecimals, useCommas)}`
  }

  return `${amountStr}${symbolStr}`
}

export function formatUsd(
  usd?: BigNumber,
  opts: { fallbackToZero?: boolean; displayDecimals?: number; maxThreshold?: string; minThreshold?: string } = {}
) {
  const { fallbackToZero = false, displayDecimals = 2 } = opts

  if (!usd) {
    if (fallbackToZero) {
      usd = BigNumber.from(0)
    } else {
      return undefined
    }
  }

  const exceedingInfo = getLimitedDisplay(usd, USD_DECIMALS, opts)
  const sign = usd.lt(0) ? '-' : ''
  const displayUsd = formatAmount(exceedingInfo.value, USD_DECIMALS, displayDecimals, true)
  return `${exceedingInfo.symbol}${exceedingInfo.symbol ? ' ' : ''}${sign}$${displayUsd}`
}
