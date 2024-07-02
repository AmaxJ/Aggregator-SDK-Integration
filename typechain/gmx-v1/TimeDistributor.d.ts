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

interface TimeDistributorInterface extends ethers.utils.Interface {
  functions: {
    "DISTRIBUTION_INTERVAL()": FunctionFragment;
    "admin()": FunctionFragment;
    "distribute()": FunctionFragment;
    "getDistributionAmount(address)": FunctionFragment;
    "getIntervals(address)": FunctionFragment;
    "getRewardToken(address)": FunctionFragment;
    "gov()": FunctionFragment;
    "lastDistributionTime(address)": FunctionFragment;
    "rewardTokens(address)": FunctionFragment;
    "setDistribution(address[],uint256[],address[])": FunctionFragment;
    "setGov(address)": FunctionFragment;
    "setTokensPerInterval(address,uint256)": FunctionFragment;
    "tokensPerInterval(address)": FunctionFragment;
    "updateLastDistributionTime(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "DISTRIBUTION_INTERVAL",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "admin", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "distribute",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getDistributionAmount",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getIntervals",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getRewardToken",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "gov", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "lastDistributionTime",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "rewardTokens",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setDistribution",
    values: [string[], BigNumberish[], string[]]
  ): string;
  encodeFunctionData(functionFragment: "setGov", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setTokensPerInterval",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "tokensPerInterval",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateLastDistributionTime",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "DISTRIBUTION_INTERVAL",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "distribute", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getDistributionAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getIntervals",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRewardToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "gov", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lastDistributionTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setDistribution",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setGov", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setTokensPerInterval",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokensPerInterval",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateLastDistributionTime",
    data: BytesLike
  ): Result;

  events: {
    "Distribute(address,uint256)": EventFragment;
    "DistributionChange(address,uint256,address)": EventFragment;
    "TokensPerIntervalChange(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Distribute"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DistributionChange"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokensPerIntervalChange"): EventFragment;
}

export type DistributeEvent = TypedEvent<
  [string, BigNumber] & { receiver: string; amount: BigNumber }
>;

export type DistributionChangeEvent = TypedEvent<
  [string, BigNumber, string] & {
    receiver: string;
    amount: BigNumber;
    rewardToken: string;
  }
>;

export type TokensPerIntervalChangeEvent = TypedEvent<
  [string, BigNumber] & { receiver: string; amount: BigNumber }
>;

export class TimeDistributor extends BaseContract {
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

  interface: TimeDistributorInterface;

  functions: {
    DISTRIBUTION_INTERVAL(overrides?: CallOverrides): Promise<[BigNumber]>;

    admin(overrides?: CallOverrides): Promise<[string]>;

    distribute(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getDistributionAmount(
      _receiver: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getIntervals(
      _receiver: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getRewardToken(
      _receiver: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    gov(overrides?: CallOverrides): Promise<[string]>;

    lastDistributionTime(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    rewardTokens(arg0: string, overrides?: CallOverrides): Promise<[string]>;

    setDistribution(
      _receivers: string[],
      _amounts: BigNumberish[],
      _rewardTokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setGov(
      _gov: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTokensPerInterval(
      _receiver: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    tokensPerInterval(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    updateLastDistributionTime(
      _receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  DISTRIBUTION_INTERVAL(overrides?: CallOverrides): Promise<BigNumber>;

  admin(overrides?: CallOverrides): Promise<string>;

  distribute(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getDistributionAmount(
    _receiver: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getIntervals(
    _receiver: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getRewardToken(_receiver: string, overrides?: CallOverrides): Promise<string>;

  gov(overrides?: CallOverrides): Promise<string>;

  lastDistributionTime(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  rewardTokens(arg0: string, overrides?: CallOverrides): Promise<string>;

  setDistribution(
    _receivers: string[],
    _amounts: BigNumberish[],
    _rewardTokens: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setGov(
    _gov: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTokensPerInterval(
    _receiver: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  tokensPerInterval(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  updateLastDistributionTime(
    _receiver: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    DISTRIBUTION_INTERVAL(overrides?: CallOverrides): Promise<BigNumber>;

    admin(overrides?: CallOverrides): Promise<string>;

    distribute(overrides?: CallOverrides): Promise<BigNumber>;

    getDistributionAmount(
      _receiver: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getIntervals(
      _receiver: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRewardToken(
      _receiver: string,
      overrides?: CallOverrides
    ): Promise<string>;

    gov(overrides?: CallOverrides): Promise<string>;

    lastDistributionTime(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rewardTokens(arg0: string, overrides?: CallOverrides): Promise<string>;

    setDistribution(
      _receivers: string[],
      _amounts: BigNumberish[],
      _rewardTokens: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    setGov(_gov: string, overrides?: CallOverrides): Promise<void>;

    setTokensPerInterval(
      _receiver: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    tokensPerInterval(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    updateLastDistributionTime(
      _receiver: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Distribute(address,uint256)"(
      receiver?: null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { receiver: string; amount: BigNumber }
    >;

    Distribute(
      receiver?: null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { receiver: string; amount: BigNumber }
    >;

    "DistributionChange(address,uint256,address)"(
      receiver?: null,
      amount?: null,
      rewardToken?: null
    ): TypedEventFilter<
      [string, BigNumber, string],
      { receiver: string; amount: BigNumber; rewardToken: string }
    >;

    DistributionChange(
      receiver?: null,
      amount?: null,
      rewardToken?: null
    ): TypedEventFilter<
      [string, BigNumber, string],
      { receiver: string; amount: BigNumber; rewardToken: string }
    >;

    "TokensPerIntervalChange(address,uint256)"(
      receiver?: null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { receiver: string; amount: BigNumber }
    >;

    TokensPerIntervalChange(
      receiver?: null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { receiver: string; amount: BigNumber }
    >;
  };

  estimateGas: {
    DISTRIBUTION_INTERVAL(overrides?: CallOverrides): Promise<BigNumber>;

    admin(overrides?: CallOverrides): Promise<BigNumber>;

    distribute(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getDistributionAmount(
      _receiver: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getIntervals(
      _receiver: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRewardToken(
      _receiver: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    gov(overrides?: CallOverrides): Promise<BigNumber>;

    lastDistributionTime(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rewardTokens(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    setDistribution(
      _receivers: string[],
      _amounts: BigNumberish[],
      _rewardTokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setGov(
      _gov: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTokensPerInterval(
      _receiver: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    tokensPerInterval(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    updateLastDistributionTime(
      _receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    DISTRIBUTION_INTERVAL(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    distribute(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getDistributionAmount(
      _receiver: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getIntervals(
      _receiver: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRewardToken(
      _receiver: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    gov(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lastDistributionTime(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rewardTokens(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setDistribution(
      _receivers: string[],
      _amounts: BigNumberish[],
      _rewardTokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setGov(
      _gov: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTokensPerInterval(
      _receiver: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    tokensPerInterval(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    updateLastDistributionTime(
      _receiver: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
