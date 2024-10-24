import type { BigNumber } from 'ethers'

import { getByKey } from '../../../common/helper'
import { getFeeItem, getIsHighPriceImpact, getPriceImpactByAcceptablePrice } from '../fees/utils'
import { formatPercentage, formatTokenAmount, formatUsd } from '../lib/numbers'
import type { MarketsInfoData } from '../markets/types'
import { getAvailableUsdLiquidityForPosition } from '../markets/utils'
import type { PositionsInfoData } from '../positions/types'
import { parsePositionKey } from '../positions/utils'
import type { TokensData } from '../tokens/types'
import { convertToUsd, parseContractPrice } from '../tokens/utils'
import { getAcceptablePriceInfo, getTriggerThresholdType } from '../trade/utils/prices'
import { getMaxSwapPathLiquidity, getSwapPathOutputAddresses, getSwapPathStats } from '../trade/utils/swapStats'
import type { Token } from '../types'
import type { Order, OrderError, OrderInfo, PositionOrderInfo } from './types'
import { OrderType } from './types'

export function isVisibleOrder(orderType: OrderType) {
  return isLimitOrderType(orderType) || isTriggerDecreaseOrderType(orderType) || isLimitSwapOrderType(orderType)
}

export function isOrderForPosition(order: OrderInfo, positionKey: string): order is PositionOrderInfo {
  const { account, marketAddress, collateralAddress, isLong } = parsePositionKey(positionKey)

  let isMatch =
    !isSwapOrderType(order.orderType) &&
    order.account === account &&
    order.marketAddress === marketAddress &&
    order.isLong === isLong

  // For limit orders, we need to check the target collateral token
  if (isLimitOrderType(order.orderType)) {
    isMatch = isMatch && order.targetCollateralToken.address === collateralAddress
  } else if (isTriggerDecreaseOrderType(order.orderType)) {
    isMatch = isMatch && order.initialCollateralTokenAddress === collateralAddress
  }

  return isMatch
}

export function isMarketOrderType(orderType: OrderType) {
  return [OrderType.MarketDecrease, OrderType.MarketIncrease, OrderType.MarketSwap].includes(orderType)
}

export function isLimitOrderType(orderType: OrderType) {
  return [OrderType.LimitIncrease, OrderType.LimitSwap].includes(orderType)
}

export function isTriggerDecreaseOrderType(orderType: OrderType) {
  return [OrderType.LimitDecrease, OrderType.StopLossDecrease].includes(orderType)
}

export function isDecreaseOrderType(orderType: OrderType) {
  return [OrderType.MarketDecrease, OrderType.LimitDecrease, OrderType.StopLossDecrease].includes(orderType)
}

export function isIncreaseOrderType(orderType: OrderType) {
  return [OrderType.MarketIncrease, OrderType.LimitIncrease].includes(orderType)
}

export function isSwapOrderType(orderType: OrderType) {
  return [OrderType.MarketSwap, OrderType.LimitSwap].includes(orderType)
}

export function isLimitSwapOrderType(orderType: OrderType) {
  return orderType === OrderType.LimitSwap
}

export function isLiquidationOrderType(orderType: OrderType) {
  return orderType === OrderType.Liquidation
}

export function getSwapOrderTitle(p: {
  initialCollateralToken: Token
  targetCollateralToken: Token
  initialCollateralAmount: BigNumber
  minOutputAmount: BigNumber
}) {
  const { initialCollateralToken, initialCollateralAmount, targetCollateralToken, minOutputAmount } = p

  const fromTokenText = formatTokenAmount(
    initialCollateralAmount,
    initialCollateralToken.decimals,
    initialCollateralToken.symbol
  )

  const toTokenText = formatTokenAmount(minOutputAmount, targetCollateralToken.decimals, targetCollateralToken.symbol)

  return `Swap ${fromTokenText} for ${toTokenText}`
}

export function getPositionOrderTitle(p: {
  orderType: OrderType
  isLong: boolean
  indexToken: Token
  sizeDeltaUsd: BigNumber
}) {
  const { orderType, isLong, indexToken, sizeDeltaUsd } = p

  const longShortText = isLong ? `Long` : `Shor`
  const tokenText = `${indexToken.symbol} ${longShortText}`
  const sizeText = formatUsd(sizeDeltaUsd)
  const increaseOrDecreaseText = isIncreaseOrderType(orderType) ? `Increase` : `Decrease`

  return `${increaseOrDecreaseText} ${tokenText} by ${sizeText}`
}

export function getOrderTypeLabel(orderType: OrderType) {
  const orderTypeLabels: any = {
    [OrderType.MarketSwap]: `Market Swap`,
    [OrderType.LimitSwap]: `Limit Swap`,
    [OrderType.MarketIncrease]: `Market Increase`,
    [OrderType.LimitIncrease]: `Limit Increase`,
    [OrderType.MarketDecrease]: `Market Decrease`,
    [OrderType.LimitDecrease]: `Limit Decrease`,
    [OrderType.StopLossDecrease]: `Stop Loss Decrease`
  }

  return orderTypeLabels[orderType]
}

