/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  CounterTest,
  CounterTestInterface,
} from "../../../../contracts/test/AssemblyReturnTest.sol/CounterTest";

const _abi = [
  {
    inputs: [],
    name: "count",
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
    name: "increment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052600160005534801561001557600080fd5b5060cc806100246000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c806306661abd146037578063d09de08a146051575b600080fd5b603f60005481565b60405190815260200160405180910390f35b60576059565b005b6000805490806066836070565b9190505560206040f35b600060018201608f57634e487b7160e01b600052601160045260246000fd5b506001019056fea2646970667358221220c92a7773095caf46eb7d1172c45623b04b8568e1e51882d36570d64ef2e239dd64736f6c63430008120033";

type CounterTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CounterTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CounterTest__factory extends ContractFactory {
  constructor(...args: CounterTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<CounterTest> {
    return super.deploy(overrides || {}) as Promise<CounterTest>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): CounterTest {
    return super.attach(address) as CounterTest;
  }
  override connect(signer: Signer): CounterTest__factory {
    return super.connect(signer) as CounterTest__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CounterTestInterface {
    return new utils.Interface(_abi) as CounterTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CounterTest {
    return new Contract(address, _abi, signerOrProvider) as CounterTest;
  }
}
