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

export declare namespace Shift {
  export type AddressesStruct = {
    account: PromiseOrValue<string>;
    receiver: PromiseOrValue<string>;
    callbackContract: PromiseOrValue<string>;
    uiFeeReceiver: PromiseOrValue<string>;
    fromMarket: PromiseOrValue<string>;
    toMarket: PromiseOrValue<string>;
  };

  export type AddressesStructOutput = [
    string,
    string,
    string,
    string,
    string,
    string
  ] & {
    account: string;
    receiver: string;
    callbackContract: string;
    uiFeeReceiver: string;
    fromMarket: string;
    toMarket: string;
  };

  export type NumbersStruct = {
    marketTokenAmount: PromiseOrValue<BigNumberish>;
    minMarketTokens: PromiseOrValue<BigNumberish>;
    updatedAtTime: PromiseOrValue<BigNumberish>;
    executionFee: PromiseOrValue<BigNumberish>;
    callbackGasLimit: PromiseOrValue<BigNumberish>;
  };

  export type NumbersStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    marketTokenAmount: BigNumber;
    minMarketTokens: BigNumber;
    updatedAtTime: BigNumber;
    executionFee: BigNumber;
    callbackGasLimit: BigNumber;
  };

  export type PropsStruct = {
    addresses: Shift.AddressesStruct;
    numbers: Shift.NumbersStruct;
  };

  export type PropsStructOutput = [
    Shift.AddressesStructOutput,
    Shift.NumbersStructOutput
  ] & {
    addresses: Shift.AddressesStructOutput;
    numbers: Shift.NumbersStructOutput;
  };
}

