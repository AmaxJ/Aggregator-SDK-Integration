import { providers } from 'ethers'
import { blast } from 'viem/chains'

export const rpc: Record<number, providers.StaticJsonRpcProvider> = {
  10: new providers.StaticJsonRpcProvider(
    'https://optimism.blockpi.network/v1/rpc/c8a765265c473f20af2c8c8e64ee4f667dec914b'
  ),
  42161: new providers.StaticJsonRpcProvider(
    'https://arbitrum.blockpi.network/v1/rpc/74e3a391eda9ce050d7b9db971a3aeda626b7dc3'
  ),
  [blast.id]: new providers.StaticJsonRpcProvider('https://rpc.blast.io')
}
