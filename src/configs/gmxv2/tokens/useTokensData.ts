import { CACHE_SECOND, CACHE_TIME_MULT, cacheFetch, getStaleTime, GMXV2_CACHE_PREFIX } from '../../../common/cache'
import type { ApiOpts } from '../../../interfaces/V1/IRouterAdapterBaseV1'
import { getTokensMap, getV2Tokens } from '../config/tokens'
import type { TokensData } from './types'
import { useTokenBalances } from './useTokenBalances'
import { useTokenRecentPrices } from './useTokenRecentPricesData'

type TokensDataResult = {
  tokensData?: TokensData
  pricesUpdatedAt?: number
}

export async function useTokensData(chainId: number, wallet: string, opts?: ApiOpts): Promise<TokensDataResult> {
  const tokenConfigs = getTokensMap(chainId)

  const sTimeTB = getStaleTime(CACHE_SECOND * 30, opts)
  const tokenBalancesPromise = cacheFetch({
    key: [GMXV2_CACHE_PREFIX, 'useTokenBalances', chainId, wallet],
    fn: () => useTokenBalances(chainId, wallet),
    staleTime: sTimeTB,
    cacheTime: sTimeTB * CACHE_TIME_MULT,
    opts
  })
  const tokenRecentPricesPromise = useTokenRecentPrices(chainId, opts)

  const [{ balancesData }, { pricesData, updatedAt: pricesUpdatedAt }] = await Promise.all([
    tokenBalancesPromise,
    tokenRecentPricesPromise
  ])

  const tokenAddresses = getV2Tokens(chainId).map((token) => token.address)

  if (!pricesData) {
    return {
      tokensData: undefined,
      pricesUpdatedAt: undefined
    }
  }

  return {
    tokensData: tokenAddresses.reduce((acc: TokensData, tokenAddress) => {
      const prices = pricesData[tokenAddress]
      const balance = balancesData?.[tokenAddress]
      const tokenConfig = tokenConfigs[tokenAddress]

      if (!prices) {
        return acc
      }

      acc[tokenAddress] = {
        ...tokenConfig,
        prices,
        balance
      }
      return acc
    }, {} as TokensData),
    pricesUpdatedAt
  }
}
