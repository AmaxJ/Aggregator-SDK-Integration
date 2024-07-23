/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  AdlUtils,
  AdlUtilsInterface,
} from "../../../contracts/adl/AdlUtils";

const _abi = [
  {
    inputs: [],
    name: "AdlNotEnabled",
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
        internalType: "uint256",
        name: "sizeDeltaUsd",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "positionSizeInUsd",
        type: "uint256",
      },
    ],
    name: "InvalidSizeDeltaForAdl",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "minOracleTimestamp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expectedTimestamp",
        type: "uint256",
      },
    ],
    name: "OracleTimestampsAreSmallerThanRequired",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "contract DataStore",
        name: "dataStore",
        type: "DataStore",
      },
      {
        internalType: "contract Oracle",
        name: "oracle",
        type: "Oracle",
      },
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
    ],
    name: "validateAdl",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x612de461003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361061004b5760003560e01c806377cd745a14610050578063ba1fd27214610072578063dbadc9b914610085575b600080fd5b81801561005c57600080fd5b5061007061006b366004611cc7565b6100b7565b005b610070610080366004611d38565b610272565b81801561009157600080fd5b506100a56100a0366004611e42565b61035d565b60405190815260200160405180910390f35b60006100c48684846107f8565b905080846001600160a01b031663716042456040518163ffffffff1660e01b8152600401602060405180830381865afa158015610105573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101299190611ee7565b10156101ba57836001600160a01b031663716042456040518163ffffffff1660e01b8152600401602060405180830381865afa15801561016d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101919190611ee7565b604051637d677abf60e01b81526004810191909152602481018290526044015b60405180910390fd5b60006101c6878561087c565b905060006101d4868361093c565b905060008060006102378b86868a60405160200161021c9060208082526016908201527513505617d4139317d19050d513d497d193d497d0511360521b604082015260600190565b60405160208183030381529060405280519060200120610ab2565b9250925092506102498b898986610b06565b506102568b898942610b94565b506102658a8989858588610c19565b5050505050505050505050565b600061027f858484610d99565b90508061029f57604051633285dc5760e01b815260040160405180910390fd5b60006102ac8685856107f8565b905080856001600160a01b031663716042456040518163ffffffff1660e01b8152600401602060405180830381865afa1580156102ed573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103119190611ee7565b101561035557846001600160a01b031663716042456040518163ffffffff1660e01b8152600401602060405180830381865afa15801561016d573d6000803e3d6000fd5b505050505050565b6000806103c48360400151846060015185608001518660a00151604080516001600160a01b039586166020808301919091529486168183015292909416606083015215156080808301919091528351808303909101815260a0909101909252815191012090565b835160405163fdfc26f360e01b815291925060009173__$3d31b232fb363902662fbc281b11ab3357$__9163fdfc26f39161040491908690600401611f00565b6101e060405180830381865af4158015610422573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104469190611f76565b905061045481602001515190565b8460c00151111561048c5760c084015160208201515160405163720bb46160e01b8152600481019290925260248201526044016101b1565b600060405180610100016040528086604001516001600160a01b0316815260200186604001516001600160a01b0316815260200186604001516001600160a01b031681526020016104ea876000015188604001518960600151610e13565b6001600160a01b0316815260200160006001600160a01b0316815260200186606001516001600160a01b0316815260200161052784516040015190565b6001600160a01b031681526020016000604051908082528060200260200182016040528015610560578160200160208202803683370190505b5090526040805161016081019091529091506000908060048152602001600181526020018760c00151815260200160008152602001600081526020016105a885604001515190565b6105b4576000196105b7565b60005b81526020016000815260200187600001516001600160a01b031663bd02d0f56040516020016106109060208082526016908201527513505617d0d05313109050d2d7d1d054d7d31253525560521b604082015260600190565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b815260040161064491815260200190565b602060405180830381865afa158015610661573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106859190611ee7565b8152602001600081526020018760e0015181526020018761010001518152509050600060405180608001604052806106bf86604001515190565b1515815260200160011515815260200160001515815260200160001515815250905060006040518060600160405280858152602001848152602001838152509050600061070f8960000151610e8d565b8951604051630c154e0d60e31b815291925073__$9dcb75ef0bb6c4288f2ccffe7dc492c4eb$__916360aa70689161074d918590879060040161229e565b60006040518083038186803b15801561076557600080fd5b505af4158015610779573d6000803e3d6000fd5b50505060208a01516040516321f5dc7d60e01b815273__$2cb2169b31257cc84fcd1b9a9c4c15efa9$__92506321f5dc7d916107bb918590879060040161229e565b60006040518083038186803b1580156107d357600080fd5b505af41580156107e7573d6000803e3d6000fd5b50929b9a5050505050505050505050565b6000836001600160a01b031663bd02d0f56108138585610ed0565b6040518263ffffffff1660e01b815260040161083191815260200190565b602060405180830381865afa15801561084e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108729190611ee7565b90505b9392505050565b60408051608081018252600080825260208201819052918101829052606081019190915260405163a8d8fff560e01b81526001600160a01b0380851660048301528316602482015260009073__$ff439aa65a80c9eec648f15db20b189505$__9063a8d8fff590604401608060405180830381865af4158015610903573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061092791906122c5565b90506109338482610f57565b90505b92915050565b610944611b4e565b6040518060600160405280846001600160a01b0316635dcf719485602001516040518263ffffffff1660e01b815260040161097f9190612357565b6040805180830381865afa15801561099b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109bf919061236b565b8152602001846001600160a01b0316635dcf719485604001516040518263ffffffff1660e01b81526004016109f49190612357565b6040805180830381865afa158015610a10573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a34919061236b565b8152602001846001600160a01b0316635dcf719485606001516040518263ffffffff1660e01b8152600401610a699190612357565b6040805180830381865afa158015610a85573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aa9919061236b565b90529392505050565b600080600080610ac6898989896001611025565b90506000610ada8a878b600001518a611075565b905060008083138015610af4575081610af2846110cc565b115b9b929a50909850909650505050505050565b6000846001600160a01b031663abfdcced610b218686611122565b6040516001600160e01b031960e084901b168152600481019190915284151560248201526044016020604051808303816000875af1158015610b67573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b8b91906123c7565b95945050505050565b6000846001600160a01b031663e2a4853a610baf8686610ed0565b846040518363ffffffff1660e01b8152600401610bd6929190918252602082015260400190565b6020604051808303816000875af1158015610bf5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b8b9190611ee7565b610c21611b80565b6040810151610c31906001611156565b604080518082018252600f81526e3837362a37a837b7b62330b1ba37b960891b602082015290820151610c6791600090876111bb565b6020810151610c77906001611156565b610cb760006040518060400160405280600c81526020016b36b0bc2837362330b1ba37b960a11b8152508584602001516111bb909392919063ffffffff16565b6060810151610cc7906002611156565b60408051808201909152600681526569734c6f6e6760d01b60208201526060820151610cf6916000908861120e565b60408051808201909152600f81526e1cda1bdd5b19115b98589b1950591b608a1b60208201526060820151610d2e916001908561120e565b866001600160a01b03166324de01e4610d4d886001600160a01b031690565b836040518363ffffffff1660e01b8152600401610d6b929190612bc3565b600060405180830381600087803b158015610d8557600080fd5b505af1158015610265573d6000803e3d6000fd5b6000836001600160a01b0316637ae1cfca610db48585611122565b6040518263ffffffff1660e01b8152600401610dd291815260200190565b602060405180830381865afa158015610def573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061087291906123c7565b6000836001600160a01b03166321f8a721610e2e8585611263565b6040518263ffffffff1660e01b8152600401610e4c91815260200190565b602060405180830381865afa158015610e69573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108729190612cc0565b600080610e99836112dd565b905060008382604051602001610eb0929190611f00565b60408051601f198184030181529190528051602090910120949350505050565b6000604051602001610f03906020808252600d908201526c1310551154d517d0511317d055609a1b604082015260600190565b60408051601f198184030181528282528051602091820120908301526001600160a01b0385169082015282151560608201526080015b60405160208183030381529060405280519060200120905092915050565b80516001600160a01b0316610f7f576040516302fde0d760e11b815260040160405180910390fd5b6000826001600160a01b0316637ae1cfca610f9d8460000151611393565b6040518263ffffffff1660e01b8152600401610fbb91815260200190565b602060405180830381865afa158015610fd8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ffc91906123c7565b905080156110205781516040516309f8c93760e01b81526101b19190600401612357565b505050565b600080611036878787878715611415565b90508060000361104a576000915050610b8b565b600061105d88888860000151888861149b565b9050611069818361152c565b98975050505050505050565b6000846001600160a01b031663bd02d0f5611091868686611573565b6040518263ffffffff1660e01b81526004016110af91815260200190565b602060405180830381865afa158015610bf5573d6000803e3d6000fd5b60008082121561111e5760405162461bcd60e51b815260206004820181905260248201527f53616665436173743a2076616c7565206d75737420626520706f73697469766560448201526064016101b1565b5090565b6000604051602001610f03906020808252600e908201526d1254d7d0511317d153905093115160921b604082015260600190565b806001600160401b0381111561116e5761116e611d94565b6040519080825280602002602001820160405280156111b457816020015b60408051808201909152606081526000602082015281526020019060019003908161118c5790505b5090915250565b81846000015184815181106111d2576111d2612cdd565b60200260200101516000018190525080846000015184815181106111f8576111f8612cdd565b6020026020010151602001818152505050505050565b818460000151848151811061122557611225612cdd565b602002602001015160000181905250808460000151848151811061124b5761124b612cdd565b60209081029190910181015191151591015250505050565b60006040516020016112a09060208082526017908201527614d055915117d0d05313109050d2d7d0d3d395149050d5604a1b604082015260600190565b60408051601f198184030181528282528051602091820120908301526001600160a01b038086169183019190915283166060820152608001610f39565b6000816001600160a01b031663340dbab3604051602001611317906020808252600590820152644e4f4e434560d81b604082015260600190565b60408051601f198184030181529082905280516020909101206001600160e01b031960e084901b1682526004820152600160248201526044016020604051808303816000875af115801561136f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109369190611ee7565b60006040516020016113cb906020808252601290820152711254d7d3505492d15517d11254d05093115160721b604082015260600190565b60408051601f198184030181528282528051602091820120908301526001600160a01b03841690820152606001604051602081830303815290604052805190602001209050919050565b6000808361142757856060015161142d565b85604001515b9050600061143c888884611602565b90506000841561146a578561145957866040015160200151611463565b8660200151602001515b9050611484565b8561147a57604087015151611481565b6020870151515b90505b61148e8183612d09565b9998505050505050505050565b6000806114b16114ac8888876116a0565b6116fe565b905060006114c0888887611768565b90508115806114cd575080155b156114dd57600092505050610b8b565b60006114ea8787876117af565b905060006114fb6114ac8385612d09565b90506000876115135761150e8286612d20565b61151d565b61151d8583612d20565b9b9a5050505050505050505050565b60008061154161153b856117e8565b846117fb565b90506000841361156257611554816116fe565b61155d90612d47565b61156b565b61156b816116fe565b949350505050565b60006040516020016115a7906020808252600e908201526d26a0ac2fa827262fa320a1aa27a960911b604082015260600190565b60408051601f1981840301815282825280516020918201209083015281018590526001600160a01b0384166060820152821515608082015260a0015b6040516020818303038152906040528051906020012090509392505050565b60008061161784604001518560600151611809565b905080856001600160a01b031663bd02d0f5611637876000015187611838565b6040518263ffffffff1660e01b815260040161165591815260200190565b602060405180830381865afa158015611672573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116969190611ee7565b610b8b9190612d79565b6000806116b584604001518560600151611809565b905060006116ce86866000015187604001518786611869565b905060006116e787876000015188606001518887611869565b90506116f38183612d9b565b979650505050505050565b60006001600160ff1b0382111561111e5760405162461bcd60e51b815260206004820152602860248201527f53616665436173743a2076616c756520646f65736e27742066697420696e2061604482015267371034b73a191a9b60c11b60648201526084016101b1565b60008061177d84604001518560600151611809565b90506000611796868660000151876040015187866118f9565b905060006116e7878760000151886060015188876118f9565b600082156117d057816117c35783516117c9565b83602001515b9050610875565b816117df578360200151610872565b50509051919050565b60008082121561111e5781600003610936565b600061093383836000611916565b6000816001600160a01b0316836001600160a01b03161461182b57600161182e565b60025b60ff169392505050565b60006040516020016112a0906020808252600b908201526a1413d3d317d05353d5539560aa1b604082015260600190565b600081866001600160a01b031663bd02d0f561188688888861195e565b6040518263ffffffff1660e01b81526004016118a491815260200190565b602060405180830381865afa1580156118c1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118e59190611ee7565b6118ef9190612d79565b9695505050505050565b600081866001600160a01b031663bd02d0f56118868888886119d6565b60008360000361192857506000610875565b8115611947576117c98468327cb2734119d3b7a9601e1b856001611a13565b6108728468327cb2734119d3b7a9601e1b85611a64565b6000604051602001611991906020808252600d908201526c13d4115397d2539511549154d5609a1b604082015260600190565b60408051601f198184030181528282528051602091820120908301526001600160a01b038087169183019190915284166060820152821515608082015260a0016115e3565b6000604051602001611991906020808252601790820152764f50454e5f494e5445524553545f494e5f544f4b454e5360481b604082015260600190565b600080611a21868686611a64565b90506001836002811115611a3757611a3761208f565b148015611a54575060008480611a4f57611a4f612d63565b868809115b15610b8b576118ef600182612d9b565b6000808060001985870985870292508281108382030391505080600003611a9e57838281611a9457611a94612d63565b0492505050610875565b808411611ae55760405162461bcd60e51b81526020600482015260156024820152744d6174683a206d756c446976206f766572666c6f7760581b60448201526064016101b1565b60008486880960026001871981018816978890046003810283188082028403028082028403028082028403028082028403028082028403029081029092039091026000889003889004909101858311909403939093029303949094049190911702949350505050565b6040518060600160405280611b61611c6c565b8152602001611b6e611c6c565b8152602001611b7b611c6c565b905290565b604080516101208101909152606060e0820181815261010083019190915281908152602001611bc2604051806040016040528060608152602001606081525090565b8152602001611be4604051806040016040528060608152602001606081525090565b8152602001611c06604051806040016040528060608152602001606081525090565b8152602001611c28604051806040016040528060608152602001606081525090565b8152602001611c4a604051806040016040528060608152602001606081525090565b8152602001611b7b604051806040016040528060608152602001606081525090565b604051806040016040528060008152602001600081525090565b6001600160a01b0381168114611c9b57600080fd5b50565b8035611ca981611c86565b919050565b8015158114611c9b57600080fd5b8035611ca981611cae565b600080600080600060a08688031215611cdf57600080fd5b8535611cea81611c86565b94506020860135611cfa81611c86565b93506040860135611d0a81611c86565b92506060860135611d1a81611c86565b91506080860135611d2a81611cae565b809150509295509295909350565b60008060008060808587031215611d4e57600080fd5b8435611d5981611c86565b93506020850135611d6981611c86565b92506040850135611d7981611c86565b91506060850135611d8981611cae565b939692955090935050565b634e487b7160e01b600052604160045260246000fd5b60405161012081016001600160401b0381118282101715611ddb57634e487b7160e01b600052604160045260246000fd5b60405290565b604051606081016001600160401b0381118282101715611ddb57634e487b7160e01b600052604160045260246000fd5b60405161016081016001600160401b0381118282101715611ddb57634e487b7160e01b600052604160045260246000fd5b60006101208284031215611e5557600080fd5b611e5d611daa565b611e6683611c9e565b8152611e7460208401611c9e565b6020820152611e8560408401611c9e565b6040820152611e9660608401611c9e565b6060820152611ea760808401611c9e565b6080820152611eb860a08401611cbc565b60a082015260c083013560c082015260e083013560e08201526101008084013581830152508091505092915050565b600060208284031215611ef957600080fd5b5051919050565b6001600160a01b03929092168252602082015260400190565b600060208284031215611f2b57600080fd5b604051602081016001600160401b0381118282101715611f5b57634e487b7160e01b600052604160045260246000fd5b80604052508091508251611f6e81611cae565b905292915050565b60008183036101e0811215611f8a57600080fd5b611f92611de1565b6060821215611fa057600080fd5b611fa8611de1565b8451611fb381611c86565b81526020850151611fc381611c86565b60208201526040850151611fd681611c86565b60408201528152610160605f198301811315611ff157600080fd5b611ff9611e11565b9250606085015183526080850151602084015260a0850151604084015260c0850151606084015260e085015160808401526101008086015160a08501526101208087015160c08601526101408088015160e08701528388015183870152610180880151828701526101a08801518187015250505050816020820152612082856101c08601611f19565b6040820152949350505050565b634e487b7160e01b600052602160045260246000fd5b6001600160a01b03169052565b600081518084526020808501945080840160005b838110156120eb5781516001600160a01b0316875295820195908201906001016120c6565b509495945050505050565b600881106121065761210661208f565b9052565b600381106121065761210661208f565b6121258282516120f6565b6020810151612137602084018261210a565b5060408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152505050565b805161020080845281516001600160a01b039081169185019190915260208201511661022084015260408101516000916121da6102408601836120a5565b606081015191506121ef6102608601836120a5565b608081015191506122046102808601836120a5565b60a081015191506122196102a08601836120a5565b60c0810151915061222e6102c08601836120a5565b60e001516101006102e0860152905061224b6103008501826120b2565b9050602083015161225f602086018261211a565b5060408381015180511515610180870152602081015115156101a08701529081015115156101c0860152606081015115156101e0860152509392505050565b60018060a01b0384168152826020820152606060408201526000610b8b606083018461219c565b6000608082840312156122d757600080fd5b604051608081016001600160401b038111828210171561230757634e487b7160e01b600052604160045260246000fd5b604052825161231581611c86565b8152602083015161232581611c86565b6020820152604083015161233881611c86565b6040820152606083015161234b81611c86565b60608201529392505050565b6001600160a01b0391909116815260200190565b60006040828403121561237d57600080fd5b604080519081016001600160401b03811182821017156123ad57634e487b7160e01b600052604160045260246000fd5b604052825181526020928301519281019290925250919050565b6000602082840312156123d957600080fd5b815161093381611cae565b6000815180845260005b8181101561240a576020818501810151868301820152016123ee565b506000602082860101526020601f19601f83011685010191505092915050565b600081518084526020808501808196508360051b810191508286016000805b868110156124c5578385038a5282516040815181885261246b828901826123e4565b92890151888403898b01528051808552908a01938693508a0191505b808310156124b05783516001600160a01b03168252928901926001929092019190890190612487565b509b88019b9650505091850191600101612449565b509298975050505050505050565b60006040808401835182865281815180845260608801915060608160051b89010193506020808401935060005b8281101561254a57898603605f1901845284518051888852612524898901826123e4565b918401516001600160a01b03169784019790975295509381019392810192600101612500565b50808801519550888503818a015250505050610b8b818361242a565b600081518084526020808501808196508360051b810191508286016000805b868110156124c5578385038a528251604081518188526125a7828901826123e4565b92890151888403898b01528051808552908a01938693508a0191505b808310156125e357835182529289019260019290920191908901906125c3565b509b88019b9650505091850191600101612585565b60006040808401835182865281815180845260608801915060608160051b89010193506020808401935060005b8281101561266657898603605f1901845284518051888852612649898901826123e4565b918401519784019790975295509381019392810192600101612625565b50808801519550888503818a015250505050610b8b8183612566565b600081518084526020808501808196508360051b810191508286016000805b868110156124c5578385038a528251604081518188526126c3828901826123e4565b92890151888403898b01528051808552908a01938693508a0191505b808310156126ff57835182529289019260019290920191908901906126df565b509b88019b96505050918501916001016126a1565b60006040808401835182865281815180845260608801915060608160051b89010193506020808401935060005b8281101561278257898603605f1901845284518051888852612765898901826123e4565b918401519784019790975295509381019392810192600101612741565b50808801519550888503818a015250505050610b8b8183612682565b600081518084526020808501808196508360051b810191508286016000805b868110156124c5578385038a528251604081518188526127df828901826123e4565b92890151888403898b01528051808552908a01938693508a0191505b8083101561281d578351151582529289019260019290920191908901906127fb565b509b88019b96505050918501916001016127bd565b60006040808401835182865281815180845260608801915060608160051b89010193506020808401935060005b828110156128a257898603605f1901845284518051888852612883898901826123e4565b918401511515978401979097529550938101939281019260010161285f565b50808801519550888503818a015250505050610b8b818361279e565b60006040808401835182865281815180845260608801915060608160051b89010193506020808401935060005b8281101561266657898603605f190184528451805188885261290f898901826123e4565b9184015197840197909752955093810193928101926001016128eb565b600081518084526020808501808196506005915083821b81018387016000805b878110156129d7578484038b5282516040815181875261296e828801826123e4565b928a0151878403888c01528051808552908b019392508a83019150808a1b83018b01865b828110156129c057601f198583030184526129ae8287516123e4565b958d0195938d01939150600101612992565b509e8b019e9750505093880193505060010161294c565b50919998505050505050505050565b60006040808401835182865281815180845260608801915060608160051b89010193506020808401935060005b82811015612a6357898603605f1901845284518051888852612a37898901826123e4565b9184015188830389860152919050612a4f81836123e4565b975050509381019392810192600101612a13565b50808801519550888503818a015250505050610b8b818361292c565b600081518084526020808501808196506005915083821b81018387016000805b878110156129d7578484038b52825160408151818752612ac1828801826123e4565b928a0151878403888c01528051808552908b019392508a83019150808a1b83018b01865b82811015612b1357601f19858303018452612b018287516123e4565b958d0195938d01939150600101612ae5565b509e8b019e97505050938801935050600101612a9f565b60006040808401835182865281815180845260608801915060608160051b89010193506020808401935060005b82811015612ba757898603605f1901845284518051888852612b7b898901826123e4565b9184015188830389860152919050612b9381836123e4565b975050509381019392810192600101612b57565b50808801519550888503818a015250505050610b8b8183612a7f565b60608152600f60608201526e10591b14dd185d19555c19185d1959608a1b608082015282602082015260a060408201526000825160e060a0840152612c0c6101808401826124d3565b90506020840151609f19808584030160c0860152612c2a83836125f8565b925060408601519150808584030160e0860152612c478383612714565b9250606086015191508085840301610100860152612c658383612832565b9250608086015191508085840301610120860152612c8383836128be565b925060a086015191508085840301610140860152612ca183836129e6565b925060c086015191508085840301610160860152506118ef8282612b2a565b600060208284031215612cd257600080fd5b815161093381611c86565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b808202811582820484141761093657610936612cf3565b8181036000831280158383131683831282161715612d4057612d40612cf3565b5092915050565b6000600160ff1b8201612d5c57612d5c612cf3565b5060000390565b634e487b7160e01b600052601260045260246000fd5b600082612d9657634e487b7160e01b600052601260045260246000fd5b500490565b8082018082111561093657610936612cf356fea264697066735822122006dea4acdd238b9431197b1b4aea9193e3d01cabb630d726b007e5afbe9a1e3264736f6c63430008120033";

