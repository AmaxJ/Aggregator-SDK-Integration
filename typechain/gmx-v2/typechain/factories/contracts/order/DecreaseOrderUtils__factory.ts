/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  DecreaseOrderUtils,
  DecreaseOrderUtilsInterface,
} from "../../../contracts/order/DecreaseOrderUtils";

const _abi = [
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
    inputs: [],
    name: "EmptyPosition",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "outputAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minOutputAmount",
        type: "uint256",
      },
    ],
    name: "InsufficientOutputAmount",
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
    name: "InvalidPositionMarket",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "maxOracleTimestamp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "requestTimestamp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "requestExpirationTime",
        type: "uint256",
      },
    ],
    name: "OracleTimestampsAreLargerThanRequestExpirationTime",
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
        internalType: "uint256",
        name: "orderType",
        type: "uint256",
      },
    ],
    name: "UnsupportedOrderType",
    type: "error",
  },
] as const;

const _bytecode =
  "0x612a7d61003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100355760003560e01c8063da6fe44f1461003a575b600080fd5b81801561004657600080fd5b5061005a6100553660046116d5565b610070565b60405161006791906120c1565b60405180910390f35b610078611066565b604082015182515160c084015161008f919061063b565b60006100fc61009d83515190565b835160a00151845160c00151604086015151604080516001600160a01b039586166020808301919091529486168183015292909416606083015215156080808301919091528351808303909101815260a0909101909252815191012090565b84515160405163fdfc26f360e01b81526001600160a01b0390911660048201526024810182905290915060009073__$3d31b232fb363902662fbc281b11ab3357$__9063fdfc26f3906044016101e060405180830381865af4158015610166573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061018a91906121dd565b905061019581610680565b8451516101d5906101a885602001515190565b6020860151610140015160208501516101200151602086015161014001518a608001518b60a001516106cb565b600073__$34af2f45da6b13f877428397704b7865d6$__6354f52a9f6040518060e00160405280896000015181526020018960c001518152602001878152602001896020015181526020018581526020018681526020018961012001516001811115610243576102436122f6565b8152506040518263ffffffff1660e01b815260040161026291906125b7565b60c060405180830381865af415801561027f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102a3919061268c565b606081015190915015610429576102e586600001516060015182600001518360200151846040015185606001516102e08a60200151610100015190565b610901565b835160a001516001600160a01b0316632fb12605826000015161030a87516020015190565b846020015161031e89604001516020015190565b6040518563ffffffff1660e01b815260040161033d94939291906126fa565b600060405180830381600087803b15801561035757600080fd5b505af115801561036b573d6000803e3d6000fd5b5050505061037b845160a0015190565b6001600160a01b0316632fb12605826040015161039a87516020015190565b60608501516040890151602001516040518563ffffffff1660e01b81526004016103c794939291906126fa565b600060405180830381600087803b1580156103e157600080fd5b505af11580156103f5573d6000803e3d6000fd5b5050505061041f816000015182602001518360400151846060015185608001518660a00151610a40565b9695505050505050565b8560000151608001516001600160a01b031663357531246040518061018001604052808960000151600001516001600160a01b031681526020018960000151602001516001600160a01b031681526020018960000151606001516001600160a01b0316815260200161049d885160a0015190565b6001600160a01b031681526020018960200151815260200184600001516001600160a01b031681526020018460200151815260200189606001518152602001600081526020016104ef88516020015190565b6001600160a01b0316815260200161050988516080015190565b6001600160a01b0316815260200161052688604001516020015190565b15158152506040518263ffffffff1660e01b8152600401610547919061275d565b60408051808303816000875af1925050508015610581575060408051601f3d908101601f1916820190925261057e91810190612837565b60015b610603573d8080156105af576040519150601f19603f3d011682016040523d82523d6000602084013e6105b4565b606091505b5060006105c082610bdc565b5090506105d888600001516060015187858486610c6c565b6105f78360000151846020015160008087608001518860a00151610a40565b98975050505050505050565b87516060015161062490838361061f8a60200151610100015190565b610d54565b6105f7828260008087608001518860a00151610a40565b6106458282610e01565b60208101516001600160a01b031661067c57805160405163182e30e360e01b81526106739190600401612865565b60405180910390fd5b5050565b60208101515115801561069857506020808201510151155b80156106aa5750602081015160400151155b156106c857604051634dfbbff360e01b815260040160405180910390fd5b50565b60048660078111156106df576106df6122f6565b0361080d5784821015610709578185604051637d677abf60e01b8152600401610673929190612879565b6000876001600160a01b031663bd02d0f560405160200161075590602080825260179082015276524551554553545f45585049524154494f4e5f54494d4560481b604082015260600190565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b815260040161078991815260200190565b602060405180830381865afa1580156107a6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107ca9190612887565b90506107d681876128b6565b82111561080757604051631b0971dd60e31b8152600481018390526024810187905260448101829052606401610673565b506108f8565b6005866007811115610821576108216122f6565b148061083e5750600686600781111561083c5761083c6122f6565b145b1561087b5760008486116108525784610854565b855b905080831015610807578281604051637d677abf60e01b8152600401610673929190612879565b600786600781111561088f5761088f6122f6565b036108ca5760008385116108a35783610854565b508380831015610807578281604051637d677abf60e01b8152600401610673929190612879565b8560078111156108dc576108dc6122f6565b604051630de13e0d60e21b815260040161067391815260200190565b50505050505050565b604051631773dc6560e21b81526000906001600160a01b03881690635dcf719490610930908990600401612865565b6040805180830381865afa15801561094c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061097091906128cf565b519050600061097f828761291d565b90506000886001600160a01b0316635dcf7194876040518263ffffffff1660e01b81526004016109af9190612865565b6040805180830381865afa1580156109cb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109ef91906128cf565b51905060006109fe828761291d565b90506000610a0c82856128b6565b905085811015610a3357808660405163d28d3eb560e01b8152600401610673929190612879565b5050505050505050505050565b610a48611066565b610a50611066565b8051610a5d906002610ecf565b60408051808201909152600b81526a37baba383aba2a37b5b2b760a91b60208201528151610a8e916000908b610f34565b60408051808201909152601481527339b2b1b7b73230b93ca7baba383aba2a37b5b2b760611b60208201528151610ac89160019089610f34565b6020810151610ad8906004610ecf565b610b1860006040518060400160405280600c81526020016b1bdd5d1c1d5d105b5bdd5b9d60a21b815250898460200151610f91909392919063ffffffff16565b610b616001604051806040016040528060158152602001741cd958dbdb99185c9e53dd5d1c1d5d105b5bdd5b9d605a1b815250878460200151610f91909392919063ffffffff16565b610ba66002604051806040016040528060118152602001701bdc99195c94da5e9951195b1d18555cd9607a1b815250868460200151610f91909392919063ffffffff16565b610bd16003604051806060016040528060218152602001612a27602191396020840151919086610f91565b979650505050505050565b60606000604483511015610c03575050604080516020810190915260008082529092909150565b6000610c10846020015190565b90506307b9e43360e51b6001600160e01b0319821601610c4f5760048401935083806020019051810190610c449190612934565b946001945092505050565b600060405180602001604052806000815250909250925050915091565b7f8eed4d553009f65cd0ea6bdf148a04a9ac36a2921765af4bc8e83d866ead5bc78282604051610c9d9291906129c7565b60405180910390a1610cc3858460000151856020015161061f8860200151610100015190565b835160a001516001600160a01b0316632fb126058460000151610ce887516020015190565b8660200151610cfc89604001516020015190565b6040518563ffffffff1660e01b8152600401610d1b94939291906126fa565b600060405180830381600087803b158015610d3557600080fd5b505af1158015610d49573d6000803e3d6000fd5b505050505050505050565b604051631773dc6560e21b81526000906001600160a01b03861690635dcf719490610d83908790600401612865565b6040805180830381865afa158015610d9f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dc391906128cf565b5190506000610dd2828561291d565b905082811015610df957808360405163d28d3eb560e01b8152600401610673929190612879565b505050505050565b80516001600160a01b0316610e29576040516302fde0d760e11b815260040160405180910390fd5b6000826001600160a01b0316637ae1cfca610e478460000151610fe4565b6040518263ffffffff1660e01b8152600401610e6591815260200190565b602060405180830381865afa158015610e82573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ea691906129ec565b90508015610eca5781516040516309f8c93760e01b81526106739190600401612865565b505050565b806001600160401b03811115610ee757610ee7611157565b604051908082528060200260200182016040528015610f2d57816020015b604080518082019091526060815260006020820152815260200190600190039081610f055790505b5090915250565b8184600001518481518110610f4b57610f4b612a10565b6020026020010151600001819052508084600001518481518110610f7157610f71612a10565b6020908102919091018101516001600160a01b0390921691015250505050565b8184600001518481518110610fa857610fa8612a10565b6020026020010151600001819052508084600001518481518110610fce57610fce612a10565b6020026020010151602001818152505050505050565b600060405160200161101c906020808252601290820152711254d7d3505492d15517d11254d05093115160721b604082015260600190565b60408051601f198184030181528282528051602091820120908301526001600160a01b03841690820152606001604051602081830303815290604052805190602001209050919050565b604080516101208101909152606060e08201818152610100830191909152819081526020016110a8604051806040016040528060608152602001606081525090565b81526020016110ca604051806040016040528060608152602001606081525090565b81526020016110ec604051806040016040528060608152602001606081525090565b815260200161110e604051806040016040528060608152602001606081525090565b8152602001611130604051806040016040528060608152602001606081525090565b8152602001611152604051806040016040528060608152602001606081525090565b905290565b634e487b7160e01b600052604160045260246000fd5b60405160c081016001600160401b038111828210171561118f5761118f611157565b60405290565b60405161016081016001600160401b038111828210171561118f5761118f611157565b604051608081016001600160401b038111828210171561118f5761118f611157565b604051606081016001600160401b038111828210171561118f5761118f611157565b60405161010081016001600160401b038111828210171561118f5761118f611157565b60405161014081016001600160401b038111828210171561118f5761118f611157565b604051601f8201601f191681016001600160401b038111828210171561126a5761126a611157565b604052919050565b6001600160a01b03811681146106c857600080fd5b600060c0828403121561129957600080fd5b6112a161116d565b905081356112ae81611272565b815260208201356112be81611272565b602082015260408201356112d181611272565b604082015260608201356112e481611272565b606082015260808201356112f781611272565b608082015260a082013561130a81611272565b60a082015292915050565b803561132081611272565b919050565b60006001600160401b0382111561133e5761133e611157565b5060051b60200190565b600082601f83011261135957600080fd5b8135602061136e61136983611325565b611242565b82815260059290921b8401810191818101908684111561138d57600080fd5b8286015b848110156113b15780356113a481611272565b8352918301918301611391565b509695505050505050565b80356008811061132057600080fd5b80356003811061132057600080fd5b600061016082840312156113ed57600080fd5b6113f5611195565b9050611400826113bc565b815261140e602083016113cb565b602082015260408201356040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e082015261010080830135818301525061012080830135818301525061014080830135818301525092915050565b80151581146106c857600080fd5b60006080828403121561149957600080fd5b6114a16111b8565b905081356114ae81611479565b815260208201356114be81611479565b602082015260408201356114d181611479565b604082015260608201356114e481611479565b606082015292915050565b6000610200828403121561150257600080fd5b61150a6111da565b905081356001600160401b038082111561152357600080fd5b90830190610100828603121561153857600080fd5b6115406111fc565b61154983611315565b815261155760208401611315565b602082015261156860408401611315565b604082015261157960608401611315565b606082015261158a60808401611315565b608082015261159b60a08401611315565b60a08201526115ac60c08401611315565b60c082015260e0830135828111156115c357600080fd5b6115cf87828601611348565b60e0830152508352506115e7905083602084016113da565b60208201526115fa836101808401611487565b604082015292915050565b60006080828403121561161757600080fd5b61161f6111b8565b9050813561162c81611272565b8152602082013561163c81611272565b6020820152604082013561164f81611272565b604082015260608201356114e481611272565b600082601f83011261167357600080fd5b8135602061168361136983611325565b82815260079290921b840181019181810190868411156116a257600080fd5b8286015b848110156113b1576116b88882611605565b8352918301916080016116a6565b80356002811061132057600080fd5b6000602082840312156116e757600080fd5b81356001600160401b03808211156116fe57600080fd5b90830190610240828603121561171357600080fd5b61171b61121f565b6117258684611287565b815260c0830135602082015260e08301358281111561174357600080fd5b61174f878286016114ef565b604083015250610100808401358381111561176957600080fd5b61177588828701611662565b606084015250610120925082840135608083015261014084013560a08301526117a2876101608601611605565b60c08301526117b46101e08501611315565b60e0830152610200840135908201526117d061022084016116c6565b91810191909152949350505050565b60005b838110156117fa5781810151838201526020016117e2565b50506000910152565b6000815180845261181b8160208601602086016117df565b601f01601f19169290920160200192915050565b6001600160a01b03169052565b600081518084526020808501945080840160005b838110156118755781516001600160a01b031687529582019590820190600101611850565b509495945050505050565b600081518084526020808501808196508360051b8101915082860160005b858110156118ee5782840389528151604081518187526118c082880182611803565b915050868201519150858103878701526118da818361183c565b9a87019a955050509084019060010161189e565b5091979650505050505050565b60006040808401835182865281815180845260608801915060608160051b89010193506020808401935060005b8281101561197257898603605f190184528451805188885261194c89890182611803565b918401516001600160a01b03169784019790975295509381019392810192600101611928565b50808801519550888503818a01525050505061198e8183611880565b95945050505050565b600081518084526020808501808196508360051b810191508286016000805b86811015611a29578385038a528251604081518188526119d882890182611803565b92890151888403898b01528051808552908a01938693508a0191505b80831015611a1457835182529289019260019290920191908901906119f4565b509b88019b96505050918501916001016119b6565b509298975050505050505050565b60006040808401835182865281815180845260608801915060608160051b89010193506020808401935060005b82811015611aa557898603605f1901845284518051888852611a8889890182611803565b918401519784019790975295509381019392810192600101611a64565b50808801519550888503818a01525050505061198e8183611997565b600081518084526020808501808196508360051b810191508286016000805b86811015611a29578385038a52825160408151818852611b0282890182611803565b92890151888403898b01528051808552908a01938693508a0191505b80831015611b3e5783518252928901926001929092019190890190611b1e565b509b88019b9650505091850191600101611ae0565b60006040808401835182865281815180845260608801915060608160051b89010193506020808401935060005b82811015611bc157898603605f1901845284518051888852611ba489890182611803565b918401519784019790975295509381019392810192600101611b80565b50808801519550888503818a01525050505061198e8183611ac1565b600082825180855260208086019550808260051b8401018186016000805b85811015611c7457601f19878503018a52825160408151818752611c2182880182611803565b92880151878403888a0152805180855290890193869350890191505b80831015611c5f57835115158252928801926001929092019190880190611c3d565b509b87019b9550505091840191600101611bfb565b509198975050505050505050565b60006040808401835182865281815180845260608801915060608160051b89010193506020808401935060005b82811015611cf257898603605f1901845284518051888852611cd389890182611803565b9184015115159784019790975295509381019392810192600101611caf565b50808801519550888503818a01525050505061198e8183611bdd565b600081518084526020808501808196508360051b810191508286016000805b86811015611a29578385038a52825160408151818852611d4f82890182611803565b92890151888403898b01528051808552908a01938693508a0191505b80831015611d8b5783518252928901926001929092019190890190611d6b565b509b88019b9650505091850191600101611d2d565b60006040808401835182865281815180845260608801915060608160051b89010193506020808401935060005b82811015611e0e57898603605f1901845284518051888852611df189890182611803565b918401519784019790975295509381019392810192600101611dcd565b50808801519550888503818a01525050505061198e8183611d0e565b60008282518085526020808601955060058183821b8501018287016000805b86811015611ed857601f1980898603018c52835160408151818852611e7082890182611803565b928a0151888403898c01528051808552908b019392508a83019150808a1b83018b01875b82811015611ec05786858303018452611eae828751611803565b958d0195938d01939150600101611e94565b509f8b019f9850505094880194505050600101611e49565b50919998505050505050505050565b60006040808401835182865281815180845260608801915060608160051b89010193506020808401935060005b82811015611f6457898603605f1901845284518051888852611f3889890182611803565b9184015188830389860152919050611f508183611803565b975050509381019392810192600101611f14565b50808801519550888503818a01525050505061198e8183611e2a565b600081518084526020808501945084600583811b87018387016000805b87811015611ed8578584038b52825160408151818752611fbf82880182611803565b928a0151878403888c01528051808552908b019392508a8301915080891b83018b01865b8281101561201157601f19858303018452611fff828751611803565b958d0195938d01939150600101611fe3565b509e8b019e97505050938801935050600101611f9d565b60006040808401835182865281815180845260608801915060608160051b89010193506020808401935060005b828110156120a557898603605f190184528451805188885261207989890182611803565b91840151888303898601529190506120918183611803565b975050509381019392810192600101612055565b50808801519550888503818a01525050505061198e8183611f80565b602081526000825160e060208401526120de6101008401826118fb565b90506020840151601f19808584030160408601526120fc8383611a37565b925060408601519150808584030160608601526121198383611b53565b925060608601519150808584030160808601526121368383611c82565b925060808601519150808584030160a08601526121538383611da0565b925060a08601519150808584030160c08601526121708383611ee7565b925060c08601519150808584030160e08601525061198e8282612028565b6000602082840312156121a057600080fd5b604051602081016001600160401b03811182821017156121c2576121c2611157565b806040525080915082516121d581611479565b905292915050565b60008183036101e08112156121f157600080fd5b6121f96111da565b606082121561220757600080fd5b61220f6111da565b845161221a81611272565b8152602085015161222a81611272565b6020820152604085015161223d81611272565b60408201528152610160605f19830181131561225857600080fd5b612260611195565b9250606085015183526080850151602084015260a0850151604084015260c0850151606084015260e085015160808401526101008086015160a08501526101208087015160c08601526101408088015160e08701528388015183870152610180880151828701526101a088015181870152505050508160208201526122e9856101c0860161218e565b6040820152949350505050565b634e487b7160e01b600052602160045260246000fd5b80516001600160a01b03908116835260208083015182169084015260408083015182169084015260609182015116910152565b6008811061234f5761234f6122f6565b9052565b6003811061234f5761234f6122f6565b61236e82825161233f565b60208101516123806020840182612353565b5060408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152505050565b805161020080845281516001600160a01b0390811691850191909152602082015116610220840152604081015160009161242361024086018361182f565b6060810151915061243861026086018361182f565b6080810151915061244d61028086018361182f565b60a081015191506124626102a086018361182f565b60c081015191506124776102c086018361182f565b60e001516101006102e0860152905061249461030085018261183c565b905060208301516124a86020860182612363565b5060408381015180511515610180870152602081015115156101a08701529081015115156101c0860152606081015115156101e0860152509392505050565b805160018060a01b03808251168452806020830151166020850152806040830151166040850152505060208101518051606084015260208101516080840152604081015160a0840152606081015160c0840152608081015160e084015260a0810151610100818186015260c08301519150610120828187015260e0840151925061014083818801528285015161016088015281850151610180880152808501516101a088015250505050506040810151610eca6101c08401825115159052565b6002811061234f5761234f6122f6565b602081526000825160018060a01b038082511660208501528060208301511660408501528060408301511660608501528060608301511660808501528060808301511660a08501525060a0810151905061261460c084018261182f565b50602083015161262760e084018261230c565b5060408301516103a0806101608501526126456103c08501836123e5565b9150606085015161018085015260808501516126656101a08601826124e7565b5060a085015161038085015260c0850151612682828601826125a7565b5090949350505050565b600060c0828403121561269e57600080fd5b6126a661116d565b82516126b181611272565b81526020838101519082015260408301516126cb81611272565b80604083015250606083015160608201526080830151608082015260a083015160a08201528091505092915050565b6001600160a01b0394851681529290931660208301526040820152901515606082015260800190565b600081518084526020808501945080840160005b838110156118755761274a87835161230c565b6080969096019590820190600101612737565b6020815261276f60208201835161182f565b60006020830151612783604084018261182f565b506040830151612796606084018261182f565b5060608301516127a9608084018261182f565b50608083015160a083015260a08301516127c660c084018261182f565b5060c083015160e083015260e083015161018061010081818601526127ef6101a0860184612723565b90860151610120868101919091528601519092506101406128128187018361182f565b86015190506101606128268682018361182f565b860151801515838701529050612682565b6000806040838503121561284a57600080fd5b825161285581611272565b6020939093015192949293505050565b6001600160a01b0391909116815260200190565b918252602082015260400190565b60006020828403121561289957600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b808201808211156128c9576128c96128a0565b92915050565b6000604082840312156128e157600080fd5b604080519081016001600160401b038111828210171561290357612903611157565b604052825181526020928301519281019290925250919050565b80820281158282048414176128c9576128c96128a0565b60006020828403121561294657600080fd5b81516001600160401b038082111561295d57600080fd5b818401915084601f83011261297157600080fd5b81518181111561298357612983611157565b612996601f8201601f1916602001611242565b91508082528560208285010111156129ad57600080fd5b6129be8160208401602086016117df565b50949350505050565b6040815260006129da6040830185611803565b828103602084015261198e8185611803565b6000602082840312156129fe57600080fd5b8151612a0981611479565b9392505050565b634e487b7160e01b600052603260045260246000fdfe6f72646572496e697469616c436f6c6c61746572616c44656c7461416d6f756e74a26469706673582212208b4646fb3990c488eaf8f9217fdaf276e50c870cb4d34b5fedab0b1e5ebee28964736f6c63430008120033";

