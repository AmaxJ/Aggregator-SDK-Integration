/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  GmOracleProvider,
  GmOracleProviderInterface,
} from "../../../contracts/oracle/GmOracleProvider";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract RoleStore",
        name: "_roleStore",
        type: "address",
      },
      {
        internalType: "contract DataStore",
        name: "_dataStore",
        type: "address",
      },
      {
        internalType: "contract OracleStore",
        name: "_oracleStore",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "label",
        type: "string",
      },
    ],
    name: "DuplicatedIndex",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "signerIndex",
        type: "uint256",
      },
    ],
    name: "GmEmptySigner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "minOracleBlockNumber",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "currentBlockNumber",
        type: "uint256",
      },
    ],
    name: "GmInvalidBlockNumber",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "minOracleBlockNumber",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxOracleBlockNumber",
        type: "uint256",
      },
    ],
    name: "GmInvalidMinMaxBlockNumber",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "oracleSigners",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxOracleSigners",
        type: "uint256",
      },
    ],
    name: "GmMaxOracleSigners",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "prevPrice",
        type: "uint256",
      },
    ],
    name: "GmMaxPricesNotSorted",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "signerIndex",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxSignerIndex",
        type: "uint256",
      },
    ],
    name: "GmMaxSignerIndex",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "oracleSigners",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minOracleSigners",
        type: "uint256",
      },
    ],
    name: "GmMinOracleSigners",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "prevPrice",
        type: "uint256",
      },
    ],
    name: "GmMinPricesNotSorted",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "minPrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxPrice",
        type: "uint256",
      },
    ],
    name: "InvalidGmMedianMinMaxPrice",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "InvalidGmOraclePrice",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recoveredSigner",
        type: "address",
      },
      {
        internalType: "address",
        name: "expectedSigner",
        type: "address",
      },
    ],
    name: "InvalidGmSignature",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "minPrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxPrice",
        type: "uint256",
      },
    ],
    name: "InvalidGmSignerMinMaxPrice",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "label",
        type: "string",
      },
    ],
    name: "MaskIndexOutOfBounds",
    type: "error",
  },
  {
    inputs: [],
    name: "MAX_SIGNERS",
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
    name: "MAX_SIGNER_INDEX",
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
    name: "SIGNER_INDEX_LENGTH",
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
    name: "dataStore",
    outputs: [
      {
        internalType: "contract DataStore",
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
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "oracleStore",
    outputs: [
      {
        internalType: "contract OracleStore",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "roleStore",
    outputs: [
      {
        internalType: "contract RoleStore",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60e06040523480156200001157600080fd5b506040516200180c3803806200180c83398101604081905262000034916200006b565b6001600160a01b0392831660805290821660a0521660c052620000bf565b6001600160a01b03811681146200006857600080fd5b50565b6000806000606084860312156200008157600080fd5b83516200008e8162000052565b6020850151909350620000a18162000052565b6040850151909250620000b48162000052565b809150509250925092565b60805160a05160c0516117026200010a6000396000818160dc015261094a01526000818161015501528181610269015281816106c1015261077e0152600061012601526117026000f3fe608060405234801561001057600080fd5b506004361061006d5760003560e01c8063377bbdaf14610072578063392bf7f6146100d75780633b9f9bd21461010b5780634a4a7b041461012157806359ecd65714610148578063660d0d6714610150578063b74da61d14610177575b600080fd5b61008561008036600461110e565b610180565b6040516100ce919081516001600160a01b039081168252602080840151908301526040808401519083015260608084015190830152608092830151169181019190915260a00190565b60405180910390f35b6100fe7f000000000000000000000000000000000000000000000000000000000000000081565b6040516100ce91906111a0565b610113601081565b6040519081526020016100ce565b6100fe7f000000000000000000000000000000000000000000000000000000000000000081565b610113610657565b6100fe7f000000000000000000000000000000000000000000000000000000000000000081565b61011361010081565b6101c46040518060a0016040528060006001600160a01b0316815260200160008152602001600081526020016000815260200160006001600160a01b031681525090565b6000828060200190518101906101da919061132c565b905060006101eb8260200151610673565b905081608001518260600151111561022b578160600151826080015160405163b8aaa45560e01b8152600401610222929190611434565b60405180910390fd5b610233610a5a565b82608001511061026557816080015161024a610a5a565b60405163ee6e8ecf60e01b8152600401610222929190611434565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663a6ed563e61029f88610ad6565b6040518263ffffffff1660e01b81526004016102bd91815260200190565b602060405180830381865afa1580156102da573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102fe9190611442565b905060005b825181101561048e57801561047c578360e0015181815181106103285761032861145b565b60200260200101518460e001516001836103429190611487565b815181106103525761035261145b565b602002602001015111156103c557868460e0015182815181106103775761037761145b565b60200260200101518560e001516001846103919190611487565b815181106103a1576103a161145b565b602002602001015160405163cc7bbd5b60e01b81526004016102229392919061149a565b83610100015181815181106103dc576103dc61145b565b60200260200101518461010001516001836103f79190611487565b815181106104075761040761145b565b6020026020010151111561047c5786846101000151828151811061042d5761042d61145b565b60200260200101518561010001516001846104489190611487565b815181106104585761045861145b565b60200260200101516040516307c42f2960e11b81526004016102229392919061149a565b80610486816114bb565b915050610303565b506000610499610b51565b905060005b835181101561056d5760008560e0015182815181106104bf576104bf61145b565b60200260200101519050600086610100015183815181106104e2576104e261145b565b602002602001015190508082111561051157818160405163590e431f60e11b8152600401610222929190611434565b61055884888c85858a8d61012001518a815181106105315761053161145b565b60200260200101518d8b8151811061054b5761054b61145b565b6020026020010151610ba7565b50508080610565906114bb565b91505061049e565b5060008460400151600a61058191906115b8565b61058e8660e00151610cd1565b61059891906115cb565b905060008560400151600a6105ad91906115b8565b6105bb876101000151610cd1565b6105c591906115cb565b90508115806105d2575080155b156105f2578860405163a54d433960e01b815260040161022291906111a0565b8082111561061757818160405163993417d560e01b8152600401610222929190611434565b6040805160a080820183526001600160a01b038c168252602082019490945290810191909152940151606085015250503060808301525090505b92915050565b600161066660106101006115f8565b6106709190611487565b81565b6060600061ffff83166001600160401b0381111561069357610693611078565b6040519080825280602002602001820160405280156106bc578160200160208202803683370190505b5090507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663bd02d0f56040516020016106fd9061160c565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b815260040161073191815260200190565b602060405180830381865afa15801561074e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107729190611442565b8151101561084a5780517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663bd02d0f56040516020016107ba9061160c565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b81526004016107ee91815260200190565b602060405180830381865afa15801561080b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061082f9190611442565b60405163dc2a99e760e01b8152600401610222929190611434565b600161085960106101006115f8565b6108639190611487565b815111156108a1578051600161087c60106101006115f8565b6108869190611487565b6040516318f6896560e31b8152600401610222929190611434565b60408051602081019091526000815260005b8251811015610a5157600061ffff6108cc8360106115cb565b6108d7906010611638565b87901c16905061010081106109055780610100604051635b1250e760e01b8152600401610222929190611434565b60408051808201909152600b81526a0e6d2cedccae492dcc8caf60ab1b60208201526109349084908390610d86565b604051631fff7f2760e11b8152600481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690633ffefe4e90602401602060405180830381865afa158015610999573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109bd919061164b565b8483815181106109cf576109cf61145b565b60200260200101906001600160a01b031690816001600160a01b03168152505060006001600160a01b0316848381518110610a0c57610a0c61145b565b60200260200101516001600160a01b031603610a3e57604051636c855f0360e11b815260048101829052602401610222565b5080610a49816114bb565b9150506108b3565b50909392505050565b6000610a64610de1565b15610ad15760646001600160a01b031663a3b1b31d6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610aa8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610acc9190611442565b905090565b504390565b6000604051602001610b07906020808252600b908201526a4f5241434c455f5459504560a81b604082015260600190565b60408051601f198184030181528282528051602091820120908301526001600160a01b03841690820152606001604051602081830303815290604052805190602001209050919050565b600046604051602001610b8c918152604060208201819052600e908201526d786765742d6f7261636c652d763160901b606082015260800190565b60405160208183030381529060405280519060200120905090565b6000610c708989606001518a608001518b60a001518c60c001518c8a8f60400151600a610bd491906115b8565b6040805160208101999099528801969096526060870194909452608086019290925260a08501526001600160a01b031660c084015260e08301526101008201526101208101889052610140810187905261016001604051602081830303815290604052805190602001207b0ca2ba3432b932bab69029b4b3b732b21026b2b9b9b0b3b29d05199960211b6000908152601c91909152603c902090565b90506000610c7e8285610df8565b9050826001600160a01b0316816001600160a01b031614610cc557604051638d648a7f60e01b81526001600160a01b03808316600483015284166024820152604401610222565b50505050505050505050565b600060028251610ce19190611668565b600103610d16578160028351610cf791906115f8565b81518110610d0757610d0761145b565b60200260200101519050919050565b600282600160028551610d2991906115f8565b610d339190611487565b81518110610d4357610d4361145b565b60200260200101518360028551610d5a91906115f8565b81518110610d6a57610d6a61145b565b6020026020010151610d7c9190611638565b61065191906115f8565b6101008210610dac578181604051630a1f10ab60e11b815260040161022292919061167c565b82516001831b90811615610dd757828260405163d406473760e01b815260040161022292919061167c565b8351179092525050565b600061a4b1461480610acc5750504662066eee1490565b6000806000610e078585610e1c565b91509150610e1481610e61565b509392505050565b6000808251604103610e525760208301516040840151606085015160001a610e4687828585610fa9565b94509450505050610e5a565b506000905060025b9250929050565b6000816004811115610e7557610e756116b6565b03610e7d5750565b6001816004811115610e9157610e916116b6565b03610ed95760405162461bcd60e51b815260206004820152601860248201527745434453413a20696e76616c6964207369676e617475726560401b6044820152606401610222565b6002816004811115610eed57610eed6116b6565b03610f3a5760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606401610222565b6003816004811115610f4e57610f4e6116b6565b03610fa65760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608401610222565b50565b6000806fa2a8918ca85bafe22016d0b997e4df60600160ff1b03831115610fd6575060009050600361105a565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa15801561102a573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166110535760006001925092505061105a565b9150600090505b94509492505050565b6001600160a01b0381168114610fa657600080fd5b634e487b7160e01b600052604160045260246000fd5b60405161014081016001600160401b03811182821017156110b1576110b1611078565b60405290565b604051601f8201601f191681016001600160401b03811182821017156110df576110df611078565b604052919050565b60006001600160401b0382111561110057611100611078565b50601f01601f191660200190565b6000806040838503121561112157600080fd5b823561112c81611063565b915060208301356001600160401b0381111561114757600080fd5b8301601f8101851361115857600080fd5b803561116b611166826110e7565b6110b7565b81815286602083850101111561118057600080fd5b816020840160208301376000602083830101528093505050509250929050565b6001600160a01b0391909116815260200190565b80516111bf81611063565b919050565b60006001600160401b038211156111dd576111dd611078565b5060051b60200190565b600082601f8301126111f857600080fd5b81516020611208611166836111c4565b82815260059290921b8401810191818101908684111561122757600080fd5b8286015b84811015611242578051835291830191830161122b565b509695505050505050565b60005b83811015611268578181015183820152602001611250565b50506000910152565b600082601f83011261128257600080fd5b81516020611292611166836111c4565b82815260059290921b840181019181810190868411156112b157600080fd5b8286015b848110156112425780516001600160401b038111156112d45760008081fd5b8701603f810189136112e65760008081fd5b8481015160406112f8611166836110e7565b8281528b8284860101111561130d5760008081fd5b61131c8389830184870161124d565b86525050509183019183016112b5565b60006020828403121561133e57600080fd5b81516001600160401b038082111561135557600080fd5b90830190610140828603121561136a57600080fd5b61137261108e565b61137b836111b4565b81526020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e0830151828111156113cb57600080fd5b6113d7878286016111e7565b60e08301525061010080840151838111156113f157600080fd5b6113fd888287016111e7565b828401525050610120808401518381111561141757600080fd5b61142388828701611271565b918301919091525095945050505050565b918252602082015260400190565b60006020828403121561145457600080fd5b5051919050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b8181038181111561065157610651611471565b6001600160a01b039390931683526020830191909152604082015260600190565b6000600182016114cd576114cd611471565b5060010190565b600181815b8085111561150f5781600019048211156114f5576114f5611471565b8085161561150257918102915b93841c93908002906114d9565b509250929050565b60008261152657506001610651565b8161153357506000610651565b816001811461154957600281146115535761156f565b6001915050610651565b60ff84111561156457611564611471565b50506001821b610651565b5060208310610133831016604e8410600b8410161715611592575081810a610651565b61159c83836114d4565b80600019048211156115b0576115b0611471565b029392505050565b60006115c48383611517565b9392505050565b808202811582820484141761065157610651611471565b634e487b7160e01b600052601260045260246000fd5b600082611607576116076115e2565b500490565b6020808252601290820152714d494e5f4f5241434c455f5349474e45525360701b604082015260600190565b8082018082111561065157610651611471565b60006020828403121561165d57600080fd5b81516115c481611063565b600082611677576116776115e2565b500690565b82815260406020820152600082518060408401526116a181606085016020870161124d565b601f01601f1916919091016060019392505050565b634e487b7160e01b600052602160045260246000fdfea26469706673582212208b551085c1f121d9146e887d342c6716370cd4bcfa1aea9c285b5443d81e679d64736f6c63430008120033";

type GmOracleProviderConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GmOracleProviderConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GmOracleProvider__factory extends ContractFactory {
  constructor(...args: GmOracleProviderConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _roleStore: PromiseOrValue<string>,
    _dataStore: PromiseOrValue<string>,
    _oracleStore: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<GmOracleProvider> {
    return super.deploy(
      _roleStore,
      _dataStore,
      _oracleStore,
      overrides || {}
    ) as Promise<GmOracleProvider>;
  }
  override getDeployTransaction(
    _roleStore: PromiseOrValue<string>,
    _dataStore: PromiseOrValue<string>,
    _oracleStore: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _roleStore,
      _dataStore,
      _oracleStore,
      overrides || {}
    );
  }
  override attach(address: string): GmOracleProvider {
    return super.attach(address) as GmOracleProvider;
  }
  override connect(signer: Signer): GmOracleProvider__factory {
    return super.connect(signer) as GmOracleProvider__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GmOracleProviderInterface {
    return new utils.Interface(_abi) as GmOracleProviderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GmOracleProvider {
    return new Contract(address, _abi, signerOrProvider) as GmOracleProvider;
  }
}
