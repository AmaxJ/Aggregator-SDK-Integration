import { encode } from '@msgpack/msgpack'
import { ethers } from 'ethers'
import type { Hex, WalletClient } from 'viem'
import { keccak256 } from 'viem'

const HL_DOMAIN = {
  name: 'HyperliquidSignTransaction',
  version: '1',
  chainId: 421614,
  verifyingContract: ethers.constants.AddressZero as `0x${string}`
} as const

const HL_EIP712_DOMAIN = {
  name: 'Exchange',
  version: '1',
  chainId: 421614,
  verifyingContract: ethers.constants.AddressZero as `0x${string}`
} as const

const HL_L1_EIP712_DOMAIN = {
  name: 'Exchange',
  version: '1',
  chainId: 1337,
  verifyingContract: ethers.constants.AddressZero as `0x${string}`
} as const

const AGENT_EIP712_TYPE = {
  Agent: [
    { name: 'source', type: 'string' },
    { name: 'connectionId', type: 'bytes32' }
  ]
} as const

const WITHDRAW_EIP712_TYPE = {
  'HyperliquidTransaction:Withdraw': [
    { name: 'hyperliquidChain', type: 'string' },
    { name: 'destination', type: 'string' },
    { name: 'amount', type: 'string' },
    { name: 'time', type: 'uint64' }
  ]
} as const

const USD_TRANSFER_EIP712_TYPE = {
  'HyperliquidTransaction:UsdSend': [
    { name: 'hyperliquidChain', type: 'string' },
    { name: 'destination', type: 'string' },
    { name: 'amount', type: 'string' },
    { name: 'time', type: 'uint64' }
  ]
} as const

const APPROVE_AGENT_EIP712_TYPE = {
  'HyperliquidTransaction:ApproveAgent': [
    { name: 'hyperliquidChain', type: 'string' },
    { name: 'agentAddress', type: 'address' },
    { name: 'agentName', type: 'string' },
    { name: 'nonce', type: 'uint64' }
  ]
} as const

export function signReadOnlyAuth(wallet: WalletClient, signatureTypes: ethers.utils.ParamType[], signatureData: any[]) {
  const connectionId = ethers.utils.defaultAbiCoder.encode(signatureTypes, signatureData)

  const phantomAgent: { source: string; connectionId: `0x${string}` } = {
    source: 'b',
    connectionId: ethers.utils.solidityKeccak256(['bytes'], [connectionId]) as `0x${string}`
  }

  return wallet.signTypedData({
    account: wallet.account!,
    domain: HL_EIP712_DOMAIN,
    types: AGENT_EIP712_TYPE,
    primaryType: 'Agent',
    message: phantomAgent
  })
}

export function signL1Action(wallet: WalletClient, signatureData: any, nonce: number) {
  const hash = actionHash(signatureData, nonce)
  const phantomAgent = constructPhantomAgent(hash)

  return wallet.signTypedData({
    account: wallet.account!,
    domain: HL_L1_EIP712_DOMAIN,
    types: AGENT_EIP712_TYPE,
    primaryType: 'Agent',
    message: phantomAgent
  })
}

function actionHash(action: unknown, nonce: number): Hex {
  const msgPackBytes = encode(action)

  const additionalBytesLength = 9
  const data = new Uint8Array(msgPackBytes.length + additionalBytesLength)
  data.set(msgPackBytes)

  const view = new DataView(data.buffer, data.byteOffset, data.byteLength)
  view.setBigUint64(msgPackBytes.length, BigInt(nonce))
  view.setUint8(msgPackBytes.length + 8, 0)

  return keccak256(data)
}

export function signUserSignedAction(wallet: WalletClient, action: any, payloadTypes: any, primaryType: any) {
  action.signatureChainId = '0x66eee'
  action.hyperliquidChain = 'Testnet'

  return wallet.signTypedData({
    account: wallet.account!,
    domain: HL_DOMAIN,
    types: payloadTypes,
    primaryType: primaryType,
    message: action
  })
}

export function signUsdTransferAction(wallet: WalletClient, message: any) {
  return signUserSignedAction(wallet, message, USD_TRANSFER_EIP712_TYPE, 'HyperliquidTransaction:UsdSend')
}

export function signWithdrawFromBridgeAction(wallet: WalletClient, message: any) {
  return signUserSignedAction(wallet, message, WITHDRAW_EIP712_TYPE, 'HyperliquidTransaction:Withdraw')
}

export function signAgent(wallet: WalletClient, message: any) {
  return signUserSignedAction(wallet, message, APPROVE_AGENT_EIP712_TYPE, 'HyperliquidTransaction:ApproveAgent')
}

function constructPhantomAgent(hash: string): any {
  return {
    source: 'b',
    connectionId: hash
  }
}
