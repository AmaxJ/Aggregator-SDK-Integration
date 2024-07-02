/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  MintableToken,
  MintableTokenInterface,
} from "../../../contracts/mock/MintableToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "decimals_",
        type: "uint8",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000d9b38038062000d9b833981016040819052620000349162000139565b828260036200004483826200024d565b5060046200005382826200024d565b50506005805460ff191660ff93909316929092179091555062000319915050565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200009c57600080fd5b81516001600160401b0380821115620000b957620000b962000074565b604051601f8301601f19908116603f01168101908282118183101715620000e457620000e462000074565b816040528381526020925086838588010111156200010157600080fd5b600091505b8382101562000125578582018301518183018401529082019062000106565b600093810190920192909252949350505050565b6000806000606084860312156200014f57600080fd5b83516001600160401b03808211156200016757600080fd5b62000175878388016200008a565b945060208601519150808211156200018c57600080fd5b506200019b868287016200008a565b925050604084015160ff81168114620001b357600080fd5b809150509250925092565b600181811c90821680620001d357607f821691505b602082108103620001f457634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200024857600081815260208120601f850160051c81016020861015620002235750805b601f850160051c820191505b8181101562000244578281556001016200022f565b5050505b505050565b81516001600160401b0381111562000269576200026962000074565b62000281816200027a8454620001be565b84620001fa565b602080601f831160018114620002b95760008415620002a05750858301515b600019600386901b1c1916600185901b17855562000244565b600085815260208120601f198616915b82811015620002ea57888601518255948401946001909101908401620002c9565b5085821015620003095787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b610a7280620003296000396000f3fe608060405234801561001057600080fd5b50600436106100af5760003560e01c806306fdde03146100b4578063095ea7b3146100d257806318160ddd146100f557806323b872dd14610107578063313ce5671461011a578063395093511461012f57806340c10f191461014257806370a082311461015757806395d89b41146101805780639dc29fac14610188578063a457c2d71461019b578063a9059cbb146101ae578063dd62ed3e146101c1575b600080fd5b6100bc6101d4565b6040516100c9919061089c565b60405180910390f35b6100e56100e0366004610906565b610266565b60405190151581526020016100c9565b6002545b6040519081526020016100c9565b6100e5610115366004610930565b610280565b60055460405160ff90911681526020016100c9565b6100e561013d366004610906565b6102a4565b610155610150366004610906565b6102c6565b005b6100f961016536600461096c565b6001600160a01b031660009081526020819052604090205490565b6100bc6102d4565b610155610196366004610906565b6102e3565b6100e56101a9366004610906565b6102ed565b6100e56101bc366004610906565b61036d565b6100f96101cf36600461098e565b61037b565b6060600380546101e3906109c1565b80601f016020809104026020016040519081016040528092919081815260200182805461020f906109c1565b801561025c5780601f106102315761010080835404028352916020019161025c565b820191906000526020600020905b81548152906001019060200180831161023f57829003601f168201915b5050505050905090565b6000336102748185856103a6565b60019150505b92915050565b60003361028e8582856104cb565b610299858585610545565b506001949350505050565b6000336102748185856102b7838361037b565b6102c191906109fb565b6103a6565b6102d082826106d7565b5050565b6060600480546101e3906109c1565b6102d08282610784565b600033816102fb828661037b565b9050838110156103605760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084015b60405180910390fd5b61029982868684036103a6565b600033610274818585610545565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b0383166104085760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610357565b6001600160a01b0382166104695760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610357565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b60006104d7848461037b565b9050600019811461053f57818110156105325760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610357565b61053f84848484036103a6565b50505050565b6001600160a01b0383166105a95760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610357565b6001600160a01b03821661060b5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610357565b6001600160a01b038316600090815260208190526040902054818110156106835760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610357565b6001600160a01b0384811660008181526020818152604080832087870390559387168083529184902080548701905592518581529092600080516020610a1d833981519152910160405180910390a361053f565b6001600160a01b03821661072d5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610357565b806002600082825461073f91906109fb565b90915550506001600160a01b03821660008181526020818152604080832080548601905551848152600080516020610a1d833981519152910160405180910390a35050565b6001600160a01b0382166107e45760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608401610357565b6001600160a01b038216600090815260208190526040902054818110156108585760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608401610357565b6001600160a01b038316600081815260208181526040808320868603905560028054879003905551858152919291600080516020610a1d83398151915291016104be565b600060208083528351808285015260005b818110156108c9578581018301518582016040015282016108ad565b506000604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b038116811461090157600080fd5b919050565b6000806040838503121561091957600080fd5b610922836108ea565b946020939093013593505050565b60008060006060848603121561094557600080fd5b61094e846108ea565b925061095c602085016108ea565b9150604084013590509250925092565b60006020828403121561097e57600080fd5b610987826108ea565b9392505050565b600080604083850312156109a157600080fd5b6109aa836108ea565b91506109b8602084016108ea565b90509250929050565b600181811c908216806109d557607f821691505b6020821081036109f557634e487b7160e01b600052602260045260246000fd5b50919050565b8082018082111561027a57634e487b7160e01b600052601160045260246000fdfeddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa2646970667358221220f9885b5c87dc88bce3d121b3c1f48cccc0d1ff53bc8cb53aa34900dadfb90e3464736f6c63430008120033";

type MintableTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MintableTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MintableToken__factory extends ContractFactory {
  constructor(...args: MintableTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name_: PromiseOrValue<string>,
    symbol_: PromiseOrValue<string>,
    decimals_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MintableToken> {
    return super.deploy(
      name_,
      symbol_,
      decimals_,
      overrides || {}
    ) as Promise<MintableToken>;
  }
  override getDeployTransaction(
    name_: PromiseOrValue<string>,
    symbol_: PromiseOrValue<string>,
    decimals_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      name_,
      symbol_,
      decimals_,
      overrides || {}
    );
  }
  override attach(address: string): MintableToken {
    return super.attach(address) as MintableToken;
  }
  override connect(signer: Signer): MintableToken__factory {
    return super.connect(signer) as MintableToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MintableTokenInterface {
    return new utils.Interface(_abi) as MintableTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MintableToken {
    return new Contract(address, _abi, signerOrProvider) as MintableToken;
  }
}
