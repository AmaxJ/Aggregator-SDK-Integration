/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
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

export interface AdlUtilsInterface extends utils.Interface {
  functions: {
    "validateAdl(DataStore,Oracle,address,bool)": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "validateAdl"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "validateAdl",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<boolean>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "validateAdl",
    data: BytesLike
  ): Result;

  events: {};
}

export interface AdlUtils extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AdlUtilsInterface;

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
    validateAdl(
      dataStore: PromiseOrValue<string>,
      oracle: PromiseOrValue<string>,
      market: PromiseOrValue<string>,
      isLong: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<[void]>;
  };

  validateAdl(
    dataStore: PromiseOrValue<string>,
    oracle: PromiseOrValue<string>,
    market: PromiseOrValue<string>,
    isLong: PromiseOrValue<boolean>,
    overrides?: CallOverrides
  ): Promise<void>;

  callStatic: {
    validateAdl(
      dataStore: PromiseOrValue<string>,
      oracle: PromiseOrValue<string>,
      market: PromiseOrValue<string>,
      isLong: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    validateAdl(
      dataStore: PromiseOrValue<string>,
      oracle: PromiseOrValue<string>,
      market: PromiseOrValue<string>,
      isLong: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    validateAdl(
      dataStore: PromiseOrValue<string>,
      oracle: PromiseOrValue<string>,
      market: PromiseOrValue<string>,
      isLong: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}