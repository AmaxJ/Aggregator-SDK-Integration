/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  GasUtils,
  GasUtilsInterface,
} from "../../../contracts/gas/GasUtils";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "keeper",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "KeeperExecutionFee",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "UserRefundFee",
    type: "event",
  },
];

const _bytecode =
  "0x6113fe61003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100355760003560e01c80634bf2a26d1461003a575b600080fd5b81801561004657600080fd5b5061005a610055366004610888565b61005c565b005b603f5a6100699190610938565b610073908461095a565b925060005a610082908561095a565b905060003a6100918a846101a9565b61009b919061096d565b9050858111156100a85750845b604051633510f2a560e21b81526001600160a01b0388169063d443ca94906100d69087908590600401610984565b600060405180830381600087803b1580156100f057600080fd5b505af1158015610104573d6000803e3d6000fd5b5050505061011388858361036a565b600061011f828861095a565b905080600003610131575050506101a0565b604051633510f2a560e21b81526001600160a01b0389169063d443ca949061015f9087908590600401610984565b600060405180830381600087803b15801561017957600080fd5b505af115801561018d573d6000803e3d6000fd5b5050505061019c89858361046f565b5050505b50505050505050565b600080836001600160a01b031663bd02d0f56040516020016101fc906020808252601d908201527f455845435554494f4e5f4741535f4645455f424153455f414d4f554e54000000604082015260600190565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b815260040161023091815260200190565b602060405180830381865afa15801561024d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610271919061099d565b90506000846001600160a01b031663bd02d0f56040516020016102d19060208082526023908201527f455845435554494f4e5f4741535f4645455f4d554c5449504c4945525f4641436040820152622a27a960e91b606082015260800190565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b815260040161030591815260200190565b602060405180830381865afa158015610322573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610346919061099d565b90506000610354858361053b565b61035e90846109b6565b93505050505b92915050565b61037261077f565b805161037f90600161055b565b60408051808201909152600681526535b2b2b832b960d11b602082015281516103ab91600090866105c0565b60208101516103bb90600161055b565b610401600060405180604001604052806012815260200171195e1958dd5d1a5bdb919959505b5bdd5b9d60721b81525084846020015161061d909392919063ffffffff16565b836001600160a01b03166324de01e461041985610670565b836040518363ffffffff1660e01b8152600401610437929190611318565b600060405180830381600087803b15801561045157600080fd5b505af1158015610465573d6000803e3d6000fd5b5050505050505050565b61047761077f565b805161048490600161055b565b6040805180820190915260088152673932b1b2b4bb32b960c11b602082015281516104b291600090866105c0565b60208101516104c290600161055b565b61050560006040518060400160405280600f81526020016e1c99599d5b99119959505b5bdd5b9d608a1b81525084846020015161061d909392919063ffffffff16565b836001600160a01b03166324de01e461051d85610670565b836040518363ffffffff1660e01b815260040161043792919061135a565b6000610554838368327cb2734119d3b7a9601e1b61067c565b9392505050565b806001600160401b038111156105735761057361139c565b6040519080825280602002602001820160405280156105b957816020015b6040805180820190915260608152600060208201528152602001906001900390816105915790505b5090915250565b81846000015184815181106105d7576105d76113b2565b60200260200101516000018190525080846000015184815181106105fd576105fd6113b2565b6020908102919091018101516001600160a01b0390921691015250505050565b8184600001518481518110610634576106346113b2565b602002602001015160000181905250808460000151848151811061065a5761065a6113b2565b6020026020010151602001818152505050505050565b6001600160a01b031690565b6000610689848484610691565b949350505050565b60008080600019858709858702925082811083820303915050806000036106cb578382816106c1576106c161090c565b0492505050610554565b8084116107165760405162461bcd60e51b81526020600482015260156024820152744d6174683a206d756c446976206f766572666c6f7760581b604482015260640160405180910390fd5b60008486880960026001871981018816978890046003810283188082028403028082028403028082028403028082028403028082028403029081029092039091026000889003889004909101858311909403939093029303949094049190911702949350505050565b604080516101208101909152606060e08201818152610100830191909152819081526020016107c1604051806040016040528060608152602001606081525090565b81526020016107e3604051806040016040528060608152602001606081525090565b8152602001610805604051806040016040528060608152602001606081525090565b8152602001610827604051806040016040528060608152602001606081525090565b8152602001610849604051806040016040528060608152602001606081525090565b815260200161086b604051806040016040528060608152602001606081525090565b905290565b6001600160a01b038116811461088557600080fd5b50565b600080600080600080600060e0888a0312156108a357600080fd5b87356108ae81610870565b965060208801356108be81610870565b955060408801356108ce81610870565b9450606088013593506080880135925060a08801356108ec81610870565b915060c08801356108fc81610870565b8091505092959891949750929550565b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60008261095557634e487b7160e01b600052601260045260246000fd5b500490565b8181038181111561036457610364610922565b808202811582820484141761036457610364610922565b6001600160a01b03929092168252602082015260400190565b6000602082840312156109af57600080fd5b5051919050565b8082018082111561036457610364610922565b6000815180845260005b818110156109ef576020818501810151868301820152016109d3565b506000602082860101526020601f19601f83011685010191505092915050565b600082825180855260208086019550808260051b8401018186016000805b85811015610aad57601f19878503018a52825160408151818752610a53828801826109c9565b92880151878403888a0152805180855290890193869350890191505b80831015610a985783516001600160a01b03168252928801926001929092019190880190610a6f565b509b87019b9550505091840191600101610a2d565b509198975050505050505050565b60006040808401835182865281815180845260608801915060608160051b89010193506020808401935060005b82811015610b3257898603605f1901845284518051888852610b0c898901826109c9565b918401516001600160a01b03169784019790975295509381019392810192600101610ae8565b50808801519550888503818a015250505050610b4e8183610a0f565b95945050505050565b600082825180855260208086019550808260051b8401018186016000805b85811015610aad57601f19878503018a52825160408151818752610b9b828801826109c9565b92880151878403888a0152805180855290890193869350890191505b80831015610bd75783518252928801926001929092019190880190610bb7565b509b87019b9550505091840191600101610b75565b60006040808401835182865281815180845260608801915060608160051b89010193506020808401935060005b82811015610c5a57898603605f1901845284518051888852610c3d898901826109c9565b918401519784019790975295509381019392810192600101610c19565b50808801519550888503818a015250505050610b4e8183610b57565b600082825180855260208086019550808260051b8401018186016000805b85811015610aad57601f19878503018a52825160408151818752610cba828801826109c9565b92880151878403888a0152805180855290890193869350890191505b80831015610cf65783518252928801926001929092019190880190610cd6565b509b87019b9550505091840191600101610c94565b60006040808401835182865281815180845260608801915060608160051b89010193506020808401935060005b82811015610d7957898603605f1901845284518051888852610d5c898901826109c9565b918401519784019790975295509381019392810192600101610d38565b50808801519550888503818a015250505050610b4e8183610c76565b6000815180845260208085019450848260051b86018286016000805b86811015610aad578484038a52825160408151818752610dd3828801826109c9565b92890151878403888b01528051808552908a01938693508a0191505b80831015610e1157835115158252928901926001929092019190890190610def565b509b88019b9550505091850191600101610db1565b60006040808401835182865281815180845260608801915060608160051b89010193506020808401935060005b82811015610e9657898603605f1901845284518051888852610e77898901826109c9565b9184015115159784019790975295509381019392810192600101610e53565b50808801519550888503818a015250505050610b4e8183610d95565b600082825180855260208086019550808260051b8401018186016000805b85811015610aad57601f19878503018a52825160408151818752610ef6828801826109c9565b92880151878403888a0152805180855290890193869350890191505b80831015610f325783518252928801926001929092019190880190610f12565b509b87019b9550505091840191600101610ed0565b60006040808401835182865281815180845260608801915060608160051b89010193506020808401935060005b82811015610fb557898603605f1901845284518051888852610f98898901826109c9565b918401519784019790975295509381019392810192600101610f74565b50808801519550888503818a015250505050610b4e8183610eb2565b60008282518085526020808601955060058183821b8501018287016000805b8681101561107f57601f1980898603018c52835160408151818852611017828901826109c9565b928a0151888403898c01528051808552908b019392508a83019150808a1b83018b01875b8281101561106757868583030184526110558287516109c9565b958d0195938d0193915060010161103b565b509f8b019f9850505094880194505050600101610ff0565b50919998505050505050505050565b60006040808401835182865281815180845260608801915060608160051b89010193506020808401935060005b8281101561110b57898603605f19018452845180518888526110df898901826109c9565b91840151888303898601529190506110f781836109c9565b9750505093810193928101926001016110bb565b50808801519550888503818a015250505050610b4e8183610fd1565b600081518084526020808501945084600583811b87018387016000805b8781101561107f578584038b52825160408151818752611166828801826109c9565b928a0151878403888c01528051808552908b019392508a8301915080891b83018b01865b828110156111b857601f198583030184526111a68287516109c9565b958d0195938d0193915060010161118a565b509e8b019e97505050938801935050600101611144565b60006040808401835182865281815180845260608801915060608160051b89010193506020808401935060005b8281101561124c57898603605f1901845284518051888852611220898901826109c9565b918401518883038986015291905061123881836109c9565b9750505093810193928101926001016111fc565b50808801519550888503818a015250505050610b4e8183611127565b6000815160e0845261127d60e0850182610abb565b9050602083015184820360208601526112968282610bec565b915050604083015184820360408601526112b08282610d0b565b915050606083015184820360608601526112ca8282610e26565b915050608083015184820360808601526112e48282610f47565b91505060a083015184820360a08601526112fe828261108e565b91505060c083015184820360c0860152610b4e82826111cf565b6060815260126060820152714b6565706572457865637574696f6e46656560701b608082015282602082015260a06040820152600061068960a0830184611268565b606081526012606082015271115e1958dd5d1a5bdb9199595499599d5b9960721b608082015282602082015260a06040820152600061068960a0830184611268565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fdfea2646970667358221220134560f20dc360230469a24b3fde8605da2dc236afcc4e7dd3d91f673412743c64736f6c63430008120033";

type GasUtilsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GasUtilsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GasUtils__factory extends ContractFactory {
  constructor(...args: GasUtilsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<GasUtils> {
    return super.deploy(overrides || {}) as Promise<GasUtils>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): GasUtils {
    return super.attach(address) as GasUtils;
  }
  override connect(signer: Signer): GasUtils__factory {
    return super.connect(signer) as GasUtils__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GasUtilsInterface {
    return new utils.Interface(_abi) as GasUtilsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GasUtils {
    return new Contract(address, _abi, signerOrProvider) as GasUtils;
  }
}
