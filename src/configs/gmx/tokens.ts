import type { BigNumberish } from 'ethers'
import { BigNumber } from 'ethers'

function bigNumberify(n?: BigNumberish) {
  return BigNumber.from(n)
}

function expandDecimals(n: BigNumberish, decimals: number): BigNumber {
  return bigNumberify(n).mul(bigNumberify(10).pow(decimals))
}

const USD_DECIMALS = 30
export const DUST_USD = expandDecimals(1, USD_DECIMALS)

export const MAX_REFERRAL_CODE_LENGTH = 20

export const BASIS_POINTS_DIVISOR = 10000
