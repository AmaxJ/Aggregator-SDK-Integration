/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface ShortsTrackerTimelockInterface extends ethers.utils.Interface {
  functions: {
    "BASIS_POINTS_DIVISOR()": FunctionFragment;
    "MAX_BUFFER()": FunctionFragment;
    "admin()": FunctionFragment;
    "averagePriceUpdateDelay()": FunctionFragment;
    "buffer()": FunctionFragment;
    "cancelAction(bytes32)": FunctionFragment;
    "disableIsGlobalShortDataReady(address)": FunctionFragment;
    "isHandler(address)": FunctionFragment;
    "lastUpdated(address)": FunctionFragment;
    "maxAveragePriceChange()": FunctionFragment;
    "pendingActions(bytes32)": FunctionFragment;
    "setAdmin(address)": FunctionFragment;
    "setAveragePriceUpdateDelay(uint256)": FunctionFragment;
    "setBuffer(uint256)": FunctionFragment;
    "setContractHandler(address,bool)": FunctionFragment;
    "setGlobalShortAveragePrices(address,address[],uint256[])": FunctionFragment;
    "setGov(address,address)": FunctionFragment;
    "setHandler(address,address,bool)": FunctionFragment;
    "setIsGlobalShortDataReady(address,bool)": FunctionFragment;
    "setMaxAveragePriceChange(uint256)": FunctionFragment;
    "signalSetAdmin(address)": FunctionFragment;
    "signalSetAveragePriceUpdateDelay(uint256)": FunctionFragment;
    "signalSetGov(address,address)": FunctionFragment;
    "signalSetHandler(address,address,bool)": FunctionFragment;
    "signalSetIsGlobalShortDataReady(address,bool)": FunctionFragment;
    "signalSetMaxAveragePriceChange(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "BASIS_POINTS_DIVISOR",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAX_BUFFER",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "admin", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "averagePriceUpdateDelay",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "buffer", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "cancelAction",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "disableIsGlobalShortDataReady",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "isHandler", values: [string]): string;
  encodeFunctionData(functionFragment: "lastUpdated", values: [string]): string;
  encodeFunctionData(
    functionFragment: "maxAveragePriceChange",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pendingActions",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "setAdmin", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setAveragePriceUpdateDelay",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setBuffer",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setContractHandler",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setGlobalShortAveragePrices",
    values: [string, string[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setGov",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setHandler",
    values: [string, string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setIsGlobalShortDataReady",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setMaxAveragePriceChange",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "signalSetAdmin",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "signalSetAveragePriceUpdateDelay",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "signalSetGov",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "signalSetHandler",
    values: [string, string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "signalSetIsGlobalShortDataReady",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "signalSetMaxAveragePriceChange",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "BASIS_POINTS_DIVISOR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "MAX_BUFFER", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "averagePriceUpdateDelay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "buffer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "cancelAction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "disableIsGlobalShortDataReady",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isHandler", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lastUpdated",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "maxAveragePriceChange",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pendingActions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setAdmin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setAveragePriceUpdateDelay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setBuffer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setContractHandler",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setGlobalShortAveragePrices",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setGov", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setHandler", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setIsGlobalShortDataReady",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMaxAveragePriceChange",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "signalSetAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "signalSetAveragePriceUpdateDelay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "signalSetGov",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "signalSetHandler",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "signalSetIsGlobalShortDataReady",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "signalSetMaxAveragePriceChange",
    data: BytesLike
  ): Result;

  events: {
    "ClearAction(bytes32)": EventFragment;
    "GlobalShortAveragePriceUpdated(address,uint256,uint256)": EventFragment;
    "SetAdmin(address)": EventFragment;
    "SetAveragePriceUpdateDelay(uint256)": EventFragment;
    "SetContractHandler(address,bool)": EventFragment;
    "SetGov(address,address)": EventFragment;
    "SetIsGlobalShortDataReady(address,bool)": EventFragment;
    "SetMaxAveragePriceChange(uint256)": EventFragment;
    "SignalPendingAction(bytes32)": EventFragment;
    "SignalSetAdmin(address)": EventFragment;
    "SignalSetAveragePriceUpdateDelay(uint256)": EventFragment;
    "SignalSetGov(address,address)": EventFragment;
    "SignalSetHandler(address,address,bool,bytes32)": EventFragment;
    "SignalSetIsGlobalShortDataReady(address,bool)": EventFragment;
    "SignalSetMaxAveragePriceChange(uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ClearAction"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "GlobalShortAveragePriceUpdated"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetAdmin"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetAveragePriceUpdateDelay"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetContractHandler"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetGov"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetIsGlobalShortDataReady"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetMaxAveragePriceChange"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SignalPendingAction"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SignalSetAdmin"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "SignalSetAveragePriceUpdateDelay"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SignalSetGov"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SignalSetHandler"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "SignalSetIsGlobalShortDataReady"
  ): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "SignalSetMaxAveragePriceChange"
  ): EventFragment;
}

export type ClearActionEvent = TypedEvent<[string] & { action: string }>;

export type GlobalShortAveragePriceUpdatedEvent = TypedEvent<
  [string, BigNumber, BigNumber] & {
    token: string;
    oldAveragePrice: BigNumber;
    newAveragePrice: BigNumber;
  }
>;

export type SetAdminEvent = TypedEvent<[string] & { admin: string }>;

export type SetAveragePriceUpdateDelayEvent = TypedEvent<
  [BigNumber] & { averagePriceUpdateDelay: BigNumber }
>;

export type SetContractHandlerEvent = TypedEvent<
  [string, boolean] & { handler: string; isHandler: boolean }
>;

export type SetGovEvent = TypedEvent<
  [string, string] & { target: string; gov: string }
>;

export type SetIsGlobalShortDataReadyEvent = TypedEvent<
  [string, boolean] & { target: string; isGlobalShortDataReady: boolean }
>;

export type SetMaxAveragePriceChangeEvent = TypedEvent<
  [BigNumber] & { maxAveragePriceChange: BigNumber }
>;

export type SignalPendingActionEvent = TypedEvent<
  [string] & { action: string }
>;

export type SignalSetAdminEvent = TypedEvent<[string] & { admin: string }>;

export type SignalSetAveragePriceUpdateDelayEvent = TypedEvent<
  [BigNumber] & { averagePriceUpdateDelay: BigNumber }
>;

export type SignalSetGovEvent = TypedEvent<
  [string, string] & { target: string; gov: string }
>;

export type SignalSetHandlerEvent = TypedEvent<
  [string, string, boolean, string] & {
    target: string;
    handler: string;
    isActive: boolean;
    action: string;
  }
>;

export type SignalSetIsGlobalShortDataReadyEvent = TypedEvent<
  [string, boolean] & { target: string; isGlobalShortDataReady: boolean }
>;

export type SignalSetMaxAveragePriceChangeEvent = TypedEvent<
  [BigNumber] & { maxAveragePriceChange: BigNumber }
>;

export class ShortsTrackerTimelock extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: ShortsTrackerTimelockInterface;

  functions: {
    BASIS_POINTS_DIVISOR(overrides?: CallOverrides): Promise<[BigNumber]>;

    MAX_BUFFER(overrides?: CallOverrides): Promise<[BigNumber]>;

    admin(overrides?: CallOverrides): Promise<[string]>;

    averagePriceUpdateDelay(overrides?: CallOverrides): Promise<[BigNumber]>;

    buffer(overrides?: CallOverrides): Promise<[BigNumber]>;

    cancelAction(
      _action: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    disableIsGlobalShortDataReady(
      _shortsTracker: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isHandler(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    lastUpdated(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    maxAveragePriceChange(overrides?: CallOverrides): Promise<[BigNumber]>;

    pendingActions(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    setAdmin(
      _admin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setAveragePriceUpdateDelay(
      _averagePriceUpdateDelay: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setBuffer(
      _buffer: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setContractHandler(
      _handler: string,
      _isActive: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setGlobalShortAveragePrices(
      _shortsTracker: string,
      _tokens: string[],
      _averagePrices: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setGov(
      _shortsTracker: string,
      _gov: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setHandler(
      _target: string,
      _handler: string,
      _isActive: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setIsGlobalShortDataReady(
      _shortsTracker: string,
      _value: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setMaxAveragePriceChange(
      _maxAveragePriceChange: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    signalSetAdmin(
      _admin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    signalSetAveragePriceUpdateDelay(
      _averagePriceUpdateDelay: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    signalSetGov(
      _shortsTracker: string,
      _gov: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    signalSetHandler(
      _target: string,
      _handler: string,
      _isActive: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    signalSetIsGlobalShortDataReady(
      _shortsTracker: string,
      _value: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    signalSetMaxAveragePriceChange(
      _maxAveragePriceChange: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  BASIS_POINTS_DIVISOR(overrides?: CallOverrides): Promise<BigNumber>;

  MAX_BUFFER(overrides?: CallOverrides): Promise<BigNumber>;

  admin(overrides?: CallOverrides): Promise<string>;

  averagePriceUpdateDelay(overrides?: CallOverrides): Promise<BigNumber>;

  buffer(overrides?: CallOverrides): Promise<BigNumber>;

  cancelAction(
    _action: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  disableIsGlobalShortDataReady(
    _shortsTracker: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isHandler(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  lastUpdated(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  maxAveragePriceChange(overrides?: CallOverrides): Promise<BigNumber>;

  pendingActions(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  setAdmin(
    _admin: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setAveragePriceUpdateDelay(
    _averagePriceUpdateDelay: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setBuffer(
    _buffer: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setContractHandler(
    _handler: string,
    _isActive: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setGlobalShortAveragePrices(
    _shortsTracker: string,
    _tokens: string[],
    _averagePrices: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setGov(
    _shortsTracker: string,
    _gov: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setHandler(
    _target: string,
    _handler: string,
    _isActive: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setIsGlobalShortDataReady(
    _shortsTracker: string,
    _value: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setMaxAveragePriceChange(
    _maxAveragePriceChange: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  signalSetAdmin(
    _admin: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  signalSetAveragePriceUpdateDelay(
    _averagePriceUpdateDelay: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  signalSetGov(
    _shortsTracker: string,
    _gov: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  signalSetHandler(
    _target: string,
    _handler: string,
    _isActive: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  signalSetIsGlobalShortDataReady(
    _shortsTracker: string,
    _value: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  signalSetMaxAveragePriceChange(
    _maxAveragePriceChange: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    BASIS_POINTS_DIVISOR(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_BUFFER(overrides?: CallOverrides): Promise<BigNumber>;

    admin(overrides?: CallOverrides): Promise<string>;

    averagePriceUpdateDelay(overrides?: CallOverrides): Promise<BigNumber>;

    buffer(overrides?: CallOverrides): Promise<BigNumber>;

    cancelAction(_action: BytesLike, overrides?: CallOverrides): Promise<void>;

    disableIsGlobalShortDataReady(
      _shortsTracker: string,
      overrides?: CallOverrides
    ): Promise<void>;

    isHandler(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    lastUpdated(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    maxAveragePriceChange(overrides?: CallOverrides): Promise<BigNumber>;

    pendingActions(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setAdmin(_admin: string, overrides?: CallOverrides): Promise<void>;

    setAveragePriceUpdateDelay(
      _averagePriceUpdateDelay: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setBuffer(_buffer: BigNumberish, overrides?: CallOverrides): Promise<void>;

    setContractHandler(
      _handler: string,
      _isActive: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setGlobalShortAveragePrices(
      _shortsTracker: string,
      _tokens: string[],
      _averagePrices: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    setGov(
      _shortsTracker: string,
      _gov: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setHandler(
      _target: string,
      _handler: string,
      _isActive: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setIsGlobalShortDataReady(
      _shortsTracker: string,
      _value: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setMaxAveragePriceChange(
      _maxAveragePriceChange: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    signalSetAdmin(_admin: string, overrides?: CallOverrides): Promise<void>;

    signalSetAveragePriceUpdateDelay(
      _averagePriceUpdateDelay: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    signalSetGov(
      _shortsTracker: string,
      _gov: string,
      overrides?: CallOverrides
    ): Promise<void>;

    signalSetHandler(
      _target: string,
      _handler: string,
      _isActive: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    signalSetIsGlobalShortDataReady(
      _shortsTracker: string,
      _value: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    signalSetMaxAveragePriceChange(
      _maxAveragePriceChange: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "ClearAction(bytes32)"(
      action?: null
    ): TypedEventFilter<[string], { action: string }>;

    ClearAction(action?: null): TypedEventFilter<[string], { action: string }>;

    "GlobalShortAveragePriceUpdated(address,uint256,uint256)"(
      token?: string | null,
      oldAveragePrice?: null,
      newAveragePrice?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { token: string; oldAveragePrice: BigNumber; newAveragePrice: BigNumber }
    >;

    GlobalShortAveragePriceUpdated(
      token?: string | null,
      oldAveragePrice?: null,
      newAveragePrice?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { token: string; oldAveragePrice: BigNumber; newAveragePrice: BigNumber }
    >;

    "SetAdmin(address)"(
      admin?: null
    ): TypedEventFilter<[string], { admin: string }>;

    SetAdmin(admin?: null): TypedEventFilter<[string], { admin: string }>;

    "SetAveragePriceUpdateDelay(uint256)"(
      averagePriceUpdateDelay?: null
    ): TypedEventFilter<[BigNumber], { averagePriceUpdateDelay: BigNumber }>;

    SetAveragePriceUpdateDelay(
      averagePriceUpdateDelay?: null
    ): TypedEventFilter<[BigNumber], { averagePriceUpdateDelay: BigNumber }>;

    "SetContractHandler(address,bool)"(
      handler?: string | null,
      isHandler?: null
    ): TypedEventFilter<
      [string, boolean],
      { handler: string; isHandler: boolean }
    >;

    SetContractHandler(
      handler?: string | null,
      isHandler?: null
    ): TypedEventFilter<
      [string, boolean],
      { handler: string; isHandler: boolean }
    >;

    "SetGov(address,address)"(
      target?: null,
      gov?: null
    ): TypedEventFilter<[string, string], { target: string; gov: string }>;

    SetGov(
      target?: null,
      gov?: null
    ): TypedEventFilter<[string, string], { target: string; gov: string }>;

    "SetIsGlobalShortDataReady(address,bool)"(
      target?: null,
      isGlobalShortDataReady?: null
    ): TypedEventFilter<
      [string, boolean],
      { target: string; isGlobalShortDataReady: boolean }
    >;

    SetIsGlobalShortDataReady(
      target?: null,
      isGlobalShortDataReady?: null
    ): TypedEventFilter<
      [string, boolean],
      { target: string; isGlobalShortDataReady: boolean }
    >;

    "SetMaxAveragePriceChange(uint256)"(
      maxAveragePriceChange?: null
    ): TypedEventFilter<[BigNumber], { maxAveragePriceChange: BigNumber }>;

    SetMaxAveragePriceChange(
      maxAveragePriceChange?: null
    ): TypedEventFilter<[BigNumber], { maxAveragePriceChange: BigNumber }>;

    "SignalPendingAction(bytes32)"(
      action?: null
    ): TypedEventFilter<[string], { action: string }>;

    SignalPendingAction(
      action?: null
    ): TypedEventFilter<[string], { action: string }>;

    "SignalSetAdmin(address)"(
      admin?: null
    ): TypedEventFilter<[string], { admin: string }>;

    SignalSetAdmin(admin?: null): TypedEventFilter<[string], { admin: string }>;

    "SignalSetAveragePriceUpdateDelay(uint256)"(
      averagePriceUpdateDelay?: null
    ): TypedEventFilter<[BigNumber], { averagePriceUpdateDelay: BigNumber }>;

    SignalSetAveragePriceUpdateDelay(
      averagePriceUpdateDelay?: null
    ): TypedEventFilter<[BigNumber], { averagePriceUpdateDelay: BigNumber }>;

    "SignalSetGov(address,address)"(
      target?: null,
      gov?: null
    ): TypedEventFilter<[string, string], { target: string; gov: string }>;

    SignalSetGov(
      target?: null,
      gov?: null
    ): TypedEventFilter<[string, string], { target: string; gov: string }>;

    "SignalSetHandler(address,address,bool,bytes32)"(
      target?: null,
      handler?: null,
      isActive?: null,
      action?: null
    ): TypedEventFilter<
      [string, string, boolean, string],
      { target: string; handler: string; isActive: boolean; action: string }
    >;

    SignalSetHandler(
      target?: null,
      handler?: null,
      isActive?: null,
      action?: null
    ): TypedEventFilter<
      [string, string, boolean, string],
      { target: string; handler: string; isActive: boolean; action: string }
    >;

    "SignalSetIsGlobalShortDataReady(address,bool)"(
      target?: null,
      isGlobalShortDataReady?: null
    ): TypedEventFilter<
      [string, boolean],
      { target: string; isGlobalShortDataReady: boolean }
    >;

    SignalSetIsGlobalShortDataReady(
      target?: null,
      isGlobalShortDataReady?: null
    ): TypedEventFilter<
      [string, boolean],
      { target: string; isGlobalShortDataReady: boolean }
    >;

    "SignalSetMaxAveragePriceChange(uint256)"(
      maxAveragePriceChange?: null
    ): TypedEventFilter<[BigNumber], { maxAveragePriceChange: BigNumber }>;

    SignalSetMaxAveragePriceChange(
      maxAveragePriceChange?: null
    ): TypedEventFilter<[BigNumber], { maxAveragePriceChange: BigNumber }>;
  };

  estimateGas: {
    BASIS_POINTS_DIVISOR(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_BUFFER(overrides?: CallOverrides): Promise<BigNumber>;

    admin(overrides?: CallOverrides): Promise<BigNumber>;

    averagePriceUpdateDelay(overrides?: CallOverrides): Promise<BigNumber>;

    buffer(overrides?: CallOverrides): Promise<BigNumber>;

    cancelAction(
      _action: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    disableIsGlobalShortDataReady(
      _shortsTracker: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isHandler(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    lastUpdated(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    maxAveragePriceChange(overrides?: CallOverrides): Promise<BigNumber>;

    pendingActions(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setAdmin(
      _admin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setAveragePriceUpdateDelay(
      _averagePriceUpdateDelay: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setBuffer(
      _buffer: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setContractHandler(
      _handler: string,
      _isActive: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setGlobalShortAveragePrices(
      _shortsTracker: string,
      _tokens: string[],
      _averagePrices: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setGov(
      _shortsTracker: string,
      _gov: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setHandler(
      _target: string,
      _handler: string,
      _isActive: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setIsGlobalShortDataReady(
      _shortsTracker: string,
      _value: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setMaxAveragePriceChange(
      _maxAveragePriceChange: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    signalSetAdmin(
      _admin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    signalSetAveragePriceUpdateDelay(
      _averagePriceUpdateDelay: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    signalSetGov(
      _shortsTracker: string,
      _gov: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    signalSetHandler(
      _target: string,
      _handler: string,
      _isActive: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    signalSetIsGlobalShortDataReady(
      _shortsTracker: string,
      _value: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    signalSetMaxAveragePriceChange(
      _maxAveragePriceChange: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    BASIS_POINTS_DIVISOR(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    MAX_BUFFER(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    averagePriceUpdateDelay(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    buffer(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    cancelAction(
      _action: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    disableIsGlobalShortDataReady(
      _shortsTracker: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isHandler(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lastUpdated(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    maxAveragePriceChange(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pendingActions(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setAdmin(
      _admin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setAveragePriceUpdateDelay(
      _averagePriceUpdateDelay: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setBuffer(
      _buffer: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setContractHandler(
      _handler: string,
      _isActive: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setGlobalShortAveragePrices(
      _shortsTracker: string,
      _tokens: string[],
      _averagePrices: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setGov(
      _shortsTracker: string,
      _gov: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setHandler(
      _target: string,
      _handler: string,
      _isActive: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setIsGlobalShortDataReady(
      _shortsTracker: string,
      _value: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setMaxAveragePriceChange(
      _maxAveragePriceChange: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    signalSetAdmin(
      _admin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    signalSetAveragePriceUpdateDelay(
      _averagePriceUpdateDelay: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    signalSetGov(
      _shortsTracker: string,
      _gov: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    signalSetHandler(
      _target: string,
      _handler: string,
      _isActive: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    signalSetIsGlobalShortDataReady(
      _shortsTracker: string,
      _value: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    signalSetMaxAveragePriceChange(
      _maxAveragePriceChange: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
