/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IFastPriceFeed,
  IFastPriceFeedInterface,
} from "../IFastPriceFeed";

const _abi = [
  {
    inputs: [],
    name: "lastUpdatedAt",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastUpdatedBlock",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_isSpreadEnabled",
        type: "bool",
      },
    ],
    name: "setIsSpreadEnabled",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_tokens",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_maxCumulativeDeltaDiffs",
        type: "uint256[]",
      },
    ],
    name: "setMaxCumulativeDeltaDiffs",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_maxDeviationBasisPoints",
        type: "uint256",
      },
    ],
    name: "setMaxDeviationBasisPoints",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_maxPriceUpdateDelay",
        type: "uint256",
      },
    ],
    name: "setMaxPriceUpdateDelay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_minBlockInterval",
        type: "uint256",
      },
    ],
    name: "setMinBlockInterval",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_priceDataInterval",
        type: "uint256",
      },
    ],
    name: "setPriceDataInterval",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_priceDuration",
        type: "uint256",
      },
    ],
    name: "setPriceDuration",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_isActive",
        type: "bool",
      },
    ],
    name: "setSigner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_spreadBasisPointsIfChainError",
        type: "uint256",
      },
    ],
    name: "setSpreadBasisPointsIfChainError",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_spreadBasisPointsIfInactive",
        type: "uint256",
      },
    ],
    name: "setSpreadBasisPointsIfInactive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_isActive",
        type: "bool",
      },
    ],
    name: "setUpdater",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_vaultPriceFeed",
        type: "address",
      },
    ],
    name: "setVaultPriceFeed",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IFastPriceFeed__factory {
  static readonly abi = _abi;
  static createInterface(): IFastPriceFeedInterface {
    return new utils.Interface(_abi) as IFastPriceFeedInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IFastPriceFeed {
    return new Contract(address, _abi, signerOrProvider) as IFastPriceFeed;
  }
}
