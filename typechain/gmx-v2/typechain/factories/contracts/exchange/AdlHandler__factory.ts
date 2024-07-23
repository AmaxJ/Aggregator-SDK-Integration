/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  AdlHandler,
  AdlHandlerInterface,
} from "../../../contracts/exchange/AdlHandler";

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
        internalType: "contract Oracle",
        name: "_oracle",
        type: "address",
      },
      {
        internalType: "contract OrderVault",
        name: "_orderVault",
        type: "address",
      },
      {
        internalType: "contract SwapHandler",
        name: "_swapHandler",
        type: "address",
      },
      {
        internalType: "contract IReferralStorage",
        name: "_referralStorage",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "pnlToPoolFactor",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "maxPnlFactorForAdl",
        type: "uint256",
      },
    ],
    name: "AdlNotRequired",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
    ],
    name: "DisabledFeature",
    type: "error",
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
    name: "EmptyMarket",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "nextPnlToPoolFactor",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "pnlToPoolFactor",
        type: "int256",
      },
    ],
    name: "InvalidAdl",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "msgSender",
        type: "address",
      },
    ],
    name: "InvalidNativeTokenSender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "market",
        type: "address",
      },
    ],
    name: "InvalidSwapMarket",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "nextPnlToPoolFactor",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "minPnlFactorForAdl",
        type: "uint256",
      },
    ],
    name: "PnlOvercorrected",
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
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "address",
        name: "market",
        type: "address",
      },
      {
        internalType: "address",
        name: "collateralToken",
        type: "address",
      },
      {
        internalType: "bool",
        name: "isLong",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "sizeDeltaUsd",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "address[]",
            name: "tokens",
            type: "address[]",
          },
          {
            internalType: "address[]",
            name: "providers",
            type: "address[]",
          },
          {
            internalType: "bytes[]",
            name: "data",
            type: "bytes[]",
          },
        ],
        internalType: "struct OracleUtils.SetPricesParams",
        name: "oracleParams",
        type: "tuple",
      },
    ],
    name: "executeAdl",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "oracle",
    outputs: [
      {
        internalType: "contract Oracle",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "orderVault",
    outputs: [
      {
        internalType: "contract OrderVault",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "referralStorage",
    outputs: [
      {
        internalType: "contract IReferralStorage",
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
  {
    inputs: [],
    name: "swapHandler",
    outputs: [
      {
        internalType: "contract SwapHandler",
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
        name: "market",
        type: "address",
      },
      {
        internalType: "bool",
        name: "isLong",
        type: "bool",
      },
      {
        components: [
          {
            internalType: "address[]",
            name: "tokens",
            type: "address[]",
          },
          {
            internalType: "address[]",
            name: "providers",
            type: "address[]",
          },
          {
            internalType: "bytes[]",
            name: "data",
            type: "bytes[]",
          },
        ],
        internalType: "struct OracleUtils.SetPricesParams",
        name: "oracleParams",
        type: "tuple",
      },
    ],
    name: "updateAdlState",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x6101606040523480156200001257600080fd5b50604051620037f0380380620037f0833981016040819052620000359162000086565b6001600160a01b0396871660805294861660a05291851660c05291841660e05290831661010052821661012052166101405262000131565b6001600160a01b03811681146200008357600080fd5b50565b600080600080600080600060e0888a031215620000a257600080fd5b8751620000af816200006d565b6020890151909750620000c2816200006d565b6040890151909650620000d5816200006d565b6060890151909550620000e8816200006d565b6080890151909450620000fb816200006d565b60a08901519093506200010e816200006d565b60c089015190925062000121816200006d565b8091505092959891949750929550565b60805160a05160c05160e05161010051610120516101405161358c620002646000396000818161019a01526111b60152600081816102a0015261118b0152600081816102d40152611136015260008181610308015281816104660152818161086f015261110b01526000818161026c015281816103c20152818161048e01528181610516015281816105ce015281816106bc01528181610766015281816108e601528181610b4901528181610c160152818161116101526112450152600081816082015281816102380152818161043e015281816106940152818161074501528181610840015281816109ff01528181610b2801528181610bab01528181610c9b01528181610d9e01528181610f080152818161109e01526110e30152600081816102040152610e6d015261358c6000f3fe6080604052600436106100795760003560e01c80626cc35e1461018857806312a758f0146101d25780634a4a7b04146101f2578063660d0d67146102265780637dc0d1d01461025a5780638a53aaac1461028e57806393845e46146102c25780639ff78c30146102f6578063f09f032d1461032a57600080fd5b366101835760007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166321f8a7216040516020016100d69060208082526003908201526215d39560ea1b604082015260600190565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b815260040161010a91815260200190565b602060405180830381865afa158015610127573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061014b91906126f2565b9050336001600160a01b03821614610181573360405163738d28df60e11b8152600401610178919061271c565b60405180910390fd5b005b600080fd5b34801561019457600080fd5b506101bc7f000000000000000000000000000000000000000000000000000000000000000081565b6040516101c9919061271c565b60405180910390f35b3480156101de57600080fd5b506101816101ed366004612756565b61034a565b3480156101fe57600080fd5b506101bc7f000000000000000000000000000000000000000000000000000000000000000081565b34801561023257600080fd5b506101bc7f000000000000000000000000000000000000000000000000000000000000000081565b34801561026657600080fd5b506101bc7f000000000000000000000000000000000000000000000000000000000000000081565b34801561029a57600080fd5b506101bc7f000000000000000000000000000000000000000000000000000000000000000081565b3480156102ce57600080fd5b506101bc7f000000000000000000000000000000000000000000000000000000000000000081565b34801561030257600080fd5b506101bc7f000000000000000000000000000000000000000000000000000000000000000081565b34801561033657600080fd5b506101816103453660046127b7565b610594565b610352610c97565b6103a260405160200161036490612846565b604051602081830303815290604052805190602001206040518060400160405280600a81526020016920a2262fa5a2a2a822a960b11b815250610e56565b6103ab816129d7565b604051633d333c8560e01b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690633d333c85906103f7908490600401612bb6565b600060405180830381600087803b15801561041157600080fd5b505af1158015610425573d6000803e3d6000fd5b5050604051633be6ba2d60e11b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811660048301527f0000000000000000000000000000000000000000000000000000000000000000811660248301527f00000000000000000000000000000000000000000000000000000000000000008116604483015287166064820152851515608482015273__$f1c6d6b2bd25207c7e7320f7c6bcfa9419$__92506377cd745a915060a40160006040518083038186803b1580156104fc57600080fd5b505af4158015610510573d6000803e3d6000fd5b505050507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031662ccf1556040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561056e57600080fd5b505af1158015610582573d6000803e3d6000fd5b505050505061058f610f06565b505050565b61059c610c97565b6105ae60405160200161036490612846565b6105b7816129d7565b604051633d333c8560e01b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690633d333c8590610603908490600401612bb6565b600060405180830381600087803b15801561061d57600080fd5b505af1158015610631573d6000803e3d6000fd5b5050505061067a6040518060e001604052806000815260200160008019168152602001600015158152602001600081526020016000815260200160008152602001600081525090565b5a8152604051635d0fe93960e11b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811660048301527f00000000000000000000000000000000000000000000000000000000000000008116602483015288166044820152851515606482015273__$f1c6d6b2bd25207c7e7320f7c6bcfa9419$__9063ba1fd2729060840160006040518083038186803b15801561072857600080fd5b505af415801561073c573d6000803e3d6000fd5b505050506107dc7f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000089886040516020016107c19060208082526016908201527513505617d4139317d19050d513d497d193d497d0511360521b604082015260600190565b60405160208183030381529060405280519060200120610fbf565b6060840152608083015215156040820181905261081857806080015181606001516040516368376c5f60e11b8152600401610178929190612c54565b73__$f1c6d6b2bd25207c7e7320f7c6bcfa9419$__63dbadc9b96040518061012001604052807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020018b6001600160a01b031681526020018a6001600160a01b03168152602001896001600160a01b0316815260200188151581526020018781526020016108df610fff565b81526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f002606b6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610942573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109669190612c62565b8152506040518263ffffffff1660e01b81526004016109859190612c7b565b602060405180830381865af41580156109a2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109c69190612c62565b6020820181905260405163fdfc26f360e01b815260009173__$9dcb75ef0bb6c4288f2ccffe7dc492c4eb$__9163fdfc26f391610a28917f00000000000000000000000000000000000000000000000000000000000000009190600401612d14565b600060405180830381865af4158015610a45573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610a6d9190810190612eb6565b90506000610a87836020015183338660000151600161107b565b80515160408201516020015151919250610abc91610ab79030906007811115610ab257610ab2612fec565b611359565b6113ef565b604051630893a94f60e41b815273__$6c133984afab440de9073e7935a24545e7$__9063893a94f090610af3908490600401613224565b60006040518083038186803b158015610b0b57600080fd5b505af4158015610b1f573d6000803e3d6000fd5b50505050610b717f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000008b8a600161141a565b60a08401819052608084015113610ba6578260a00151836080015160405162753f0f60e61b8152600401610178929190612c54565b610bd17f00000000000000000000000000000000000000000000000000000000000000008a896115ad565b60c08401819052610be190611631565b8360a001511215610c11578260a001518360c00151604051634f85e3ef60e11b8152600401610178929190612c54565b5050507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031662ccf1556040518163ffffffff1660e01b8152600401600060405180830381600087803b158015610c6e57600080fd5b505af1158015610c82573d6000803e3d6000fd5b5050505050610c8f610f06565b505050505050565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663bd02d0f5604051602001610cd79061332b565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b8152600401610d0b91815260200190565b602060405180830381865afa158015610d28573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d4c9190612c62565b90508015610d9c5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610178565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663e2a4853a604051602001610dda9061332b565b6040516020818303038152906040528051906020012060016040518363ffffffff1660e01b8152600401610e0f929190612c54565b6020604051808303816000875af1158015610e2e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e529190612c62565b5050565b60405163ac4ab3fb60e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063ac4ab3fb90610ea49033908690600401612d14565b602060405180830381865afa158015610ec1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ee5919061335c565b610e5257338160405163a35b150b60e01b8152600401610178929190613379565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663e2a4853a604051602001610f449061332b565b6040516020818303038152906040528051906020012060006040518363ffffffff1660e01b8152600401610f79929190612c54565b6020604051808303816000875af1158015610f98573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fbc9190612c62565b50565b600080600080610fcf898861169f565b90506000610fdd8983611730565b9050610fec8a83838a8a6118a6565b9450945094505050955095509592505050565b60006110096118fa565b156110765760646001600160a01b031663a3b1b31d6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561104d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110719190612c62565b905090565b504390565b6110836124f9565b61108b6124f9565b60208101879052604081018690526110ce7f00000000000000000000000000000000000000000000000000000000000000006110c9885160e0015190565b611911565b60608083019190915281516001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811690915282517f0000000000000000000000000000000000000000000000000000000000000000821660209182015283517f0000000000000000000000000000000000000000000000000000000000000000831660409182015284517f00000000000000000000000000000000000000000000000000000000000000008416940184905284517f0000000000000000000000000000000000000000000000000000000000000000841660809091015284517f000000000000000000000000000000000000000000000000000000000000000090931660a090930192909252815163f002606b60e01b8152915163f002606b9260048082019392918290030181865afa158015611216573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061123a9190612c62565b8160800181815250507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663716042456040518163ffffffff1660e01b8152600401602060405180830381865afa1580156112a1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112c59190612c62565b60a082015260408101516000906112de905160a0015190565b6001600160a01b0316146113095780515160408201515160a00151611303919061169f565b60c08201525b6001600160a01b03851660e08201526101008101849052610120810183600181111561133757611337612fec565b9081600181111561134a5761134a612fec565b90525090505b95945050505050565b600060405160200161139b906020808252601c908201527b11561150d5551157d0511317d191505515549157d11254d05093115160221b604082015260600190565b60408051601f198184030181528282528051602091820120908301526001600160a01b03851690820152606081018390526080015b6040516020818303038152906040528051906020012090505b92915050565b6113f982826119d7565b15610e525760405163dd70e0c960e01b815260048101829052602401610178565b600080611427878661169f565b905060006040518060600160405280886001600160a01b0316635dcf719485602001516040518263ffffffff1660e01b8152600401611466919061271c565b6040805180830381865afa158015611482573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114a6919061339d565b8152602001886001600160a01b0316635dcf719485604001516040518263ffffffff1660e01b81526004016114db919061271c565b6040805180830381865afa1580156114f7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061151b919061339d565b8152602001886001600160a01b0316635dcf719485606001516040518263ffffffff1660e01b8152600401611550919061271c565b6040805180830381865afa15801561156c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611590919061339d565b905290506115a18883838888611a43565b98975050505050505050565b6000836001600160a01b031663bd02d0f56115c88585611a87565b6040518263ffffffff1660e01b81526004016115e691815260200190565b602060405180830381865afa158015611603573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116279190612c62565b90505b9392505050565b60006001600160ff1b0382111561169b5760405162461bcd60e51b815260206004820152602860248201527f53616665436173743a2076616c756520646f65736e27742066697420696e2061604482015267371034b73a191a9b60c11b6064820152608401610178565b5090565b6116a7612588565b60405163a8d8fff560e01b815260009073__$ff439aa65a80c9eec648f15db20b189505$__9063a8d8fff5906116e390879087906004016133eb565b608060405180830381865af4158015611700573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117249190613405565b905061162a8482611aff565b6117386125af565b6040518060600160405280846001600160a01b0316635dcf719485602001516040518263ffffffff1660e01b8152600401611773919061271c565b6040805180830381865afa15801561178f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117b3919061339d565b8152602001846001600160a01b0316635dcf719485604001516040518263ffffffff1660e01b81526004016117e8919061271c565b6040805180830381865afa158015611804573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611828919061339d565b8152602001846001600160a01b0316635dcf719485606001516040518263ffffffff1660e01b815260040161185d919061271c565b6040805180830381865afa158015611879573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061189d919061339d565b90529392505050565b6000806000806118ba898989896001611a43565b905060006118ce8a878b600001518a611bc8565b9050600080831380156118e85750816118e684611c43565b115b9b929a50909850909650505050505050565b600061a4b14614806110715750504662066eee1490565b6060600082516001600160401b0381111561192e5761192e61286a565b60405190808252806020026020018201604052801561196757816020015b611954612588565b81526020019060019003908161194c5790505b50905060005b83518110156119cf57600084828151811061198a5761198a61346c565b6020026020010151905061199e8682611c95565b8383815181106119b0576119b061346c565b60200260200101819052505080806119c790613498565b91505061196d565b509392505050565b604051633d70e7e560e11b8152600481018290526000906001600160a01b03841690637ae1cfca90602401602060405180830381865afa158015611a1f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061162a919061335c565b600080611a54878787878715611d26565b905080600003611a68576000915050611350565b6000611a7b888888600001518888611dac565b90506115a18183611e3d565b6000604051602001611ac59060208082526018908201527713525397d4139317d19050d513d497d05195115497d0511360421b604082015260600190565b60408051601f198184030181528282528051602091820120908301526001600160a01b0385169082015282151560608201526080016113d0565b80516001600160a01b0316611b27576040516302fde0d760e11b815260040160405180910390fd5b6000826001600160a01b0316637ae1cfca611b458460000151611e84565b6040518263ffffffff1660e01b8152600401611b6391815260200190565b602060405180830381865afa158015611b80573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ba4919061335c565b9050801561058f5781516040516309f8c93760e01b8152610178919060040161271c565b6000846001600160a01b031663bd02d0f5611be4868686611f06565b6040518263ffffffff1660e01b8152600401611c0291815260200190565b602060405180830381865afa158015611c1f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113509190612c62565b60008082121561169b5760405162461bcd60e51b815260206004820181905260248201527f53616665436173743a2076616c7565206d75737420626520706f7369746976656044820152606401610178565b611c9d612588565b60405163a8d8fff560e01b815260009073__$ff439aa65a80c9eec648f15db20b189505$__9063a8d8fff590611cd990879087906004016133eb565b608060405180830381865af4158015611cf6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d1a9190613405565b905061162a8482611f95565b60008083611d38578560600151611d3e565b85604001515b90506000611d4d888884611fdc565b905060008415611d7b5785611d6a57866040015160200151611d74565b8660200151602001515b9050611d95565b85611d8b57604087015151611d92565b6020870151515b90505b611d9f81836134b1565b9998505050505050505050565b600080611dc2611dbd88888761207a565b611631565b90506000611dd18888876120d8565b9050811580611dde575080155b15611dee57600092505050611350565b6000611dfb87878761211f565b90506000611e0c611dbd83856134b1565b9050600087611e2457611e1f82866134c8565b611e2e565b611e2e85836134c8565b9b9a5050505050505050505050565b600080611e52611e4c85612158565b84612169565b905060008413611e7357611e6581611631565b611e6e906134ef565b611e7c565b611e7c81611631565b949350505050565b6000604051602001611ebc906020808252601290820152711254d7d3505492d15517d11254d05093115160721b604082015260600190565b60408051601f198184030181528282528051602091820120908301526001600160a01b03841690820152606001604051602081830303815290604052805190602001209050919050565b6000604051602001611f3a906020808252600e908201526d26a0ac2fa827262fa320a1aa27a960911b604082015260600190565b60408051601f1981840301815282825280516020918201209083015281018590526001600160a01b0384166060820152821515608082015260a0015b6040516020818303038152906040528051906020012090509392505050565b611f9f8282611aff565b80606001516001600160a01b031681604001516001600160a01b031603610e525780516040516332e6f44d60e21b8152610178919060040161271c565b600080611ff184604001518560600151612177565b905080856001600160a01b031663bd02d0f56120118760000151876121a6565b6040518263ffffffff1660e01b815260040161202f91815260200190565b602060405180830381865afa15801561204c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120709190612c62565b6113509190613521565b60008061208f84604001518560600151612177565b905060006120a886866000015187604001518786612214565b905060006120c187876000015188606001518887612214565b90506120cd8183613543565b979650505050505050565b6000806120ed84604001518560600151612177565b90506000612106868660000151876040015187866122a4565b905060006120c1878760000151886060015188876122a4565b600082156121405781612133578351612139565b83602001515b905061162a565b8161214f578360200151611627565b50509051919050565b60008082121561169b575060000390565b600061162a838360006122c1565b6000816001600160a01b0316836001600160a01b03161461219957600161219c565b60025b60ff169392505050565b60006040516020016121d7906020808252600b908201526a1413d3d317d05353d5539560aa1b604082015260600190565b60408051601f198184030181528282528051602091820120908301526001600160a01b0380861691830191909152831660608201526080016113d0565b600081866001600160a01b031663bd02d0f5612231888888612309565b6040518263ffffffff1660e01b815260040161224f91815260200190565b602060405180830381865afa15801561226c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122909190612c62565b61229a9190613521565b9695505050505050565b600081866001600160a01b031663bd02d0f5612231888888612381565b6000836000036122d35750600061162a565b81156122f2576121398468327cb2734119d3b7a9601e1b8560016123be565b6116278468327cb2734119d3b7a9601e1b8561240f565b600060405160200161233c906020808252600d908201526c13d4115397d2539511549154d5609a1b604082015260600190565b60408051601f198184030181528282528051602091820120908301526001600160a01b038087169183019190915284166060820152821515608082015260a001611f76565b600060405160200161233c906020808252601790820152764f50454e5f494e5445524553545f494e5f544f4b454e5360481b604082015260600190565b6000806123cc86868661240f565b905060018360028111156123e2576123e2612fec565b1480156123ff5750600084806123fa576123fa61350b565b868809115b156113505761229a600182613543565b60008080600019858709858702925082811083820303915050806000036124495783828161243f5761243f61350b565b049250505061162a565b8084116124905760405162461bcd60e51b81526020600482015260156024820152744d6174683a206d756c446976206f766572666c6f7760581b6044820152606401610178565b60008486880960026001871981018816978890046003810283188082028403028082028403028082028403028082028403028082028403029081029092039091026000889003889004909101858311909403939093029303949094049190911702949350505050565b604080516102008101825260006101408201818152610160830182905261018083018290526101a083018290526101c083018290526101e08301829052825260208201529081016125486125dc565b815260200160608152602001600081526020016000815260200161256a612588565b8152600060208201819052604082018190526060909101905b905290565b60408051608081018252600080825260208201819052918101829052606081019190915290565b60405180606001604052806125c26126b3565b81526020016125cf6126b3565b81526020016125836126b3565b604080516101608101909152600060608083018281526080840183905260a0840183905260c0840183905260e0840183905261010084018390526101208401929092526101408301528152602081016126896040805161016081019091528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b81526040805160808101825260008082526020828101829052928201819052606082015291015290565b604051806040016040528060008152602001600081525090565b6001600160a01b0381168114610fbc57600080fd5b80516126ed816126cd565b919050565b60006020828403121561270457600080fd5b815161162a816126cd565b6001600160a01b03169052565b6001600160a01b0391909116815260200190565b8015158114610fbc57600080fd5b60006060828403121561275057600080fd5b50919050565b60008060006060848603121561276b57600080fd5b8335612776816126cd565b9250602084013561278681612730565b915060408401356001600160401b038111156127a157600080fd5b6127ad8682870161273e565b9150509250925092565b60008060008060008060c087890312156127d057600080fd5b86356127db816126cd565b955060208701356127eb816126cd565b945060408701356127fb816126cd565b9350606087013561280b81612730565b92506080870135915060a08701356001600160401b0381111561282d57600080fd5b61283989828a0161273e565b9150509295509295509295565b6020808252600a908201526920a2262fa5a2a2a822a960b11b604082015260600190565b634e487b7160e01b600052604160045260246000fd5b604051606081016001600160401b03811182821017156128a2576128a261286a565b60405290565b60405161016081016001600160401b03811182821017156128a2576128a261286a565b604051608081016001600160401b03811182821017156128a2576128a261286a565b60405161010081016001600160401b03811182821017156128a2576128a261286a565b604051601f8201601f191681016001600160401b03811182821017156129385761293861286a565b604052919050565b60006001600160401b038211156129595761295961286a565b5060051b60200190565b600082601f83011261297457600080fd5b8135602061298961298483612940565b612910565b82815260059290921b840181019181810190868411156129a857600080fd5b8286015b848110156129cc5780356129bf816126cd565b83529183019183016129ac565b509695505050505050565b6000606082360312156129e957600080fd5b6129f1612880565b82356001600160401b0380821115612a0857600080fd5b612a1436838701612963565b8352602091508185013581811115612a2b57600080fd5b612a3736828801612963565b838501525060408086013582811115612a4f57600080fd5b8601601f3681830112612a6157600080fd5b8135612a6f61298482612940565b81815260059190911b83018601908681019036831115612a8e57600080fd5b8785015b83811015612b1757803588811115612aaa5760008081fd5b860136603f820112612abc5760008081fd5b8981013589811115612ad057612ad061286a565b612ae1818801601f19168c01612910565b818152368a838501011115612af65760008081fd5b818a84018d83013760009181018c0191909152845250918801918801612a92565b50948801949094525094979650505050505050565b600081518084526020808501945080840160005b83811015612b655781516001600160a01b031687529582019590820190600101612b40565b509495945050505050565b6000815180845260005b81811015612b9657602081850181015186830182015201612b7a565b506000602082860101526020601f19601f83011685010191505092915050565b600060208083528351606082850152612bd26080850182612b2c565b905081850151601f1980868403016040870152612bef8383612b2c565b60408801518782038301606089015280518083529194508501925084840190600581901b8501860160005b82811015612c465784878303018452612c34828751612b70565b95880195938801939150600101612c1a565b509998505050505050505050565b918252602082015260400190565b600060208284031215612c7457600080fd5b5051919050565b81516001600160a01b03168152602080830151610120830191612ca09084018261270f565b506040830151612cb3604084018261270f565b506060830151612cc6606084018261270f565b506080830151612cd9608084018261270f565b5060a0830151612ced60a084018215159052565b5060c083015160c083015260e083015160e083015261010080840151818401525092915050565b6001600160a01b03929092168252602082015260400190565b600082601f830112612d3e57600080fd5b81516020612d4e61298483612940565b82815260059290921b84018101918181019086841115612d6d57600080fd5b8286015b848110156129cc578051612d84816126cd565b8352918301918301612d71565b8051600881106126ed57600080fd5b8051600381106126ed57600080fd5b60006101608284031215612dc257600080fd5b612dca6128a8565b9050612dd582612d91565b8152612de360208301612da0565b602082015260408201516040820152606082015160608201526080820151608082015260a082015160a082015260c082015160c082015260e082015160e082015261010080830151818301525061012080830151818301525061014080830151818301525092915050565b600060808284031215612e6057600080fd5b612e686128cb565b90508151612e7581612730565b81526020820151612e8581612730565b60208201526040820151612e9881612730565b60408201526060820151612eab81612730565b606082015292915050565b600060208284031215612ec857600080fd5b81516001600160401b0380821115612edf57600080fd5b908301906102008286031215612ef457600080fd5b612efc612880565b825182811115612f0b57600080fd5b83016101008188031215612f1e57600080fd5b612f266128ed565b612f2f826126e2565b8152612f3d602083016126e2565b6020820152612f4e604083016126e2565b6040820152612f5f606083016126e2565b6060820152612f70608083016126e2565b6080820152612f8160a083016126e2565b60a0820152612f9260c083016126e2565b60c082015260e082015184811115612fa957600080fd5b612fb589828501612d2d565b60e083015250825250612fcb8660208501612daf565b6020820152612fde866101808501612e4e565b604082015295945050505050565b634e487b7160e01b600052602160045260246000fd5b6008811061301257613012612fec565b9052565b6003811061301257613012612fec565b613031828251613002565b60208101516130436020840182613016565b5060408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152505050565b805161020080845281516001600160a01b039081169185019190915260208201511661022084015260408101516000916130e661024086018361270f565b606081015191506130fb61026086018361270f565b6080810151915061311061028086018361270f565b60a081015191506131256102a086018361270f565b60c0810151915061313a6102c086018361270f565b60e001516101006102e08601529050613157610300850182612b2c565b9050602083015161316b6020860182613026565b5060408381015180511515610180870152602081015115156101a08701529081015115156101c0860152606081015115156101e08601526119cf565b80516001600160a01b03908116835260208083015182169084015260408083015182169084015260609182015116910152565b600081518084526020808501945080840160005b83811015612b65576132018783516131a7565b60809690960195908201906001016131ee565b6002811061301257613012612fec565b6020815261327c60208201835180516001600160a01b03908116835260208083015182169084015260408083015182169084015260608083015182169084015260808083015182169084015260a09182015116910152565b602082015160e08201526000604083015161024061010081818601526132a66102608601846130a8565b92506060860151610120601f1987860301818801526132c585836131da565b9450608088015161014088015260a088015161016088015260c088015191506132f26101808801836131a7565b60e0880151915061330761020088018361270f565b918701516102208701525085015161332182860182613214565b5090949350505050565b6020808252601790820152765245454e5452414e43595f47554152445f53544154555360481b604082015260600190565b60006020828403121561336e57600080fd5b815161162a81612730565b6001600160a01b038316815260406020820181905260009061162790830184612b70565b6000604082840312156133af57600080fd5b604080519081016001600160401b03811182821017156133d1576133d161286a565b604052825181526020928301519281019290925250919050565b6001600160a01b0392831681529116602082015260400190565b60006080828403121561341757600080fd5b61341f6128cb565b825161342a816126cd565b8152602083015161343a816126cd565b6020820152604083015161344d816126cd565b60408201526060830151613460816126cd565b60608201529392505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000600182016134aa576134aa613482565b5060010190565b80820281158282048414176113e9576113e9613482565b81810360008312801583831316838312821617156134e8576134e8613482565b5092915050565b6000600160ff1b820161350457613504613482565b5060000390565b634e487b7160e01b600052601260045260246000fd5b60008261353e57634e487b7160e01b600052601260045260246000fd5b500490565b808201808211156113e9576113e961348256fea26469706673582212206d9bb0f3d11bed0f0de6861d14e30fa4e49e3884885bb09d6c4cb66894cffab764736f6c63430008120033";

type AdlHandlerConstructorParams =
  | [linkLibraryAddresses: AdlHandlerLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AdlHandlerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class AdlHandler__factory extends ContractFactory {
  constructor(...args: AdlHandlerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        AdlHandler__factory.linkBytecode(linkLibraryAddresses),
        signer
      );
    }
  }

  static linkBytecode(
    linkLibraryAddresses: AdlHandlerLibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$f1c6d6b2bd25207c7e7320f7c6bcfa9419\\$__", "g"),
      linkLibraryAddresses["contracts/adl/AdlUtils.sol:AdlUtils"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$9dcb75ef0bb6c4288f2ccffe7dc492c4eb\\$__", "g"),
      linkLibraryAddresses[
        "contracts/order/OrderStoreUtils.sol:OrderStoreUtils"
      ]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$6c133984afab440de9073e7935a24545e7\\$__", "g"),
      linkLibraryAddresses[
        "contracts/order/ExecuteOrderUtils.sol:ExecuteOrderUtils"
      ]
        .replace(/^0x/, "")
        .toLowerCase()
    );

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
    _oracle: PromiseOrValue<string>,
    _orderVault: PromiseOrValue<string>,
    _swapHandler: PromiseOrValue<string>,
    _referralStorage: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<AdlHandler> {
    return super.deploy(
      _roleStore,
      _dataStore,
      _eventEmitter,
      _oracle,
      _orderVault,
      _swapHandler,
      _referralStorage,
      overrides || {}
    ) as Promise<AdlHandler>;
  }
  override getDeployTransaction(
    _roleStore: PromiseOrValue<string>,
    _dataStore: PromiseOrValue<string>,
    _eventEmitter: PromiseOrValue<string>,
    _oracle: PromiseOrValue<string>,
    _orderVault: PromiseOrValue<string>,
    _swapHandler: PromiseOrValue<string>,
    _referralStorage: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _roleStore,
      _dataStore,
      _eventEmitter,
      _oracle,
      _orderVault,
      _swapHandler,
      _referralStorage,
      overrides || {}
    );
  }
  override attach(address: string): AdlHandler {
    return super.attach(address) as AdlHandler;
  }
  override connect(signer: Signer): AdlHandler__factory {
    return super.connect(signer) as AdlHandler__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AdlHandlerInterface {
    return new utils.Interface(_abi) as AdlHandlerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AdlHandler {
    return new Contract(address, _abi, signerOrProvider) as AdlHandler;
  }
}

export interface AdlHandlerLibraryAddresses {
  ["contracts/adl/AdlUtils.sol:AdlUtils"]: string;
  ["contracts/order/OrderStoreUtils.sol:OrderStoreUtils"]: string;
  ["contracts/order/ExecuteOrderUtils.sol:ExecuteOrderUtils"]: string;
  ["contracts/market/MarketStoreUtils.sol:MarketStoreUtils"]: string;
}