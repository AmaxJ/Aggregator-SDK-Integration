/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IOracleProvider,
  IOracleProviderInterface,
} from "../../../contracts/oracle/IOracleProvider";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "getOraclePrice",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "min",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "max",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "provider",
            type: "address",
          },
        ],
        internalType: "struct OracleUtils.ValidatedPrice",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IOracleProvider__factory {
  static readonly abi = _abi;
  static createInterface(): IOracleProviderInterface {
    return new utils.Interface(_abi) as IOracleProviderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IOracleProvider {
    return new Contract(address, _abi, signerOrProvider) as IOracleProvider;
  }
}
