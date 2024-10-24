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
  PayableOverrides,
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

export declare namespace IBaseOrderUtils {
  export type CreateOrderParamsAddressesStruct = {
    receiver: PromiseOrValue<string>;
    cancellationReceiver: PromiseOrValue<string>;
    callbackContract: PromiseOrValue<string>;
    uiFeeReceiver: PromiseOrValue<string>;
    market: PromiseOrValue<string>;
    initialCollateralToken: PromiseOrValue<string>;
    swapPath: PromiseOrValue<string>[];
  };

  export type CreateOrderParamsAddressesStructOutput = [
    string,
    string,
    string,
    string,
    string,
    string,
    string[]
  ] & {
    receiver: string;
    cancellationReceiver: string;
    callbackContract: string;
    uiFeeReceiver: string;
    market: string;
    initialCollateralToken: string;
    swapPath: string[];
  };

  export type CreateOrderParamsNumbersStruct = {
    sizeDeltaUsd: PromiseOrValue<BigNumberish>;
    initialCollateralDeltaAmount: PromiseOrValue<BigNumberish>;
    triggerPrice: PromiseOrValue<BigNumberish>;
    acceptablePrice: PromiseOrValue<BigNumberish>;
    executionFee: PromiseOrValue<BigNumberish>;
    callbackGasLimit: PromiseOrValue<BigNumberish>;
    minOutputAmount: PromiseOrValue<BigNumberish>;
  };

  export type CreateOrderParamsNumbersStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    sizeDeltaUsd: BigNumber;
    initialCollateralDeltaAmount: BigNumber;
    triggerPrice: BigNumber;
    acceptablePrice: BigNumber;
    executionFee: BigNumber;
    callbackGasLimit: BigNumber;
    minOutputAmount: BigNumber;
  };

  export type CreateOrderParamsStruct = {
    addresses: IBaseOrderUtils.CreateOrderParamsAddressesStruct;
    numbers: IBaseOrderUtils.CreateOrderParamsNumbersStruct;
    orderType: PromiseOrValue<BigNumberish>;
    decreasePositionSwapType: PromiseOrValue<BigNumberish>;
    isLong: PromiseOrValue<boolean>;
    shouldUnwrapNativeToken: PromiseOrValue<boolean>;
    autoCancel: PromiseOrValue<boolean>;
    referralCode: PromiseOrValue<BytesLike>;
  };

  export type CreateOrderParamsStructOutput = [
    IBaseOrderUtils.CreateOrderParamsAddressesStructOutput,
    IBaseOrderUtils.CreateOrderParamsNumbersStructOutput,
    number,
    number,
    boolean,
    boolean,
    boolean,
    string
  ] & {
    addresses: IBaseOrderUtils.CreateOrderParamsAddressesStructOutput;
    numbers: IBaseOrderUtils.CreateOrderParamsNumbersStructOutput;
    orderType: number;
    decreasePositionSwapType: number;
    isLong: boolean;
    shouldUnwrapNativeToken: boolean;
    autoCancel: boolean;
    referralCode: string;
  };
}

