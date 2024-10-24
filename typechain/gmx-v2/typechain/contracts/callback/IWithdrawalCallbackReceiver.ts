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

export declare namespace Withdrawal {
  export type AddressesStruct = {
    account: PromiseOrValue<string>;
    receiver: PromiseOrValue<string>;
    callbackContract: PromiseOrValue<string>;
    uiFeeReceiver: PromiseOrValue<string>;
    market: PromiseOrValue<string>;
    longTokenSwapPath: PromiseOrValue<string>[];
    shortTokenSwapPath: PromiseOrValue<string>[];
  };

  export type AddressesStructOutput = [
    string,
    string,
    string,
    string,
    string,
    string[],
    string[]
  ] & {
    account: string;
    receiver: string;
    callbackContract: string;
    uiFeeReceiver: string;
    market: string;
    longTokenSwapPath: string[];
    shortTokenSwapPath: string[];
  };

  export type NumbersStruct = {
    marketTokenAmount: PromiseOrValue<BigNumberish>;
    minLongTokenAmount: PromiseOrValue<BigNumberish>;
    minShortTokenAmount: PromiseOrValue<BigNumberish>;
    updatedAtBlock: PromiseOrValue<BigNumberish>;
    updatedAtTime: PromiseOrValue<BigNumberish>;
    executionFee: PromiseOrValue<BigNumberish>;
    callbackGasLimit: PromiseOrValue<BigNumberish>;
  };

  export type NumbersStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    marketTokenAmount: BigNumber;
    minLongTokenAmount: BigNumber;
    minShortTokenAmount: BigNumber;
    updatedAtBlock: BigNumber;
    updatedAtTime: BigNumber;
    executionFee: BigNumber;
    callbackGasLimit: BigNumber;
  };

  export type FlagsStruct = {
    shouldUnwrapNativeToken: PromiseOrValue<boolean>;
  };

  export type FlagsStructOutput = [boolean] & {
    shouldUnwrapNativeToken: boolean;
  };

  export type PropsStruct = {
    addresses: Withdrawal.AddressesStruct;
    numbers: Withdrawal.NumbersStruct;
    flags: Withdrawal.FlagsStruct;
  };

  export type PropsStructOutput = [
    Withdrawal.AddressesStructOutput,
    Withdrawal.NumbersStructOutput,
    Withdrawal.FlagsStructOutput
  ] & {
    addresses: Withdrawal.AddressesStructOutput;
    numbers: Withdrawal.NumbersStructOutput;
    flags: Withdrawal.FlagsStructOutput;
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

export interface IWithdrawalCallbackReceiverInterface extends utils.Interface {
  functions: {
    "afterWithdrawalCancellation(bytes32,((address,address,address,address,address,address[],address[]),(uint256,uint256,uint256,uint256,uint256,uint256,uint256),(bool)),(((string,address)[],(string,address[])[]),((string,uint256)[],(string,uint256[])[]),((string,int256)[],(string,int256[])[]),((string,bool)[],(string,bool[])[]),((string,bytes32)[],(string,bytes32[])[]),((string,bytes)[],(string,bytes[])[]),((string,string)[],(string,string[])[])))": FunctionFragment;
    "afterWithdrawalExecution(bytes32,((address,address,address,address,address,address[],address[]),(uint256,uint256,uint256,uint256,uint256,uint256,uint256),(bool)),(((string,address)[],(string,address[])[]),((string,uint256)[],(string,uint256[])[]),((string,int256)[],(string,int256[])[]),((string,bool)[],(string,bool[])[]),((string,bytes32)[],(string,bytes32[])[]),((string,bytes)[],(string,bytes[])[]),((string,string)[],(string,string[])[])))": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "afterWithdrawalCancellation"
      | "afterWithdrawalExecution"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "afterWithdrawalCancellation",
    values: [
      PromiseOrValue<BytesLike>,
      Withdrawal.PropsStruct,
      EventUtils.EventLogDataStruct
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "afterWithdrawalExecution",
    values: [
      PromiseOrValue<BytesLike>,
      Withdrawal.PropsStruct,
      EventUtils.EventLogDataStruct
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "afterWithdrawalCancellation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "afterWithdrawalExecution",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IWithdrawalCallbackReceiver extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IWithdrawalCallbackReceiverInterface;

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
    afterWithdrawalCancellation(
      key: PromiseOrValue<BytesLike>,
      withdrawal: Withdrawal.PropsStruct,
      eventData: EventUtils.EventLogDataStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    afterWithdrawalExecution(
      key: PromiseOrValue<BytesLike>,
      withdrawal: Withdrawal.PropsStruct,
      eventData: EventUtils.EventLogDataStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  afterWithdrawalCancellation(
    key: PromiseOrValue<BytesLike>,
    withdrawal: Withdrawal.PropsStruct,
    eventData: EventUtils.EventLogDataStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  afterWithdrawalExecution(
    key: PromiseOrValue<BytesLike>,
    withdrawal: Withdrawal.PropsStruct,
    eventData: EventUtils.EventLogDataStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    afterWithdrawalCancellation(
      key: PromiseOrValue<BytesLike>,
      withdrawal: Withdrawal.PropsStruct,
      eventData: EventUtils.EventLogDataStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    afterWithdrawalExecution(
      key: PromiseOrValue<BytesLike>,
      withdrawal: Withdrawal.PropsStruct,
      eventData: EventUtils.EventLogDataStruct,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    afterWithdrawalCancellation(
      key: PromiseOrValue<BytesLike>,
      withdrawal: Withdrawal.PropsStruct,
      eventData: EventUtils.EventLogDataStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    afterWithdrawalExecution(
      key: PromiseOrValue<BytesLike>,
      withdrawal: Withdrawal.PropsStruct,
      eventData: EventUtils.EventLogDataStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    afterWithdrawalCancellation(
      key: PromiseOrValue<BytesLike>,
      withdrawal: Withdrawal.PropsStruct,
      eventData: EventUtils.EventLogDataStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    afterWithdrawalExecution(
      key: PromiseOrValue<BytesLike>,
      withdrawal: Withdrawal.PropsStruct,
      eventData: EventUtils.EventLogDataStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
