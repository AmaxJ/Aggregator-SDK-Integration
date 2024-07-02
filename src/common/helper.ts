import type { BigNumberish } from 'ethers'
import { BigNumber, ethers } from 'ethers'
import { retry } from 'ts-retry-promise'

import { FixedNumber, tenPow } from '../../fixedNumber'
import type { NumberDecimal, PageOptions, PaginatedRes } from '../interfaces/interface'
import type { AmountInfo, ApiOpts, OBLevel } from '../interfaces/V1/IRouterAdapterBaseV1'
import { cacheFetch } from './cache'
import { ZERO } from './constants'
import type { PythPriceRes } from './types'

export function getEnumKeyByEnumValue<T extends { [index: string]: string }>(
  myEnum: T,
  enumValue: string
): keyof T | null {
  const keys_ = Object.keys(myEnum).filter((x) => myEnum[x] == enumValue)
  return keys_.length > 0 ? keys_[0] : null
}

function keys(obj: object) {
  return Object.keys(obj)
}

export function logObject(title: string = '', obj: any) {
  console.log(
    title,
    keys(obj).map((key) => key + ': ' + (obj[key] ? obj[key].toString() : ''))
  )
}

export function getEnumEntryByValue<T extends { [index: string]: string }>(
  myEnum: T,
  enumValue: string
): T[keyof T] | null {
  const keys_ = Object.keys(myEnum).filter((x) => myEnum[x] == enumValue)
  return keys_.length > 0 ? myEnum[keys_[0] as keyof T] : null
}

export function toNumberDecimal(input: BigNumber, decimals: number): NumberDecimal {
  return {
    value: input.toString(),
    decimals: decimals
  }
}

export function formatN(value: BigNumber, decimals: number = 18): string {
  return ethers.utils.formatUnits(value, decimals)
}

export function applySlippage(value: BigNumber, slippage: number, increment: boolean): BigNumber {
  const BPS = 10000
  const slippageBPS = (BPS / 100) * slippage
  return increment ? value.add(value.mul(slippageBPS).div(BPS)) : value.sub(value.mul(slippageBPS).div(BPS))
}

export function getPaginatedResponse<T>(data: Array<T>, pageOptions: PageOptions | undefined): PaginatedRes<T> {
  if (pageOptions) {
    const { skip, limit } = pageOptions

    const startIndex = skip
    const endIndex = startIndex + limit

    return {
      result: data.slice(startIndex, endIndex),
      maxItemsCount: data.length
    }
  }

  return {
    result: data,
    maxItemsCount: data.length
  }
}

export function toAmountInfoFN(val: FixedNumber, isTokens: boolean): AmountInfo {
  return {
    amount: val,
    isTokenAmount: isTokens
  }
}

export function toAmountInfo(
  val: BigNumber,
  valDecimals: number,
  isTokens: boolean,
  outDecimals: number = valDecimals
): AmountInfo {
  return {
    amount: FixedNumber.fromValue(val.toString(), valDecimals, outDecimals),
    isTokenAmount: isTokens
  }
}

export function getFNfromBN(val: BigNumber, inDec: number, outDec: number): FixedNumber {
  return FixedNumber.fromValue(val.toString(), inDec, outDec)
}

export function getBNFromFN(val: FixedNumber): BigNumber {
  return BigNumber.from(val.value)
}

export function getByKey<T>(obj?: { [key: string]: T }, key?: string): T | undefined {
  if (!obj || !key) return undefined

  return obj[key]
}

export function expandDecimals(n: BigNumberish, decimals: number): BigNumber {
  return BigNumber.from(n).mul(BigNumber.from(10).pow(decimals))
}

export function isHashZero(value: string) {
  return value === ethers.constants.HashZero
}
export function isAddressZero(value: string) {
  return value === ethers.constants.AddressZero
}

export function getStartEndIndex(pageOptions: PageOptions | undefined): {
  start: BigNumber
  end: BigNumber
} {
  if (pageOptions === undefined) {
    return {
      start: ZERO,
      end: ethers.constants.MaxUint256
    }
  }

  const { skip, limit } = pageOptions
  const start = BigNumber.from(skip)
  const end = start.add(limit)

  return {
    start,
    end
  }
}

export function validDenomination(amount: AmountInfo, isReqDenominationTokens: boolean): boolean {
  return amount.isTokenAmount === isReqDenominationTokens
}

export function isStrEq(a: string, b: string): boolean {
  return a.toLowerCase() === b.toLowerCase()
}

export function reverseString(s: string): string {
  if (s === '') return ''

  return reverseString(s.substring(1)) + s[0]
}

