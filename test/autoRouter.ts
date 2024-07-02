import { parseUnits } from 'ethers-v6'
import { RouteData } from '../router/Route'
import { getGmxV2TokenBySymbol } from '../src/configs/gmxv2/gmxv2Tokens'
import { FixedNumber } from '../fixedNumber'
import { AutoRouterV1 } from '../router'
import { getTokenPriceD, startHermesStreaming, startStreaming } from '../pyth'

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms))

async function testBestRoute() {
  startHermesStreaming()
  startStreaming()
  await delay(5000)

  const router = new AutoRouterV1()

  const marketTokenSymbol = 'ETH'
  const indexTokenPrice = getTokenPriceD(marketTokenSymbol, 30)!
  const sizeDelta = '100'
  const marginDelta = '5000'

  const collateralTokenSymbols = ['USDC', 'sUSD', 'USDT', 'LINK', 'ETH']
  const collateralTokensList = collateralTokenSymbols.map((symbol) => {
    return {
      token: getGmxV2TokenBySymbol(symbol),
      price: FixedNumber.fromValue(getTokenPriceD(symbol, 30)!.toString(), 30, 30)
    }
  })

  const routeData: RouteData = {
    marketSymbol: marketTokenSymbol,
    collateralTokens: collateralTokensList,
    direction: 'LONG',
    sizeDeltaUSD: FixedNumber.fromValue(indexTokenPrice.mul(sizeDelta).toString(), 30, 30),
    marginDeltaUSD: FixedNumber.fromValue(parseUnits(marginDelta, 30), 30, 30)
  }
  console.log({ routeData })

  const tags = await router.getMarketTags(routeData, undefined, undefined, undefined)

  tags.forEach((tag) => {
    console.dir(
      {
        sortedMarkets: tag.sortedMarkets,
        tagDesc: tag.tagDesc,
        tagColor: tag.tagColor
      },
      { depth: 6 }
    )
  })

  console.time('getMarketTags-2')
  await router.getMarketTags(routeData)
  console.timeEnd('getMarketTags-2')
}

testBestRoute()
  .then(() => {
    process.exit(0)
  })
  .catch((err) => {
    console.log(err)
    process.exit(1)
  })
