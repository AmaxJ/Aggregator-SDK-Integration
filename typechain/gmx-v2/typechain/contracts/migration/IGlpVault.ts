/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
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
} from "../../common";

export interface IGlpVaultInterface extends utils.Interface {
  functions: {
    "mintBurnFeeBasisPoints()": FunctionFragment;
    "stableSwapFeeBasisPoints()": FunctionFragment;
    "stableTaxBasisPoints()": FunctionFragment;
    "swapFeeBasisPoints()": FunctionFragment;
    "taxBasisPoints()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "mintBurnFeeBasisPoints"
      | "stableSwapFeeBasisPoints"
      | "stableTaxBasisPoints"
      | "swapFeeBasisPoints"
      | "taxBasisPoints"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "mintBurnFeeBasisPoints",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "stableSwapFeeBasisPoints",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "stableTaxBasisPoints",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "swapFeeBasisPoints",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "taxBasisPoints",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "mintBurnFeeBasisPoints",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stableSwapFeeBasisPoints",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stableTaxBasisPoints",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapFeeBasisPoints",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "taxBasisPoints",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IGlpVault extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IGlpVaultInterface;

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
    mintBurnFeeBasisPoints(overrides?: CallOverrides): Promise<[BigNumber]>;

    stableSwapFeeBasisPoints(overrides?: CallOverrides): Promise<[BigNumber]>;

    stableTaxBasisPoints(overrides?: CallOverrides): Promise<[BigNumber]>;

    swapFeeBasisPoints(overrides?: CallOverrides): Promise<[BigNumber]>;

    taxBasisPoints(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  mintBurnFeeBasisPoints(overrides?: CallOverrides): Promise<BigNumber>;

  stableSwapFeeBasisPoints(overrides?: CallOverrides): Promise<BigNumber>;

  stableTaxBasisPoints(overrides?: CallOverrides): Promise<BigNumber>;

  swapFeeBasisPoints(overrides?: CallOverrides): Promise<BigNumber>;

  taxBasisPoints(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    mintBurnFeeBasisPoints(overrides?: CallOverrides): Promise<BigNumber>;

    stableSwapFeeBasisPoints(overrides?: CallOverrides): Promise<BigNumber>;

    stableTaxBasisPoints(overrides?: CallOverrides): Promise<BigNumber>;

    swapFeeBasisPoints(overrides?: CallOverrides): Promise<BigNumber>;

    taxBasisPoints(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    mintBurnFeeBasisPoints(overrides?: CallOverrides): Promise<BigNumber>;

    stableSwapFeeBasisPoints(overrides?: CallOverrides): Promise<BigNumber>;

    stableTaxBasisPoints(overrides?: CallOverrides): Promise<BigNumber>;

    swapFeeBasisPoints(overrides?: CallOverrides): Promise<BigNumber>;

    taxBasisPoints(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    mintBurnFeeBasisPoints(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    stableSwapFeeBasisPoints(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    stableTaxBasisPoints(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    swapFeeBasisPoints(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    taxBasisPoints(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