type DecreaseOrderUtilsConstructorParams =
  | [linkLibraryAddresses: DecreaseOrderUtilsLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DecreaseOrderUtilsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class DecreaseOrderUtils__factory extends ContractFactory {
  constructor(...args: DecreaseOrderUtilsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        DecreaseOrderUtils__factory.linkBytecode(linkLibraryAddresses),
        signer
      );
    }
  }

  static linkBytecode(
    linkLibraryAddresses: DecreaseOrderUtilsLibraryAddresses
  ): string {
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
      new RegExp("__\\$34af2f45da6b13f877428397704b7865d6\\$__", "g"),
      linkLibraryAddresses[
        "contracts/position/DecreasePositionUtils.sol:DecreasePositionUtils"
      ]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DecreaseOrderUtils> {
    return super.deploy(overrides || {}) as Promise<DecreaseOrderUtils>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): DecreaseOrderUtils {
    return super.attach(address) as DecreaseOrderUtils;
  }
  override connect(signer: Signer): DecreaseOrderUtils__factory {
    return super.connect(signer) as DecreaseOrderUtils__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DecreaseOrderUtilsInterface {
    return new utils.Interface(_abi) as DecreaseOrderUtilsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DecreaseOrderUtils {
    return new Contract(address, _abi, signerOrProvider) as DecreaseOrderUtils;
  }
}

export interface DecreaseOrderUtilsLibraryAddresses {
  ["contracts/position/PositionStoreUtils.sol:PositionStoreUtils"]: string;
  ["contracts/position/DecreasePositionUtils.sol:DecreasePositionUtils"]: string;
}