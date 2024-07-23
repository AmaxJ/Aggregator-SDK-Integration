/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IRouterV1,
  IRouterV1Interface,
} from "../../../contracts/v1/IRouterV1";

const _abi = [
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_path",
        type: "address[]",
      },
      {
        internalType: "uint256",
        name: "_amountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_minOut",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
    ],
    name: "swap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IRouterV1__factory {
  static readonly abi = _abi;
  static createInterface(): IRouterV1Interface {
    return new utils.Interface(_abi) as IRouterV1Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IRouterV1 {
    return new Contract(address, _abi, signerOrProvider) as IRouterV1;
  }
}
