import type { BigNumber } from 'ethers'

import type { Token } from '../types'

export type ExecutionFee = {
  feeUsd: BigNumber
  feeTokenAmount: BigNumber
  feeToken: Token
  warning?: string
}

export type FeeItem = {
  deltaUsd: BigNumber
  bps: BigNumber
}

export type SwapFeeItem = FeeItem & {
  marketAddress: string
  tokenInAddress: string
  tokenOutAddress: string
}

export type GasLimitsConfig = {
  depositSingleToken: BigNumber
  depositMultiToken: BigNumber
  withdrawalMultiToken: BigNumber
  singleSwap: BigNumber
  swapOrder: BigNumber
  increaseOrder: BigNumber
  decreaseOrder: BigNumber
  estimatedFeeBaseGasLimit: BigNumber
  estimatedFeeMultiplierFactor: BigNumber
}
