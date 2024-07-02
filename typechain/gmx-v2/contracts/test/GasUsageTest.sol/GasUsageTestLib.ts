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

export interface GasUsageTestLibInterface extends utils.Interface {
  functions: {
    "getGasLeft()": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "getGasLeft"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getGasLeft",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "getGasLeft", data: BytesLike): Result;

  events: {};
}

export interface GasUsageTestLib extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: GasUsageTestLibInterface;

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
    getGasLeft(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  getGasLeft(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    getGasLeft(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    getGasLeft(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    getGasLeft(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
