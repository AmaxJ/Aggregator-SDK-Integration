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

export declare namespace Deposit {
  export type AddressesStruct = {
    account: PromiseOrValue<string>;
    receiver: PromiseOrValue<string>;
    callbackContract: PromiseOrValue<string>;
    uiFeeReceiver: PromiseOrValue<string>;
    market: PromiseOrValue<string>;
    initialLongToken: PromiseOrValue<string>;
    initialShortToken: PromiseOrValue<string>;
    longTokenSwapPath: PromiseOrValue<string>[];
    shortTokenSwapPath: PromiseOrValue<string>[];
  };

  export type AddressesStructOutput = [
    string,
    string,
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
    initialLongToken: string;
    initialShortToken: string;
    longTokenSwapPath: string[];
    shortTokenSwapPath: string[];
  };

  export type NumbersStruct = {
    initialLongTokenAmount: PromiseOrValue<BigNumberish>;
    initialShortTokenAmount: PromiseOrValue<BigNumberish>;
    minMarketTokens: PromiseOrValue<BigNumberish>;
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
    initialLongTokenAmount: BigNumber;
    initialShortTokenAmount: BigNumber;
    minMarketTokens: BigNumber;
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
    addresses: Deposit.AddressesStruct;
    numbers: Deposit.NumbersStruct;
    flags: Deposit.FlagsStruct;
  };

  export type PropsStructOutput = [
    Deposit.AddressesStructOutput,
    Deposit.NumbersStructOutput,
    Deposit.FlagsStructOutput
  ] & {
    addresses: Deposit.AddressesStructOutput;
    numbers: Deposit.NumbersStructOutput;
    flags: Deposit.FlagsStructOutput;
  };
}

export declare namespace DepositUtils {
  export type CreateDepositParamsStruct = {
    receiver: PromiseOrValue<string>;
    callbackContract: PromiseOrValue<string>;
    uiFeeReceiver: PromiseOrValue<string>;
    market: PromiseOrValue<string>;
    initialLongToken: PromiseOrValue<string>;
    initialShortToken: PromiseOrValue<string>;
    longTokenSwapPath: PromiseOrValue<string>[];
    shortTokenSwapPath: PromiseOrValue<string>[];
    minMarketTokens: PromiseOrValue<BigNumberish>;
    shouldUnwrapNativeToken: PromiseOrValue<boolean>;
    executionFee: PromiseOrValue<BigNumberish>;
    callbackGasLimit: PromiseOrValue<BigNumberish>;
  };

