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

export declare namespace FeeBatch {
  export type PropsStruct = {
    feeTokens: PromiseOrValue<string>[];
    feeAmounts: PromiseOrValue<BigNumberish>[];
    remainingAmounts: PromiseOrValue<BigNumberish>[];
    createdAt: PromiseOrValue<BigNumberish>;
  };

  export type PropsStructOutput = [
    string[],
    BigNumber[],
    BigNumber[],
    BigNumber
  ] & {
    feeTokens: string[];
    feeAmounts: BigNumber[];
    remainingAmounts: BigNumber[];
    createdAt: BigNumber;
  };
}

export interface FeeBatchStoreUtilsInterface extends utils.Interface {
  functions: {
    "CREATED_AT()": FunctionFragment;
    "FEE_AMOUNTS()": FunctionFragment;
    "FEE_TOKENS()": FunctionFragment;
    "REMAINING_AMOUNTS()": FunctionFragment;
    "get(DataStore,bytes32)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "CREATED_AT"
      | "FEE_AMOUNTS"
      | "FEE_TOKENS"
      | "REMAINING_AMOUNTS"
      | "get"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "CREATED_AT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "FEE_AMOUNTS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "FEE_TOKENS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "REMAINING_AMOUNTS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "get",
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]
  ): string;

  decodeFunctionResult(functionFragment: "CREATED_AT", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "FEE_AMOUNTS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "FEE_TOKENS", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "REMAINING_AMOUNTS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "get", data: BytesLike): Result;

  events: {};
}

export interface FeeBatchStoreUtils extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: FeeBatchStoreUtilsInterface;

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
    CREATED_AT(overrides?: CallOverrides): Promise<[string]>;

    FEE_AMOUNTS(overrides?: CallOverrides): Promise<[string]>;

    FEE_TOKENS(overrides?: CallOverrides): Promise<[string]>;

    REMAINING_AMOUNTS(overrides?: CallOverrides): Promise<[string]>;

    get(
      dataStore: PromiseOrValue<string>,
      key: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[FeeBatch.PropsStructOutput]>;
  };

  CREATED_AT(overrides?: CallOverrides): Promise<string>;

  FEE_AMOUNTS(overrides?: CallOverrides): Promise<string>;

  FEE_TOKENS(overrides?: CallOverrides): Promise<string>;

  REMAINING_AMOUNTS(overrides?: CallOverrides): Promise<string>;

  get(
    dataStore: PromiseOrValue<string>,
    key: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<FeeBatch.PropsStructOutput>;

  callStatic: {
    CREATED_AT(overrides?: CallOverrides): Promise<string>;

    FEE_AMOUNTS(overrides?: CallOverrides): Promise<string>;

    FEE_TOKENS(overrides?: CallOverrides): Promise<string>;

    REMAINING_AMOUNTS(overrides?: CallOverrides): Promise<string>;

    get(
      dataStore: PromiseOrValue<string>,
      key: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<FeeBatch.PropsStructOutput>;
  };

  filters: {};

  estimateGas: {
    CREATED_AT(overrides?: CallOverrides): Promise<BigNumber>;

    FEE_AMOUNTS(overrides?: CallOverrides): Promise<BigNumber>;

    FEE_TOKENS(overrides?: CallOverrides): Promise<BigNumber>;

    REMAINING_AMOUNTS(overrides?: CallOverrides): Promise<BigNumber>;

    get(
      dataStore: PromiseOrValue<string>,
      key: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    CREATED_AT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    FEE_AMOUNTS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    FEE_TOKENS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    REMAINING_AMOUNTS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    get(
      dataStore: PromiseOrValue<string>,
      key: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
