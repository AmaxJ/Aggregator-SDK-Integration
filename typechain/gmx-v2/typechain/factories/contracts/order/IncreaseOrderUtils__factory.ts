/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  IncreaseOrderUtils,
  IncreaseOrderUtilsInterface,
} from "../../../contracts/order/IncreaseOrderUtils";

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
    inputs: [
      {
        internalType: "address",
        name: "market",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "InvalidCollateralTokenForMarket",
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
    inputs: [],
    name: "UnexpectedPositionState",
    type: "error",
  },
] as const;

const _bytecode =
  "0x61209161003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100355760003560e01c8063da6fe44f1461003a575b600080fd5b81801561004657600080fd5b5061005a610055366004610f02565b610070565b60405161006791906118d3565b60405180910390f35b610078610892565b81515160c083015161008a9190610685565b60008073__$2ebd8d293950cf319742e0db402ead4961$__635706dc466040518061018001604052808760000151600001516001600160a01b031681526020018760000151602001516001600160a01b031681526020018760000151606001516001600160a01b031681526020018760000151604001516001600160a01b031681526020018760200151815260200161012988604001515160c0015190565b6001600160a01b0316815260200161014a8860400151602001516060015190565b81526020018760600151815260200161016d886040015160200151610100015190565b815260200161018288604001515160a0015190565b6001600160a01b031681526020016101a08860400151516080015190565b6001600160a01b0316815260006020909101526040516001600160e01b031960e084901b1681526101d49190600401611a0d565b6040805180830381865af41580156101f0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102149190611ae8565b915091506102268460c00151836106c1565b60006102926102388660400151515190565b604087810151805160a090810151918301515183516001600160a01b039586166020808301919091529386168186015294891660608601521515608080860191909152835180860390910181529301909152815191012090565b85515160405163fdfc26f360e01b81526001600160a01b0390911660048201526024810182905290915060009073__$3d31b232fb363902662fbc281b11ab3357$__9063fdfc26f3906044016101e060405180830381865af41580156102fc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103209190611b65565b9050600061032d82515190565b6001600160a01b0316036104045761035c61034b8760400151515190565b82516001600160a01b039091169052565b600061036a82516020015190565b6001600160a01b03161415806103955750600061038982516040015190565b6001600160a01b031614155b156103b35760405163814991c360e01b815260040160405180910390fd5b6103db6103c687604001515160a0015190565b82516001600160a01b03909116602090910152565b80516001600160a01b038516604091820152868101510151516104049060408301519015159052565b8551516040516000916001600160a01b03169063bd02d0f59061045590602001602080825260179082015276524551554553545f45585049524154494f4e5f54494d4560481b604082015260600190565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b815260040161048991815260200190565b602060405180830381865afa1580156104a6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104ca9190611c7e565b90506104e0876040015160200151610140015190565b876080015110156105255760808701516040880151602001516101400151604051637d677abf60e01b8152600481019290925260248201526044015b60405180910390fd5b600260408801516020015151600781111561054257610542611c97565b14801561057057508061055f886040015160200151610140015190565b6105699190611cad565b8760a00151115b156105b15760a08701516040880151602001516101400151604051631b0971dd60e31b8152600481019290925260248201526044810182905260640161051c565b73__$7a972c741e25767aac46238a61c2174fde$__63bd8b7e116040518060e001604052808a6000015181526020018a60c0015181526020018a6040015181526020018a6020015181526020018581526020018681526020018a6101200151600181111561062157610621611c97565b815250866040518363ffffffff1660e01b8152600401610642929190611f46565b60006040518083038186803b15801561065a57600080fd5b505af415801561066e573d6000803e3d6000fd5b5050505061067a610892565b979650505050505050565b61068f82826106fe565b60208101516001600160a01b03166106bd57805160405163182e30e360e01b815261051c9190600401612023565b5050565b6106cb82826107cc565b6106bd5781516040516341ce349f60e11b81526001600160a01b039182166004820152908216602482015260440161051c565b80516001600160a01b0316610726576040516302fde0d760e11b815260040160405180910390fd5b6000826001600160a01b0316637ae1cfca6107448460000151610810565b6040518263ffffffff1660e01b815260040161076291815260200190565b602060405180830381865afa15801561077f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107a39190612037565b905080156107c75781516040516309f8c93760e01b815261051c9190600401612023565b505050565b600082604001516001600160a01b0316826001600160a01b03161480610807575082606001516001600160a01b0316826001600160a01b0316145b90505b92915050565b6000604051602001610848906020808252601290820152711254d7d3505492d15517d11254d05093115160721b604082015260600190565b60408051601f198184030181528282528051602091820120908301526001600160a01b03841690820152606001604051602081830303815290604052805190602001209050919050565b604080516101208101909152606060e08201818152610100830191909152819081526020016108d4604051806040016040528060608152602001606081525090565b81526020016108f6604051806040016040528060608152602001606081525090565b8152602001610918604051806040016040528060608152602001606081525090565b815260200161093a604051806040016040528060608152602001606081525090565b815260200161095c604051806040016040528060608152602001606081525090565b815260200161097e604051806040016040528060608152602001606081525090565b905290565b634e487b7160e01b600052604160045260246000fd5b60405161016081016001600160401b03811182821017156109bc576109bc610983565b60405290565b604051608081016001600160401b03811182821017156109bc576109bc610983565b604051606081016001600160401b03811182821017156109bc576109bc610983565b60405161010081016001600160401b03811182821017156109bc576109bc610983565b60405161014081016001600160401b03811182821017156109bc576109bc610983565b604051601f8201601f191681016001600160401b0381118282101715610a7457610a74610983565b604052919050565b6001600160a01b0381168114610a9157600080fd5b50565b600060c08284031215610aa657600080fd5b60405160c081016001600160401b0381118282101715610ac857610ac8610983565b6040529050808235610ad981610a7c565b81526020830135610ae981610a7c565b60208201526040830135610afc81610a7c565b60408201526060830135610b0f81610a7c565b60608201526080830135610b2281610a7c565b608082015260a0830135610b3581610a7c565b60a0919091015292915050565b8035610b4d81610a7c565b919050565b60006001600160401b03821115610b6b57610b6b610983565b5060051b60200190565b600082601f830112610b8657600080fd5b81356020610b9b610b9683610b52565b610a4c565b82815260059290921b84018101918181019086841115610bba57600080fd5b8286015b84811015610bde578035610bd181610a7c565b8352918301918301610bbe565b509695505050505050565b803560088110610b4d57600080fd5b803560038110610b4d57600080fd5b60006101608284031215610c1a57600080fd5b610c22610999565b9050610c2d82610be9565b8152610c3b60208301610bf8565b602082015260408201356040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e082015261010080830135818301525061012080830135818301525061014080830135818301525092915050565b8015158114610a9157600080fd5b600060808284031215610cc657600080fd5b610cce6109c2565b90508135610cdb81610ca6565b81526020820135610ceb81610ca6565b60208201526040820135610cfe81610ca6565b60408201526060820135610d1181610ca6565b606082015292915050565b60006102008284031215610d2f57600080fd5b610d376109e4565b905081356001600160401b0380821115610d5057600080fd5b908301906101008286031215610d6557600080fd5b610d6d610a06565b610d7683610b42565b8152610d8460208401610b42565b6020820152610d9560408401610b42565b6040820152610da660608401610b42565b6060820152610db760808401610b42565b6080820152610dc860a08401610b42565b60a0820152610dd960c08401610b42565b60c082015260e083013582811115610df057600080fd5b610dfc87828601610b75565b60e083015250835250610e1490508360208401610c07565b6020820152610e27836101808401610cb4565b604082015292915050565b600060808284031215610e4457600080fd5b610e4c6109c2565b90508135610e5981610a7c565b81526020820135610e6981610a7c565b60208201526040820135610e7c81610a7c565b60408201526060820135610d1181610a7c565b600082601f830112610ea057600080fd5b81356020610eb0610b9683610b52565b82815260079290921b84018101918181019086841115610ecf57600080fd5b8286015b84811015610bde57610ee58882610e32565b835291830191608001610ed3565b803560028110610b4d57600080fd5b600060208284031215610f1457600080fd5b81356001600160401b0380821115610f2b57600080fd5b908301906102408286031215610f4057600080fd5b610f48610a29565b610f528684610a94565b815260c0830135602082015260e083013582811115610f7057600080fd5b610f7c87828601610d1c565b6040830152506101008084013583811115610f9657600080fd5b610fa288828701610e8f565b606084015250610120925082840135608083015261014084013560a0830152610fcf876101608601610e32565b60c0830152610fe16101e08501610b42565b60e083015261020084013590820152610ffd6102208401610ef3565b91810191909152949350505050565b6000815180845260005b8181101561103257602081850181015186830182015201611016565b506000602082860101526020601f19601f83011685010191505092915050565b6001600160a01b03169052565b600081518084526020808501945080840160005b838110156110985781516001600160a01b031687529582019590820190600101611073565b509495945050505050565b600081518084526020808501808196508360051b8101915082860160005b858110156111115782840389528151604081518187526110e38288018261100c565b915050868201519150858103878701526110fd818361105f565b9a87019a95505050908401906001016110c1565b5091979650505050505050565b60006040808401835182865281815180845260608801915060608160051b89010193506020808401935060005b8281101561119557898603605f190184528451805188885261116f8989018261100c565b918401516001600160a01b0316978401979097529550938101939281019260010161114b565b50808801519550888503818a0152505050506111b181836110a3565b95945050505050565b600081518084526020808501808196508360051b810191508286016000805b8681101561124c578385038a528251604081518188526111fb8289018261100c565b92890151888403898b01528051808552908a01938693508a0191505b808310156112375783518252928901926001929092019190890190611217565b509b88019b96505050918501916001016111d9565b509298975050505050505050565b60006040808401835182865281815180845260608801915060608160051b89010193506020808401935060005b828110156112c857898603605f19018452845180518888526112ab8989018261100c565b918401519784019790975295509381019392810192600101611287565b50808801519550888503818a0152505050506111b181836111ba565b600081518084526020808501808196508360051b810191508286016000805b8681101561124c578385038a528251604081518188526113258289018261100c565b92890151888403898b01528051808552908a01938693508a0191505b808310156113615783518252928901926001929092019190890190611341565b509b88019b9650505091850191600101611303565b60006040808401835182865281815180845260608801915060608160051b89010193506020808401935060005b828110156113e457898603605f19018452845180518888526113c78989018261100c565b9184015197840197909752955093810193928101926001016113a3565b50808801519550888503818a0152505050506111b181836112e4565b600081518084526020808501808196508360051b810191508286016000805b8681101561124c578385038a528251604081518188526114418289018261100c565b92890151888403898b01528051808552908a01938693508a0191505b8083101561147f5783511515825292890192600192909201919089019061145d565b509b88019b965050509185019160010161141f565b60006040808401835182865281815180845260608801915060608160051b89010193506020808401935060005b8281101561150457898603605f19018452845180518888526114e58989018261100c565b91840151151597840197909752955093810193928101926001016114c1565b50808801519550888503818a0152505050506111b18183611400565b600081518084526020808501808196508360051b810191508286016000805b8681101561124c578385038a528251604081518188526115618289018261100c565b92890151888403898b01528051808552908a01938693508a0191505b8083101561159d578351825292890192600192909201919089019061157d565b509b88019b965050509185019160010161153f565b60006040808401835182865281815180845260608801915060608160051b89010193506020808401935060005b8281101561162057898603605f19018452845180518888526116038989018261100c565b9184015197840197909752955093810193928101926001016115df565b50808801519550888503818a0152505050506111b18183611520565b600081518084526020808501808196506005915083821b81018387016000805b878110156116e7578484038b5282516040815181875261167e8288018261100c565b928a0151878403888c01528051808552908b019392508a83019150808a1b83018b01865b828110156116d057601f198583030184526116be82875161100c565b958d0195938d019391506001016116a2565b509e8b019e9750505093880193505060010161165c565b50919998505050505050505050565b60006040808401835182865281815180845260608801915060608160051b89010193506020808401935060005b8281101561177357898603605f19018452845180518888526117478989018261100c565b918401518883038986015291905061175f818361100c565b975050509381019392810192600101611723565b50808801519550888503818a0152505050506111b1818361163c565b600081518084526020808501808196506005915083821b81018387016000805b878110156116e7578484038b528251604081518187526117d18288018261100c565b928a0151878403888c01528051808552908b019392508a83019150808a1b83018b01865b8281101561182357601f1985830301845261181182875161100c565b958d0195938d019391506001016117f5565b509e8b019e975050509388019350506001016117af565b60006040808401835182865281815180845260608801915060608160051b89010193506020808401935060005b828110156118b757898603605f190184528451805188885261188b8989018261100c565b91840151888303898601529190506118a3818361100c565b975050509381019392810192600101611867565b50808801519550888503818a0152505050506111b1818361178f565b602081526000825160e060208401526118f061010084018261111e565b90506020840151601f198085840301604086015261190e838361125a565b9250604086015191508085840301606086015261192b8383611376565b925060608601519150808584030160808601526119488383611494565b925060808601519150808584030160a086015261196583836115b2565b925060a08601519150808584030160c086015261198283836116f6565b925060c08601519150808584030160e0860152506111b1828261183a565b80516001600160a01b03908116835260208083015182169084015260408083015182169084015260609182015116910152565b600081518084526020808501945080840160005b83811015611098576119fa8783516119a0565b60809690960195908201906001016119e7565b60208152611a1f602082018351611052565b60006020830151611a336040840182611052565b506040830151611a466060840182611052565b506060830151611a596080840182611052565b50608083015160a083015260a0830151611a7660c0840182611052565b5060c083015160e083015260e08301516101806101008181860152611a9f6101a08601846119d3565b9086015161012086810191909152860151909250610140611ac281870183611052565b8601519050610160611ad686820183611052565b90950151151593019290925250919050565b60008060408385031215611afb57600080fd5b8251611b0681610a7c565b6020939093015192949293505050565b600060208284031215611b2857600080fd5b604051602081016001600160401b0381118282101715611b4a57611b4a610983565b80604052508091508251611b5d81610ca6565b905292915050565b60008183036101e0811215611b7957600080fd5b611b816109e4565b6060821215611b8f57600080fd5b611b976109e4565b8451611ba281610a7c565b81526020850151611bb281610a7c565b60208201526040850151611bc581610a7c565b60408201528152610160605f198301811315611be057600080fd5b611be8610999565b9250606085015183526080850151602084015260a0850151604084015260c0850151606084015260e085015160808401526101008086015160a08501526101208087015160c08601526101408088015160e08701528388015183870152610180880151828701526101a08801518187015250505050816020820152611c71856101c08601611b16565b6040820152949350505050565b600060208284031215611c9057600080fd5b5051919050565b634e487b7160e01b600052602160045260246000fd5b8082018082111561080a57634e487b7160e01b600052601160045260246000fd5b60088110611cde57611cde611c97565b9052565b60038110611cde57611cde611c97565b611cfd828251611cce565b6020810151611d0f6020840182611ce2565b5060408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152506101208082015181840152506101408082015181840152505050565b805161020080845281516001600160a01b03908116918501919091526020820151166102208401526040810151600091611db2610240860183611052565b60608101519150611dc7610260860183611052565b60808101519150611ddc610280860183611052565b60a08101519150611df16102a0860183611052565b60c08101519150611e066102c0860183611052565b60e001516101006102e08601529050611e2361030085018261105f565b90506020830151611e376020860182611cf2565b5060408381015180511515610180870152602081015115156101a08701529081015115156101c0860152606081015115156101e0860152509392505050565b805160018060a01b03808251168452806020830151166020850152806040830151166040850152505060208101518051606084015260208101516080840152604081015160a0840152606081015160c0840152608081015160e084015260a0810151610100818186015260c08301519150610120828187015260e0840151925061014083818801528285015161016088015281850151610180880152808501516101a0880152505050505060408101516107c76101c08401825115159052565b60028110611cde57611cde611c97565b604081526000835160018060a01b038082511660408501528060208301511660608501528060408301511660808501528060608301511660a08501528060808301511660c08501525060a08101519050611fa360e0840182611052565b506020840151611fb76101008401826119a0565b5060408401516103a080610180850152611fd56103e0850183611d74565b915060608601516101a08501526080860151611ff56101c0860182611e76565b5060a08601519084015260c08501516120126103c0850182611f36565b506020929092019290925292915050565b6001600160a01b0391909116815260200190565b60006020828403121561204957600080fd5b815161205481610ca6565b939250505056fea2646970667358221220a2f0a7306e36f600303d10de706bc26803f4164af16b003b69ddb1e096d9193764736f6c63430008120033";

