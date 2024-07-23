/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  MockPriceFeed,
  MockPriceFeedInterface,
} from "../../../contracts/mock/MockPriceFeed";

const _abi = [
  {
    inputs: [],
    name: "answer",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "latestAnswer",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "latestRoundData",
    outputs: [
      {
        internalType: "uint80",
        name: "",
        type: "uint80",
      },
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint80",
        name: "",
        type: "uint80",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "_answer",
        type: "int256",
      },
    ],
    name: "setAnswer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610165806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806350d25bcd1461005157806385bb7d691461006857806399213cd814610071578063feaf968c14610086575b600080fd5b6000545b6040519081526020015b60405180910390f35b61005560005481565b61008461007f3660046100ef565b600055565b005b61008e6100c2565b604080516001600160501b03968716815260208101959095528401929092526060830152909116608082015260a00161005f565b6000806000806000806000546000603c426100dd9190610108565b92989197509550909350600092509050565b60006020828403121561010157600080fd5b5035919050565b8181038181111561012957634e487b7160e01b600052601160045260246000fd5b9291505056fea2646970667358221220ac61b2e770bf6de4fc08f0a334718c9ad2b6f349f2c03fbfa9cfa517c78ede7464736f6c63430008120033";

type MockPriceFeedConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockPriceFeedConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockPriceFeed__factory extends ContractFactory {
  constructor(...args: MockPriceFeedConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MockPriceFeed> {
    return super.deploy(overrides || {}) as Promise<MockPriceFeed>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MockPriceFeed {
    return super.attach(address) as MockPriceFeed;
  }
  override connect(signer: Signer): MockPriceFeed__factory {
    return super.connect(signer) as MockPriceFeed__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockPriceFeedInterface {
    return new utils.Interface(_abi) as MockPriceFeedInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockPriceFeed {
    return new Contract(address, _abi, signerOrProvider) as MockPriceFeed;
  }
}