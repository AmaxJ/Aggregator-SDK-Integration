import type { FixedNumber } from '../../../fixedNumber'
import type { Token } from '../../common/tokens'
import type { GetBarsParams, ProtocolInfo, TVBar } from './IAdapterV1'
import type {
  AmountInfo,
  ApiOpts,
  AuthParams,
  AvailableToTradeParams,
  IRouterAdapterBaseV1,
  MarketInfo,
  OrderInfo,
  PositionInfo,
  Protocol,
  ProtocolId,
  SubscribeCandleArgs
} from './IRouterAdapterBaseV1'

export interface IRouterV1 extends IRouterAdapterBaseV1 {
  ///// Protocol api //////
  supportedProtocols(): Protocol[]

  getProtocolInfo(): (ProtocolInfo & Protocol)[]

  getAvailableToTrade<T extends ProtocolId>(
    protocol: T,
    wallet: string,
    params: AvailableToTradeParams<T>,
    opts?: ApiOpts
  ): Promise<AmountInfo>

  setCredentials<T extends ProtocolId>(protocol: T, credentials: AuthParams<T>): Promise<void>

  get24hOldPrice(
    indexSymbol: string,
    marketsV1: MarketInfo[]
  ): Promise<
    | {
        source: 'pyth' | 'hl' | 'aevo' | 'dydx' | 'hltest' | 'synfutures'
        bars: TVBar[]
        oldPrice: number
      }
    | undefined
  >

  getBars(source: 'pyth' | 'hl' | 'aevo' | 'dydx' | 'hltest' | 'synfutures', params: GetBarsParams): Promise<TVBar[]>

  subscribeStream(source: 'pyth' | 'hl' | 'aevo' | 'dydx' | 'hltest' | 'synfutures', params: SubscribeCandleArgs): void

  unsubscribeStream(
    source: 'pyth' | 'hl' | 'aevo' | 'dydx' | 'hltest' | 'synfutures',
    subscriberUID: SubscribeCandleArgs['subscriberUID']
  ): void

  isOrderForPosition(order: OrderInfo, position: PositionInfo): boolean

  getDepositWithdrawTime(
    protocolId: ProtocolId,
    action: 'Deposit' | 'Withdraw',
    isEthChain: boolean,
    isArbitrumChain: boolean,
    isOptimismChain: boolean
  ): { deposit: string; withdraw: string }

  getMatchingPosition(
    protocolId: ProtocolId,
    positions: PositionInfo[],
    market: MarketInfo,
    collateralToken: Token,
    order: 'long' | 'short'
  ): PositionInfo | undefined

  getWithdrawableBalance(
    protocolId: ProtocolId,
    wallet: string,
    collateralToken: Token,
    market: MarketInfo,
    opts?: ApiOpts
  ): Promise<FixedNumber>
}