  export type CreateDepositParamsStructOutput = [
    string,
    string,
    string,
    string,
    string,
    string,
    string[],
    string[],
    BigNumber,
    boolean,
    BigNumber,
    BigNumber
  ] & {
    receiver: string;
    callbackContract: string;
    uiFeeReceiver: string;
    market: string;
    initialLongToken: string;
    initialShortToken: string;
    longTokenSwapPath: string[];
    shortTokenSwapPath: string[];
    minMarketTokens: BigNumber;
    shouldUnwrapNativeToken: boolean;
    executionFee: BigNumber;
    callbackGasLimit: BigNumber;
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

export interface DepositHandlerInterface extends utils.Interface {
  functions: {
    "_executeDeposit(bytes32,((address,address,address,address,address,address,address,address[],address[]),(uint256,uint256,uint256,uint256,uint256,uint256,uint256),(bool)),address)": FunctionFragment;
    "cancelDeposit(bytes32)": FunctionFragment;
    "createDeposit(address,(address,address,address,address,address,address,address[],address[],uint256,bool,uint256,uint256))": FunctionFragment;
    "dataStore()": FunctionFragment;
    "depositVault()": FunctionFragment;
    "eventEmitter()": FunctionFragment;
    "executeDeposit(bytes32,(address[],address[],bytes[]))": FunctionFragment;
    "oracle()": FunctionFragment;
    "roleStore()": FunctionFragment;
    "simulateExecuteDeposit(bytes32,(address[],(uint256,uint256)[],uint256,uint256))": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "_executeDeposit"
      | "cancelDeposit"
      | "createDeposit"
      | "dataStore"
      | "depositVault"
      | "eventEmitter"
      | "executeDeposit"
      | "oracle"
      | "roleStore"
      | "simulateExecuteDeposit"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "_executeDeposit",
    values: [
      PromiseOrValue<BytesLike>,
      Deposit.PropsStruct,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "cancelDeposit",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "createDeposit",
    values: [PromiseOrValue<string>, DepositUtils.CreateDepositParamsStruct]
  ): string;
  encodeFunctionData(functionFragment: "dataStore", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "depositVault",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "eventEmitter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "executeDeposit",
    values: [PromiseOrValue<BytesLike>, OracleUtils.SetPricesParamsStruct]
  ): string;
  encodeFunctionData(functionFragment: "oracle", values?: undefined): string;
  encodeFunctionData(functionFragment: "roleStore", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "simulateExecuteDeposit",
    values: [PromiseOrValue<BytesLike>, OracleUtils.SimulatePricesParamsStruct]
  ): string;

  decodeFunctionResult(
    functionFragment: "_executeDeposit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cancelDeposit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createDeposit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "dataStore", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "depositVault",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "eventEmitter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeDeposit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "oracle", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "roleStore", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "simulateExecuteDeposit",
    data: BytesLike
  ): Result;

  events: {};
}

export interface DepositHandler extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: DepositHandlerInterface;

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
    _executeDeposit(
      key: PromiseOrValue<BytesLike>,
      deposit: Deposit.PropsStruct,
      keeper: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    cancelDeposit(
      key: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    createDeposit(
      account: PromiseOrValue<string>,
      params: DepositUtils.CreateDepositParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    dataStore(overrides?: CallOverrides): Promise<[string]>;

    depositVault(overrides?: CallOverrides): Promise<[string]>;

    eventEmitter(overrides?: CallOverrides): Promise<[string]>;

    executeDeposit(
      key: PromiseOrValue<BytesLike>,
      oracleParams: OracleUtils.SetPricesParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    oracle(overrides?: CallOverrides): Promise<[string]>;

    roleStore(overrides?: CallOverrides): Promise<[string]>;

    simulateExecuteDeposit(
      key: PromiseOrValue<BytesLike>,
      params: OracleUtils.SimulatePricesParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  _executeDeposit(
    key: PromiseOrValue<BytesLike>,
    deposit: Deposit.PropsStruct,
    keeper: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  cancelDeposit(
    key: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  createDeposit(
    account: PromiseOrValue<string>,
    params: DepositUtils.CreateDepositParamsStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  dataStore(overrides?: CallOverrides): Promise<string>;

  depositVault(overrides?: CallOverrides): Promise<string>;

  eventEmitter(overrides?: CallOverrides): Promise<string>;

  executeDeposit(
    key: PromiseOrValue<BytesLike>,
    oracleParams: OracleUtils.SetPricesParamsStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  oracle(overrides?: CallOverrides): Promise<string>;

  roleStore(overrides?: CallOverrides): Promise<string>;

  simulateExecuteDeposit(
    key: PromiseOrValue<BytesLike>,
    params: OracleUtils.SimulatePricesParamsStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    _executeDeposit(
      key: PromiseOrValue<BytesLike>,
      deposit: Deposit.PropsStruct,
      keeper: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    cancelDeposit(
      key: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    createDeposit(
      account: PromiseOrValue<string>,
      params: DepositUtils.CreateDepositParamsStruct,
      overrides?: CallOverrides
    ): Promise<string>;

    dataStore(overrides?: CallOverrides): Promise<string>;

    depositVault(overrides?: CallOverrides): Promise<string>;

    eventEmitter(overrides?: CallOverrides): Promise<string>;

    executeDeposit(
      key: PromiseOrValue<BytesLike>,
      oracleParams: OracleUtils.SetPricesParamsStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    oracle(overrides?: CallOverrides): Promise<string>;

    roleStore(overrides?: CallOverrides): Promise<string>;

    simulateExecuteDeposit(
      key: PromiseOrValue<BytesLike>,
      params: OracleUtils.SimulatePricesParamsStruct,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    _executeDeposit(
      key: PromiseOrValue<BytesLike>,
      deposit: Deposit.PropsStruct,
      keeper: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    cancelDeposit(
      key: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    createDeposit(
      account: PromiseOrValue<string>,
      params: DepositUtils.CreateDepositParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    dataStore(overrides?: CallOverrides): Promise<BigNumber>;

    depositVault(overrides?: CallOverrides): Promise<BigNumber>;

    eventEmitter(overrides?: CallOverrides): Promise<BigNumber>;

    executeDeposit(
      key: PromiseOrValue<BytesLike>,
      oracleParams: OracleUtils.SetPricesParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    oracle(overrides?: CallOverrides): Promise<BigNumber>;

    roleStore(overrides?: CallOverrides): Promise<BigNumber>;

    simulateExecuteDeposit(
      key: PromiseOrValue<BytesLike>,
      params: OracleUtils.SimulatePricesParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    _executeDeposit(
      key: PromiseOrValue<BytesLike>,
      deposit: Deposit.PropsStruct,
      keeper: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    cancelDeposit(
      key: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    createDeposit(
      account: PromiseOrValue<string>,
      params: DepositUtils.CreateDepositParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    dataStore(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    depositVault(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    eventEmitter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    executeDeposit(
      key: PromiseOrValue<BytesLike>,
      oracleParams: OracleUtils.SetPricesParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    oracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    roleStore(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    simulateExecuteDeposit(
      key: PromiseOrValue<BytesLike>,
      params: OracleUtils.SimulatePricesParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
