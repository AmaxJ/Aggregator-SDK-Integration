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

export declare namespace Position {
  export type AddressesStruct = {
    account: PromiseOrValue<string>;
    market: PromiseOrValue<string>;
    collateralToken: PromiseOrValue<string>;
  };

  export type AddressesStructOutput = [string, string, string] & {
    account: string;
    market: string;
    collateralToken: string;
  };

  export type NumbersStruct = {
    sizeInUsd: PromiseOrValue<BigNumberish>;
    sizeInTokens: PromiseOrValue<BigNumberish>;
    collateralAmount: PromiseOrValue<BigNumberish>;
    borrowingFactor: PromiseOrValue<BigNumberish>;
    fundingFeeAmountPerSize: PromiseOrValue<BigNumberish>;
    longTokenClaimableFundingAmountPerSize: PromiseOrValue<BigNumberish>;
    shortTokenClaimableFundingAmountPerSize: PromiseOrValue<BigNumberish>;
    increasedAtBlock: PromiseOrValue<BigNumberish>;
    decreasedAtBlock: PromiseOrValue<BigNumberish>;
    increasedAtTime: PromiseOrValue<BigNumberish>;
    decreasedAtTime: PromiseOrValue<BigNumberish>;
  };

  export type NumbersStructOutput = [
    BigNumber,
    BigNumber,
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
    sizeInUsd: BigNumber;
    sizeInTokens: BigNumber;
    collateralAmount: BigNumber;
    borrowingFactor: BigNumber;
    fundingFeeAmountPerSize: BigNumber;
    longTokenClaimableFundingAmountPerSize: BigNumber;
    shortTokenClaimableFundingAmountPerSize: BigNumber;
    increasedAtBlock: BigNumber;
    decreasedAtBlock: BigNumber;
    increasedAtTime: BigNumber;
    decreasedAtTime: BigNumber;
  };

  export type FlagsStruct = { isLong: PromiseOrValue<boolean> };

  export type FlagsStructOutput = [boolean] & { isLong: boolean };

  export type PropsStruct = {
    addresses: Position.AddressesStruct;
    numbers: Position.NumbersStruct;
    flags: Position.FlagsStruct;
  };

  export type PropsStructOutput = [
    Position.AddressesStructOutput,
    Position.NumbersStructOutput,
    Position.FlagsStructOutput
  ] & {
    addresses: Position.AddressesStructOutput;
    numbers: Position.NumbersStructOutput;
    flags: Position.FlagsStructOutput;
  };
}

export interface PositionStoreUtilsInterface extends utils.Interface {
  functions: {
    "ACCOUNT()": FunctionFragment;
    "BORROWING_FACTOR()": FunctionFragment;
    "COLLATERAL_AMOUNT()": FunctionFragment;
    "COLLATERAL_TOKEN()": FunctionFragment;
    "DECREASED_AT_BLOCK()": FunctionFragment;
    "DECREASED_AT_TIME()": FunctionFragment;
    "FUNDING_FEE_AMOUNT_PER_SIZE()": FunctionFragment;
    "INCREASED_AT_BLOCK()": FunctionFragment;
    "INCREASED_AT_TIME()": FunctionFragment;
    "IS_LONG()": FunctionFragment;
    "LONG_TOKEN_CLAIMABLE_FUNDING_AMOUNT_PER_SIZE()": FunctionFragment;
    "MARKET()": FunctionFragment;
    "SHORT_TOKEN_CLAIMABLE_FUNDING_AMOUNT_PER_SIZE()": FunctionFragment;
    "SIZE_IN_TOKENS()": FunctionFragment;
    "SIZE_IN_USD()": FunctionFragment;
    "get(DataStore,bytes32)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "ACCOUNT"
      | "BORROWING_FACTOR"
      | "COLLATERAL_AMOUNT"
      | "COLLATERAL_TOKEN"
      | "DECREASED_AT_BLOCK"
      | "DECREASED_AT_TIME"
      | "FUNDING_FEE_AMOUNT_PER_SIZE"
      | "INCREASED_AT_BLOCK"
      | "INCREASED_AT_TIME"
      | "IS_LONG"
      | "LONG_TOKEN_CLAIMABLE_FUNDING_AMOUNT_PER_SIZE"
      | "MARKET"
      | "SHORT_TOKEN_CLAIMABLE_FUNDING_AMOUNT_PER_SIZE"
      | "SIZE_IN_TOKENS"
      | "SIZE_IN_USD"
      | "get"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "ACCOUNT", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "BORROWING_FACTOR",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "COLLATERAL_AMOUNT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "COLLATERAL_TOKEN",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "DECREASED_AT_BLOCK",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "DECREASED_AT_TIME",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "FUNDING_FEE_AMOUNT_PER_SIZE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "INCREASED_AT_BLOCK",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "INCREASED_AT_TIME",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "IS_LONG", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "LONG_TOKEN_CLAIMABLE_FUNDING_AMOUNT_PER_SIZE",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "MARKET", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "SHORT_TOKEN_CLAIMABLE_FUNDING_AMOUNT_PER_SIZE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "SIZE_IN_TOKENS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "SIZE_IN_USD",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "get",
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]
  ): string;

  decodeFunctionResult(functionFragment: "ACCOUNT", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "BORROWING_FACTOR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "COLLATERAL_AMOUNT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "COLLATERAL_TOKEN",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "DECREASED_AT_BLOCK",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "DECREASED_AT_TIME",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "FUNDING_FEE_AMOUNT_PER_SIZE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "INCREASED_AT_BLOCK",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "INCREASED_AT_TIME",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "IS_LONG", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "LONG_TOKEN_CLAIMABLE_FUNDING_AMOUNT_PER_SIZE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "MARKET", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "SHORT_TOKEN_CLAIMABLE_FUNDING_AMOUNT_PER_SIZE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "SIZE_IN_TOKENS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "SIZE_IN_USD",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "get", data: BytesLike): Result;

  events: {};
}