type IncreaseOrderUtilsConstructorParams =
  | [linkLibraryAddresses: IncreaseOrderUtilsLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: IncreaseOrderUtilsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class IncreaseOrderUtils__factory extends ContractFactory {
  constructor(...args: IncreaseOrderUtilsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        IncreaseOrderUtils__factory.linkBytecode(linkLibraryAddresses),
        signer
      );
    }
  }

  static linkBytecode(
    linkLibraryAddresses: IncreaseOrderUtilsLibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$2ebd8d293950cf319742e0db402ead4961\\$__", "g"),
      linkLibraryAddresses["contracts/swap/SwapUtils.sol:SwapUtils"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$3d31b232fb363902662fbc281b11ab3357\\$__", "g"),
      linkLibraryAddresses[
        "contracts/position/PositionStoreUtils.sol:PositionStoreUtils"
      ]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$7a972c741e25767aac46238a61c2174fde\\$__", "g"),
      linkLibraryAddresses[
        "contracts/position/IncreasePositionUtils.sol:IncreasePositionUtils"
      ]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<IncreaseOrderUtils> {
    return super.deploy(overrides || {}) as Promise<IncreaseOrderUtils>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): IncreaseOrderUtils {
    return super.attach(address) as IncreaseOrderUtils;
  }
  override connect(signer: Signer): IncreaseOrderUtils__factory {
    return super.connect(signer) as IncreaseOrderUtils__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): IncreaseOrderUtilsInterface {
    return new utils.Interface(_abi) as IncreaseOrderUtilsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IncreaseOrderUtils {
    return new Contract(address, _abi, signerOrProvider) as IncreaseOrderUtils;
  }
}

export interface IncreaseOrderUtilsLibraryAddresses {
  ["contracts/swap/SwapUtils.sol:SwapUtils"]: string;
  ["contracts/position/PositionStoreUtils.sol:PositionStoreUtils"]: string;
  ["contracts/position/IncreasePositionUtils.sol:IncreasePositionUtils"]: string;
}
