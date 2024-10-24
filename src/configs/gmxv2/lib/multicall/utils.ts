import type { Signer } from 'ethers'
import type { PublicClient } from 'viem'
import { createPublicClient, http } from 'viem'
import { arbitrum } from 'viem/chains'

import CustomErrors from '../../abis/CustomErrors.json'
import { sleep } from './sleep'
import type { MulticallRequestConfig, MulticallResult } from './types'

export const MAX_TIMEOUT = 200000

const ARBITRUM = 42161

const CHAIN_BY_CHAIN_ID: any = {
  [ARBITRUM]: arbitrum
}

const BATCH_CONFIGS: any = {
  [ARBITRUM]: {
    http: {
      batchSize: 0, // disable batches, here batchSize is the number of eth_calls in a batch
      wait: 0 // keep this setting in case batches are enabled in future
    },
    client: {
      multicall: {
        batchSize: 1024 * 1024, // here batchSize is the number of bytes in a multicall
        wait: 0 // zero delay means formation of a batch in the current macro-task, like setTimeout(fn, 0)
      }
    }
  }
}

export async function executeMulticall(
  chainId: number,
  signer: Signer | undefined,
  request: MulticallRequestConfig<any>
) {
  const multicall = await Multicall.getInstance(chainId)

  return multicall?.call(request, MAX_TIMEOUT)
}

type ResponseType = { result: any; status: any; error: any }

export class Multicall {
  static instances: {
    [chainId: number]: Multicall | undefined
  } = {}

  static async getInstance(chainId: number) {
    let instance = Multicall.instances[chainId]

    if (!instance || instance.chainId !== chainId) {
      const rpcUrl = 'https://arbitrum.blockpi.network/v1/rpc/74e3a391eda9ce050d7b9db971a3aeda626b7dc3'

      if (!rpcUrl) {
        return undefined
      }

      instance = new Multicall(chainId, rpcUrl)

      Multicall.instances[chainId] = instance
    }

    return instance
  }

  static getViemClient(chainId: number, rpcUrl: string) {
    return createPublicClient({
      transport: http(rpcUrl, {
        // retries works strangely in viem, so we disable them
        retryCount: 0,
        retryDelay: 10000000,
        batch: BATCH_CONFIGS[chainId].http
      }),
      pollingInterval: undefined,
      batch: BATCH_CONFIGS[chainId].client,
      chain: CHAIN_BY_CHAIN_ID[chainId]
    })
  }

  viemClient: PublicClient

  constructor(
    public chainId: number,
    public rpcUrl: string
  ) {
    this.viemClient = Multicall.getViemClient(chainId, rpcUrl) as PublicClient
  }

  async call(request: MulticallRequestConfig<any>, maxTimeout: number) {
    const originalKeys: {
      contractKey: string
      callKey: string
    }[] = []

    const abis: any = {}

    const encodedPayload: { address: string; abi: any; functionName: string; args: any }[] = []

    const contractKeys = Object.keys(request)

    contractKeys.forEach((contractKey) => {
      const contractCallConfig = request[contractKey]

      if (!contractCallConfig) {
        return
      }

      Object.keys(contractCallConfig.calls).forEach((callKey) => {
        const call = contractCallConfig.calls[callKey]

        if (!call) {
          return
        }

        // Add Errors ABI to each contract ABI to correctly parse errors
        abis[contractCallConfig.contractAddress] =
          abis[contractCallConfig.contractAddress] || contractCallConfig.abi.concat(CustomErrors.abi)

        const abi = abis[contractCallConfig.contractAddress]

        originalKeys.push({
          contractKey,
          callKey
        })

        encodedPayload.push({
          address: contractCallConfig.contractAddress,
          functionName: call.methodName,
          abi,
          args: call.params
        })
      })
    })

    const response: any = await Promise.race([
      this.viemClient.multicall({ contracts: encodedPayload as any }),
      sleep(maxTimeout).then(() => Promise.reject(new Error('multicall timeout')))
    ]).catch((_viemError) => {
      const e = new Error(_viemError.message.slice(0, 150))

      // eslint-disable-next-line no-console
      console.groupCollapsed('multicall error:')
      // eslint-disable-next-line no-console
      console.error(e)
      // eslint-disable-next-line no-console
      console.groupEnd()

      const rpcUrl = 'https://arbitrum.blockpi.network/v1/rpc/74e3a391eda9ce050d7b9db971a3aeda626b7dc3'

      if (!rpcUrl) {
        throw e
      }

      const fallbackClient = Multicall.getViemClient(this.chainId, rpcUrl)

      // eslint-disable-next-line no-console
      console.warn(`using multicall fallback for chain ${this.chainId}`)

      return fallbackClient.multicall({ contracts: encodedPayload as any }).catch((__viemError) => {
        const e_ = new Error(__viemError.message.slice(0, 150))
        // eslint-disable-next-line no-console
        console.groupCollapsed('multicall fallback error:')
        // eslint-disable-next-line no-console
        console.error(e_)
        // eslint-disable-next-line no-console
        console.groupEnd()

        throw e_
      })
    })

    const multicallResult: MulticallResult<any> = {
      success: true,
      errors: {},
      data: {}
    }

    response.forEach((res: ResponseType, i: number) => {
      const { contractKey, callKey } = originalKeys[i]

      if (res.status === 'success') {
        let values: any

        if (Array.isArray(res.result) || typeof res.result === 'object') {
          values = res.result
        } else {
          values = [res.result]
        }

        multicallResult.data[contractKey] = multicallResult.data[contractKey] || {}
        multicallResult.data[contractKey][callKey] = {
          contractKey,
          callKey,
          returnValues: values,
          success: true
        }
      } else {
        multicallResult.success = false

        multicallResult.errors[contractKey] = multicallResult.errors[contractKey] || {}
        multicallResult.errors[contractKey][callKey] = res.error

        multicallResult.data[contractKey] = multicallResult.data[contractKey] || {}
        multicallResult.data[contractKey][callKey] = {
          contractKey,
          callKey,
          returnValues: [],
          success: false,
          error: res.error
        }
      }
    })

    return multicallResult
  }
}
