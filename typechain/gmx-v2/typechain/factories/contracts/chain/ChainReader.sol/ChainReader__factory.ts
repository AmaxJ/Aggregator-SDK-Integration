/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  ChainReader,
  ChainReaderInterface,
} from "../../../../contracts/chain/ChainReader.sol/ChainReader";

const _abi = [
  {
    inputs: [],
    name: "arbSys",
    outputs: [
      {
        internalType: "contract ArbSys",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "getBlockHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "getBlockHashAndLatestBlockNumber",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
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
        internalType: "uint256",
        name: "blockNumberDiff",
        type: "uint256",
      },
    ],
    name: "getBlockHashWithDelayAndLatestBlockNumber",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
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
    name: "getBlockNumber",
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
    name: "latestBlockHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "updateLatestBlockHash",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "updateLatestBlockHashWithDelay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610602806100206000396000f3fe608060405234801561001057600080fd5b50600436106100785760003560e01c80631057d40f1461007d578063160c5908146100a257806316ceb92b146100ca57806326760ad7146100df57806342cbb15c146100e75780636c4f6ba9146100fd578063e920669c14610106578063ee82ac5e14610119575b600080fd5b610085606481565b6040516001600160a01b0390911681526020015b60405180910390f35b6100b56100b0366004610487565b61012c565b60408051928352602083019190915201610099565b6100dd6100d8366004610487565b6101b9565b005b6100dd61022a565b6100ef610243565b604051908152602001610099565b6100ef60005481565b6100b5610114366004610487565b6102ad565b6100ef610127366004610487565b6102b5565b6000806064632b407a828461013f610243565b61014991906104a0565b6040518263ffffffff1660e01b815260040161016791815260200190565b602060405180830381865afa158015610184573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101a891906104c1565b6101b0610243565b91509150915091565b60006101c4826102b5565b905080610224576101d48261031f565b6101e46101df610243565b61031f565b6040516020016101f59291906104fe565b60408051601f198184030181529082905262461bcd60e51b825261021b91600401610583565b60405180910390fd5b60005550565b610241600a610237610243565b6100d891906104a0565b565b600060646001600160a01b031663a3b1b31d6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610284573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102a891906104c1565b905090565b6000806101a8835b6040516315a03d4160e11b815260048101829052600090606490632b407a8290602401602060405180830381865afa1580156102f5573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061031991906104c1565b92915050565b6060600061032c836103b1565b60010190506000816001600160401b0381111561034b5761034b6105b6565b6040519080825280601f01601f191660200182016040528015610375576020820181803683370190505b5090508181016020015b600019016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a850494508461037f57509392505050565b60008072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b83106103f05772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6904ee2d6d415b85acef8160201b831061041a576904ee2d6d415b85acef8160201b830492506020015b662386f26fc10000831061043857662386f26fc10000830492506010015b6305f5e1008310610450576305f5e100830492506008015b612710831061046457612710830492506004015b60648310610476576064830492506002015b600a83106103195760010192915050565b60006020828403121561049957600080fd5b5035919050565b8181038181111561031957634e487b7160e01b600052601160045260246000fd5b6000602082840312156104d357600080fd5b5051919050565b60005b838110156104f55781810151838201526020016104dd565b50506000910152565b7f626c6f636b4861736820697320656d7074792e20626c6f636b4e756d6265723a8152600160fd1b6020820152600083516105408160218501602088016104da565b76016103630ba32b9ba10313637b1b590373ab6b132b91d1604d1b60219184019182015283516105778160388401602088016104da565b01603801949350505050565b60208152600082518060208401526105a28160408501602087016104da565b601f01601f19169190910160400192915050565b634e487b7160e01b600052604160045260246000fdfea2646970667358221220cf085b5d0c9247c2ba38de80778841bb717633f9c5c10373689b981dadb1960a64736f6c63430008120033";

type ChainReaderConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ChainReaderConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ChainReader__factory extends ContractFactory {
  constructor(...args: ChainReaderConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ChainReader> {
    return super.deploy(overrides || {}) as Promise<ChainReader>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ChainReader {
    return super.attach(address) as ChainReader;
  }
  override connect(signer: Signer): ChainReader__factory {
    return super.connect(signer) as ChainReader__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ChainReaderInterface {
    return new utils.Interface(_abi) as ChainReaderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ChainReader {
    return new Contract(address, _abi, signerOrProvider) as ChainReader;
  }
}
