/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export declare namespace Price {
  export type PropsStruct = {
    min: PromiseOrValue<BigNumberish>;
    max: PromiseOrValue<BigNumberish>;
  };

  export type PropsStructOutput = [BigNumber, BigNumber] & {
    min: BigNumber;
    max: BigNumber;
  };
}

export declare namespace MarketUtils {
  export type MarketPricesStruct = {
    indexTokenPrice: Price.PropsStruct;
    longTokenPrice: Price.PropsStruct;
    shortTokenPrice: Price.PropsStruct;
  };

  export type MarketPricesStructOutput = [
    Price.PropsStructOutput,
    Price.PropsStructOutput,
    Price.PropsStructOutput
  ] & {
    indexTokenPrice: Price.PropsStructOutput;
    longTokenPrice: Price.PropsStructOutput;
    shortTokenPrice: Price.PropsStructOutput;
  };
}

export declare namespace Order {
  export type AddressesStruct = {
    account: PromiseOrValue<string>;
    receiver: PromiseOrValue<string>;
    cancellationReceiver: PromiseOrValue<string>;
    callbackContract: PromiseOrValue<string>;
    uiFeeReceiver: PromiseOrValue<string>;
    market: PromiseOrValue<string>;
    initialCollateralToken: PromiseOrValue<string>;
    swapPath: PromiseOrValue<string>[];
  };

  export type AddressesStructOutput = [
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string[]
  ] & {
    account: string;
    receiver: string;
    cancellationReceiver: string;
    callbackContract: string;
    uiFeeReceiver: string;
    market: string;
    initialCollateralToken: string;
    swapPath: string[];
  };

  export type NumbersStruct = {
    orderType: PromiseOrValue<BigNumberish>;
    decreasePositionSwapType: PromiseOrValue<BigNumberish>;
    sizeDeltaUsd: PromiseOrValue<BigNumberish>;
    initialCollateralDeltaAmount: PromiseOrValue<BigNumberish>;
    triggerPrice: PromiseOrValue<BigNumberish>;
    acceptablePrice: PromiseOrValue<BigNumberish>;
    executionFee: PromiseOrValue<BigNumberish>;
    callbackGasLimit: PromiseOrValue<BigNumberish>;
    minOutputAmount: PromiseOrValue<BigNumberish>;
    updatedAtBlock: PromiseOrValue<BigNumberish>;
    updatedAtTime: PromiseOrValue<BigNumberish>;
  };

  export type NumbersStructOutput = [
    number,
    number,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    orderType: number;
    decreasePositionSwapType: number;
    sizeDeltaUsd: BigNumber;
    initialCollateralDeltaAmount: BigNumber;
    triggerPrice: BigNumber;
    acceptablePrice: BigNumber;
    executionFee: BigNumber;
    callbackGasLimit: BigNumber;
    minOutputAmount: BigNumber;
    updatedAtBlock: BigNumber;
    updatedAtTime: BigNumber;
  };

  export type FlagsStruct = {
    isLong: PromiseOrValue<boolean>;
    shouldUnwrapNativeToken: PromiseOrValue<boolean>;
    isFrozen: PromiseOrValue<boolean>;
    autoCancel: PromiseOrValue<boolean>;
  };

  export type FlagsStructOutput = [boolean, boolean, boolean, boolean] & {
    isLong: boolean;
    shouldUnwrapNativeToken: boolean;
    isFrozen: boolean;
    autoCancel: boolean;
  };

  export type PropsStruct = {
    addresses: Order.AddressesStruct;
    numbers: Order.NumbersStruct;
    flags: Order.FlagsStruct;
  };

  export type PropsStructOutput = [
    Order.AddressesStructOutput,
    Order.NumbersStructOutput,
    Order.FlagsStructOutput
  ] & {
    addresses: Order.AddressesStructOutput;
    numbers: Order.NumbersStructOutput;
    flags: Order.FlagsStructOutput;
  };
}

export interface KeeperReaderInterface extends utils.Interface {
  functions: {
    "getLiquidatablePositions(address,address,((uint256,uint256),(uint256,uint256),(uint256,uint256))[],uint256,uint256,bool)": FunctionFragment;
    "getOrders(address,uint256,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "getLiquidatablePositions" | "getOrders"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getLiquidatablePositions",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      MarketUtils.MarketPricesStruct[],
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<boolean>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getOrders",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "getLiquidatablePositions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getOrders", data: BytesLike): Result;

  events: {};
}

export interface KeeperReader extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: KeeperReaderInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    getLiquidatablePositions(
      dataStore: PromiseOrValue<string>,
      referralStorage: PromiseOrValue<string>,
      marketPrices: MarketUtils.MarketPricesStruct[],
      start: PromiseOrValue<BigNumberish>,
      end: PromiseOrValue<BigNumberish>,
      shouldValidateMinCollateralUsd: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    getOrders(
      dataStore: PromiseOrValue<string>,
      start: PromiseOrValue<BigNumberish>,
      end: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[Order.PropsStructOutput[]]>;
  };

  getLiquidatablePositions(
    dataStore: PromiseOrValue<string>,
    referralStorage: PromiseOrValue<string>,
    marketPrices: MarketUtils.MarketPricesStruct[],
    start: PromiseOrValue<BigNumberish>,
    end: PromiseOrValue<BigNumberish>,
    shouldValidateMinCollateralUsd: PromiseOrValue<boolean>,
    overrides?: CallOverrides
  ): Promise<string[]>;

  getOrders(
    dataStore: PromiseOrValue<string>,
    start: PromiseOrValue<BigNumberish>,
    end: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<Order.PropsStructOutput[]>;

  callStatic: {
    getLiquidatablePositions(
      dataStore: PromiseOrValue<string>,
      referralStorage: PromiseOrValue<string>,
      marketPrices: MarketUtils.MarketPricesStruct[],
      start: PromiseOrValue<BigNumberish>,
      end: PromiseOrValue<BigNumberish>,
      shouldValidateMinCollateralUsd: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<string[]>;

    getOrders(
      dataStore: PromiseOrValue<string>,
      start: PromiseOrValue<BigNumberish>,
      end: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<Order.PropsStructOutput[]>;
  };

  filters: {};

  estimateGas: {
    getLiquidatablePositions(
      dataStore: PromiseOrValue<string>,
      referralStorage: PromiseOrValue<string>,
      marketPrices: MarketUtils.MarketPricesStruct[],
      start: PromiseOrValue<BigNumberish>,
      end: PromiseOrValue<BigNumberish>,
      shouldValidateMinCollateralUsd: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOrders(
      dataStore: PromiseOrValue<string>,
      start: PromiseOrValue<BigNumberish>,
      end: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getLiquidatablePositions(
      dataStore: PromiseOrValue<string>,
      referralStorage: PromiseOrValue<string>,
      marketPrices: MarketUtils.MarketPricesStruct[],
      start: PromiseOrValue<BigNumberish>,
      end: PromiseOrValue<BigNumberish>,
      shouldValidateMinCollateralUsd: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getOrders(
      dataStore: PromiseOrValue<string>,
      start: PromiseOrValue<BigNumberish>,
      end: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
