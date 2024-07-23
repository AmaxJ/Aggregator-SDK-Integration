/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  GlvFactory,
  GlvFactoryInterface,
} from "../../../contracts/glv/GlvFactory";

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
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "existingMarketAddress",
        type: "address",
      },
    ],
    name: "MarketAlreadyExists",
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
    name: "GLV_SALT",
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
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "createGlv",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
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
  "0x60e06040523480156200001157600080fd5b50604051620033f4380380620033f483398101604081905262000034916200006b565b6001600160a01b0392831660805290821660a0521660c052620000bf565b6001600160a01b03811681146200006857600080fd5b50565b6000806000606084860312156200008157600080fd5b83516200008e8162000052565b6020850151909350620000a18162000052565b6040850151909250620000b48162000052565b809150509250925092565b60805160a05160c0516132d76200011d6000396000818160ed015261063901526000818160c5015281816101d3015281816102a10152818161030b01526103e4015260008181609d0152818161028001526104c001526132d76000f3fe60806040523480156200001157600080fd5b50600436106200005e5760003560e01c8063310de71514620000635780634a4a7b041462000097578063660d0d6714620000bf5780639ff78c3014620000e7578063ef0185ea146200010f575b600080fd5b6200007a62000074366004620008fb565b62000128565b6040516001600160a01b0390911681526020015b60405180910390f35b6200007a7f000000000000000000000000000000000000000000000000000000000000000081565b6200007a7f000000000000000000000000000000000000000000000000000000000000000081565b6200007a7f000000000000000000000000000000000000000000000000000000000000000081565b620001196200047a565b6040519081526020016200008e565b6000620001a260405160200162000160906020808252600d908201526c26a0a925a2aa2fa5a2a2a822a960991b604082015260600190565b604051602081830303815290604052805190602001206040518060400160405280600d81526020016c26a0a925a2aa2fa5a2a2a822a960991b815250620004a4565b6000620001af836200055e565b6040516321f8a72160e01b8152600481018290529091506000906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906321f8a72190602401602060405180830381865afa1580156200021b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000241919062000915565b90506001600160a01b038116156200027b5783816040516325e34fa160e01b81526004016200027292919062000947565b60405180910390fd5b6000847f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000604051620002ce90620007f6565b6001600160a01b039283168152911660208201526040018190604051809103906000f590508015801562000306573d6000803e3d6000fd5b5090507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663b348e639604051602001620003659060208082526008908201526711d31597d31254d560c21b604082015260600190565b60405160208183030381529060405280519060200120836040518363ffffffff1660e01b81526004016200039b92919062000947565b600060405180830381600087803b158015620003b657600080fd5b505af1158015620003cb573d6000803e3d6000fd5b505060405163ca446dd960e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016925063ca446dd991506200041f908890859060040162000947565b6020604051808303816000875af11580156200043f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000465919062000915565b50620004728186620005b2565b949350505050565b6040516020016200048b906200095e565b6040516020818303038152906040528051906020012081565b60405163ac4ab3fb60e01b8152336004820152602481018390527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063ac4ab3fb90604401602060405180830381865afa15801562000510573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000536919062000980565b6200055a57338160405163a35b150b60e01b815260040162000272929190620009ec565b5050565b600060405160200162000571906200095e565b60408051601f198184030181528282528051602091820120908301528101839052606001604051602081830303815290604052805190602001209050919050565b620005bc62000804565b8051620005cb906001620006d0565b60408051808201909152600381526233b63b60e91b60208201528151620005f691600090866200073a565b608081015162000608906001620006d0565b6040805180820190915260048152631cd85b1d60e21b602082015260808201516200063791600090856200079d565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166324de01e462000677856001600160a01b031690565b836040518363ffffffff1660e01b815260040162000697929190620012c6565b600060405180830381600087803b158015620006b257600080fd5b505af1158015620006c7573d6000803e3d6000fd5b50505050505050565b806001600160401b03811115620006eb57620006eb620013d6565b6040519080825280602002602001820160405280156200073357816020015b6040805180820190915260608152600060208201528152602001906001900390816200070a5790505b5090915250565b8184600001518481518110620007545762000754620013ec565b60200260200101516000018190525080846000015184815181106200077d576200077d620013ec565b6020908102919091018101516001600160a01b0390921691015250505050565b8184600001518481518110620007b757620007b7620013ec565b6020026020010151600001819052508084600001518481518110620007e057620007e0620013ec565b6020026020010151602001818152505050505050565b611e9f806200140383390190565b604080516101208101909152606060e082018181526101008301919091528190815260200162000847604051806040016040528060608152602001606081525090565b81526020016200086a604051806040016040528060608152602001606081525090565b81526020016200088d604051806040016040528060608152602001606081525090565b8152602001620008b0604051806040016040528060608152602001606081525090565b8152602001620008d3604051806040016040528060608152602001606081525090565b8152602001620008f6604051806040016040528060608152602001606081525090565b905290565b6000602082840312156200090e57600080fd5b5035919050565b6000602082840312156200092857600080fd5b81516001600160a01b03811681146200094057600080fd5b9392505050565b9182526001600160a01b0316602082015260400190565b60208082526008908201526711d31597d4d0531560c21b604082015260600190565b6000602082840312156200099357600080fd5b815180151581146200094057600080fd5b6000815180845260005b81811015620009cc57602081850181015186830182015201620009ae565b506000602082860101526020601f19601f83011685010191505092915050565b6001600160a01b03831681526040602082018190526000906200047290830184620009a4565b600081518084526020808501808196508360051b810191508286016000805b8681101562000ab3578385038a5282516040815181885262000a5682890182620009a4565b92890151888403898b01528051808552908a01938693508a0191505b8083101562000a9d5783516001600160a01b0316825292890192600192909201919089019062000a72565b509b88019b965050509185019160010162000a31565b509298975050505050505050565b60006040808401835182865281815180845260608801915060608160051b89010193506020808401935060005b8281101562000b3c57898603605f190184528451805188885262000b1589890182620009a4565b918401516001600160a01b0316978401979097529550938101939281019260010162000aee565b50808801519550888503818a01525050505062000b5a818362000a12565b95945050505050565b6000815180845260208085019450848260051b86018286016000805b8681101562000bf8578484038a5282516040815181875262000ba482880182620009a4565b92890151878403888b01528051808552908a01938693508a0191505b8083101562000be2578351825292890192600192909201919089019062000bc0565b509b88019b955050509185019160010162000b7f565b509198975050505050505050565b60006040808401835182865281815180845260608801915060608160051b89010193506020808401935060005b8281101562000c7857898603605f190184528451805188885262000c5a89890182620009a4565b91840151978401979097529550938101939281019260010162000c33565b50808801519550888503818a01525050505062000b5a818362000b63565b6000815180845260208085019450848260051b86018286016000805b8681101562000bf8578484038a5282516040815181875262000cd782880182620009a4565b92890151878403888b01528051808552908a01938693508a0191505b8083101562000d15578351825292890192600192909201919089019062000cf3565b509b88019b955050509185019160010162000cb2565b60006040808401835182865281815180845260608801915060608160051b89010193506020808401935060005b8281101562000d9d57898603605f190184528451805188885262000d7f89890182620009a4565b91840151978401979097529550938101939281019260010162000d58565b50808801519550888503818a01525050505062000b5a818362000c96565b600081518084526020808501808196508360051b810191508286016000805b8681101562000ab3578385038a5282516040815181885262000dff82890182620009a4565b92890151888403898b01528051808552908a01938693508a0191505b8083101562000e3f5783511515825292890192600192909201919089019062000e1b565b509b88019b965050509185019160010162000dda565b60006040808401835182865281815180845260608801915060608160051b89010193506020808401935060005b8281101562000ec957898603605f190184528451805188885262000ea989890182620009a4565b918401511515978401979097529550938101939281019260010162000e82565b50808801519550888503818a01525050505062000b5a818362000dbb565b600081518084526020808501808196508360051b810191508286016000805b8681101562000ab3578385038a5282516040815181885262000f2b82890182620009a4565b92890151888403898b01528051808552908a01938693508a0191505b8083101562000f69578351825292890192600192909201919089019062000f47565b509b88019b965050509185019160010162000f06565b60006040808401835182865281815180845260608801915060608160051b89010193506020808401935060005b8281101562000ff157898603605f190184528451805188885262000fd389890182620009a4565b91840151978401979097529550938101939281019260010162000fac565b50808801519550888503818a01525050505062000b5a818362000ee7565b600081518084526020808501808196506005915083821b81018387016000805b87811015620010c2578484038b528251604081518187526200105482880182620009a4565b928a0151878403888c01528051808552908b019392508a83019150808a1b83018b01865b82811015620010aa57601f1985830301845262001097828751620009a4565b958d0195938d0193915060010162001078565b509e8b019e975050509388019350506001016200102f565b50919998505050505050505050565b60006040808401835182865281815180845260608801915060608160051b89010193506020808401935060005b828110156200115457898603605f19018452845180518888526200112589890182620009a4565b91840151888303898601529190506200113f8183620009a4565b975050509381019392810192600101620010fe565b50808801519550888503818a01525050505062000b5a81836200100f565b600081518084526020808501808196506005915083821b81018387016000805b87811015620010c2578484038b52825160408151818752620011b782880182620009a4565b928a0151878403888c01528051808552908b019392508a83019150808a1b83018b01865b828110156200120d57601f19858303018452620011fa828751620009a4565b958d0195938d01939150600101620011db565b509e8b019e9750505093880193505060010162001192565b60006040808401835182865281815180845260608801915060608160051b89010193506020808401935060005b82811015620012a857898603605f19018452845180518888526200127989890182620009a4565b9184015188830389860152919050620012938183620009a4565b97505050938101939281019260010162001252565b50808801519550888503818a01525050505062000b5a818362001172565b60608152600a60608201526911db1d90dc99585d195960b21b608082015282602082015260a060408201526000825160e060a08401526200130c61018084018262000ac1565b90506020840151609f19808584030160c08601526200132c838362000c06565b925060408601519150808584030160e08601526200134b838362000d2b565b92506060860151915080858403016101008601526200136b838362000e55565b92506080860151915080858403016101208601526200138b838362000f7f565b925060a086015191508085840301610140860152620013ab8383620010d1565b925060c08601519150808584030161016086015250620013cc828262001225565b9695505050505050565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fdfe60c06040523480156200001157600080fd5b5060405162001e9f38038062001e9f8339810160408190526200003491620000e5565b81818181816040518060400160405280601381526020017f474d58204c6971756964697479205661756c74000000000000000000000000008152506040518060400160405280600381526020016223a62b60e91b81525081600390816200009c9190620001c9565b506004620000ab8282620001c9565b5050506001600160a01b039081166080521660a05250620002959350505050565b6001600160a01b0381168114620000e257600080fd5b50565b60008060408385031215620000f957600080fd5b82516200010681620000cc565b60208401519092506200011981620000cc565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200014f57607f821691505b6020821081036200017057634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620001c457600081815260208120601f850160051c810160208610156200019f5750805b601f850160051c820191505b81811015620001c057828155600101620001ab565b5050505b505050565b81516001600160401b03811115620001e557620001e562000124565b620001fd81620001f684546200013a565b8462000176565b602080601f8311600181146200023557600084156200021c5750858301515b600019600386901b1c1916600185901b178555620001c0565b600085815260208120601f198616915b82811015620002665788860151825594840194600190910190840162000245565b5085821015620002855787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60805160a051611bba620002e56000396000818161010a0152818161034101528181610668015281816107ff015281816109e20152610d720152600081816102d301526109190152611bba6000f3fe6080604052600436106100fe5760003560e01c806306fdde031461016b578063078d3b7914610196578063095ea7b3146101b657806318160ddd146101e657806323b872dd146102055780632fb1260514610225578063313ce56714610245578063352f9aed14610261578063395093511461028157806340c10f19146102a15780634a4a7b04146102c1578063523fba7f14610302578063660d0d671461032f57806370a082311461036357806395d89b41146103995780639dc29fac146103ae578063a457c2d7146103ce578063a9059cbb146103ee578063d443ca941461040e578063dd62ed3e1461042e578063eb40133f1461044e57600080fd5b3661016657600061012e7f000000000000000000000000000000000000000000000000000000000000000061046e565b9050336001600160a01b03821614610164573360405163738d28df60e11b815260040161015b9190611777565b60405180910390fd5b005b600080fd5b34801561017757600080fd5b50610180610521565b60405161018d91906117db565b60405180910390f35b3480156101a257600080fd5b506101646101b136600461180a565b6105b3565b3480156101c257600080fd5b506101d66101d136600461184b565b610613565b604051901515815260200161018d565b3480156101f257600080fd5b506002545b60405190815260200161018d565b34801561021157600080fd5b506101d661022036600461180a565b61062b565b34801561023157600080fd5b50610164610240366004611885565b61064f565b34801561025157600080fd5b506040516012815260200161018d565b34801561026d57600080fd5b506101f761027c3660046118d8565b6106d3565b34801561028d57600080fd5b506101d661029c36600461184b565b6106f0565b3480156102ad57600080fd5b506101646102bc36600461184b565b610712565b3480156102cd57600080fd5b506102f57f000000000000000000000000000000000000000000000000000000000000000081565b60405161018d9190611777565b34801561030e57600080fd5b506101f761031d3660046118d8565b60056020526000908152604090205481565b34801561033b57600080fd5b506102f57f000000000000000000000000000000000000000000000000000000000000000081565b34801561036f57600080fd5b506101f761037e3660046118d8565b6001600160a01b031660009081526020819052604090205490565b3480156103a557600080fd5b50610180610732565b3480156103ba57600080fd5b506101646103c936600461184b565b610741565b3480156103da57600080fd5b506101d66103e936600461184b565b61075d565b3480156103fa57600080fd5b506101d661040936600461184b565b6107d8565b34801561041a57600080fd5b5061016461042936600461184b565b6107e6565b34801561043a57600080fd5b506101f76104493660046118f5565b610830565b34801561045a57600080fd5b506101f76104693660046118d8565b61085b565b6000816001600160a01b03166321f8a7216040516020016104a69060208082526003908201526215d39560ea1b604082015260600190565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b81526004016104da91815260200190565b602060405180830381865afa1580156104f7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061051b919061192e565b92915050565b6060600380546105309061194b565b80601f016020809104026020016040519081016040528092919081815260200182805461055c9061194b565b80156105a95780601f1061057e576101008083540402835291602001916105a9565b820191906000526020600020905b81548152906001019060200180831161058c57829003601f168201915b5050505050905090565b6106036040516020016105c590611985565b604051602081830303815290604052805190602001206040518060400160405280600a81526020016921a7a72a2927a62622a960b11b815250610902565b61060e8383836109b2565b505050565b600033610621818585610a12565b5060019392505050565b600033610639858285610b36565b610644858585610bb0565b506001949350505050565b6106616040516020016105c590611985565b600061068c7f000000000000000000000000000000000000000000000000000000000000000061046e565b9050806001600160a01b0316856001600160a01b03161480156106ac5750815b156106c1576106bc858585610d42565b6106cc565b6106cc8585856109b2565b5050505050565b60006106e76040516020016105c590611985565b61051b82610d99565b6000336106218185856107038383610830565b61070d91906119bf565b610a12565b6107246040516020016105c590611985565b61072e8282610e4a565b5050565b6060600480546105309061194b565b6107536040516020016105c590611985565b61072e8282610ef7565b6000338161076b8286610830565b9050838110156107cb5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b606482015260840161015b565b6106448286868403610a12565b600033610621818585610bb0565b6107f86040516020016105c590611985565b60006108237f000000000000000000000000000000000000000000000000000000000000000061046e565b905061060e818484610d42565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b600061086f6040516020016105c590611985565b6040516370a0823160e01b81526000906001600160a01b038416906370a082319061089e903090600401611777565b602060405180830381865afa1580156108bb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108df91906119d2565b6001600160a01b0384166000908152600560205260409020819055915050919050565b60405163ac4ab3fb60e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063ac4ab3fb9061095090339086906004016119eb565b602060405180830381865afa15801561096d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109919190611a04565b61072e57338160405163a35b150b60e01b815260040161015b929190611a21565b306001600160a01b038316036109dd5781604051637387c8a960e11b815260040161015b9190611777565b610a097f0000000000000000000000000000000000000000000000000000000000000000848484611017565b61060e83611261565b6001600160a01b038316610a745760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161015b565b6001600160a01b038216610ad55760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161015b565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6000610b428484610830565b90506000198114610baa5781811015610b9d5760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000604482015260640161015b565b610baa8484848403610a12565b50505050565b6001600160a01b038316610c145760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b606482015260840161015b565b6001600160a01b038216610c765760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161015b565b6001600160a01b03831660009081526020819052604090205481811015610cee5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b606482015260840161015b565b6001600160a01b0384811660008181526020818152604080832087870390559387168083529184902080548701905592518581529092600080516020611b65833981519152910160405180910390a3610baa565b306001600160a01b03831603610d6d5781604051637387c8a960e11b815260040161015b9190611777565b610a097f00000000000000000000000000000000000000000000000000000000000000008484846112ea565b6001600160a01b0381166000818152600560205260408082205490516370a0823160e01b8152919290918391906370a0823190610dda903090600401611777565b602060405180830381865afa158015610df7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e1b91906119d2565b6001600160a01b03851660009081526005602052604090208190559050610e428282611a45565b949350505050565b6001600160a01b038216610ea05760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640161015b565b8060026000828254610eb291906119bf565b90915550506001600160a01b03821660008181526020818152604080832080548601905551848152600080516020611b65833981519152910160405180910390a35050565b6001600160a01b038216610f575760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b606482015260840161015b565b6001600160a01b03821660009081526020819052604090205481811015610fcb5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b606482015260840161015b565b6001600160a01b038316600081815260208181526040808320868603905560028054879003905551858152919291600080516020611b65833981519152910160405180910390a3505050565b8015610baa576110268261144a565b6000846001600160a01b031663bd02d0f561104086611474565b6040518263ffffffff1660e01b815260040161105e91815260200190565b602060405180830381865afa15801561107b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061109f91906119d2565b9050806000036110c45783604051634fe14bfd60e11b815260040161015b9190611777565b60006110d2858585856114fc565b50905080156110e2575050610baa565b6000866001600160a01b03166321f8a721604051602001611126906020808252600f908201526e484f4c44494e475f4144445245535360881b604082015260600190565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b815260040161115a91815260200190565b602060405180830381865afa158015611177573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061119b919061192e565b90506001600160a01b0381166111c457604051633a6de2f560e21b815260040160405180910390fd5b6000806111d3888488886114fc565b9150915081156111e7575050505050610baa565b60006111f282611664565b5090507fc9f14d9a0a9b46470c7c0b6c508f8283abaab7f795f153953c58cd4250824dae8183604051611226929190611a58565b60405180910390a160405163012f3b8f60e71b81526001600160a01b03808b166004830152891660248201526044810188905260640161015b565b6040516370a0823160e01b81526001600160a01b038216906370a082319061128d903090600401611777565b602060405180830381865afa1580156112aa573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112ce91906119d2565b6001600160a01b03909116600090815260056020526040902055565b8015610baa576112f98261144a565b604051632e1a7d4d60e01b8152600481018290526001600160a01b03841690632e1a7d4d90602401600060405180830381600087803b15801561133b57600080fd5b505af115801561134f573d6000803e3d6000fd5b505050506000846001600160a01b031663bd02d0f56040516020016113a5906020808252601f908201527f4e41544956455f544f4b454e5f5452414e534645525f4741535f4c494d495400604082015260600190565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b81526004016113d991815260200190565b602060405180830381865afa1580156113f6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061141a91906119d2565b90506000806000806000868887f190508015611437575050610baa565b6114428685856116f4565b505050505050565b6001600160a01b0381166114715760405163d551823d60e01b815260040160405180910390fd5b50565b60006040516020016114b2906020808252601890820152771513d2d15397d514905394d1915497d1d054d7d31253525560421b604082015260600190565b60408051601f198184030181528282528051602091820120908301526001600160a01b03841690820152606001604051602081830303815290604052805190602001209050919050565b60006060600063a9059cbb60e01b868660405160240161151d9291906119eb565b604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b0383818316178352505050509050600080886001600160a01b0316868460405161156e9190611a86565b60006040518083038160008787f1925050503d80600081146115ac576040519150601f19603f3d011682016040523d82523d6000602084013e6115b1565b606091505b5091509150811561165257805160000361160f576001600160a01b0389163b61160f5760006040518060400160405280601481526020017310d85b1b081d1bc81b9bdb8b58dbdb9d1c9858dd60621b8152509450945050505061165b565b6000815111801561163157508080602001905181019061162f9190611a04565b155b156116445760009450925061165b915050565b60019450925061165b915050565b60009450925050505b94509492505050565b6060600060448351101561168b575050604080516020810190915260008082529092909150565b6000611698846020015190565b90506307b9e43360e51b6001600160e01b03198216016116d757600484019350838060200190518101906116cc9190611ab8565b946001945092505050565b600060405180602001604052806000815250909250925050915091565b8060000361170157505050565b61170a8261144a565b60006117158461046e565b9050806001600160a01b031663d0e30db0836040518263ffffffff1660e01b81526004016000604051808303818588803b15801561175257600080fd5b505af1158015611766573d6000803e3d6000fd5b5050505050610baa84828585611017565b6001600160a01b0391909116815260200190565b60005b838110156117a657818101518382015260200161178e565b50506000910152565b600081518084526117c781602086016020860161178b565b601f01601f19169290920160200192915050565b6020815260006117ee60208301846117af565b9392505050565b6001600160a01b038116811461147157600080fd5b60008060006060848603121561181f57600080fd5b833561182a816117f5565b9250602084013561183a816117f5565b929592945050506040919091013590565b6000806040838503121561185e57600080fd5b8235611869816117f5565b946020939093013593505050565b801515811461147157600080fd5b6000806000806080858703121561189b57600080fd5b84356118a6816117f5565b935060208501356118b6816117f5565b92506040850135915060608501356118cd81611877565b939692955090935050565b6000602082840312156118ea57600080fd5b81356117ee816117f5565b6000806040838503121561190857600080fd5b8235611913816117f5565b91506020830135611923816117f5565b809150509250929050565b60006020828403121561194057600080fd5b81516117ee816117f5565b600181811c9082168061195f57607f821691505b60208210810361197f57634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252600a908201526921a7a72a2927a62622a960b11b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b8082018082111561051b5761051b6119a9565b6000602082840312156119e457600080fd5b5051919050565b6001600160a01b03929092168252602082015260400190565b600060208284031215611a1657600080fd5b81516117ee81611877565b6001600160a01b0383168152604060208201819052600090610e42908301846117af565b8181038181111561051b5761051b6119a9565b604081526000611a6b60408301856117af565b8281036020840152611a7d81856117af565b95945050505050565b60008251611a9881846020870161178b565b9190910192915050565b634e487b7160e01b600052604160045260246000fd5b600060208284031215611aca57600080fd5b81516001600160401b0380821115611ae157600080fd5b818401915084601f830112611af557600080fd5b815181811115611b0757611b07611aa2565b604051601f8201601f19908116603f01168101908382118183101715611b2f57611b2f611aa2565b81604052828152876020848701011115611b4857600080fd5b611b5983602083016020880161178b565b97965050505050505056feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa26469706673582212202dc681c1a11593f2d9fb54b94e522bd46dbf1bdfc743692dd65afcc7ffd86c3a64736f6c63430008120033a26469706673582212207b396c4b30633ad9eab35dfa9347b3a829a8649963d327cd055912e46603894d64736f6c63430008120033";

type GlvFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GlvFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GlvFactory__factory extends ContractFactory {
  constructor(...args: GlvFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _roleStore: PromiseOrValue<string>,
    _dataStore: PromiseOrValue<string>,
    _eventEmitter: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<GlvFactory> {
    return super.deploy(
      _roleStore,
      _dataStore,
      _eventEmitter,
      overrides || {}
    ) as Promise<GlvFactory>;
  }
  override getDeployTransaction(
    _roleStore: PromiseOrValue<string>,
    _dataStore: PromiseOrValue<string>,
    _eventEmitter: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _roleStore,
      _dataStore,
      _eventEmitter,
      overrides || {}
    );
  }
  override attach(address: string): GlvFactory {
    return super.attach(address) as GlvFactory;
  }
  override connect(signer: Signer): GlvFactory__factory {
    return super.connect(signer) as GlvFactory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GlvFactoryInterface {
    return new utils.Interface(_abi) as GlvFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GlvFactory {
    return new Contract(address, _abi, signerOrProvider) as GlvFactory;
  }
}