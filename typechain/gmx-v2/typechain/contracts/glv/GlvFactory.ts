/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
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

export interface GlvFactoryInterface extends utils.Interface {
  functions: {
    "GLV_SALT()": FunctionFragment;
    "createGlv(bytes32)": FunctionFragment;
    "dataStore()": FunctionFragment;
    "eventEmitter()": FunctionFragment;
    "roleStore()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "GLV_SALT"
      | "createGlv"
      | "dataStore"
      | "eventEmitter"
      | "roleStore"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "GLV_SALT", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "createGlv",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(functionFragment: "dataStore", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "eventEmitter",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "roleStore", values?: undefined): string;

  decodeFunctionResult(functionFragment: "GLV_SALT", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "createGlv", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "dataStore", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "eventEmitter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "roleStore", data: BytesLike): Result;

  events: {};
}

export interface GlvFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: GlvFactoryInterface;

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
    GLV_SALT(overrides?: CallOverrides): Promise<[string]>;

    createGlv(
      salt: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    dataStore(overrides?: CallOverrides): Promise<[string]>;

    eventEmitter(overrides?: CallOverrides): Promise<[string]>;

    roleStore(overrides?: CallOverrides): Promise<[string]>;
  };

  GLV_SALT(overrides?: CallOverrides): Promise<string>;

  createGlv(
    salt: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  dataStore(overrides?: CallOverrides): Promise<string>;

  eventEmitter(overrides?: CallOverrides): Promise<string>;

  roleStore(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    GLV_SALT(overrides?: CallOverrides): Promise<string>;

    createGlv(
      salt: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    dataStore(overrides?: CallOverrides): Promise<string>;

    eventEmitter(overrides?: CallOverrides): Promise<string>;

    roleStore(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    GLV_SALT(overrides?: CallOverrides): Promise<BigNumber>;

    createGlv(
      salt: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    dataStore(overrides?: CallOverrides): Promise<BigNumber>;

    eventEmitter(overrides?: CallOverrides): Promise<BigNumber>;

    roleStore(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    GLV_SALT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    createGlv(
      salt: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    dataStore(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    eventEmitter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    roleStore(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
