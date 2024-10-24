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

export interface OrderStoreUtilsInterface extends utils.Interface {
  functions: {
    "ACCEPTABLE_PRICE()": FunctionFragment;
    "ACCOUNT()": FunctionFragment;
    "AUTO_CANCEL()": FunctionFragment;
    "CALLBACK_CONTRACT()": FunctionFragment;
    "CALLBACK_GAS_LIMIT()": FunctionFragment;
    "CANCELLATION_RECEIVER()": FunctionFragment;
    "DECREASE_POSITION_SWAP_TYPE()": FunctionFragment;
    "EXECUTION_FEE()": FunctionFragment;
    "INITIAL_COLLATERAL_DELTA_AMOUNT()": FunctionFragment;
    "INITIAL_COLLATERAL_TOKEN()": FunctionFragment;
    "IS_FROZEN()": FunctionFragment;
    "IS_LONG()": FunctionFragment;
    "MARKET()": FunctionFragment;
    "MIN_OUTPUT_AMOUNT()": FunctionFragment;
    "ORDER_TYPE()": FunctionFragment;
    "RECEIVER()": FunctionFragment;
    "SHOULD_UNWRAP_NATIVE_TOKEN()": FunctionFragment;
    "SIZE_DELTA_USD()": FunctionFragment;
    "SWAP_PATH()": FunctionFragment;
    "TRIGGER_PRICE()": FunctionFragment;
    "UI_FEE_RECEIVER()": FunctionFragment;
    "UPDATED_AT_BLOCK()": FunctionFragment;
    "UPDATED_AT_TIME()": FunctionFragment;
    "get(DataStore,bytes32)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "ACCEPTABLE_PRICE"
      | "ACCOUNT"
      | "AUTO_CANCEL"
      | "CALLBACK_CONTRACT"
      | "CALLBACK_GAS_LIMIT"
      | "CANCELLATION_RECEIVER"
      | "DECREASE_POSITION_SWAP_TYPE"
      | "EXECUTION_FEE"
      | "INITIAL_COLLATERAL_DELTA_AMOUNT"
      | "INITIAL_COLLATERAL_TOKEN"
      | "IS_FROZEN"
      | "IS_LONG"
      | "MARKET"
      | "MIN_OUTPUT_AMOUNT"
      | "ORDER_TYPE"
      | "RECEIVER"
      | "SHOULD_UNWRAP_NATIVE_TOKEN"
      | "SIZE_DELTA_USD"
      | "SWAP_PATH"
      | "TRIGGER_PRICE"
      | "UI_FEE_RECEIVER"
      | "UPDATED_AT_BLOCK"
      | "UPDATED_AT_TIME"
      | "get"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "ACCEPTABLE_PRICE",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "ACCOUNT", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "AUTO_CANCEL",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "CALLBACK_CONTRACT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "CALLBACK_GAS_LIMIT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "CANCELLATION_RECEIVER",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "DECREASE_POSITION_SWAP_TYPE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "EXECUTION_FEE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "INITIAL_COLLATERAL_DELTA_AMOUNT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "INITIAL_COLLATERAL_TOKEN",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "IS_FROZEN", values?: undefined): string;
  encodeFunctionData(functionFragment: "IS_LONG", values?: undefined): string;
  encodeFunctionData(functionFragment: "MARKET", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "MIN_OUTPUT_AMOUNT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ORDER_TYPE",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "RECEIVER", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "SHOULD_UNWRAP_NATIVE_TOKEN",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "SIZE_DELTA_USD",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "SWAP_PATH", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "TRIGGER_PRICE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "UI_FEE_RECEIVER",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "UPDATED_AT_BLOCK",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "UPDATED_AT_TIME",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "get",
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]
  ): string;

  decodeFunctionResult(
    functionFragment: "ACCEPTABLE_PRICE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "ACCOUNT", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "AUTO_CANCEL",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "CALLBACK_CONTRACT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "CALLBACK_GAS_LIMIT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "CANCELLATION_RECEIVER",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "DECREASE_POSITION_SWAP_TYPE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "EXECUTION_FEE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "INITIAL_COLLATERAL_DELTA_AMOUNT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "INITIAL_COLLATERAL_TOKEN",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "IS_FROZEN", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "IS_LONG", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "MARKET", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "MIN_OUTPUT_AMOUNT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "ORDER_TYPE", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "RECEIVER", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "SHOULD_UNWRAP_NATIVE_TOKEN",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "SIZE_DELTA_USD",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "SWAP_PATH", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "TRIGGER_PRICE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "UI_FEE_RECEIVER",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "UPDATED_AT_BLOCK",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "UPDATED_AT_TIME",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "get", data: BytesLike): Result;

  events: {};
}