type AdlUtilsConstructorParams =
  | [linkLibraryAddresses: AdlUtilsLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AdlUtilsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class AdlUtils__factory extends ContractFactory {
  constructor(...args: AdlUtilsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(_abi, AdlUtils__factory.linkBytecode(linkLibraryAddresses), signer);
    }
  }

  static linkBytecode(linkLibraryAddresses: AdlUtilsLibraryAddresses): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$3d31b232fb363902662fbc281b11ab3357\\$__", "g"),
      linkLibraryAddresses[
        "contracts/position/PositionStoreUtils.sol:PositionStoreUtils"
      ]
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
      new RegExp("__\\$2cb2169b31257cc84fcd1b9a9c4c15efa9\\$__", "g"),
      linkLibraryAddresses[
        "contracts/order/OrderEventUtils.sol:OrderEventUtils"
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
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<AdlUtils> {
    return super.deploy(overrides || {}) as Promise<AdlUtils>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): AdlUtils {
    return super.attach(address) as AdlUtils;
  }
  override connect(signer: Signer): AdlUtils__factory {
    return super.connect(signer) as AdlUtils__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AdlUtilsInterface {
    return new utils.Interface(_abi) as AdlUtilsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AdlUtils {
    return new Contract(address, _abi, signerOrProvider) as AdlUtils;
  }
}

export interface AdlUtilsLibraryAddresses {
  ["contracts/position/PositionStoreUtils.sol:PositionStoreUtils"]: string;
  ["contracts/order/OrderStoreUtils.sol:OrderStoreUtils"]: string;
  ["contracts/order/OrderEventUtils.sol:OrderEventUtils"]: string;
  ["contracts/market/MarketStoreUtils.sol:MarketStoreUtils"]: string;
}