export function getOrderInfo(p: {
  marketsInfoData: MarketsInfoData
  positionsInfoData?: PositionsInfoData
  tokensData: TokensData
  wrappedNativeToken: Token
  order: Order
}) {
  const { marketsInfoData, positionsInfoData, tokensData, wrappedNativeToken, order } = p

  const marketInfo = getByKey(marketsInfoData, order.marketAddress)
  const indexToken = marketInfo?.indexToken
  const initialCollateralToken = getByKey(tokensData, order.initialCollateralTokenAddress)
  const { outTokenAddress } = getSwapPathOutputAddresses({
    marketsInfoData,
    swapPath: order.swapPath,
    initialCollateralAddress: order.initialCollateralTokenAddress,
    wrappedNativeTokenAddress: wrappedNativeToken.address,
    shouldUnwrapNativeToken: order.shouldUnwrapNativeToken
  })
  const targetCollateralToken = getByKey(tokensData, outTokenAddress)

  if (!marketInfo || !indexToken || !initialCollateralToken || !targetCollateralToken) {
    return undefined
  }

  const title = getPositionOrderTitle({
    orderType: order.orderType,
    isLong: order.isLong,
    indexToken,
    sizeDeltaUsd: order.sizeDeltaUsd
  })

  const acceptablePrice = parseContractPrice(order.contractAcceptablePrice, indexToken.decimals)
  const triggerPrice = parseContractPrice(order.contractTriggerPrice, indexToken.decimals)

  const swapPathStats = getSwapPathStats({
    marketsInfoData,
    swapPath: order.swapPath,
    initialCollateralAddress: order.initialCollateralTokenAddress,
    wrappedNativeTokenAddress: wrappedNativeToken.address,
    usdIn: convertToUsd(
      order.initialCollateralDeltaAmount,
      initialCollateralToken.decimals,
      initialCollateralToken.prices.minPrice
    )!,
    shouldUnwrapNativeToken: order.shouldUnwrapNativeToken,
    shouldApplyPriceImpact: true
  })

  const triggerThresholdType = getTriggerThresholdType(order.orderType, order.isLong)

  const orderInfo: PositionOrderInfo = {
    ...order,
    title,
    errors: [],
    swapPathStats,
    marketInfo,
    indexToken,
    initialCollateralToken,
    targetCollateralToken,
    acceptablePrice,
    triggerPrice,
    triggerThresholdType
  }

  const { errors, level } = getOrderErrors({
    order: orderInfo,
    positionsInfoData,
    marketsInfoData
  })

  orderInfo.errors = errors
  orderInfo.errorLevel = level

  return orderInfo
}

