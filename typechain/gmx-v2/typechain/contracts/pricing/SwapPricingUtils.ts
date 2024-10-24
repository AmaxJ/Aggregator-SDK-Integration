/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
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

export declare namespace Market {
  export type PropsStruct = {
    marketToken: PromiseOrValue<string>;
    indexToken: PromiseOrValue<string>;
    longToken: PromiseOrValue<string>;
    shortToken: PromiseOrValue<string>;
  };

  export type PropsStructOutput = [string, string, string, string] & {
    marketToken: string;
    indexToken: string;
    longToken: string;
    shortToken: string;
  };
}

export declare namespace SwapPricingUtils {
  export type GetPriceImpactUsdParamsStruct = {
    dataStore: PromiseOrValue<string>;
    market: Market.PropsStruct;
    tokenA: PromiseOrValue<string>;
    tokenB: PromiseOrValue<string>;
    priceForTokenA: PromiseOrValue<BigNumberish>;
    priceForTokenB: PromiseOrValue<BigNumberish>;
    usdDeltaForTokenA: PromiseOrValue<BigNumberish>;
    usdDeltaForTokenB: PromiseOrValue<BigNumberish>;
    includeVirtualInventoryImpact: PromiseOrValue<boolean>;
  };

  export type GetPriceImpactUsdParamsStructOutput = [
    string,
    Market.PropsStructOutput,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    boolean
  ] & {
    dataStore: string;
    market: Market.PropsStructOutput;
    tokenA: string;
    tokenB: string;
    priceForTokenA: BigNumber;
    priceForTokenB: BigNumber;
    usdDeltaForTokenA: BigNumber;
    usdDeltaForTokenB: BigNumber;
    includeVirtualInventoryImpact: boolean;
  };
}

export interface SwapPricingUtilsInterface extends utils.Interface {
  functions: {
    "getPriceImpactUsd((DataStore,(address,address,address,address),address,address,uint256,uint256,int256,int256,bool))": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "getPriceImpactUsd"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getPriceImpactUsd",
    values: [SwapPricingUtils.GetPriceImpactUsdParamsStruct]
  ): string;

  decodeFunctionResult(
    functionFragment: "getPriceImpactUsd",
    data: BytesLike
  ): Result;

  events: {};
}

export interface SwapPricingUtils extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SwapPricingUtilsInterface;

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
    getPriceImpactUsd(
      params: SwapPricingUtils.GetPriceImpactUsdParamsStruct,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  getPriceImpactUsd(
    params: SwapPricingUtils.GetPriceImpactUsdParamsStruct,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    getPriceImpactUsd(
      params: SwapPricingUtils.GetPriceImpactUsdParamsStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    getPriceImpactUsd(
      params: SwapPricingUtils.GetPriceImpactUsdParamsStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getPriceImpactUsd(
      params: SwapPricingUtils.GetPriceImpactUsdParamsStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