export interface SubaccountRouterInterface extends utils.Interface {
  functions: {
    "addSubaccount(address)": FunctionFragment;
    "cancelOrder(bytes32)": FunctionFragment;
    "createOrder(address,((address,address,address,address,address,address,address[]),(uint256,uint256,uint256,uint256,uint256,uint256,uint256),uint8,uint8,bool,bool,bool,bytes32))": FunctionFragment;
    "dataStore()": FunctionFragment;
    "eventEmitter()": FunctionFragment;
    "multicall(bytes[])": FunctionFragment;
    "orderHandler()": FunctionFragment;
    "orderVault()": FunctionFragment;
    "removeSubaccount(address)": FunctionFragment;
    "roleStore()": FunctionFragment;
    "router()": FunctionFragment;
    "sendNativeToken(address,uint256)": FunctionFragment;
    "sendTokens(address,address,uint256)": FunctionFragment;
    "sendWnt(address,uint256)": FunctionFragment;
    "setMaxAllowedSubaccountActionCount(address,bytes32,uint256)": FunctionFragment;
    "setSubaccountAutoTopUpAmount(address,uint256)": FunctionFragment;
    "updateOrder(bytes32,uint256,uint256,uint256,uint256,bool)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addSubaccount"
      | "cancelOrder"
      | "createOrder"
      | "dataStore"
      | "eventEmitter"
      | "multicall"
      | "orderHandler"
      | "orderVault"
      | "removeSubaccount"
      | "roleStore"
      | "router"
      | "sendNativeToken"
      | "sendTokens"
      | "sendWnt"
      | "setMaxAllowedSubaccountActionCount"
      | "setSubaccountAutoTopUpAmount"
      | "updateOrder"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addSubaccount",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "cancelOrder",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "createOrder",
    values: [PromiseOrValue<string>, IBaseOrderUtils.CreateOrderParamsStruct]
  ): string;
  encodeFunctionData(functionFragment: "dataStore", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "eventEmitter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "multicall",
    values: [PromiseOrValue<BytesLike>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "orderHandler",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "orderVault",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "removeSubaccount",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "roleStore", values?: undefined): string;
  encodeFunctionData(functionFragment: "router", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "sendNativeToken",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "sendTokens",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "sendWnt",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setMaxAllowedSubaccountActionCount",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setSubaccountAutoTopUpAmount",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateOrder",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<boolean>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "addSubaccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cancelOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "dataStore", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "eventEmitter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "multicall", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "orderHandler",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "orderVault", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeSubaccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "roleStore", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "router", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "sendNativeToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "sendTokens", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "sendWnt", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setMaxAllowedSubaccountActionCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setSubaccountAutoTopUpAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateOrder",
    data: BytesLike
  ): Result;

  events: {};
}

export interface SubaccountRouter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SubaccountRouterInterface;

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
    addSubaccount(
      subaccount: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    cancelOrder(
      key: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    createOrder(
      account: PromiseOrValue<string>,
      params: IBaseOrderUtils.CreateOrderParamsStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    dataStore(overrides?: CallOverrides): Promise<[string]>;

    eventEmitter(overrides?: CallOverrides): Promise<[string]>;

    multicall(
      data: PromiseOrValue<BytesLike>[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    orderHandler(overrides?: CallOverrides): Promise<[string]>;

    orderVault(overrides?: CallOverrides): Promise<[string]>;

    removeSubaccount(
      subaccount: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    roleStore(overrides?: CallOverrides): Promise<[string]>;

    router(overrides?: CallOverrides): Promise<[string]>;

    sendNativeToken(
      receiver: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    sendTokens(
      token: PromiseOrValue<string>,
      receiver: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    sendWnt(
      receiver: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setMaxAllowedSubaccountActionCount(
      subaccount: PromiseOrValue<string>,
      actionType: PromiseOrValue<BytesLike>,
      maxAllowedCount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setSubaccountAutoTopUpAmount(
      subaccount: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateOrder(
      key: PromiseOrValue<BytesLike>,
      sizeDeltaUsd: PromiseOrValue<BigNumberish>,
      acceptablePrice: PromiseOrValue<BigNumberish>,
      triggerPrice: PromiseOrValue<BigNumberish>,
      minOutputAmount: PromiseOrValue<BigNumberish>,
      autoCancel: PromiseOrValue<boolean>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  addSubaccount(
    subaccount: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  cancelOrder(
    key: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  createOrder(
    account: PromiseOrValue<string>,
    params: IBaseOrderUtils.CreateOrderParamsStruct,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  dataStore(overrides?: CallOverrides): Promise<string>;

  eventEmitter(overrides?: CallOverrides): Promise<string>;

  multicall(
    data: PromiseOrValue<BytesLike>[],
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  orderHandler(overrides?: CallOverrides): Promise<string>;

  orderVault(overrides?: CallOverrides): Promise<string>;

  removeSubaccount(
    subaccount: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  roleStore(overrides?: CallOverrides): Promise<string>;

  router(overrides?: CallOverrides): Promise<string>;

  sendNativeToken(
    receiver: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  sendTokens(
    token: PromiseOrValue<string>,
    receiver: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  sendWnt(
    receiver: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setMaxAllowedSubaccountActionCount(
    subaccount: PromiseOrValue<string>,
    actionType: PromiseOrValue<BytesLike>,
    maxAllowedCount: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setSubaccountAutoTopUpAmount(
    subaccount: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateOrder(
    key: PromiseOrValue<BytesLike>,
    sizeDeltaUsd: PromiseOrValue<BigNumberish>,
    acceptablePrice: PromiseOrValue<BigNumberish>,
    triggerPrice: PromiseOrValue<BigNumberish>,
    minOutputAmount: PromiseOrValue<BigNumberish>,
    autoCancel: PromiseOrValue<boolean>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addSubaccount(
      subaccount: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    cancelOrder(
      key: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    createOrder(
      account: PromiseOrValue<string>,
      params: IBaseOrderUtils.CreateOrderParamsStruct,
      overrides?: CallOverrides
    ): Promise<string>;

    dataStore(overrides?: CallOverrides): Promise<string>;

    eventEmitter(overrides?: CallOverrides): Promise<string>;

    multicall(
      data: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<string[]>;

    orderHandler(overrides?: CallOverrides): Promise<string>;

    orderVault(overrides?: CallOverrides): Promise<string>;

    removeSubaccount(
      subaccount: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    roleStore(overrides?: CallOverrides): Promise<string>;

    router(overrides?: CallOverrides): Promise<string>;

    sendNativeToken(
      receiver: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    sendTokens(
      token: PromiseOrValue<string>,
      receiver: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    sendWnt(
      receiver: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setMaxAllowedSubaccountActionCount(
      subaccount: PromiseOrValue<string>,
      actionType: PromiseOrValue<BytesLike>,
      maxAllowedCount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setSubaccountAutoTopUpAmount(
      subaccount: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateOrder(
      key: PromiseOrValue<BytesLike>,
      sizeDeltaUsd: PromiseOrValue<BigNumberish>,
      acceptablePrice: PromiseOrValue<BigNumberish>,
      triggerPrice: PromiseOrValue<BigNumberish>,
      minOutputAmount: PromiseOrValue<BigNumberish>,
      autoCancel: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    addSubaccount(
      subaccount: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    cancelOrder(
      key: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    createOrder(
      account: PromiseOrValue<string>,
      params: IBaseOrderUtils.CreateOrderParamsStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    dataStore(overrides?: CallOverrides): Promise<BigNumber>;

    eventEmitter(overrides?: CallOverrides): Promise<BigNumber>;

    multicall(
      data: PromiseOrValue<BytesLike>[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    orderHandler(overrides?: CallOverrides): Promise<BigNumber>;

    orderVault(overrides?: CallOverrides): Promise<BigNumber>;

    removeSubaccount(
      subaccount: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    roleStore(overrides?: CallOverrides): Promise<BigNumber>;

    router(overrides?: CallOverrides): Promise<BigNumber>;

    sendNativeToken(
      receiver: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    sendTokens(
      token: PromiseOrValue<string>,
      receiver: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    sendWnt(
      receiver: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setMaxAllowedSubaccountActionCount(
      subaccount: PromiseOrValue<string>,
      actionType: PromiseOrValue<BytesLike>,
      maxAllowedCount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setSubaccountAutoTopUpAmount(
      subaccount: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateOrder(
      key: PromiseOrValue<BytesLike>,
      sizeDeltaUsd: PromiseOrValue<BigNumberish>,
      acceptablePrice: PromiseOrValue<BigNumberish>,
      triggerPrice: PromiseOrValue<BigNumberish>,
      minOutputAmount: PromiseOrValue<BigNumberish>,
      autoCancel: PromiseOrValue<boolean>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addSubaccount(
      subaccount: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    cancelOrder(
      key: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    createOrder(
      account: PromiseOrValue<string>,
      params: IBaseOrderUtils.CreateOrderParamsStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    dataStore(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    eventEmitter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    multicall(
      data: PromiseOrValue<BytesLike>[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    orderHandler(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    orderVault(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeSubaccount(
      subaccount: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    roleStore(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    router(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    sendNativeToken(
      receiver: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    sendTokens(
      token: PromiseOrValue<string>,
      receiver: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    sendWnt(
      receiver: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setMaxAllowedSubaccountActionCount(
      subaccount: PromiseOrValue<string>,
      actionType: PromiseOrValue<BytesLike>,
      maxAllowedCount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setSubaccountAutoTopUpAmount(
      subaccount: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateOrder(
      key: PromiseOrValue<BytesLike>,
      sizeDeltaUsd: PromiseOrValue<BigNumberish>,
      acceptablePrice: PromiseOrValue<BigNumberish>,
      triggerPrice: PromiseOrValue<BigNumberish>,
      minOutputAmount: PromiseOrValue<BigNumberish>,
      autoCancel: PromiseOrValue<boolean>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
