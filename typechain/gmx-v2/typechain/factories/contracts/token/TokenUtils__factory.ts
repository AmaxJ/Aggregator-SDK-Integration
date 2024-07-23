/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  TokenUtils,
  TokenUtilsInterface,
} from "../../../contracts/token/TokenUtils";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "reason",
        type: "string",
      },
    ],
    name: "NativeTokenTransferReverted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "reason",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "returndata",
        type: "bytes",
      },
    ],
    name: "TokenTransferReverted",
    type: "event",
  },
] as const;

const _bytecode =
  "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212209b0307a2cf7d7dc81ec5ffdc2ce04df474488b4190c765eaba911ac768fc921564736f6c63430008120033";

type TokenUtilsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TokenUtilsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TokenUtils__factory extends ContractFactory {
  constructor(...args: TokenUtilsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TokenUtils> {
    return super.deploy(overrides || {}) as Promise<TokenUtils>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TokenUtils {
    return super.attach(address) as TokenUtils;
  }
  override connect(signer: Signer): TokenUtils__factory {
    return super.connect(signer) as TokenUtils__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenUtilsInterface {
    return new utils.Interface(_abi) as TokenUtilsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TokenUtils {
    return new Contract(address, _abi, signerOrProvider) as TokenUtils;
  }
}