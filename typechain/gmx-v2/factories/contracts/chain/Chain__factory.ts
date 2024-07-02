/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { Chain, ChainInterface } from "../../../contracts/chain/Chain";

const _abi = [
  {
    inputs: [],
    name: "ARBITRUM_CHAIN_ID",
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
    name: "ARBITRUM_GOERLI_CHAIN_ID",
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
    name: "arbSys",
    outputs: [
      {
        internalType: "contract ArbSys",
        name: "",
        type: "ArbSys",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60c4610039600b82828239805160001a60731461002c57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060475760003560e01c80631057d40f14604c5780631a0cbd4f146070578063cdcdd548146086575b600080fd5b6053606481565b6040516001600160a01b0390911681526020015b60405180910390f35b607962066eed81565b6040519081526020016067565b607961a4b18156fea26469706673582212208a8d54c13d623d365f12905753d6f4177d0fb4f7f2780bc881dc88ee7459b97164736f6c63430008120033";

type ChainConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ChainConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Chain__factory extends ContractFactory {
  constructor(...args: ChainConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Chain> {
    return super.deploy(overrides || {}) as Promise<Chain>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Chain {
    return super.attach(address) as Chain;
  }
  override connect(signer: Signer): Chain__factory {
    return super.connect(signer) as Chain__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ChainInterface {
    return new utils.Interface(_abi) as ChainInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Chain {
    return new Contract(address, _abi, signerOrProvider) as Chain;
  }
}
