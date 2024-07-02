/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type { BaseContract, Signer, utils } from "ethers";
import type { EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface SwapUtilsInterface extends utils.Interface {
  functions: {};

  events: {
    "SwapReverted(string,bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "SwapReverted"): EventFragment;
}

export interface SwapRevertedEventObject {
  reason: string;
  reasonBytes: string;
}
export type SwapRevertedEvent = TypedEvent<
  [string, string],
  SwapRevertedEventObject
>;

export type SwapRevertedEventFilter = TypedEventFilter<SwapRevertedEvent>;

export interface SwapUtils extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SwapUtilsInterface;

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

  functions: {};

  callStatic: {};

  filters: {
    "SwapReverted(string,bytes)"(
      reason?: null,
      reasonBytes?: null
    ): SwapRevertedEventFilter;
    SwapReverted(reason?: null, reasonBytes?: null): SwapRevertedEventFilter;
  };

  estimateGas: {};

  populateTransaction: {};
}