export interface PositionStoreUtils extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PositionStoreUtilsInterface;

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
    ACCOUNT(overrides?: CallOverrides): Promise<[string]>;

    BORROWING_FACTOR(overrides?: CallOverrides): Promise<[string]>;

    COLLATERAL_AMOUNT(overrides?: CallOverrides): Promise<[string]>;

    COLLATERAL_TOKEN(overrides?: CallOverrides): Promise<[string]>;

    DECREASED_AT_BLOCK(overrides?: CallOverrides): Promise<[string]>;

    DECREASED_AT_TIME(overrides?: CallOverrides): Promise<[string]>;

    FUNDING_FEE_AMOUNT_PER_SIZE(overrides?: CallOverrides): Promise<[string]>;

    INCREASED_AT_BLOCK(overrides?: CallOverrides): Promise<[string]>;

    INCREASED_AT_TIME(overrides?: CallOverrides): Promise<[string]>;

    IS_LONG(overrides?: CallOverrides): Promise<[string]>;

    LONG_TOKEN_CLAIMABLE_FUNDING_AMOUNT_PER_SIZE(
      overrides?: CallOverrides
    ): Promise<[string]>;

    MARKET(overrides?: CallOverrides): Promise<[string]>;

    SHORT_TOKEN_CLAIMABLE_FUNDING_AMOUNT_PER_SIZE(
      overrides?: CallOverrides
    ): Promise<[string]>;

    SIZE_IN_TOKENS(overrides?: CallOverrides): Promise<[string]>;

    SIZE_IN_USD(overrides?: CallOverrides): Promise<[string]>;

    get(
      dataStore: PromiseOrValue<string>,
      key: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[Position.PropsStructOutput]>;
  };

  ACCOUNT(overrides?: CallOverrides): Promise<string>;

  BORROWING_FACTOR(overrides?: CallOverrides): Promise<string>;

  COLLATERAL_AMOUNT(overrides?: CallOverrides): Promise<string>;

  COLLATERAL_TOKEN(overrides?: CallOverrides): Promise<string>;

  DECREASED_AT_BLOCK(overrides?: CallOverrides): Promise<string>;

  DECREASED_AT_TIME(overrides?: CallOverrides): Promise<string>;

  FUNDING_FEE_AMOUNT_PER_SIZE(overrides?: CallOverrides): Promise<string>;

  INCREASED_AT_BLOCK(overrides?: CallOverrides): Promise<string>;

  INCREASED_AT_TIME(overrides?: CallOverrides): Promise<string>;

  IS_LONG(overrides?: CallOverrides): Promise<string>;

  LONG_TOKEN_CLAIMABLE_FUNDING_AMOUNT_PER_SIZE(
    overrides?: CallOverrides
  ): Promise<string>;

  MARKET(overrides?: CallOverrides): Promise<string>;

  SHORT_TOKEN_CLAIMABLE_FUNDING_AMOUNT_PER_SIZE(
    overrides?: CallOverrides
  ): Promise<string>;

  SIZE_IN_TOKENS(overrides?: CallOverrides): Promise<string>;

  SIZE_IN_USD(overrides?: CallOverrides): Promise<string>;

  get(
    dataStore: PromiseOrValue<string>,
    key: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<Position.PropsStructOutput>;

  callStatic: {
    ACCOUNT(overrides?: CallOverrides): Promise<string>;

    BORROWING_FACTOR(overrides?: CallOverrides): Promise<string>;

    COLLATERAL_AMOUNT(overrides?: CallOverrides): Promise<string>;

    COLLATERAL_TOKEN(overrides?: CallOverrides): Promise<string>;

    DECREASED_AT_BLOCK(overrides?: CallOverrides): Promise<string>;

    DECREASED_AT_TIME(overrides?: CallOverrides): Promise<string>;

    FUNDING_FEE_AMOUNT_PER_SIZE(overrides?: CallOverrides): Promise<string>;

    INCREASED_AT_BLOCK(overrides?: CallOverrides): Promise<string>;

    INCREASED_AT_TIME(overrides?: CallOverrides): Promise<string>;

    IS_LONG(overrides?: CallOverrides): Promise<string>;

    LONG_TOKEN_CLAIMABLE_FUNDING_AMOUNT_PER_SIZE(
      overrides?: CallOverrides
    ): Promise<string>;

    MARKET(overrides?: CallOverrides): Promise<string>;

    SHORT_TOKEN_CLAIMABLE_FUNDING_AMOUNT_PER_SIZE(
      overrides?: CallOverrides
    ): Promise<string>;

    SIZE_IN_TOKENS(overrides?: CallOverrides): Promise<string>;

    SIZE_IN_USD(overrides?: CallOverrides): Promise<string>;

    get(
      dataStore: PromiseOrValue<string>,
      key: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<Position.PropsStructOutput>;
  };

  filters: {};

  estimateGas: {
    ACCOUNT(overrides?: CallOverrides): Promise<BigNumber>;

    BORROWING_FACTOR(overrides?: CallOverrides): Promise<BigNumber>;

    COLLATERAL_AMOUNT(overrides?: CallOverrides): Promise<BigNumber>;

    COLLATERAL_TOKEN(overrides?: CallOverrides): Promise<BigNumber>;

    DECREASED_AT_BLOCK(overrides?: CallOverrides): Promise<BigNumber>;

    DECREASED_AT_TIME(overrides?: CallOverrides): Promise<BigNumber>;

    FUNDING_FEE_AMOUNT_PER_SIZE(overrides?: CallOverrides): Promise<BigNumber>;

    INCREASED_AT_BLOCK(overrides?: CallOverrides): Promise<BigNumber>;

    INCREASED_AT_TIME(overrides?: CallOverrides): Promise<BigNumber>;

    IS_LONG(overrides?: CallOverrides): Promise<BigNumber>;

    LONG_TOKEN_CLAIMABLE_FUNDING_AMOUNT_PER_SIZE(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    MARKET(overrides?: CallOverrides): Promise<BigNumber>;

    SHORT_TOKEN_CLAIMABLE_FUNDING_AMOUNT_PER_SIZE(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    SIZE_IN_TOKENS(overrides?: CallOverrides): Promise<BigNumber>;

    SIZE_IN_USD(overrides?: CallOverrides): Promise<BigNumber>;

    get(
      dataStore: PromiseOrValue<string>,
      key: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    ACCOUNT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    BORROWING_FACTOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    COLLATERAL_AMOUNT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    COLLATERAL_TOKEN(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    DECREASED_AT_BLOCK(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    DECREASED_AT_TIME(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    FUNDING_FEE_AMOUNT_PER_SIZE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    INCREASED_AT_BLOCK(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    INCREASED_AT_TIME(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    IS_LONG(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    LONG_TOKEN_CLAIMABLE_FUNDING_AMOUNT_PER_SIZE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    MARKET(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    SHORT_TOKEN_CLAIMABLE_FUNDING_AMOUNT_PER_SIZE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    SIZE_IN_TOKENS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    SIZE_IN_USD(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    get(
      dataStore: PromiseOrValue<string>,
      key: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
