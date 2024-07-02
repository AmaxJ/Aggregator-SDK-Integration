import type { FixedNumber } from '../../fixedNumber'

export type TraverseResult = {
  avgExecPrice: FixedNumber
  fees: FixedNumber
  remainingSize: FixedNumber
  priceImpact: FixedNumber
}

export interface Bar {
  time: number
  open: number
  high: number
  low: number
  close: number
  volume?: number
}

export type PythPriceRes = {
  binary: Binary
  parsed: Parsed[]
}

export type Binary = {
  data: string[]
  encoding: string
}

export type Parsed = {
  ema_price: Price
  id: string
  metadata: Metadata
  price: Price
}

export type Price = {
  conf: string
  expo: number
  price: string
  publish_time: number
}

export type Metadata = {
  prev_publish_time: number
  proof_available_time: number
  slot: number
}