export interface ShiftStoreUtilsInterface extends utils.Interface {
  functions: {
    "ACCOUNT()": FunctionFragment;
    "CALLBACK_CONTRACT()": FunctionFragment;
    "CALLBACK_GAS_LIMIT()": FunctionFragment;
    "EXECUTION_FEE()": FunctionFragment;
    "FROM_MARKET()": FunctionFragment;
    "MARKET_TOKEN_AMOUNT()": FunctionFragment;
    "MIN_MARKET_TOKENS()": FunctionFragment;
    "RECEIVER()": FunctionFragment;
    "TO_MARKET()": FunctionFragment;
    "UI_FEE_RECEIVER()": FunctionFragment;
    "UPDATED_AT_TIME()": FunctionFragment;
    "get(DataStore,bytes32)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "ACCOUNT"
      | "CALLBACK_CONTRACT"
      | "CALLBACK_GAS_LIMIT"
      | "EXECUTION_FEE"
      | "FROM_MARKET"
      | "MARKET_TOKEN_AMOUNT"
      | "MIN_MARKET_TOKENS"
      | "RECEIVER"
      | "TO_MARKET"
      | "UI_FEE_RECEIVER"
      | "UPDATED_AT_TIME"
      | "get"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "ACCOUNT", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "CALLBACK_CONTRACT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "CALLBACK_GAS_LIMIT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "EXECUTION_FEE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "FROM_MARKET",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MARKET_TOKEN_AMOUNT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MIN_MARKET_TOKENS",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "RECEIVER", values?: undefined): string;
  encodeFunctionData(functionFragment: "TO_MARKET", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "UI_FEE_RECEIVER",
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

  decodeFunctionResult(functionFragment: "ACCOUNT", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "CALLBACK_CONTRACT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "CALLBACK_GAS_LIMIT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "EXECUTION_FEE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "FROM_MARKET",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MARKET_TOKEN_AMOUNT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MIN_MARKET_TOKENS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "RECEIVER", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "TO_MARKET", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "UI_FEE_RECEIVER",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "UPDATED_AT_TIME",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "get", data: BytesLike): Result;

  events: {};
}

export interface ShiftStoreUtils extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ShiftStoreUtilsInterface;

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

    CALLBACK_CONTRACT(overrides?: CallOverrides): Promise<[string]>;

    CALLBACK_GAS_LIMIT(overrides?: CallOverrides): Promise<[string]>;

    EXECUTION_FEE(overrides?: CallOverrides): Promise<[string]>;

    FROM_MARKET(overrides?: CallOverrides): Promise<[string]>;

    MARKET_TOKEN_AMOUNT(overrides?: CallOverrides): Promise<[string]>;

    MIN_MARKET_TOKENS(overrides?: CallOverrides): Promise<[string]>;

    RECEIVER(overrides?: CallOverrides): Promise<[string]>;

    TO_MARKET(overrides?: CallOverrides): Promise<[string]>;

    UI_FEE_RECEIVER(overrides?: CallOverrides): Promise<[string]>;

    UPDATED_AT_TIME(overrides?: CallOverrides): Promise<[string]>;

    get(
      dataStore: PromiseOrValue<string>,
      key: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[Shift.PropsStructOutput]>;
  };

  ACCOUNT(overrides?: CallOverrides): Promise<string>;

  CALLBACK_CONTRACT(overrides?: CallOverrides): Promise<string>;

  CALLBACK_GAS_LIMIT(overrides?: CallOverrides): Promise<string>;

  EXECUTION_FEE(overrides?: CallOverrides): Promise<string>;

  FROM_MARKET(overrides?: CallOverrides): Promise<string>;

  MARKET_TOKEN_AMOUNT(overrides?: CallOverrides): Promise<string>;

  MIN_MARKET_TOKENS(overrides?: CallOverrides): Promise<string>;

  RECEIVER(overrides?: CallOverrides): Promise<string>;

  TO_MARKET(overrides?: CallOverrides): Promise<string>;

  UI_FEE_RECEIVER(overrides?: CallOverrides): Promise<string>;

  UPDATED_AT_TIME(overrides?: CallOverrides): Promise<string>;

  get(
    dataStore: PromiseOrValue<string>,
    key: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<Shift.PropsStructOutput>;

  callStatic: {
    ACCOUNT(overrides?: CallOverrides): Promise<string>;

    CALLBACK_CONTRACT(overrides?: CallOverrides): Promise<string>;

    CALLBACK_GAS_LIMIT(overrides?: CallOverrides): Promise<string>;

    EXECUTION_FEE(overrides?: CallOverrides): Promise<string>;

    FROM_MARKET(overrides?: CallOverrides): Promise<string>;

    MARKET_TOKEN_AMOUNT(overrides?: CallOverrides): Promise<string>;

    MIN_MARKET_TOKENS(overrides?: CallOverrides): Promise<string>;

    RECEIVER(overrides?: CallOverrides): Promise<string>;

    TO_MARKET(overrides?: CallOverrides): Promise<string>;

    UI_FEE_RECEIVER(overrides?: CallOverrides): Promise<string>;

    UPDATED_AT_TIME(overrides?: CallOverrides): Promise<string>;

    get(
      dataStore: PromiseOrValue<string>,
      key: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<Shift.PropsStructOutput>;
  };

  filters: {};

  estimateGas: {
    ACCOUNT(overrides?: CallOverrides): Promise<BigNumber>;

    CALLBACK_CONTRACT(overrides?: CallOverrides): Promise<BigNumber>;

    CALLBACK_GAS_LIMIT(overrides?: CallOverrides): Promise<BigNumber>;

    EXECUTION_FEE(overrides?: CallOverrides): Promise<BigNumber>;

    FROM_MARKET(overrides?: CallOverrides): Promise<BigNumber>;

    MARKET_TOKEN_AMOUNT(overrides?: CallOverrides): Promise<BigNumber>;

    MIN_MARKET_TOKENS(overrides?: CallOverrides): Promise<BigNumber>;

    RECEIVER(overrides?: CallOverrides): Promise<BigNumber>;

    TO_MARKET(overrides?: CallOverrides): Promise<BigNumber>;

    UI_FEE_RECEIVER(overrides?: CallOverrides): Promise<BigNumber>;

    UPDATED_AT_TIME(overrides?: CallOverrides): Promise<BigNumber>;

    get(
      dataStore: PromiseOrValue<string>,
      key: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    ACCOUNT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    CALLBACK_CONTRACT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    CALLBACK_GAS_LIMIT(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    EXECUTION_FEE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    FROM_MARKET(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MARKET_TOKEN_AMOUNT(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    MIN_MARKET_TOKENS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    RECEIVER(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    TO_MARKET(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    UI_FEE_RECEIVER(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    UPDATED_AT_TIME(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    get(
      dataStore: PromiseOrValue<string>,
      key: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}