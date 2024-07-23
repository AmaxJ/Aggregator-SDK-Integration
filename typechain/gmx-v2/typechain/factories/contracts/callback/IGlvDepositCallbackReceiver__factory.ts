/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IGlvDepositCallbackReceiver,
  IGlvDepositCallbackReceiverInterface,
} from "../../../contracts/callback/IGlvDepositCallbackReceiver";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "glv",
                type: "address",
              },
              {
                internalType: "address",
                name: "account",
                type: "address",
              },
              {
                internalType: "address",
                name: "receiver",
                type: "address",
              },
              {
                internalType: "address",
                name: "callbackContract",
                type: "address",
              },
              {
                internalType: "address",
                name: "uiFeeReceiver",
                type: "address",
              },
              {
                internalType: "address",
                name: "market",
                type: "address",
              },
              {
                internalType: "address",
                name: "initialLongToken",
                type: "address",
              },
              {
                internalType: "address",
                name: "initialShortToken",
                type: "address",
              },
              {
                internalType: "address[]",
                name: "longTokenSwapPath",
                type: "address[]",
              },
              {
                internalType: "address[]",
                name: "shortTokenSwapPath",
                type: "address[]",
              },
            ],
            internalType: "struct GlvDeposit.Addresses",
            name: "addresses",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "initialLongTokenAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "initialShortTokenAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "minGlvTokens",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "updatedAtBlock",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "updatedAtTime",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "executionFee",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "callbackGasLimit",
                type: "uint256",
              },
            ],
            internalType: "struct GlvDeposit.Numbers",
            name: "numbers",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "bool",
                name: "shouldUnwrapNativeToken",
                type: "bool",
              },
            ],
            internalType: "struct GlvDeposit.Flags",
            name: "flags",
            type: "tuple",
          },
        ],
        internalType: "struct GlvDeposit.Props",
        name: "glvDeposit",
        type: "tuple",
      },
      {
        components: [
          {
            components: [
              {
                components: [
                  {
                    internalType: "string",
                    name: "key",
                    type: "string",
                  },
                  {
                    internalType: "address",
                    name: "value",
                    type: "address",
                  },
                ],
                internalType: "struct EventUtils.AddressKeyValue[]",
                name: "items",
                type: "tuple[]",
              },
              {
                components: [
                  {
                    internalType: "string",
                    name: "key",
                    type: "string",
                  },
                  {
                    internalType: "address[]",
                    name: "value",
                    type: "address[]",
                  },
                ],
                internalType: "struct EventUtils.AddressArrayKeyValue[]",
                name: "arrayItems",
                type: "tuple[]",
              },
            ],
            internalType: "struct EventUtils.AddressItems",
            name: "addressItems",
            type: "tuple",
          },
          {
            components: [
              {
                components: [
                  {
                    internalType: "string",
                    name: "key",
                    type: "string",
                  },
                  {
                    internalType: "uint256",
                    name: "value",
                    type: "uint256",
                  },
                ],
                internalType: "struct EventUtils.UintKeyValue[]",
                name: "items",
                type: "tuple[]",
              },
              {
                components: [
                  {
                    internalType: "string",
                    name: "key",
                    type: "string",
                  },
                  {
                    internalType: "uint256[]",
                    name: "value",
                    type: "uint256[]",
                  },
                ],
                internalType: "struct EventUtils.UintArrayKeyValue[]",
                name: "arrayItems",
                type: "tuple[]",
              },
            ],
            internalType: "struct EventUtils.UintItems",
            name: "uintItems",
            type: "tuple",
          },
          {
            components: [
              {
                components: [
                  {
                    internalType: "string",
                    name: "key",
                    type: "string",
                  },
                  {
                    internalType: "int256",
                    name: "value",
                    type: "int256",
                  },
                ],
                internalType: "struct EventUtils.IntKeyValue[]",
                name: "items",
                type: "tuple[]",
              },
              {
                components: [
                  {
                    internalType: "string",
                    name: "key",
                    type: "string",
                  },
                  {
                    internalType: "int256[]",
                    name: "value",
                    type: "int256[]",
                  },
                ],
                internalType: "struct EventUtils.IntArrayKeyValue[]",
                name: "arrayItems",
                type: "tuple[]",
              },
            ],
            internalType: "struct EventUtils.IntItems",
            name: "intItems",
            type: "tuple",
          },
          {
            components: [
              {
                components: [
                  {
                    internalType: "string",
                    name: "key",
                    type: "string",
                  },
                  {
                    internalType: "bool",
                    name: "value",
                    type: "bool",
                  },
                ],
                internalType: "struct EventUtils.BoolKeyValue[]",
                name: "items",
                type: "tuple[]",
              },
              {
                components: [
                  {
                    internalType: "string",
                    name: "key",
                    type: "string",
                  },
                  {
                    internalType: "bool[]",
                    name: "value",
                    type: "bool[]",
                  },
                ],
                internalType: "struct EventUtils.BoolArrayKeyValue[]",
                name: "arrayItems",
                type: "tuple[]",
              },
            ],
            internalType: "struct EventUtils.BoolItems",
            name: "boolItems",
            type: "tuple",
          },
          {
            components: [
              {
                components: [
                  {
                    internalType: "string",
                    name: "key",
                    type: "string",
                  },
                  {
                    internalType: "bytes32",
                    name: "value",
                    type: "bytes32",
                  },
                ],
                internalType: "struct EventUtils.Bytes32KeyValue[]",
                name: "items",
                type: "tuple[]",
              },
              {
                components: [
                  {
                    internalType: "string",
                    name: "key",
                    type: "string",
                  },
                  {
                    internalType: "bytes32[]",
                    name: "value",
                    type: "bytes32[]",
                  },
                ],
                internalType: "struct EventUtils.Bytes32ArrayKeyValue[]",
                name: "arrayItems",
                type: "tuple[]",
              },
            ],
            internalType: "struct EventUtils.Bytes32Items",
            name: "bytes32Items",
            type: "tuple",
          },
          {
            components: [
              {
                components: [
                  {
                    internalType: "string",
                    name: "key",
                    type: "string",
                  },
                  {
                    internalType: "bytes",
                    name: "value",
                    type: "bytes",
                  },
                ],
                internalType: "struct EventUtils.BytesKeyValue[]",
                name: "items",
                type: "tuple[]",
              },
              {
                components: [
                  {
                    internalType: "string",
                    name: "key",
                    type: "string",
                  },
                  {
                    internalType: "bytes[]",
                    name: "value",
                    type: "bytes[]",
                  },
                ],
                internalType: "struct EventUtils.BytesArrayKeyValue[]",
                name: "arrayItems",
                type: "tuple[]",
              },
            ],
            internalType: "struct EventUtils.BytesItems",
            name: "bytesItems",
            type: "tuple",
          },
          {
            components: [
              {
                components: [
                  {
                    internalType: "string",
                    name: "key",
                    type: "string",
                  },
                  {
                    internalType: "string",
                    name: "value",
                    type: "string",
                  },
                ],
                internalType: "struct EventUtils.StringKeyValue[]",
                name: "items",
                type: "tuple[]",
              },
              {
                components: [
                  {
                    internalType: "string",
                    name: "key",
                    type: "string",
                  },
                  {
                    internalType: "string[]",
                    name: "value",
                    type: "string[]",
                  },
                ],
                internalType: "struct EventUtils.StringArrayKeyValue[]",
                name: "arrayItems",
                type: "tuple[]",
              },
            ],
            internalType: "struct EventUtils.StringItems",
            name: "stringItems",
            type: "tuple",
          },
        ],
        internalType: "struct EventUtils.EventLogData",
        name: "eventData",
        type: "tuple",
      },
    ],
    name: "afterGlvDepositCancellation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "glv",
                type: "address",
              },
              {
                internalType: "address",
                name: "account",
                type: "address",
              },
              {
                internalType: "address",
                name: "receiver",
                type: "address",
              },
              {
                internalType: "address",
                name: "callbackContract",
                type: "address",
              },
              {
                internalType: "address",
                name: "uiFeeReceiver",
                type: "address",
              },
              {
                internalType: "address",
                name: "market",
                type: "address",
              },
              {
                internalType: "address",
                name: "initialLongToken",
                type: "address",
              },
              {
                internalType: "address",
                name: "initialShortToken",
                type: "address",
              },
              {
                internalType: "address[]",
                name: "longTokenSwapPath",
                type: "address[]",
              },
              {
                internalType: "address[]",
                name: "shortTokenSwapPath",
                type: "address[]",
              },
            ],
            internalType: "struct GlvDeposit.Addresses",
            name: "addresses",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "initialLongTokenAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "initialShortTokenAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "minGlvTokens",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "updatedAtBlock",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "updatedAtTime",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "executionFee",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "callbackGasLimit",
                type: "uint256",
              },
            ],
            internalType: "struct GlvDeposit.Numbers",
            name: "numbers",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "bool",
                name: "shouldUnwrapNativeToken",
                type: "bool",
              },
            ],
            internalType: "struct GlvDeposit.Flags",
            name: "flags",
            type: "tuple",
          },
        ],
        internalType: "struct GlvDeposit.Props",
        name: "glvDeposit",
        type: "tuple",
      },
      {
        components: [
          {
            components: [
              {
                components: [
                  {
                    internalType: "string",
                    name: "key",
                    type: "string",
                  },
                  {
                    internalType: "address",
                    name: "value",
                    type: "address",
                  },
                ],
                internalType: "struct EventUtils.AddressKeyValue[]",
                name: "items",
                type: "tuple[]",
              },
              {
                components: [
                  {
                    internalType: "string",
                    name: "key",
                    type: "string",
                  },
                  {
                    internalType: "address[]",
                    name: "value",
                    type: "address[]",
                  },
                ],
                internalType: "struct EventUtils.AddressArrayKeyValue[]",
                name: "arrayItems",
                type: "tuple[]",
              },
            ],
            internalType: "struct EventUtils.AddressItems",
            name: "addressItems",
            type: "tuple",
          },
          {
            components: [
              {
                components: [
                  {
                    internalType: "string",
                    name: "key",
                    type: "string",
                  },
                  {
                    internalType: "uint256",
                    name: "value",
                    type: "uint256",
                  },
                ],
                internalType: "struct EventUtils.UintKeyValue[]",
                name: "items",
                type: "tuple[]",
              },
              {
                components: [
                  {
                    internalType: "string",
                    name: "key",
                    type: "string",
                  },
                  {
                    internalType: "uint256[]",
                    name: "value",
                    type: "uint256[]",
                  },
                ],
                internalType: "struct EventUtils.UintArrayKeyValue[]",
                name: "arrayItems",
                type: "tuple[]",
              },
            ],
            internalType: "struct EventUtils.UintItems",
            name: "uintItems",
            type: "tuple",
          },
          {
            components: [
              {
                components: [
                  {
                    internalType: "string",
                    name: "key",
                    type: "string",
                  },
                  {
                    internalType: "int256",
                    name: "value",
                    type: "int256",
                  },
                ],
                internalType: "struct EventUtils.IntKeyValue[]",
                name: "items",
                type: "tuple[]",
              },
              {
                components: [
                  {
                    internalType: "string",
                    name: "key",
                    type: "string",
                  },
                  {
                    internalType: "int256[]",
                    name: "value",
                    type: "int256[]",
                  },
                ],
                internalType: "struct EventUtils.IntArrayKeyValue[]",
                name: "arrayItems",
                type: "tuple[]",
              },
            ],
            internalType: "struct EventUtils.IntItems",
            name: "intItems",
            type: "tuple",
          },
          {
            components: [
              {
                components: [
                  {
                    internalType: "string",
                    name: "key",
                    type: "string",
                  },
                  {
                    internalType: "bool",
                    name: "value",
                    type: "bool",
                  },
                ],
                internalType: "struct EventUtils.BoolKeyValue[]",
                name: "items",
                type: "tuple[]",
              },
              {
                components: [
                  {
                    internalType: "string",
                    name: "key",
                    type: "string",
                  },
                  {
                    internalType: "bool[]",
                    name: "value",
                    type: "bool[]",
                  },
                ],
                internalType: "struct EventUtils.BoolArrayKeyValue[]",
                name: "arrayItems",
                type: "tuple[]",
              },
            ],
            internalType: "struct EventUtils.BoolItems",
            name: "boolItems",
            type: "tuple",
          },
          {
            components: [
              {
                components: [
                  {
                    internalType: "string",
                    name: "key",
                    type: "string",
                  },
                  {
                    internalType: "bytes32",
                    name: "value",
                    type: "bytes32",
                  },
                ],
                internalType: "struct EventUtils.Bytes32KeyValue[]",
                name: "items",
                type: "tuple[]",
              },
              {
                components: [
                  {
                    internalType: "string",
                    name: "key",
                    type: "string",
                  },
                  {
                    internalType: "bytes32[]",
                    name: "value",
                    type: "bytes32[]",
                  },
                ],
                internalType: "struct EventUtils.Bytes32ArrayKeyValue[]",
                name: "arrayItems",
                type: "tuple[]",
              },
            ],
            internalType: "struct EventUtils.Bytes32Items",
            name: "bytes32Items",
            type: "tuple",
          },
          {
            components: [
              {
                components: [
                  {
                    internalType: "string",
                    name: "key",
                    type: "string",
                  },
                  {
                    internalType: "bytes",
                    name: "value",
                    type: "bytes",
                  },
                ],
                internalType: "struct EventUtils.BytesKeyValue[]",
                name: "items",
                type: "tuple[]",
              },
              {
                components: [
                  {
                    internalType: "string",
                    name: "key",
                    type: "string",
                  },
                  {
                    internalType: "bytes[]",
                    name: "value",
                    type: "bytes[]",
                  },
                ],
                internalType: "struct EventUtils.BytesArrayKeyValue[]",
                name: "arrayItems",
                type: "tuple[]",
              },
            ],
            internalType: "struct EventUtils.BytesItems",
            name: "bytesItems",
            type: "tuple",
          },
          {
            components: [
              {
                components: [
                  {
                    internalType: "string",
                    name: "key",
                    type: "string",
                  },
                  {
                    internalType: "string",
                    name: "value",
                    type: "string",
                  },
                ],
                internalType: "struct EventUtils.StringKeyValue[]",
                name: "items",
                type: "tuple[]",
              },
              {
                components: [
                  {
                    internalType: "string",
                    name: "key",
                    type: "string",
                  },
                  {
                    internalType: "string[]",
                    name: "value",
                    type: "string[]",
                  },
                ],
                internalType: "struct EventUtils.StringArrayKeyValue[]",
                name: "arrayItems",
                type: "tuple[]",
              },
            ],
            internalType: "struct EventUtils.StringItems",
            name: "stringItems",
            type: "tuple",
          },
        ],
        internalType: "struct EventUtils.EventLogData",
        name: "eventData",
        type: "tuple",
      },
    ],
    name: "afterGlvDepositExecution",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IGlvDepositCallbackReceiver__factory {
  static readonly abi = _abi;
  static createInterface(): IGlvDepositCallbackReceiverInterface {
    return new utils.Interface(_abi) as IGlvDepositCallbackReceiverInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IGlvDepositCallbackReceiver {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IGlvDepositCallbackReceiver;
  }
}
