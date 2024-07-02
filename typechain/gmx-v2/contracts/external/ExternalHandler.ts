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

export interface ExternalHandlerInterface extends utils.Interface {
  functions: {
    "makeExternalCalls(address[],bytes[],address[],address[])": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "makeExternalCalls"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "makeExternalCalls",
    values: [
      PromiseOrValue<string>[],
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<string>[],
      PromiseOrValue<string>[]
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "makeExternalCalls",
    data: BytesLike
  ): Result;

  events: {};
}

export interface ExternalHandler extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ExternalHandlerInterface;

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
    makeExternalCalls(
      targets: PromiseOrValue<string>[],
      dataList: PromiseOrValue<BytesLike>[],
      refundTokens: PromiseOrValue<string>[],
      refundReceivers: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  makeExternalCalls(
    targets: PromiseOrValue<string>[],
    dataList: PromiseOrValue<BytesLike>[],
    refundTokens: PromiseOrValue<string>[],
    refundReceivers: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    makeExternalCalls(
      targets: PromiseOrValue<string>[],
      dataList: PromiseOrValue<BytesLike>[],
      refundTokens: PromiseOrValue<string>[],
      refundReceivers: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    makeExternalCalls(
      targets: PromiseOrValue<string>[],
      dataList: PromiseOrValue<BytesLike>[],
      refundTokens: PromiseOrValue<string>[],
      refundReceivers: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    makeExternalCalls(
      targets: PromiseOrValue<string>[],
      dataList: PromiseOrValue<BytesLike>[],
      refundTokens: PromiseOrValue<string>[],
      refundReceivers: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
