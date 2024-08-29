import type { FixedNumber } from '../../../fixedNumber'
import type { SupportedChains, Token } from '../../common/tokens'
import type {
  AmountInfo,
  ApiOpts,
  AuthParams,
  AvailableToTradeParams,
  IRouterAdapterBaseV1,
  MarketInfo,
  OrderInfo,
  PositionInfo,
  ProtocolId
} from './IRouterAdapterBaseV1'

export type DepositData = Record<SupportedChains, Token[]>

export type ProtocolInfo = {
  hasAgent: boolean
  hasAccount: boolean
  hasOrderbook: boolean
  sizeDeltaInToken: boolean
  explicitFundingClaim: boolean
  collateralDeltaInToken: boolean
  collateralUsesLimitPricing: boolean
  depositData: DepositData | undefined // defined for protocols which have account
  minimumDepositAmountUsd: FixedNumber
}

export type SupportedResolutions = '1' | '5' | '15' | '30' | '60' | '120' | '240' | '720' | '1D' | '1W' | '1M'

/**
 * Represents historical trade data.
 * @property symbolInfo The symbol information.
 * @property resolution The resolution.
 * @property from The start time in seconds
 * @property to The end time in seconds
 * @property countBack The count back.
 * @property firstDataRequest Indicates whether it's the first data request.
 */
export type GetBarsParams = {
  symbolInfo: string // ETH-USD format
  resolution: SupportedResolutions
  from: number
  to: number
  countBack: number
  firstDataRequest: boolean
}

/**
 * Represents historical trade data.
 * @property time The time.
 * @property open The open price.
 * @property high The high price.
 * @property low The low price.
 * @property close The close price.
 * @property volume The volume.
 */
export type TVBar = {
  time: number
  open: number
  high: number
  low: number
  close: number
  volume?: number
}

export interface IAdapterV1 extends IRouterAdapterBaseV1 {
  readonly protocolId: ProtocolId

  getProtocolInfo(): ProtocolInfo

  getAvailableToTrade(
    wallet: string,
    params: AvailableToTradeParams<this['protocolId']>,
    opts?: ApiOpts
  ): Promise<AmountInfo>

  setCredentials(auth: AuthParams<this['protocolId']>): Promise<void>

  clearCredentials(): void

  getBars(params: GetBarsParams): Promise<TVBar[]>

  isOrderForPosition(order: OrderInfo, position: PositionInfo): boolean

  getDepositWithdrawTime(
    action: 'Deposit' | 'Withdraw',
    isEthChain: boolean,
    isArbitrumChain: boolean,
    isOptimismChain: boolean
  ): { deposit: string; withdraw: string }

  getMatchingPosition(
    positions: PositionInfo[],
    market: MarketInfo,
    collateralToken: Token,
    order: 'long' | 'short'
  ): PositionInfo | undefined

  getWithdrawableBalance(
    wallet: string,
    collateralToken: Token,
    market: MarketInfo,
    opts?: ApiOpts
  ): Promise<FixedNumber>
}
