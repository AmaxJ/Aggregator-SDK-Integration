import type { ProtocolId } from '../interfaces/V1/IRouterAdapterBaseV1'

type Decode = {
  chainId: string
  protocolId: ProtocolId
  protocolMarketId: string
}

export function decodeMarketId(marketId: string): Decode {
  const [chainId, protocolId, protocolMarketId] = marketId.split('-')
  return {
    chainId,
    protocolId: protocolId as ProtocolId,
    protocolMarketId
  }
}

export function encodeMarketId(chainId: string, protocolId: string, protocolMarketId: string) {
  return `${chainId}-${protocolId}-${protocolMarketId}`
}

export function decodeRawMarketId(id: string) {
  return id.split('-')[2]
}
