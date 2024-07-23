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
  GlpMigrator,
  GlpMigratorInterface,
} from "../../../contracts/migration/GlpMigrator";

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
        internalType: "contract EventEmitter",
        name: "_eventEmitter",
        type: "address",
      },
      {
        internalType: "contract DepositVault",
        name: "_depositVault",
        type: "address",
      },
      {
        internalType: "contract DepositHandler",
        name: "_depositHandler",
        type: "address",
      },
      {
        internalType: "contract ExternalHandler",
        name: "_externalHandler",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "_stakedGlp",
        type: "address",
      },
      {
        internalType: "contract IGlpVault",
        name: "_glpVault",
        type: "address",
      },
      {
        internalType: "contract IGlpTimelock",
        name: "_glpTimelock",
        type: "address",
      },
      {
        internalType: "contract IGlpRewardRouter",
        name: "_glpRewardRouter",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_reducedMintBurnFeeBasisPoints",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "market",
        type: "address",
      },
    ],
    name: "DisabledMarket",
    type: "error",
  },
  {
    inputs: [],
    name: "EmptyHoldingAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "EmptyMarket",
    type: "error",
  },
  {
    inputs: [],
    name: "EmptyReceiver",
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
    name: "EmptyTokenTranferGasLimit",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "totalExecutionFee",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "msgValue",
        type: "uint256",
      },
    ],
    name: "InvalidExecutionFeeForMigration",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "totalGlpAmountToRedeem",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalGlpAmount",
        type: "uint256",
      },
    ],
    name: "InvalidGlpAmount",
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
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "TokenTransferError",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "msgSender",
        type: "address",
      },
      {
        internalType: "string",
        name: "role",
        type: "string",
      },
    ],
    name: "Unauthorized",
    type: "error",
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
    inputs: [],
    name: "depositHandler",
    outputs: [
      {
        internalType: "contract DepositHandler",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "depositVault",
    outputs: [
      {
        internalType: "contract DepositVault",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "eventEmitter",
    outputs: [
      {
        internalType: "contract EventEmitter",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "externalHandler",
    outputs: [
      {
        internalType: "contract ExternalHandler",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "glpRewardRouter",
    outputs: [
      {
        internalType: "contract IGlpRewardRouter",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "glpTimelock",
    outputs: [
      {
        internalType: "contract IGlpTimelock",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "glpVault",
    outputs: [
      {
        internalType: "contract IGlpVault",
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
        name: "totalGlpAmount",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "address",
            name: "market",
            type: "address",
          },
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "glpAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "minOut",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "receiver",
                type: "address",
              },
              {
                internalType: "address[]",
                name: "externalCallTargets",
                type: "address[]",
              },
              {
                internalType: "bytes[]",
                name: "externalCallDataList",
                type: "bytes[]",
              },
              {
                internalType: "address[]",
                name: "refundTokens",
                type: "address[]",
              },
              {
                internalType: "address[]",
                name: "refundReceivers",
                type: "address[]",
              },
            ],
            internalType: "struct GlpMigrator.GlpRedemption",
            name: "long",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "glpAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "minOut",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "receiver",
                type: "address",
              },
              {
                internalType: "address[]",
                name: "externalCallTargets",
                type: "address[]",
              },
              {
                internalType: "bytes[]",
                name: "externalCallDataList",
                type: "bytes[]",
              },
              {
                internalType: "address[]",
                name: "refundTokens",
                type: "address[]",
              },
              {
                internalType: "address[]",
                name: "refundReceivers",
                type: "address[]",
              },
            ],
            internalType: "struct GlpMigrator.GlpRedemption",
            name: "short",
            type: "tuple",
          },
          {
            internalType: "uint256",
            name: "minMarketTokens",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "executionFee",
            type: "uint256",
          },
        ],
        internalType: "struct GlpMigrator.MigrationItem[]",
        name: "migrationItems",
        type: "tuple[]",
      },
    ],
    name: "migrate",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "reducedMintBurnFeeBasisPoints",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_reducedMintBurnFeeBasisPoints",
        type: "uint256",
      },
    ],
    name: "setReducedMintBurnFeeBasisPoints",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stakedGlp",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6101c06040523480156200001257600080fd5b5060405162003030380380620030308339810160408190526200003591620000b5565b600160008190556001600160a01b039b8c16608052998b1660a052978a1660c05295891660e05293881661010052918716610120528616610140528516610160528416610180529092166101a05255620001a9565b6001600160a01b0381168114620000a057600080fd5b50565b8051620000b0816200008a565b919050565b60008060008060008060008060008060006101608c8e031215620000d857600080fd5b8b51620000e5816200008a565b60208d0151909b50620000f8816200008a565b60408d0151909a506200010b816200008a565b60608d01519099506200011e816200008a565b60808d015190985062000131816200008a565b60a08d015190975062000144816200008a565b60c08d015190965062000157816200008a565b60e08d01519095506200016a816200008a565b6101008d01519094506200017e816200008a565b92506200018f6101208d01620000a3565b91506101408c015190509295989b509295989b9093969950565b60805160a05160c05160e05161010051610120516101405161016051610180516101a051612d87620002a9600039600081816101c301526111c701526000818161024d0152818161074d0152610e5e0152600081816102190152818161048f015281816105150152818161059b01528181610621015281816106a70152818161077a0152610e8b01526000818160b901526107f801526000818161010301526112380152600081816102810152610ac80152600081816102fc0152610a020152600081816102b5015281816104180152610dba01526000818161018f0152818161098401526109e00152600081816101370152610f1c0152612d876000f3fe6080604052600436106100a25760003560e01c80630ddc56d3146100a75780632e944bd6146100f15780634a4a7b04146101255780635be1328414610159578063660d0d671461017d57806368672231146101b15780636a3fcba8146101e55780637f66cd8214610207578063914d2a2d1461023b5780639c8b2cfb1461026f5780639ff78c30146102a3578063c94f34d7146102d7578063d7cd3949146102ea575b600080fd5b3480156100b357600080fd5b506100db7f000000000000000000000000000000000000000000000000000000000000000081565b6040516100e89190611b90565b60405180910390f35b3480156100fd57600080fd5b506100db7f000000000000000000000000000000000000000000000000000000000000000081565b34801561013157600080fd5b506100db7f000000000000000000000000000000000000000000000000000000000000000081565b34801561016557600080fd5b5061016f60015481565b6040519081526020016100e8565b34801561018957600080fd5b506100db7f000000000000000000000000000000000000000000000000000000000000000081565b3480156101bd57600080fd5b506100db7f000000000000000000000000000000000000000000000000000000000000000081565b3480156101f157600080fd5b50610205610200366004611ba4565b61031e565b005b34801561021357600080fd5b506100db7f000000000000000000000000000000000000000000000000000000000000000081565b34801561024757600080fd5b506100db7f000000000000000000000000000000000000000000000000000000000000000081565b34801561027b57600080fd5b506100db7f000000000000000000000000000000000000000000000000000000000000000081565b3480156102af57600080fd5b506100db7f000000000000000000000000000000000000000000000000000000000000000081565b6102056102e5366004611ede565b610483565b3480156102f657600080fd5b506100db7f000000000000000000000000000000000000000000000000000000000000000081565b610393604051602001610352906020808252600d908201526c21a7a72324a3afa5a2a2a822a960991b604082015260600190565b604051602081830303815290604052805190602001206040518060400160405280600d81526020016c21a7a72324a3afa5a2a2a822a960991b815250610f05565b60018190556103a0611a4a565b60208101516103b0906001610fb5565b61040160006040518060400160405280601d81526020017f726564756365644d696e744275726e4665654261736973506f696e747300000081525084846020015161101a909392919063ffffffff16565b60405163483624fb60e11b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063906c49f69061044d9084906004016128e9565b600060405180830381600087803b15801561046757600080fd5b505af115801561047b573d6000803e3d6000fd5b505050505050565b61048b61106d565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316637a210a2b6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156104eb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061050f9190612937565b905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166310eb56c26040518163ffffffff1660e01b8152600401602060405180830381865afa158015610571573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105959190612937565b905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316634d47b3046040518163ffffffff1660e01b8152600401602060405180830381865afa1580156105f7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061061b9190612937565b905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663a22f23926040518163ffffffff1660e01b8152600401602060405180830381865afa15801561067d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106a19190612937565b905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663df73a2676040518163ffffffff1660e01b8152600401602060405180830381865afa158015610703573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107279190612937565b60015490915083811080156107df57604051636d3b118b60e11b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063da762316906107ac907f0000000000000000000000000000000000000000000000000000000000000000908b908b9088908b908b90600401612950565b600060405180830381600087803b1580156107c657600080fd5b505af11580156107da573d6000803e3d6000fd5b505050505b6040516323b872dd60e01b815233906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906323b872dd9061083190849030908f90600401612983565b6020604051808303816000875af1158015610850573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061087491906129a7565b5060008060005b8b518110156108f45760008c8281518110610898576108986129c9565b60200260200101519050806020015160200151846108b691906129f5565b9350806040015160200151846108cc91906129f5565b93508060800151836108de91906129f5565b92505080806108ec90612a08565b91505061087b565b508b82146109245760405163fc90fcc360e01b815260048101839052602481018d90526044015b60405180910390fd5b80341461094d576040516326789ad160e21b81526004810182905234602482015260440161091b565b60005b8b51811015610e3d5760008c828151811061096d5761096d6129c9565b6020026020010151905061097f611b3b565b6109ad7f000000000000000000000000000000000000000000000000000000000000000083600001516110c6565b815260208201516109bd9061116a565b602082015260408201516109d09061116a565b60408201526080820151610a27907f0000000000000000000000000000000000000000000000000000000000000000907f0000000000000000000000000000000000000000000000000000000000000000906112d1565b60408051610180810182526001600160a01b0388811682526000602080840182905283850182905286518316606080860191909152865186015184166080808701919091528751820151851660a08701528651848152808401885260c08701528651848152928301875260e08601929092528701516101008501526101208401829052860151610140840152610160830152915162bd80c160e61b815290917f00000000000000000000000000000000000000000000000000000000000000001690632f60304090610aff908a908590600401612a21565b6020604051808303816000875af1158015610b1e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b429190612937565b6060830152610b4f611a4a565b6080810151610b5f906001610fb5565b610ba160006040518060400160405280600a8152602001696465706f7369744b657960b01b8152508560600151846080015161101a909392919063ffffffff16565b8051610bae906003610fb5565b6040805180820190915260068152651b585c9ad95d60d21b60208201528351518251610bdf9290916000919061135a565b6040805180820190915260118152703932b232b2b6b2b22637b733aa37b5b2b760791b602080830191909152850151518251610c209290916001919061135a565b60408051808201825260128152713932b232b2b6b2b229b437b93a2a37b5b2b760711b602082015290850151518251610c5e9290916002919061135a565b6020810151610c6e906004610fb5565b610cb760006040518060400160405280600d81526020016c19db1c131bdb99d05b5bdd5b9d609a1b815250866020015160200151846020015161101a909392919063ffffffff16565b610d0160016040518060400160405280600e81526020016d19db1c14da1bdc9d105b5bdd5b9d60921b815250866040015160200151846020015161101a909392919063ffffffff16565b610d506002604051806040016040528060178152602001761c995919595b5959131bdb99d51bdad95b905b5bdd5b9d604a1b8152508560200151846020015161101a909392919063ffffffff16565b610da06003604051806040016040528060188152602001771c995919595b595914da1bdc9d151bdad95b905b5bdd5b9d60421b8152508560400151846020015161101a909392919063ffffffff16565b825151604051630937807960e21b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000008116926324de01e492610df492909116908590600401612b29565b600060405180830381600087803b158015610e0e57600080fd5b505af1158015610e22573d6000803e3d6000fd5b50505050505050508080610e3590612a08565b915050610950565b505050508015610ef057604051636d3b118b60e11b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063da76231690610ebd907f0000000000000000000000000000000000000000000000000000000000000000908b908b908b908b908b90600401612950565b600060405180830381600087803b158015610ed757600080fd5b505af1158015610eeb573d6000803e3d6000fd5b505050505b50505050505050610f016001600055565b5050565b60405163ac4ab3fb60e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063ac4ab3fb90610f539033908690600401612b6d565b602060405180830381865afa158015610f70573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f9491906129a7565b610f0157338160405163a35b150b60e01b815260040161091b929190612b86565b806001600160401b03811115610fcd57610fcd611bbd565b60405190808252806020026020018201604052801561101357816020015b604080518082019091526060815260006020820152815260200190600190039081610feb5790505b5090915250565b8184600001518481518110611031576110316129c9565b6020026020010151600001819052508084600001518481518110611057576110576129c9565b6020026020010151602001818152505050505050565b6002600054036110bf5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015260640161091b565b6002600055565b6110ce611b69565b60405163a8d8fff560e01b81526001600160a01b0380851660048301528316602482015260009073__$ff439aa65a80c9eec648f15db20b189505$__9063a8d8fff590604401608060405180830381865af4158015611131573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111559190612baa565b905061116184826113b7565b90505b92915050565b6000816020015160000361118057506000919050565b81516020830151604080850151606086015191516303cea95560e21b81526001600160a01b03948516600482015260248101939093526044830152821660648201526000917f00000000000000000000000000000000000000000000000000000000000000001690630f3aa554906084016020604051808303816000875af1158015611210573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112349190612937565b90507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663d59922b084608001518560a001518660c001518760e001516040518563ffffffff1660e01b81526004016112989493929190612c2e565b600060405180830381600087803b1580156112b257600080fd5b505af11580156112c6573d6000803e3d6000fd5b509295945050505050565b806000036112de57505050565b6112e782611485565b60006112f2846114af565b9050806001600160a01b031663d0e30db0836040518263ffffffff1660e01b81526004016000604051808303818588803b15801561132f57600080fd5b505af1158015611343573d6000803e3d6000fd5b50505050506113548482858561155c565b50505050565b8184600001518481518110611371576113716129c9565b6020026020010151600001819052508084600001518481518110611397576113976129c9565b6020908102919091018101516001600160a01b0390921691015250505050565b80516001600160a01b03166113df576040516302fde0d760e11b815260040160405180910390fd5b6000826001600160a01b0316637ae1cfca6113fd8460000151611792565b6040518263ffffffff1660e01b815260040161141b91815260200190565b602060405180830381865afa158015611438573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061145c91906129a7565b905080156114805781516040516309f8c93760e01b815261091b9190600401611b90565b505050565b6001600160a01b0381166114ac5760405163d551823d60e01b815260040160405180910390fd5b50565b6000816001600160a01b03166321f8a7216040516020016114e79060208082526003908201526215d39560ea1b604082015260600190565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b815260040161151b91815260200190565b602060405180830381865afa158015611538573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111649190612c86565b80156113545761156b82611485565b6000846001600160a01b031663bd02d0f561158586611814565b6040518263ffffffff1660e01b81526004016115a391815260200190565b602060405180830381865afa1580156115c0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115e49190612937565b9050806000036116095783604051634fe14bfd60e11b815260040161091b9190611b90565b600061161785858585611852565b5090508015611627575050611354565b6000866001600160a01b03166321f8a72160405160200161166b906020808252600f908201526e484f4c44494e475f4144445245535360881b604082015260600190565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b815260040161169f91815260200190565b602060405180830381865afa1580156116bc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116e09190612c86565b90506001600160a01b03811661170957604051633a6de2f560e21b815260040160405180910390fd5b60008061171888848888611852565b91509150811561172c575050505050611354565b6000611737826119ba565b5090507fc9f14d9a0a9b46470c7c0b6c508f8283abaab7f795f153953c58cd4250824dae818360405161176b929190612ca3565b60405180910390a188888860405163012f3b8f60e71b815260040161091b93929190612983565b60006040516020016117ca906020808252601290820152711254d7d3505492d15517d11254d05093115160721b604082015260600190565b60408051601f198184030181528282528051602091820120908301526001600160a01b03841690820152606001604051602081830303815290604052805190602001209050919050565b60006040516020016117ca906020808252601890820152771513d2d15397d514905394d1915497d1d054d7d31253525560421b604082015260600190565b60006060600063a9059cbb60e01b8686604051602401611873929190612b6d565b604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b0383818316178352505050509050600080886001600160a01b031686846040516118c49190612cc8565b60006040518083038160008787f1925050503d8060008114611902576040519150601f19603f3d011682016040523d82523d6000602084013e611907565b606091505b509150915081156119a8578051600003611965576001600160a01b0389163b6119655760006040518060400160405280601481526020017310d85b1b081d1bc81b9bdb8b58dbdb9d1c9858dd60621b815250945094505050506119b1565b6000815111801561198757508080602001905181019061198591906129a7565b155b1561199a576000945092506119b1915050565b6001945092506119b1915050565b60009450925050505b94509492505050565b606060006044835110156119e1575050604080516020810190915260008082529092909150565b60006119ee846020015190565b90506307b9e43360e51b6001600160e01b0319821601611a2d5760048401935083806020019051810190611a229190612ce4565b946001945092505050565b600060405180602001604052806000815250909250925050915091565b604080516101208101909152606060e0820181815261010083019190915281908152602001611a8c604051806040016040528060608152602001606081525090565b8152602001611aae604051806040016040528060608152602001606081525090565b8152602001611ad0604051806040016040528060608152602001606081525090565b8152602001611af2604051806040016040528060608152602001606081525090565b8152602001611b14604051806040016040528060608152602001606081525090565b8152602001611b36604051806040016040528060608152602001606081525090565b905290565b6040518060800160405280611b4e611b69565b81526000602082018190526040820181905260609091015290565b60408051608081018252600080825260208201819052918101829052606081019190915290565b6001600160a01b0391909116815260200190565b600060208284031215611bb657600080fd5b5035919050565b634e487b7160e01b600052604160045260246000fd5b60405161010081016001600160401b0381118282101715611bf657611bf6611bbd565b60405290565b60405160a081016001600160401b0381118282101715611bf657611bf6611bbd565b604051601f8201601f191681016001600160401b0381118282101715611c4657611c46611bbd565b604052919050565b60006001600160401b03821115611c6757611c67611bbd565b5060051b60200190565b6001600160a01b03811681146114ac57600080fd5b8035611c9181611c71565b919050565b600082601f830112611ca757600080fd5b81356020611cbc611cb783611c4e565b611c1e565b82815260059290921b84018101918181019086841115611cdb57600080fd5b8286015b84811015611cff578035611cf281611c71565b8352918301918301611cdf565b509695505050505050565b60006001600160401b03821115611d2357611d23611bbd565b50601f01601f191660200190565b600082601f830112611d4257600080fd5b81356020611d52611cb783611c4e565b82815260059290921b84018101918181019086841115611d7157600080fd5b8286015b84811015611cff5780356001600160401b03811115611d945760008081fd5b8701603f81018913611da65760008081fd5b848101356040611db8611cb783611d0a565b8281528b82848601011115611dcd5760008081fd5b8282850189830137600092810188019290925250845250918301918301611d75565b60006101008284031215611e0257600080fd5b611e0a611bd3565b9050611e1582611c86565b81526020820135602082015260408201356040820152611e3760608301611c86565b606082015260808201356001600160401b0380821115611e5657600080fd5b611e6285838601611c96565b608084015260a0840135915080821115611e7b57600080fd5b611e8785838601611d31565b60a084015260c0840135915080821115611ea057600080fd5b611eac85838601611c96565b60c084015260e0840135915080821115611ec557600080fd5b50611ed284828501611c96565b60e08301525092915050565b60008060408385031215611ef157600080fd5b823591506020808401356001600160401b0380821115611f1057600080fd5b818601915086601f830112611f2457600080fd5b8135611f32611cb782611c4e565b81815260059190911b83018401908481019089831115611f5157600080fd5b8585015b8381101561200f57803585811115611f6c57600080fd5b860160a0818d03601f19011215611f835760008081fd5b611f8b611bfc565b88820135611f9881611c71565b8152604082013587811115611fad5760008081fd5b611fbb8e8b83860101611def565b8a8301525060608083013588811115611fd45760008081fd5b611fe28f8c83870101611def565b6040840152506080838101359183019190915260a090920135918101919091528352918601918601611f55565b508096505050505050509250929050565b60005b8381101561203b578181015183820152602001612023565b50506000910152565b6000815180845261205c816020860160208601612020565b601f01601f19169290920160200192915050565b6001600160a01b03169052565b600081518084526020808501945080840160005b838110156120b65781516001600160a01b031687529582019590820190600101612091565b509495945050505050565b6000815180845260208085019450848260051b860182860160005b8581101561212c5783830389528151604081518186526120fe82870182612044565b91505086820151915084810387860152612118818361207d565b9a87019a94505050908401906001016120dc565b5090979650505050505050565b60006040808401835182865281815180845260608801915060608160051b89010193506020808401935060005b828110156121b057898603605f190184528451805188885261218a89890182612044565b918401516001600160a01b03169784019790975295509381019392810192600101612166565b50808801519550888503818a0152505050506121cc81836120c1565b95945050505050565b6000815180845260208085019450848260051b86018286016000805b86811015612264578484038a5282516040815181875261221382880182612044565b92890151878403888b01528051808552908a01938693508a0191505b8083101561224f578351825292890192600192909201919089019061222f565b509b88019b95505050918501916001016121f1565b509198975050505050505050565b60006040808401835182865281815180845260608801915060608160051b89010193506020808401935060005b828110156122e057898603605f19018452845180518888526122c389890182612044565b91840151978401979097529550938101939281019260010161229f565b50808801519550888503818a0152505050506121cc81836121d5565b6000815180845260208085019450848260051b86018286016000805b86811015612264578484038a5282516040815181875261233a82880182612044565b92890151878403888b01528051808552908a01938693508a0191505b808310156123765783518252928901926001929092019190890190612356565b509b88019b9550505091850191600101612318565b60006040808401835182865281815180845260608801915060608160051b89010193506020808401935060005b828110156123f957898603605f19018452845180518888526123dc89890182612044565b9184015197840197909752955093810193928101926001016123b8565b50808801519550888503818a0152505050506121cc81836122fc565b6000815180845260208085019450848260051b86018286016000805b86811015612264578484038a5282516040815181875261245382880182612044565b92890151878403888b01528051808552908a01938693508a0191505b808310156124915783511515825292890192600192909201919089019061246f565b509b88019b9550505091850191600101612431565b60006040808401835182865281815180845260608801915060608160051b89010193506020808401935060005b8281101561251657898603605f19018452845180518888526124f789890182612044565b91840151151597840197909752955093810193928101926001016124d3565b50808801519550888503818a0152505050506121cc8183612415565b60006040808401835182865281815180845260608801915060608160051b89010193506020808401935060005b828110156122e057898603605f190184528451805188885261258389890182612044565b91840151978401979097529550938101939281019260010161255f565b6000815180845260208085019450848260051b860182860160005b8581101561212c5783830389526125d3838351612044565b988501989250908401906001016125bb565b6000815180845260208085019450848260051b860182860160005b8581101561212c57838303895281516040815181865261262282870182612044565b9150508682015191508481038786015261263c81836125a0565b9a87019a9450505090840190600101612600565b60006040808401835182865281815180845260608801915060608160051b89010193506020808401935060005b828110156126cd57898603605f19018452845180518888526126a189890182612044565b91840151888303898601529190506126b98183612044565b97505050938101939281019260010161267d565b50808801519550888503818a0152505050506121cc81836125e5565b600081518084526020808501945084600583811b87018387016000805b87811015612791578584038b5282516040815181875261272882880182612044565b928a0151878403888c01528051808552908b019392508a8301915080891b83018b01865b8281101561277a57601f19858303018452612768828751612044565b958d0195938d0193915060010161274c565b509e8b019e97505050938801935050600101612706565b50919998505050505050505050565b60006040808401835182865281815180845260608801915060608160051b89010193506020808401935060005b8281101561281d57898603605f19018452845180518888526127f189890182612044565b91840151888303898601529190506128098183612044565b9750505093810193928101926001016127cd565b50808801519550888503818a0152505050506121cc81836126e9565b6000815160e0845261284e60e0850182612139565b9050602083015184820360208601526128678282612272565b91505060408301518482036040860152612881828261238b565b9150506060830151848203606086015261289b82826124a6565b915050608083015184820360808601526128b58282612532565b91505060a083015184820360a08601526128cf8282612650565b91505060c083015184820360c08601526121cc82826127a0565b60408152602060408201527f536574526564756365644d696e744275726e4665654261736973506f696e747360608201526080602082015260006129306080830184612839565b9392505050565b60006020828403121561294957600080fd5b5051919050565b6001600160a01b03969096168652602086019490945260408501929092526060840152608083015260a082015260c00190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6000602082840312156129b957600080fd5b8151801515811461116157600080fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b80820180821115611164576111646129df565b600060018201612a1a57612a1a6129df565b5060010190565b6001600160a01b03831681526040602082018190528251612a4491830190612070565b60006020830151612a586060840182612070565b506040830151612a6b6080840182612070565b506060830151612a7e60a0840182612070565b506080830151612a9160c0840182612070565b5060a0830151612aa460e0840182612070565b5060c08301516101806101008181860152612ac36101c086018461207d565b925060e0860151610120603f198786030181880152612ae2858361207d565b9288015161014088810191909152908801519294509050610160612b098188018415159052565b908701519286019290925250909301516101a09092019190915250919050565b60608152600c60608201526b23b63826b4b3b930ba34b7b760a11b608082015282602082015260a060408201526000612b6560a0830184612839565b949350505050565b6001600160a01b03929092168252602082015260400190565b6001600160a01b0383168152604060208201819052600090612b6590830184612044565b600060808284031215612bbc57600080fd5b604051608081016001600160401b0381118282101715612bde57612bde611bbd565b6040528251612bec81611c71565b81526020830151612bfc81611c71565b60208201526040830151612c0f81611c71565b60408201526060830151612c2281611c71565b60608201529392505050565b608081526000612c41608083018761207d565b8281036020840152612c5381876125a0565b90508281036040840152612c67818661207d565b90508281036060840152612c7b818561207d565b979650505050505050565b600060208284031215612c9857600080fd5b815161116181611c71565b604081526000612cb66040830185612044565b82810360208401526121cc8185612044565b60008251612cda818460208701612020565b9190910192915050565b600060208284031215612cf657600080fd5b81516001600160401b03811115612d0c57600080fd5b8201601f81018413612d1d57600080fd5b8051612d2b611cb782611d0a565b818152856020838501011115612d4057600080fd5b6121cc82602083016020860161202056fea264697066735822122013b4315362adb2145c0421c97376f6f359857b5e75ae16364286aad82ec3916b64736f6c63430008120033";

type GlpMigratorConstructorParams =
  | [linkLibraryAddresses: GlpMigratorLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GlpMigratorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class GlpMigrator__factory extends ContractFactory {
  constructor(...args: GlpMigratorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        GlpMigrator__factory.linkBytecode(linkLibraryAddresses),
        signer
      );
    }
  }

  static linkBytecode(
    linkLibraryAddresses: GlpMigratorLibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$ff439aa65a80c9eec648f15db20b189505\\$__", "g"),
      linkLibraryAddresses[
        "contracts/market/MarketStoreUtils.sol:MarketStoreUtils"
      ]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  override deploy(
    _roleStore: PromiseOrValue<string>,
    _dataStore: PromiseOrValue<string>,
    _eventEmitter: PromiseOrValue<string>,
    _depositVault: PromiseOrValue<string>,
    _depositHandler: PromiseOrValue<string>,
    _externalHandler: PromiseOrValue<string>,
    _stakedGlp: PromiseOrValue<string>,
    _glpVault: PromiseOrValue<string>,
    _glpTimelock: PromiseOrValue<string>,
    _glpRewardRouter: PromiseOrValue<string>,
    _reducedMintBurnFeeBasisPoints: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<GlpMigrator> {
    return super.deploy(
      _roleStore,
      _dataStore,
      _eventEmitter,
      _depositVault,
      _depositHandler,
      _externalHandler,
      _stakedGlp,
      _glpVault,
      _glpTimelock,
      _glpRewardRouter,
      _reducedMintBurnFeeBasisPoints,
      overrides || {}
    ) as Promise<GlpMigrator>;
  }
  override getDeployTransaction(
    _roleStore: PromiseOrValue<string>,
    _dataStore: PromiseOrValue<string>,
    _eventEmitter: PromiseOrValue<string>,
    _depositVault: PromiseOrValue<string>,
    _depositHandler: PromiseOrValue<string>,
    _externalHandler: PromiseOrValue<string>,
    _stakedGlp: PromiseOrValue<string>,
    _glpVault: PromiseOrValue<string>,
    _glpTimelock: PromiseOrValue<string>,
    _glpRewardRouter: PromiseOrValue<string>,
    _reducedMintBurnFeeBasisPoints: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _roleStore,
      _dataStore,
      _eventEmitter,
      _depositVault,
      _depositHandler,
      _externalHandler,
      _stakedGlp,
      _glpVault,
      _glpTimelock,
      _glpRewardRouter,
      _reducedMintBurnFeeBasisPoints,
      overrides || {}
    );
  }
  override attach(address: string): GlpMigrator {
    return super.attach(address) as GlpMigrator;
  }
  override connect(signer: Signer): GlpMigrator__factory {
    return super.connect(signer) as GlpMigrator__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GlpMigratorInterface {
    return new utils.Interface(_abi) as GlpMigratorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GlpMigrator {
    return new Contract(address, _abi, signerOrProvider) as GlpMigrator;
  }
}

export interface GlpMigratorLibraryAddresses {
  ["contracts/market/MarketStoreUtils.sol:MarketStoreUtils"]: string;
}