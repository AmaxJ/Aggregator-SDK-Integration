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
} from "../../../common";

export interface GasUsageTestInterface extends utils.Interface {
  functions: {
    "getGasUsageForExternalLibraryCall()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "getGasUsageForExternalLibraryCall"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getGasUsageForExternalLibraryCall",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "getGasUsageForExternalLibraryCall",
    data: BytesLike
  ): Result;

  events: {};
}

export interface GasUsageTest extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: GasUsageTestInterface;

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
    getGasUsageForExternalLibraryCall(
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;
  };

  getGasUsageForExternalLibraryCall(
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber]>;

  callStatic: {
    getGasUsageForExternalLibraryCall(
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;
  };

  filters: {};

  estimateGas: {
    getGasUsageForExternalLibraryCall(
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getGasUsageForExternalLibraryCall(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