export function countSignificantDigits(inputNumber: number): number {
  if (inputNumber == 0) return 1
  inputNumber = Math.abs(inputNumber)

  // Convert the number to a string to manipulate individual digits
  const numberString: string = inputNumber.toString()

  // Check if the number has a decimal point
  const hasDecimalPoint: boolean = numberString.includes('.')

  // Split the number into integer and decimal parts
  const [integerPart, decimalPart] = hasDecimalPoint ? numberString.split('.') : [numberString, '']

  const integerPartNumber: number = Number(integerPart)
  const decimalPartNumber: number = decimalPart == '' ? 0 : Number(decimalPart)

  // Count the significant digits in the integer part
  let significantDigitsCount: number = 0
  if (integerPartNumber > 0) {
    if (decimalPartNumber > 0) {
      // if there is decimal number, all the digits in the integer part are significant
      significantDigitsCount += integerPartNumber.toString().length
    } else {
      // if there is no decimal number, only the leading non-zero digits in the integer part are significant
      significantDigitsCount += Number(reverseString(integerPart)).toString().length
    }
  }

  // Count the significant digits in the decimal part
  if (decimalPartNumber > 0) {
    if (integerPartNumber > 0) {
      // if there is integer number, all the digits in the decimal part are significant
      significantDigitsCount += decimalPart.length
    } else {
      // if there is no integer number, only the trailing non-zero digits in the decimal part are significant
      significantDigitsCount += decimalPartNumber.toString().length
    }
  }

  return significantDigitsCount
}

export function precisionFromNumber(inputNumber: number): string {
  inputNumber = Math.abs(inputNumber)
  // console.log(`inputNumber: ${inputNumber}`)

  if (inputNumber == 0) return '1'

  // Convert the number to a string to manipulate individual digits
  const numberString: string = inputNumber.toString()

  // Check if the number has a decimal point
  const hasDecimalPoint: boolean = numberString.includes('.')

  // Split the number into integer and decimal parts
  const [integerPart, decimalPart] = hasDecimalPoint ? numberString.split('.') : [numberString, '']

  const integerPartNumber: number = Number(integerPart)
  const decimalPartNumber: number = decimalPart == '' ? 0 : Number(decimalPart)

  if (decimalPartNumber > 0) {
    let actualPrecision = '0.'
    for (let i = 0; i < decimalPart.length - 1; i++) {
      actualPrecision += '0'
    }
    actualPrecision += '1'
    return actualPrecision
  }

  let actualPrecision = ''
  for (let i = integerPart.length - 1; i >= 0; i--) {
    if (integerPart[i] == '0') {
      actualPrecision = '0' + actualPrecision
    } else {
      actualPrecision = '1' + actualPrecision
      break
    }
  }
  return actualPrecision
}

export function calcActualPrecision(bids: OBLevel[], asks: OBLevel[]): FixedNumber {
  let mostPrecisePrice = 0
  let maxSigFigs = 0

  for (const level of bids) {
    const price = Number(level.price.toString())
    const sigFigs = countSignificantDigits(price)
    if (sigFigs > maxSigFigs) {
      maxSigFigs = sigFigs
      mostPrecisePrice = price
    }
  }

  for (const level of asks) {
    const price = Number(level.price.toString())
    const sigFigs = countSignificantDigits(price)
    if (sigFigs > maxSigFigs) {
      maxSigFigs = sigFigs
      mostPrecisePrice = price
    }
  }

  return FixedNumber.fromString(precisionFromNumber(mostPrecisePrice))
}

export function trimToSigFigsOnlyDecimals(val: FixedNumber, sigFigs: number): FixedNumber {
  const valStr = val.toString()

  // if there is no decimal point, return the value as is
  if (!valStr.includes('.')) return val

  const valNum = Number(valStr)
  const curSigFigs = countSignificantDigits(valNum)

  // if the current number of significant digits is less than or equal to the required number of significant digits, return the value as is
  if (curSigFigs <= sigFigs) {
    return val
  }

  const trimSigFigs = curSigFigs - sigFigs

  // remove the last trimSigFigs cars of the valStr
  const resultStr = valStr.slice(0, -trimSigFigs)

  return FixedNumber.fromString(resultStr).toFormat(val.format)
}

export async function getPythEthPrice(staleTime: number, opts?: ApiOpts): Promise<FixedNumber> {
  const priceUrl = `https://hermes.pyth.network/v2/updates/price/latest?ids%5B%5D=ff61491a931112ddf1bd8147cd1b641375f79f5825126d665480874634fd0ace`
  const res = await cacheFetch({
    key: ['pythEthPrice'],
    fn: () => retry(() => fetch(priceUrl).then((d) => d.json())),
    staleTime: staleTime,
    cacheTime: staleTime,
    opts
  })

  const priceJson = res as PythPriceRes
  const price = FixedNumber.fromString(priceJson.parsed[0].price.price)
  const expo = tenPow(priceJson.parsed[0].price.expo)

  return price.mul(expo)
}
