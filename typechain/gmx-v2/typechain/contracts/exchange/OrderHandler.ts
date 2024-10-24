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
    cancellationReceiver: PromiseOrValue<string>;
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
    string,
    string[]
  ] & {
    account: string;
    receiver: string;
    cancellationReceiver: string;
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
    updatedAtTime: PromiseOrValue<BigNumberish>;
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
    updatedAtTime: BigNumber;
  };

  export type FlagsStruct = {
    isLong: PromiseOrValue<boolean>;
    shouldUnwrapNativeToken: PromiseOrValue<boolean>;
    isFrozen: PromiseOrValue<boolean>;
    autoCancel: PromiseOrValue<boolean>;
  };

  export type FlagsStructOutput = [boolean, boolean, boolean, boolean] & {
    isLong: boolean;
    shouldUnwrapNativeToken: boolean;
    isFrozen: boolean;
    autoCancel: boolean;
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

export declare namespace OracleUtils {
  export type SetPricesParamsStruct = {
    tokens: PromiseOrValue<string>[];
    providers: PromiseOrValue<string>[];
    data: PromiseOrValue<BytesLike>[];
  };

  export type SetPricesParamsStructOutput = [string[], string[], string[]] & {
    tokens: string[];
    providers: string[];
    data: string[];
  };

  export type SimulatePricesParamsStruct = {
    primaryTokens: PromiseOrValue<string>[];
    primaryPrices: Price.PropsStruct[];
    minTimestamp: PromiseOrValue<BigNumberish>;
    maxTimestamp: PromiseOrValue<BigNumberish>;
  };

  export type SimulatePricesParamsStructOutput = [
    string[],
    Price.PropsStructOutput[],
    BigNumber,
    BigNumber
  ] & {
    primaryTokens: string[];
    primaryPrices: Price.PropsStructOutput[];
    minTimestamp: BigNumber;
    maxTimestamp: BigNumber;
  };
}

export declare namespace Price {
  export type PropsStruct = {
    min: PromiseOrValue<BigNumberish>;
    max: PromiseOrValue<BigNumberish>;
  };

  export type PropsStructOutput = [BigNumber, BigNumber] & {
    min: BigNumber;
    max: BigNumber;
  };
}

export interface OrderHandlerInterface extends utils.Interface {
  functions: {
    "_executeOrder(bytes32,((address,address,address,address,address,address,address,address[]),(uint8,uint8,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),(bool,bool,bool,bool)),address)": FunctionFragment;
    "cancelOrder(bytes32)": FunctionFragment;
    "createOrder(address,((address,address,address,address,address,address,address[]),(uint256,uint256,uint256,uint256,uint256,uint256,uint256),uint8,uint8,bool,bool,bool,bytes32))": FunctionFragment;
    "dataStore()": FunctionFragment;
    "eventEmitter()": FunctionFragment;
    "executeOrder(bytes32,(address[],address[],bytes[]))": FunctionFragment;
    "oracle()": FunctionFragment;
    "orderVault()": FunctionFragment;
    "referralStorage()": FunctionFragment;
    "roleStore()": FunctionFragment;
    "simulateExecuteOrder(bytes32,(address[],(uint256,uint256)[],uint256,uint256))": FunctionFragment;
    "swapHandler()": FunctionFragment;
    "updateOrder(bytes32,uint256,uint256,uint256,uint256,bool,((address,address,address,address,address,address,address,address[]),(uint8,uint8,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),(bool,bool,bool,bool)))": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "_executeOrder"
      | "cancelOrder"
      | "createOrder"
      | "dataStore"
      | "eventEmitter"
      | "executeOrder"
      | "oracle"
      | "orderVault"
      | "referralStorage"
      | "roleStore"
      | "simulateExecuteOrder"
      | "swapHandler"
      | "updateOrder"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "_executeOrder",
    values: [
      PromiseOrValue<BytesLike>,
      Order.PropsStruct,
      PromiseOrValue<string>
    ]
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
    functionFragment: "executeOrder",
    values: [PromiseOrValue<BytesLike>, OracleUtils.SetPricesParamsStruct]
  ): string;
  encodeFunctionData(functionFragment: "oracle", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "orderVault",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "referralStorage",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "roleStore", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "simulateExecuteOrder",
    values: [PromiseOrValue<BytesLike>, OracleUtils.SimulatePricesParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "swapHandler",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "updateOrder",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<boolean>,
      Order.PropsStruct
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "_executeOrder",
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
  decodeFunctionResult(
    functionFragment: "executeOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "oracle", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "orderVault", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "referralStorage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "roleStore", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "simulateExecuteOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapHandler",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateOrder",
    data: BytesLike
  ): Result;

  events: {};
}

export interface OrderHandler extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: OrderHandlerInterface;

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
    _executeOrder(
      key: PromiseOrValue<BytesLike>,
      order: Order.PropsStruct,
      keeper: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    cancelOrder(
      key: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    createOrder(
      account: PromiseOrValue<string>,
      params: IBaseOrderUtils.CreateOrderParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    dataStore(overrides?: CallOverrides): Promise<[string]>;

    eventEmitter(overrides?: CallOverrides): Promise<[string]>;

    executeOrder(
      key: PromiseOrValue<BytesLike>,
      oracleParams: OracleUtils.SetPricesParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    oracle(overrides?: CallOverrides): Promise<[string]>;

    orderVault(overrides?: CallOverrides): Promise<[string]>;

    referralStorage(overrides?: CallOverrides): Promise<[string]>;

    roleStore(overrides?: CallOverrides): Promise<[string]>;

    simulateExecuteOrder(
      key: PromiseOrValue<BytesLike>,
      params: OracleUtils.SimulatePricesParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    swapHandler(overrides?: CallOverrides): Promise<[string]>;

    updateOrder(
      key: PromiseOrValue<BytesLike>,
      sizeDeltaUsd: PromiseOrValue<BigNumberish>,
      acceptablePrice: PromiseOrValue<BigNumberish>,
      triggerPrice: PromiseOrValue<BigNumberish>,
      minOutputAmount: PromiseOrValue<BigNumberish>,
      autoCancel: PromiseOrValue<boolean>,
      order: Order.PropsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  _executeOrder(
    key: PromiseOrValue<BytesLike>,
    order: Order.PropsStruct,
    keeper: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  cancelOrder(
    key: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  createOrder(
    account: PromiseOrValue<string>,
    params: IBaseOrderUtils.CreateOrderParamsStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  dataStore(overrides?: CallOverrides): Promise<string>;

  eventEmitter(overrides?: CallOverrides): Promise<string>;

  executeOrder(
    key: PromiseOrValue<BytesLike>,
    oracleParams: OracleUtils.SetPricesParamsStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  oracle(overrides?: CallOverrides): Promise<string>;

  orderVault(overrides?: CallOverrides): Promise<string>;

  referralStorage(overrides?: CallOverrides): Promise<string>;

  roleStore(overrides?: CallOverrides): Promise<string>;

  simulateExecuteOrder(
    key: PromiseOrValue<BytesLike>,
    params: OracleUtils.SimulatePricesParamsStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  swapHandler(overrides?: CallOverrides): Promise<string>;

  updateOrder(
    key: PromiseOrValue<BytesLike>,
    sizeDeltaUsd: PromiseOrValue<BigNumberish>,
    acceptablePrice: PromiseOrValue<BigNumberish>,
    triggerPrice: PromiseOrValue<BigNumberish>,
    minOutputAmount: PromiseOrValue<BigNumberish>,
    autoCancel: PromiseOrValue<boolean>,
    order: Order.PropsStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    _executeOrder(
      key: PromiseOrValue<BytesLike>,
      order: Order.PropsStruct,
      keeper: PromiseOrValue<string>,
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

    executeOrder(
      key: PromiseOrValue<BytesLike>,
      oracleParams: OracleUtils.SetPricesParamsStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    oracle(overrides?: CallOverrides): Promise<string>;

    orderVault(overrides?: CallOverrides): Promise<string>;

    referralStorage(overrides?: CallOverrides): Promise<string>;

    roleStore(overrides?: CallOverrides): Promise<string>;

    simulateExecuteOrder(
      key: PromiseOrValue<BytesLike>,
      params: OracleUtils.SimulatePricesParamsStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    swapHandler(overrides?: CallOverrides): Promise<string>;

    updateOrder(
      key: PromiseOrValue<BytesLike>,
      sizeDeltaUsd: PromiseOrValue<BigNumberish>,
      acceptablePrice: PromiseOrValue<BigNumberish>,
      triggerPrice: PromiseOrValue<BigNumberish>,
      minOutputAmount: PromiseOrValue<BigNumberish>,
      autoCancel: PromiseOrValue<boolean>,
      order: Order.PropsStruct,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    _executeOrder(
      key: PromiseOrValue<BytesLike>,
      order: Order.PropsStruct,
      keeper: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    cancelOrder(
      key: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    createOrder(
      account: PromiseOrValue<string>,
      params: IBaseOrderUtils.CreateOrderParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    dataStore(overrides?: CallOverrides): Promise<BigNumber>;

    eventEmitter(overrides?: CallOverrides): Promise<BigNumber>;

    executeOrder(
      key: PromiseOrValue<BytesLike>,
      oracleParams: OracleUtils.SetPricesParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    oracle(overrides?: CallOverrides): Promise<BigNumber>;

    orderVault(overrides?: CallOverrides): Promise<BigNumber>;

    referralStorage(overrides?: CallOverrides): Promise<BigNumber>;

    roleStore(overrides?: CallOverrides): Promise<BigNumber>;

    simulateExecuteOrder(
      key: PromiseOrValue<BytesLike>,
      params: OracleUtils.SimulatePricesParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    swapHandler(overrides?: CallOverrides): Promise<BigNumber>;

    updateOrder(
      key: PromiseOrValue<BytesLike>,
      sizeDeltaUsd: PromiseOrValue<BigNumberish>,
      acceptablePrice: PromiseOrValue<BigNumberish>,
      triggerPrice: PromiseOrValue<BigNumberish>,
      minOutputAmount: PromiseOrValue<BigNumberish>,
      autoCancel: PromiseOrValue<boolean>,
      order: Order.PropsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    _executeOrder(
      key: PromiseOrValue<BytesLike>,
      order: Order.PropsStruct,
      keeper: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    cancelOrder(
      key: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    createOrder(
      account: PromiseOrValue<string>,
      params: IBaseOrderUtils.CreateOrderParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    dataStore(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    eventEmitter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    executeOrder(
      key: PromiseOrValue<BytesLike>,
      oracleParams: OracleUtils.SetPricesParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    oracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    orderVault(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    referralStorage(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    roleStore(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    simulateExecuteOrder(
      key: PromiseOrValue<BytesLike>,
      params: OracleUtils.SimulatePricesParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    swapHandler(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    updateOrder(
      key: PromiseOrValue<BytesLike>,
      sizeDeltaUsd: PromiseOrValue<BigNumberish>,
      acceptablePrice: PromiseOrValue<BigNumberish>,
      triggerPrice: PromiseOrValue<BigNumberish>,
      minOutputAmount: PromiseOrValue<BigNumberish>,
      autoCancel: PromiseOrValue<boolean>,
      order: Order.PropsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
