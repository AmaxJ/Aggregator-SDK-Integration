/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  GasUsageTestLib,
  GasUsageTestLibInterface,
} from "../../../../contracts/test/GasUsageTest.sol/GasUsageTestLib";

const _abi = [
  {
    inputs: [],
    name: "getGasLeft",
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
] as const;

const _bytecode =
  "0x608e610038600b82828239805160001a607314602b57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c806351be4eaa146038575b600080fd5b603e6050565b60405190815260200160405180910390f35b60005a90509056fea2646970667358221220b915df1ccafd763c906edee661044a951a4f04abd91517e9c6e92aef44f79b8564736f6c63430008120033";

type GasUsageTestLibConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GasUsageTestLibConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GasUsageTestLib__factory extends ContractFactory {
  constructor(...args: GasUsageTestLibConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<GasUsageTestLib> {
    return super.deploy(overrides || {}) as Promise<GasUsageTestLib>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): GasUsageTestLib {
    return super.attach(address) as GasUsageTestLib;
  }
  override connect(signer: Signer): GasUsageTestLib__factory {
    return super.connect(signer) as GasUsageTestLib__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GasUsageTestLibInterface {
    return new utils.Interface(_abi) as GasUsageTestLibInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GasUsageTestLib {
    return new Contract(address, _abi, signerOrProvider) as GasUsageTestLib;
  }
}
