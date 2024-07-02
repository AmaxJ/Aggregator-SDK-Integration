import type { ProtocolInfo } from './IAdapterV1'
import type {
  AmountInfo,
  ApiOpts,
  AuthParams,
  AvailableToTradeParams,
  IRouterAdapterBaseV1,
  Protocol,
  ProtocolId
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
}
