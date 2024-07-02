/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
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

export declare namespace Order {
  export type AddressesStruct = {
    account: PromiseOrValue<string>;
    receiver: PromiseOrValue<string>;
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
    string[]
  ] & {
    account: string;
    receiver: string;
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
  };

  export type FlagsStruct = {
    isLong: PromiseOrValue<boolean>;
    shouldUnwrapNativeToken: PromiseOrValue<boolean>;
    isFrozen: PromiseOrValue<boolean>;
  };

  export type FlagsStructOutput = [boolean, boolean, boolean] & {
    isLong: boolean;
    shouldUnwrapNativeToken: boolean;
    isFrozen: boolean;
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

export declare namespace EventUtils {
  export type AddressKeyValueStruct = {
    key: PromiseOrValue<string>;
    value: PromiseOrValue<string>;
  };

  export type AddressKeyValueStructOutput = [string, string] & {
    key: string;
    value: string;
  };

  export type AddressArrayKeyValueStruct = {
    key: PromiseOrValue<string>;
    value: PromiseOrValue<string>[];
  };

  export type AddressArrayKeyValueStructOutput = [string, string[]] & {
    key: string;
    value: string[];
  };

  export type AddressItemsStruct = {
    items: EventUtils.AddressKeyValueStruct[];
    arrayItems: EventUtils.AddressArrayKeyValueStruct[];
  };

  export type AddressItemsStructOutput = [
    EventUtils.AddressKeyValueStructOutput[],
    EventUtils.AddressArrayKeyValueStructOutput[]
  ] & {
    items: EventUtils.AddressKeyValueStructOutput[];
    arrayItems: EventUtils.AddressArrayKeyValueStructOutput[];
  };

  export type UintKeyValueStruct = {
    key: PromiseOrValue<string>;
    value: PromiseOrValue<BigNumberish>;
  };

  export type UintKeyValueStructOutput = [string, BigNumber] & {
    key: string;
    value: BigNumber;
  };

  export type UintArrayKeyValueStruct = {
    key: PromiseOrValue<string>;
    value: PromiseOrValue<BigNumberish>[];
  };

  export type UintArrayKeyValueStructOutput = [string, BigNumber[]] & {
    key: string;
    value: BigNumber[];
  };

  export type UintItemsStruct = {
    items: EventUtils.UintKeyValueStruct[];
    arrayItems: EventUtils.UintArrayKeyValueStruct[];
  };

  export type UintItemsStructOutput = [
    EventUtils.UintKeyValueStructOutput[],
    EventUtils.UintArrayKeyValueStructOutput[]
  ] & {
    items: EventUtils.UintKeyValueStructOutput[];
    arrayItems: EventUtils.UintArrayKeyValueStructOutput[];
  };

  export type IntKeyValueStruct = {
    key: PromiseOrValue<string>;
    value: PromiseOrValue<BigNumberish>;
  };

  export type IntKeyValueStructOutput = [string, BigNumber] & {
    key: string;
    value: BigNumber;
  };

  export type IntArrayKeyValueStruct = {
    key: PromiseOrValue<string>;
    value: PromiseOrValue<BigNumberish>[];
  };

  export type IntArrayKeyValueStructOutput = [string, BigNumber[]] & {
    key: string;
    value: BigNumber[];
  };

  export type IntItemsStruct = {
    items: EventUtils.IntKeyValueStruct[];
    arrayItems: EventUtils.IntArrayKeyValueStruct[];
  };

  export type IntItemsStructOutput = [
    EventUtils.IntKeyValueStructOutput[],
    EventUtils.IntArrayKeyValueStructOutput[]
  ] & {
    items: EventUtils.IntKeyValueStructOutput[];
    arrayItems: EventUtils.IntArrayKeyValueStructOutput[];
  };

  export type BoolKeyValueStruct = {
    key: PromiseOrValue<string>;
    value: PromiseOrValue<boolean>;
  };

  export type BoolKeyValueStructOutput = [string, boolean] & {
    key: string;
    value: boolean;
  };

  export type BoolArrayKeyValueStruct = {
    key: PromiseOrValue<string>;
    value: PromiseOrValue<boolean>[];
  };

  export type BoolArrayKeyValueStructOutput = [string, boolean[]] & {
    key: string;
    value: boolean[];
  };

  export type BoolItemsStruct = {
    items: EventUtils.BoolKeyValueStruct[];
    arrayItems: EventUtils.BoolArrayKeyValueStruct[];
  };

  export type BoolItemsStructOutput = [
    EventUtils.BoolKeyValueStructOutput[],
    EventUtils.BoolArrayKeyValueStructOutput[]
  ] & {
    items: EventUtils.BoolKeyValueStructOutput[];
    arrayItems: EventUtils.BoolArrayKeyValueStructOutput[];
  };

  export type Bytes32KeyValueStruct = {
    key: PromiseOrValue<string>;
    value: PromiseOrValue<BytesLike>;
  };

  export type Bytes32KeyValueStructOutput = [string, string] & {
    key: string;
    value: string;
  };

  export type Bytes32ArrayKeyValueStruct = {
    key: PromiseOrValue<string>;
    value: PromiseOrValue<BytesLike>[];
  };

  export type Bytes32ArrayKeyValueStructOutput = [string, string[]] & {
    key: string;
    value: string[];
  };

  export type Bytes32ItemsStruct = {
    items: EventUtils.Bytes32KeyValueStruct[];
    arrayItems: EventUtils.Bytes32ArrayKeyValueStruct[];
  };

  export type Bytes32ItemsStructOutput = [
    EventUtils.Bytes32KeyValueStructOutput[],
    EventUtils.Bytes32ArrayKeyValueStructOutput[]
  ] & {
    items: EventUtils.Bytes32KeyValueStructOutput[];
    arrayItems: EventUtils.Bytes32ArrayKeyValueStructOutput[];
  };

  export type BytesKeyValueStruct = {
    key: PromiseOrValue<string>;
    value: PromiseOrValue<BytesLike>;
  };

  export type BytesKeyValueStructOutput = [string, string] & {
    key: string;
    value: string;
  };

  export type BytesArrayKeyValueStruct = {
    key: PromiseOrValue<string>;
    value: PromiseOrValue<BytesLike>[];
  };

  export type BytesArrayKeyValueStructOutput = [string, string[]] & {
    key: string;
    value: string[];
  };

  export type BytesItemsStruct = {
    items: EventUtils.BytesKeyValueStruct[];
    arrayItems: EventUtils.BytesArrayKeyValueStruct[];
  };

  export type BytesItemsStructOutput = [
    EventUtils.BytesKeyValueStructOutput[],
    EventUtils.BytesArrayKeyValueStructOutput[]
  ] & {
    items: EventUtils.BytesKeyValueStructOutput[];
    arrayItems: EventUtils.BytesArrayKeyValueStructOutput[];
  };

  export type StringKeyValueStruct = {
    key: PromiseOrValue<string>;
    value: PromiseOrValue<string>;
  };

  export type StringKeyValueStructOutput = [string, string] & {
    key: string;
    value: string;
  };

  export type StringArrayKeyValueStruct = {
    key: PromiseOrValue<string>;
    value: PromiseOrValue<string>[];
  };

  export type StringArrayKeyValueStructOutput = [string, string[]] & {
    key: string;
    value: string[];
  };

  export type StringItemsStruct = {
    items: EventUtils.StringKeyValueStruct[];
    arrayItems: EventUtils.StringArrayKeyValueStruct[];
  };

  export type StringItemsStructOutput = [
    EventUtils.StringKeyValueStructOutput[],
    EventUtils.StringArrayKeyValueStructOutput[]
  ] & {
    items: EventUtils.StringKeyValueStructOutput[];
    arrayItems: EventUtils.StringArrayKeyValueStructOutput[];
  };

  export type EventLogDataStruct = {
    addressItems: EventUtils.AddressItemsStruct;
    uintItems: EventUtils.UintItemsStruct;
    intItems: EventUtils.IntItemsStruct;
    boolItems: EventUtils.BoolItemsStruct;
    bytes32Items: EventUtils.Bytes32ItemsStruct;
    bytesItems: EventUtils.BytesItemsStruct;
    stringItems: EventUtils.StringItemsStruct;
  };

  export type EventLogDataStructOutput = [
    EventUtils.AddressItemsStructOutput,
    EventUtils.UintItemsStructOutput,
    EventUtils.IntItemsStructOutput,
    EventUtils.BoolItemsStructOutput,
    EventUtils.Bytes32ItemsStructOutput,
    EventUtils.BytesItemsStructOutput,
    EventUtils.StringItemsStructOutput
  ] & {
    addressItems: EventUtils.AddressItemsStructOutput;
    uintItems: EventUtils.UintItemsStructOutput;
    intItems: EventUtils.IntItemsStructOutput;
    boolItems: EventUtils.BoolItemsStructOutput;
    bytes32Items: EventUtils.Bytes32ItemsStructOutput;
    bytesItems: EventUtils.BytesItemsStructOutput;
    stringItems: EventUtils.StringItemsStructOutput;
  };
}

export interface MockCallbackReceiverInterface extends utils.Interface {
  functions: {
    "afterOrderCancellation(bytes32,((address,address,address,address,address,address,address[]),(uint8,uint8,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),(bool,bool,bool)),(((string,address)[],(string,address[])[]),((string,uint256)[],(string,uint256[])[]),((string,int256)[],(string,int256[])[]),((string,bool)[],(string,bool[])[]),((string,bytes32)[],(string,bytes32[])[]),((string,bytes)[],(string,bytes[])[]),((string,string)[],(string,string[])[])))": FunctionFragment;
    "afterOrderExecution(bytes32,((address,address,address,address,address,address,address[]),(uint8,uint8,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),(bool,bool,bool)),(((string,address)[],(string,address[])[]),((string,uint256)[],(string,uint256[])[]),((string,int256)[],(string,int256[])[]),((string,bool)[],(string,bool[])[]),((string,bytes32)[],(string,bytes32[])[]),((string,bytes)[],(string,bytes[])[]),((string,string)[],(string,string[])[])))": FunctionFragment;
    "afterOrderFrozen(bytes32,((address,address,address,address,address,address,address[]),(uint8,uint8,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),(bool,bool,bool)),(((string,address)[],(string,address[])[]),((string,uint256)[],(string,uint256[])[]),((string,int256)[],(string,int256[])[]),((string,bool)[],(string,bool[])[]),((string,bytes32)[],(string,bytes32[])[]),((string,bytes)[],(string,bytes[])[]),((string,string)[],(string,string[])[])))": FunctionFragment;
    "called()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "afterOrderCancellation"
      | "afterOrderExecution"
      | "afterOrderFrozen"
      | "called"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "afterOrderCancellation",
    values: [
      PromiseOrValue<BytesLike>,
      Order.PropsStruct,
      EventUtils.EventLogDataStruct
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "afterOrderExecution",
    values: [
      PromiseOrValue<BytesLike>,
      Order.PropsStruct,
      EventUtils.EventLogDataStruct
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "afterOrderFrozen",
    values: [
      PromiseOrValue<BytesLike>,
      Order.PropsStruct,
      EventUtils.EventLogDataStruct
    ]
  ): string;
  encodeFunctionData(functionFragment: "called", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "afterOrderCancellation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "afterOrderExecution",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "afterOrderFrozen",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "called", data: BytesLike): Result;

  events: {};
}

export interface MockCallbackReceiver extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MockCallbackReceiverInterface;

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
    afterOrderCancellation(
      arg0: PromiseOrValue<BytesLike>,
      arg1: Order.PropsStruct,
      arg2: EventUtils.EventLogDataStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    afterOrderExecution(
      arg0: PromiseOrValue<BytesLike>,
      arg1: Order.PropsStruct,
      arg2: EventUtils.EventLogDataStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    afterOrderFrozen(
      arg0: PromiseOrValue<BytesLike>,
      arg1: Order.PropsStruct,
      arg2: EventUtils.EventLogDataStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    called(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  afterOrderCancellation(
    arg0: PromiseOrValue<BytesLike>,
    arg1: Order.PropsStruct,
    arg2: EventUtils.EventLogDataStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  afterOrderExecution(
    arg0: PromiseOrValue<BytesLike>,
    arg1: Order.PropsStruct,
    arg2: EventUtils.EventLogDataStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  afterOrderFrozen(
    arg0: PromiseOrValue<BytesLike>,
    arg1: Order.PropsStruct,
    arg2: EventUtils.EventLogDataStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  called(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    afterOrderCancellation(
      arg0: PromiseOrValue<BytesLike>,
      arg1: Order.PropsStruct,
      arg2: EventUtils.EventLogDataStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    afterOrderExecution(
      arg0: PromiseOrValue<BytesLike>,
      arg1: Order.PropsStruct,
      arg2: EventUtils.EventLogDataStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    afterOrderFrozen(
      arg0: PromiseOrValue<BytesLike>,
      arg1: Order.PropsStruct,
      arg2: EventUtils.EventLogDataStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    called(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    afterOrderCancellation(
      arg0: PromiseOrValue<BytesLike>,
      arg1: Order.PropsStruct,
      arg2: EventUtils.EventLogDataStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    afterOrderExecution(
      arg0: PromiseOrValue<BytesLike>,
      arg1: Order.PropsStruct,
      arg2: EventUtils.EventLogDataStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    afterOrderFrozen(
      arg0: PromiseOrValue<BytesLike>,
      arg1: Order.PropsStruct,
      arg2: EventUtils.EventLogDataStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    called(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    afterOrderCancellation(
      arg0: PromiseOrValue<BytesLike>,
      arg1: Order.PropsStruct,
      arg2: EventUtils.EventLogDataStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    afterOrderExecution(
      arg0: PromiseOrValue<BytesLike>,
      arg1: Order.PropsStruct,
      arg2: EventUtils.EventLogDataStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    afterOrderFrozen(
      arg0: PromiseOrValue<BytesLike>,
      arg1: Order.PropsStruct,
      arg2: EventUtils.EventLogDataStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    called(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}