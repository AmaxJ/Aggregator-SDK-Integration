/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  CalcTest,
  CalcTestInterface,
} from "../../../contracts/test/CalcTest";

const _abi = [
  {
    inputs: [
      {
        internalType: "int256",
        name: "value",
        type: "int256",
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
    ],
    name: "boundMagnitude",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610246806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063f155aa0114610030575b600080fd5b61004361003e366004610162565b610055565b60405190815260200160405180910390f35b600061006284848461006a565b949350505050565b600080610076856100d9565b9050838110156100835750825b8281111561008e5750815b600085156100b6576100a76100a2876100d9565b6100f4565b6100b190876101a4565b6100b9565b60015b9050806100c5836100f4565b6100cf91906101e0565b9695505050505050565b6000808212156100ec57816000036100ee565b815b92915050565b60006001600160ff1b038211156100ec5760405162461bcd60e51b815260206004820152602860248201527f53616665436173743a2076616c756520646f65736e27742066697420696e2061604482015267371034b73a191a9b60c11b606482015260840160405180910390fd5b60008060006060848603121561017757600080fd5b505081359360208301359350604090920135919050565b634e487b7160e01b600052601160045260246000fd5b6000826101c157634e487b7160e01b600052601260045260246000fd5b600160ff1b8214600019841416156101db576101db61018e565b500590565b80820260008212600160ff1b841416156101fc576101fc61018e565b81810583148215176100ee576100ee61018e56fea2646970667358221220825168e2cd05d9ea7a846c4010cdb5f592d565bddf7da396c6759fdc406171ce64736f6c63430008120033";

type CalcTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CalcTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CalcTest__factory extends ContractFactory {
  constructor(...args: CalcTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<CalcTest> {
    return super.deploy(overrides || {}) as Promise<CalcTest>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): CalcTest {
    return super.attach(address) as CalcTest;
  }
  override connect(signer: Signer): CalcTest__factory {
    return super.connect(signer) as CalcTest__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CalcTestInterface {
    return new utils.Interface(_abi) as CalcTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CalcTest {
    return new Contract(address, _abi, signerOrProvider) as CalcTest;
  }
}
