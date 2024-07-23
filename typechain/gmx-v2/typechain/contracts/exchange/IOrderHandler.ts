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

export declare namespace OracleUtils {
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

export interface IOrderHandlerInterface extends utils.Interface {
  functions: {
    "cancelOrder(bytes32)": FunctionFragment;
    "createOrder(address,((address,address,address,address,address,address,address[]),(uint256,uint256,uint256,uint256,uint256,uint256,uint256),uint8,uint8,bool,bool,bool,bytes32))": FunctionFragment;
    "simulateExecuteOrder(bytes32,(address[],(uint256,uint256)[],uint256,uint256))": FunctionFragment;
    "updateOrder(bytes32,uint256,uint256,uint256,uint256,bool,((address,address,address,address,address,address,address,address[]),(uint8,uint8,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),(bool,bool,bool,bool)))": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "cancelOrder"
      | "createOrder"
      | "simulateExecuteOrder"
      | "updateOrder"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "cancelOrder",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "createOrder",
    values: [PromiseOrValue<string>, IBaseOrderUtils.CreateOrderParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "simulateExecuteOrder",
    values: [PromiseOrValue<BytesLike>, OracleUtils.SimulatePricesParamsStruct]
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
    functionFragment: "cancelOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "simulateExecuteOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateOrder",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IOrderHandler extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IOrderHandlerInterface;

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
    cancelOrder(
      key: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    createOrder(
      account: PromiseOrValue<string>,
      params: IBaseOrderUtils.CreateOrderParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    simulateExecuteOrder(
      key: PromiseOrValue<BytesLike>,
      params: OracleUtils.SimulatePricesParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

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

  cancelOrder(
    key: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  createOrder(
    account: PromiseOrValue<string>,
    params: IBaseOrderUtils.CreateOrderParamsStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  simulateExecuteOrder(
    key: PromiseOrValue<BytesLike>,
    params: OracleUtils.SimulatePricesParamsStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

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
    cancelOrder(
      key: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    createOrder(
      account: PromiseOrValue<string>,
      params: IBaseOrderUtils.CreateOrderParamsStruct,
      overrides?: CallOverrides
    ): Promise<string>;

    simulateExecuteOrder(
      key: PromiseOrValue<BytesLike>,
      params: OracleUtils.SimulatePricesParamsStruct,
      overrides?: CallOverrides
    ): Promise<void>;

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
    cancelOrder(
      key: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    createOrder(
      account: PromiseOrValue<string>,
      params: IBaseOrderUtils.CreateOrderParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    simulateExecuteOrder(
      key: PromiseOrValue<BytesLike>,
      params: OracleUtils.SimulatePricesParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

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
    cancelOrder(
      key: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    createOrder(
      account: PromiseOrValue<string>,
      params: IBaseOrderUtils.CreateOrderParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    simulateExecuteOrder(
      key: PromiseOrValue<BytesLike>,
      params: OracleUtils.SimulatePricesParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

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