export function getOrderErrors(p: {
  order: OrderInfo
  marketsInfoData: MarketsInfoData
  positionsInfoData: PositionsInfoData | undefined
}): { errors: OrderError[]; level: 'error' | 'warning' | undefined } {
  const { order, positionsInfoData, marketsInfoData } = p

  const errors: OrderError[] = []

  if (isSwapOrderType(order.orderType)) {
    const swapPathLiquidity = getMaxSwapPathLiquidity({
      marketsInfoData,
      swapPath: order.swapPath,
      initialCollateralAddress: order.initialCollateralTokenAddress
    })

    const minOutputUsd = convertToUsd(
      order.minOutputAmount,
      order.targetCollateralToken.decimals,
      order.targetCollateralToken.prices.maxPrice
    )!

    if (swapPathLiquidity.lt(minOutputUsd)) {
      errors.push({
        msg: `There may not be sufficient liquidity to execute the Swap when the Min. Receive conditions are met.`,
        level: 'error'
      })
    }

    const swapImpactFeeItem = getFeeItem(
      order.swapPathStats?.totalSwapPriceImpactDeltaUsd,
      convertToUsd(
        order.initialCollateralDeltaAmount,
        order.initialCollateralToken.decimals,
        order.initialCollateralToken.prices.maxPrice
      )
    )

    if (getIsHighPriceImpact(undefined, swapImpactFeeItem)) {
      errors.push({
        msg: `Currently, There is a high Swap Price Impact for the Order Swap path.`,
        level: 'warning'
      })
    }
  }

  const positionOrder = order as PositionOrderInfo

  const position = Object.values(positionsInfoData || {}).find((pos) => isOrderForPosition(positionOrder, pos.key))

  if ([OrderType.LimitDecrease, OrderType.LimitIncrease].includes(positionOrder.orderType)) {
    const { acceptablePriceDeltaBps: currentAcceptablePriceDeltaBps } = getAcceptablePriceInfo({
      marketInfo: positionOrder.marketInfo,
      isIncrease: isIncreaseOrderType(positionOrder.orderType),
      isLong: positionOrder.isLong,
      indexPrice: positionOrder.triggerPrice,
      sizeDeltaUsd: positionOrder.sizeDeltaUsd
    })

    const { acceptablePriceDeltaBps: orderAcceptablePriceDeltaBps } = getPriceImpactByAcceptablePrice({
      sizeDeltaUsd: positionOrder.sizeDeltaUsd,
      isIncrease: isIncreaseOrderType(positionOrder.orderType),
      isLong: positionOrder.isLong,
      indexPrice: positionOrder.triggerPrice,
      acceptablePrice: positionOrder.acceptablePrice
    })

    if (currentAcceptablePriceDeltaBps.lt(0) && currentAcceptablePriceDeltaBps.lt(orderAcceptablePriceDeltaBps)) {
      const priceText = positionOrder.orderType === OrderType.LimitIncrease ? `Limit Price` : `Trigger Price`
      const suggestionType = positionOrder.orderType === OrderType.LimitIncrease ? `Limi` : `Take-Profi`

      errors.push({
        msg: `The Order may not execute at the desired ${priceText} as the current Price Impact ${formatPercentage(
          currentAcceptablePriceDeltaBps,
          { signed: true }
        )} is higher than its Acceptable Price Impact ${formatPercentage(orderAcceptablePriceDeltaBps, {
          signed: true
        })}. Consider canceling and creating a new ${suggestionType} Order.`,
        level: 'warning'
      })
    }
  }

  if (positionOrder.orderType === OrderType.LimitIncrease) {
    const currentLiquidity = getAvailableUsdLiquidityForPosition(positionOrder.marketInfo, positionOrder.isLong)

    if (currentLiquidity.lt(positionOrder.sizeDeltaUsd)) {
      errors.push({
        msg: `There may not be sufficient liquidity to execute your Order when the Price conditions are met.`,
        level: 'error'
      })
    }

    if (positionOrder.swapPathStats?.swapPath.length) {
      const swapPathLiquidity = getMaxSwapPathLiquidity({
        marketsInfoData,
        swapPath: positionOrder.swapPath,
        initialCollateralAddress: positionOrder.initialCollateralTokenAddress
      })

      const collateralSwapUsd = convertToUsd(
        order.initialCollateralDeltaAmount,
        order.initialCollateralToken.decimals,
        order.initialCollateralToken.prices.maxPrice
      )!

      if (swapPathLiquidity.lt(collateralSwapUsd)) {
        errors.push({
          msg: `There may not be sufficient liquidity to execute the Pay Token to Collateral Token swap when the Price conditions are met.`,
          level: 'error'
        })
      }
    }
  }

  if (!position) {
    const sameMarketPosition = Object.values(positionsInfoData || {}).find(
      (pos) => pos.marketAddress === order.marketAddress && pos.isLong === order.isLong
    )

    const longText = sameMarketPosition?.isLong ? `Long` : `Shor`

    if (sameMarketPosition) {
      errors.push({
        msg: `You have an existing ${longText} position with ${sameMarketPosition?.collateralToken.symbol} as Collateral. This Order will not
        be valid for that Position.`,
        level: 'warning'
      })
    }
  }

  if (isDecreaseOrderType(order.orderType) && position) {
    const triggerPrice = (order as PositionOrderInfo).triggerPrice

    const isInvalidTriggerPrice = position.isLong
      ? position.liquidationPrice?.gt(triggerPrice)
      : position.liquidationPrice?.lt(triggerPrice)

    if (isInvalidTriggerPrice) {
      errors.push({
        msg: `Order Trigger Price is beyond position's Liquidation Price.`,
        level: 'error'
      })
    }

    if (order.swapPath.length) {
      const swapPathLiquidity = getMaxSwapPathLiquidity({
        marketsInfoData,
        swapPath: positionOrder.swapPath,
        initialCollateralAddress: positionOrder.initialCollateralTokenAddress
      })

      const minOutputUsd = convertToUsd(
        order.minOutputAmount,
        order.targetCollateralToken.decimals,
        order.targetCollateralToken.prices.maxPrice
      )!

      if (swapPathLiquidity.lt(minOutputUsd)) {
        errors.push({
          msg: `There may not be sufficient liquidity to execute swap to Receive Token when the Price conditions are met.`,
          level: 'error'
        })
      }
    }
  }

  const errorsLevelPriority = {
    error: 1,
    warning: 2
  }

  let level: 'error' | 'warning' | undefined = undefined
  if (errors.some((err) => err.level === 'error')) {
    level = 'error'
  } else if (errors.some((err) => err.level === 'warning')) {
    level = 'warning'
  }

  return {
    errors: errors.sort((a, b) => {
      return errorsLevelPriority[a.level] - errorsLevelPriority[b.level]
    }),
    level
  }
}
