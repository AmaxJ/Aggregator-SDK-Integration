export type Meta = {
  universe: Universe[]
}

export type SpotMeta = {
  universe: SpotAssetInfo[]
  tokens: SpotTokenInfo[]
}

export type SpotAssetInfo = {
  name: string
  tokens: number[]
}

type SpotTokenInfo = {
  name: string
  szDecimals: number
  weiDecimals: number
}

export type Universe = {
  maxLeverage: number
  name: string
  onlyIsolated: boolean
  szDecimals: number
}

export type AllMids = Record<string, string>

export type MetaAndAssetCtx = [Meta, AssetCtx[]]

export type SpotMetaAndAssetCtx = [SpotMeta, SpotAssetCtx[]]

export type AssetCtx = {
  dayNtlVlm: string
  funding: string // Hourly funding rate
  impactPxs: string[]
  markPx: string
  midPx: string
  openInterest: string
  oraclePx: string
  premium: string
  prevDayPx: string
}

export type SpotAssetCtx = {
  dayNtlVlm: string
  markPx: string
  midPx: string
  prevDayPx: string
}

export type ClearinghouseState = {
  assetPositions: AssetPosition[]
  crossMaintenanceMarginUsed: string
  crossMarginSummary: MarginSummary
  marginSummary: MarginSummary
  time: number
  withdrawable: string
}

export type SpotClearinghouseState = {
  balances: {
    coin: string
    hold: string
    total: string
  }[]
}
export type TokenDetails = {
  name: string
  maxSupply: number
  totalSupply: number
  circulatingSupply: number
  szDecimals: number
  midPx: number
  markPx: number
  prevDayPx: number
  genesis: null
}

export type AssetPosition = {
  position: Position
  type: string
}

export type Position = {
  coin: string
  cumFunding: CumFunding
  entryPx: string
  leverage: Leverage
  liquidationPx: string | null
  marginUsed: string
  maxLeverage: number
  positionValue: string
  returnOnEquity: string
  szi: string
  unrealizedPnl: string
}

export type CumFunding = {
  allTime: string
  sinceChange: string
  sinceOpen: string
}

export type MarkedModeType = 'isolated' | 'cross'

export type Leverage = {
  rawUsd: string
  type: MarkedModeType
  value: number
}

export type ExtraAgent = { address: string; name: string }

export type MarginSummary = {
  accountValue: string
  totalMarginUsed: string
  totalNtlPos: string
  totalRawUsd: string
}

export type OpenOrders = {
  coin: string
  limitPx: string
  oid: number
  origSz: string
  reduceOnly: boolean | undefined
  side: Side
  sz: string
  timestamp: number
}

export type Side = 'B' | 'A'

export type UserFill = {
  closedPnl: string
  coin: string
  crossed: boolean
  dir: Operation
  fee: string
  hash: string
  liquidationMarkPx: null | string
  oid: number
  px: string
  side: Side
  startPosition: string
  sz: string
  tid: number
  time: number
}

export type Operation = 'Open Long' | 'Close Long' | 'Close Short' | 'Open Short' | 'Sell' | 'Buy'

export type UserFunding = {
  delta: Delta
  hash: string
  time: number
}

export type Delta = {
  coin: string
  fundingRate: string
  szi: string
  type: Type
  usdc: string
}

export type Type = 'funding'

export type FundingHistory = {
  coin: string
  fundingRate: string
  premium: string
  time: number
}

export type L2Book = {
  coin: string
  levels: Array<Level[]>
  time: number
}

export type Level = {
  n: number
  px: string
  sz: string
}

export type OrderStatusInfo = {
  order: Order
  status: string // TODO - check possible types (order etc)
}

export type Order = {
  order: OrderData
  status: string // TODO - check possible types (open, close etc)
  statusTimestamp: number
}

export type HlOrderType = 'Limit' | 'Stop Market' | 'Stop Limit' | 'Take Profit Market' | 'Take Profit Limit'

export type Grouping = 'na' | 'normalTpsl' | 'positionTpsl'

export type OrderData = {
  children: any[]
  cloid: null | number
  coin: string
  isPositionTpsl: boolean
  isTrigger: boolean
  limitPx: string
  oid: number
  orderType: HlOrderType
  origSz: string
  reduceOnly: boolean
  side: Side
  sz: string
  tif: Tif | null
  timestamp: number
  triggerCondition: string
  triggerPx: string
}

export type ActiveAssetData = {
  availableToTrade: string[]
  coin: string
  leverage: Leverage
  marginUsedByOpenOrders: string[]
  maxTradeSzs: string[]
  user: string
}

type Cloid = string | null

export type Tif = 'Alo' | 'Ioc' | 'Gtc'
type Tpsl = 'tp' | 'sl'

export interface LimitOrderType {
  tif: Tif
}

export interface TriggerOrderType {
  triggerPx: number
  isMarket: boolean
  tpsl: Tpsl
}

export interface TriggerOrderTypeWire {
  triggerPx: string
  isMarket: boolean
  tpsl: Tpsl
}

export interface OrderType {
  limit?: LimitOrderType
  trigger?: TriggerOrderType
}

export interface OrderTypeWire {
  limit?: LimitOrderType
  trigger?: TriggerOrderTypeWire
}

export interface OrderRequest {
  coin: string
  is_buy: boolean
  sz: number
  limit_px: number
  order_type: OrderType
  reduce_only: boolean
  cloid: Cloid
}

export interface ModifyRequest {
  oid: number
  order: OrderRequest
}

export interface CancelRequest {
  coin: string
  oid: number
}

export interface CancelByCloidRequest {
  coin: string
  cloid: Cloid
}

export interface OrderPayload {
  asset: number
  isBuy: boolean
  limitPx: number
  sz: number
  reduceOnly: boolean
  cloid: Cloid
}

export interface OrderWire {
  a: number
  b: boolean
  p: string
  s: string
  r: boolean
  t: OrderTypeWire
  c?: Cloid
}

export interface ModifyWire {
  oid: number
  order: OrderWire
}

export interface WebData2 {
  agentAddress: string
  assetCtxs: AssetCtx[]
  SpotAssetCtxs: SpotAssetCtx[]
  clearinghouseState: ClearinghouseState
  cumLedger: string
  isVault: boolean
  leadingVaults: any[]
  meta: Meta
  openOrders: OpenOrders[]
  pendingWithdrawals: any[]
  serverTime: number
  totalVaultEquity: string
  twapStates: any[]
  user: string
}

export interface ReferredBy {
  code: string | null
  referrer: string | null
}

export interface UserData {
  cumFeesRewardedToReferrer: string
  cumRewardedFeesSinceReferred: string
  cumVlm: string
  timeJoined: number
  user: string
}

export interface ReferrerStateData {
  required?: string // if status === "needToTrade" can be interpreted as number
  referralStates?: UserData[]
}

export interface ReferrerState {
  data: ReferrerStateData
  stage: 'needToTrade' | 'ready'
}

export interface RewardHistoryItem {}

export interface ReferralResponse {
  claimedRewards: string // can be interpreted as number
  cumVlm: string // can be interpreted as number
  referredBy: ReferredBy
  referrerState: ReferrerState
  rewardHistory: RewardHistoryItem[]
  unclaimedRewards: string // can be interpreted as number
}

export interface DistributionHistoryItem {
  endDate: string
  points: number
  referredVlm: number
  startDate: string
}

export interface PointsSummary {
  distributionHistory: DistributionHistoryItem[]
  percentile: number
  rank: number
}

export interface PointsResponse {
  mostRecentDistributionStartDate: string
  userSummary: PointsSummary
}