export interface OrderStoreUtils extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: OrderStoreUtilsInterface;

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
    ACCEPTABLE_PRICE(overrides?: CallOverrides): Promise<[string]>;

    ACCOUNT(overrides?: CallOverrides): Promise<[string]>;

    AUTO_CANCEL(overrides?: CallOverrides): Promise<[string]>;

    CALLBACK_CONTRACT(overrides?: CallOverrides): Promise<[string]>;

    CALLBACK_GAS_LIMIT(overrides?: CallOverrides): Promise<[string]>;

    CANCELLATION_RECEIVER(overrides?: CallOverrides): Promise<[string]>;

    DECREASE_POSITION_SWAP_TYPE(overrides?: CallOverrides): Promise<[string]>;

    EXECUTION_FEE(overrides?: CallOverrides): Promise<[string]>;

    INITIAL_COLLATERAL_DELTA_AMOUNT(
      overrides?: CallOverrides
    ): Promise<[string]>;

    INITIAL_COLLATERAL_TOKEN(overrides?: CallOverrides): Promise<[string]>;

    IS_FROZEN(overrides?: CallOverrides): Promise<[string]>;

    IS_LONG(overrides?: CallOverrides): Promise<[string]>;

    MARKET(overrides?: CallOverrides): Promise<[string]>;

    MIN_OUTPUT_AMOUNT(overrides?: CallOverrides): Promise<[string]>;

    ORDER_TYPE(overrides?: CallOverrides): Promise<[string]>;

    RECEIVER(overrides?: CallOverrides): Promise<[string]>;

    SHOULD_UNWRAP_NATIVE_TOKEN(overrides?: CallOverrides): Promise<[string]>;

    SIZE_DELTA_USD(overrides?: CallOverrides): Promise<[string]>;

    SWAP_PATH(overrides?: CallOverrides): Promise<[string]>;

    TRIGGER_PRICE(overrides?: CallOverrides): Promise<[string]>;

    UI_FEE_RECEIVER(overrides?: CallOverrides): Promise<[string]>;

    UPDATED_AT_BLOCK(overrides?: CallOverrides): Promise<[string]>;

    UPDATED_AT_TIME(overrides?: CallOverrides): Promise<[string]>;

    get(
      dataStore: PromiseOrValue<string>,
      key: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[Order.PropsStructOutput]>;
  };

  ACCEPTABLE_PRICE(overrides?: CallOverrides): Promise<string>;

  ACCOUNT(overrides?: CallOverrides): Promise<string>;

  AUTO_CANCEL(overrides?: CallOverrides): Promise<string>;

  CALLBACK_CONTRACT(overrides?: CallOverrides): Promise<string>;

  CALLBACK_GAS_LIMIT(overrides?: CallOverrides): Promise<string>;

  CANCELLATION_RECEIVER(overrides?: CallOverrides): Promise<string>;

  DECREASE_POSITION_SWAP_TYPE(overrides?: CallOverrides): Promise<string>;

  EXECUTION_FEE(overrides?: CallOverrides): Promise<string>;

  INITIAL_COLLATERAL_DELTA_AMOUNT(overrides?: CallOverrides): Promise<string>;

  INITIAL_COLLATERAL_TOKEN(overrides?: CallOverrides): Promise<string>;

  IS_FROZEN(overrides?: CallOverrides): Promise<string>;

  IS_LONG(overrides?: CallOverrides): Promise<string>;

  MARKET(overrides?: CallOverrides): Promise<string>;

  MIN_OUTPUT_AMOUNT(overrides?: CallOverrides): Promise<string>;

  ORDER_TYPE(overrides?: CallOverrides): Promise<string>;

  RECEIVER(overrides?: CallOverrides): Promise<string>;

  SHOULD_UNWRAP_NATIVE_TOKEN(overrides?: CallOverrides): Promise<string>;

  SIZE_DELTA_USD(overrides?: CallOverrides): Promise<string>;

  SWAP_PATH(overrides?: CallOverrides): Promise<string>;

  TRIGGER_PRICE(overrides?: CallOverrides): Promise<string>;

  UI_FEE_RECEIVER(overrides?: CallOverrides): Promise<string>;

  UPDATED_AT_BLOCK(overrides?: CallOverrides): Promise<string>;

  UPDATED_AT_TIME(overrides?: CallOverrides): Promise<string>;

  get(
    dataStore: PromiseOrValue<string>,
    key: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<Order.PropsStructOutput>;

  callStatic: {
    ACCEPTABLE_PRICE(overrides?: CallOverrides): Promise<string>;

    ACCOUNT(overrides?: CallOverrides): Promise<string>;

    AUTO_CANCEL(overrides?: CallOverrides): Promise<string>;

    CALLBACK_CONTRACT(overrides?: CallOverrides): Promise<string>;

    CALLBACK_GAS_LIMIT(overrides?: CallOverrides): Promise<string>;

    CANCELLATION_RECEIVER(overrides?: CallOverrides): Promise<string>;

    DECREASE_POSITION_SWAP_TYPE(overrides?: CallOverrides): Promise<string>;

    EXECUTION_FEE(overrides?: CallOverrides): Promise<string>;

    INITIAL_COLLATERAL_DELTA_AMOUNT(overrides?: CallOverrides): Promise<string>;

    INITIAL_COLLATERAL_TOKEN(overrides?: CallOverrides): Promise<string>;

    IS_FROZEN(overrides?: CallOverrides): Promise<string>;

    IS_LONG(overrides?: CallOverrides): Promise<string>;

    MARKET(overrides?: CallOverrides): Promise<string>;

    MIN_OUTPUT_AMOUNT(overrides?: CallOverrides): Promise<string>;

    ORDER_TYPE(overrides?: CallOverrides): Promise<string>;

    RECEIVER(overrides?: CallOverrides): Promise<string>;

    SHOULD_UNWRAP_NATIVE_TOKEN(overrides?: CallOverrides): Promise<string>;

    SIZE_DELTA_USD(overrides?: CallOverrides): Promise<string>;

    SWAP_PATH(overrides?: CallOverrides): Promise<string>;

    TRIGGER_PRICE(overrides?: CallOverrides): Promise<string>;

    UI_FEE_RECEIVER(overrides?: CallOverrides): Promise<string>;

    UPDATED_AT_BLOCK(overrides?: CallOverrides): Promise<string>;

    UPDATED_AT_TIME(overrides?: CallOverrides): Promise<string>;

    get(
      dataStore: PromiseOrValue<string>,
      key: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<Order.PropsStructOutput>;
  };

  filters: {};

  estimateGas: {
    ACCEPTABLE_PRICE(overrides?: CallOverrides): Promise<BigNumber>;

    ACCOUNT(overrides?: CallOverrides): Promise<BigNumber>;

    AUTO_CANCEL(overrides?: CallOverrides): Promise<BigNumber>;

    CALLBACK_CONTRACT(overrides?: CallOverrides): Promise<BigNumber>;

    CALLBACK_GAS_LIMIT(overrides?: CallOverrides): Promise<BigNumber>;

    CANCELLATION_RECEIVER(overrides?: CallOverrides): Promise<BigNumber>;

    DECREASE_POSITION_SWAP_TYPE(overrides?: CallOverrides): Promise<BigNumber>;

    EXECUTION_FEE(overrides?: CallOverrides): Promise<BigNumber>;

    INITIAL_COLLATERAL_DELTA_AMOUNT(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    INITIAL_COLLATERAL_TOKEN(overrides?: CallOverrides): Promise<BigNumber>;

    IS_FROZEN(overrides?: CallOverrides): Promise<BigNumber>;

    IS_LONG(overrides?: CallOverrides): Promise<BigNumber>;

    MARKET(overrides?: CallOverrides): Promise<BigNumber>;

    MIN_OUTPUT_AMOUNT(overrides?: CallOverrides): Promise<BigNumber>;

    ORDER_TYPE(overrides?: CallOverrides): Promise<BigNumber>;

    RECEIVER(overrides?: CallOverrides): Promise<BigNumber>;

    SHOULD_UNWRAP_NATIVE_TOKEN(overrides?: CallOverrides): Promise<BigNumber>;

    SIZE_DELTA_USD(overrides?: CallOverrides): Promise<BigNumber>;

    SWAP_PATH(overrides?: CallOverrides): Promise<BigNumber>;

    TRIGGER_PRICE(overrides?: CallOverrides): Promise<BigNumber>;

    UI_FEE_RECEIVER(overrides?: CallOverrides): Promise<BigNumber>;

    UPDATED_AT_BLOCK(overrides?: CallOverrides): Promise<BigNumber>;

    UPDATED_AT_TIME(overrides?: CallOverrides): Promise<BigNumber>;

    get(
      dataStore: PromiseOrValue<string>,
      key: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    ACCEPTABLE_PRICE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ACCOUNT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    AUTO_CANCEL(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    CALLBACK_CONTRACT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    CALLBACK_GAS_LIMIT(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    CANCELLATION_RECEIVER(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    DECREASE_POSITION_SWAP_TYPE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    EXECUTION_FEE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    INITIAL_COLLATERAL_DELTA_AMOUNT(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    INITIAL_COLLATERAL_TOKEN(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    IS_FROZEN(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    IS_LONG(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MARKET(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MIN_OUTPUT_AMOUNT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ORDER_TYPE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    RECEIVER(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    SHOULD_UNWRAP_NATIVE_TOKEN(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    SIZE_DELTA_USD(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    SWAP_PATH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    TRIGGER_PRICE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    UI_FEE_RECEIVER(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    UPDATED_AT_BLOCK(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    UPDATED_AT_TIME(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    get(
      dataStore: PromiseOrValue<string>,
      key: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
