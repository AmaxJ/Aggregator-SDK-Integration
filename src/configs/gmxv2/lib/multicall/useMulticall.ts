import type { CacheKey, MulticallRequestConfig, MulticallResult, SkipKey } from './types'
import { executeMulticall } from './utils'

/**
 * A hook to fetch data from contracts via multicall.
 * Preferably wrapped in custom hooks, such as useMarkets, usePositions, etc.
 *
 * @param chainId - on which network the request should be executed
 * @param name - an unique name for the request, used as a part of swr cache key
 * @param params.key - the cache key as an array, if a falsy value is passed, the request will be skipped
 * @param params.request - contract calls config or callback which returns it
 * @param params.parseResponse - optional callback to pre-process and format the response
 */
export async function useMulticall<TConfig extends MulticallRequestConfig<any>, TResult = MulticallResult<TConfig>>(
  chainId: number,
  name: string,
  params: {
    key: CacheKey | SkipKey
    refreshInterval?: number | null
    clearUnusedKeys?: boolean
    keepPreviousData?: boolean
    request: TConfig | ((chainId: number, key: CacheKey) => TConfig)
    parseResponse?: (result: MulticallResult<TConfig>, chainId: number, key: CacheKey) => TResult
  }
) {
  let data

  try {
    // prettier-ignore
    const request = typeof params.request === "function" 
            ? params.request(chainId, params.key as CacheKey) 
            : params.request;

    if (Object.keys(request).length === 0) {
      throw new Error(`Multicall request is empty`)
    }

    const response = await executeMulticall(chainId, undefined, request)

    if (!response) {
      throw new Error(`Multicall response is empty`)
    }

    // prettier-ignore
    const result = typeof params.parseResponse === "function"
            ? params.parseResponse(response, chainId, params.key as CacheKey)
            : response;

    data = result as TResult
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(`Multicall request failed: ${name}`, e)

    throw e
  }

  return {
    data,
    isLoading: false
  }
}
