/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  SwapHandler,
  SwapHandlerInterface,
} from "../../../contracts/swap/SwapHandler";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract RoleStore",
        name: "_roleStore",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
        components: [
          {
            internalType: "contract DataStore",
            name: "dataStore",
            type: "address",
          },
          {
            internalType: "contract EventEmitter",
            name: "eventEmitter",
            type: "address",
          },
          {
            internalType: "contract Oracle",
            name: "oracle",
            type: "address",
          },
          {
            internalType: "contract Bank",
            name: "bank",
            type: "address",
          },
          {
            internalType: "bytes32",
            name: "key",
            type: "bytes32",
          },
          {
            internalType: "address",
            name: "tokenIn",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amountIn",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "address",
                name: "marketToken",
                type: "address",
              },
              {
                internalType: "address",
                name: "indexToken",
                type: "address",
              },
              {
                internalType: "address",
                name: "longToken",
                type: "address",
              },
              {
                internalType: "address",
                name: "shortToken",
                type: "address",
              },
            ],
            internalType: "struct Market.Props[]",
            name: "swapPathMarkets",
            type: "tuple[]",
          },
          {
            internalType: "uint256",
            name: "minOutputAmount",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "receiver",
            type: "address",
          },
          {
            internalType: "address",
            name: "uiFeeReceiver",
            type: "address",
          },
          {
            internalType: "bool",
            name: "shouldUnwrapNativeToken",
            type: "bool",
          },
        ],
        internalType: "struct SwapUtils.SwapParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "swap",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a060405234801561001057600080fd5b5060405161086e38038061086e83398101604081905261002f91610045565b60016000556001600160a01b0316608052610075565b60006020828403121561005757600080fd5b81516001600160a01b038116811461006e57600080fd5b9392505050565b6080516107d861009660003960008181606a015261021d01526107d86000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063357531241461003b5780634a4a7b0414610065575b600080fd5b61004e610049366004610467565b6100a4565b60405161005c929190610593565b60405180910390f35b61008c7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200161005c565b6000806100af6101a8565b61011e6040516020016100e0906020808252600a908201526921a7a72a2927a62622a960b11b604082015260600190565b604051602081830303815290604052805190602001206040518060400160405280600a81526020016921a7a72a2927a62622a960b11b815250610206565b604051632b836e2360e11b815273__$2ebd8d293950cf319742e0db402ead4961$__90635706dc4690610155908690600401610617565b6040805180830381865af4158015610171573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061019591906106f2565b915091506101a36001600055565b915091565b6002600054036101ff5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064015b60405180910390fd5b6002600055565b60405163ac4ab3fb60e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063ac4ab3fb906102549033908690600401610593565b602060405180830381865afa158015610271573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102959190610720565b6102b657338160405163a35b150b60e01b81526004016101f6929190610744565b5050565b634e487b7160e01b600052604160045260246000fd5b604051608081016001600160401b03811182821017156102f2576102f26102ba565b60405290565b60405161018081016001600160401b03811182821017156102f2576102f26102ba565b604051601f8201601f191681016001600160401b0381118282101715610343576103436102ba565b604052919050565b6001600160a01b038116811461036057600080fd5b50565b803561036e8161034b565b919050565b600082601f83011261038457600080fd5b813560206001600160401b0382111561039f5761039f6102ba565b6103ad818360051b0161031b565b82815260079290921b840181019181810190868411156103cc57600080fd5b8286015b8481101561044357608081890312156103e95760008081fd5b6103f16102d0565b81356103fc8161034b565b81528185013561040b8161034b565b8186015260408281013561041e8161034b565b908201526060828101356104318161034b565b908201528352918301916080016103d0565b509695505050505050565b801515811461036057600080fd5b803561036e8161044e565b60006020828403121561047957600080fd5b81356001600160401b038082111561049057600080fd5b9083019061018082860312156104a557600080fd5b6104ad6102f8565b6104b683610363565b81526104c460208401610363565b60208201526104d560408401610363565b60408201526104e660608401610363565b60608201526080830135608082015261050160a08401610363565b60a082015260c083013560c082015260e08301358281111561052257600080fd5b61052e87828601610373565b60e0830152506101008381013590820152610120915061054f828401610363565b828201526101409150610563828401610363565b82820152610160915061057782840161045c565b91810191909152949350505050565b6001600160a01b03169052565b6001600160a01b03929092168252602082015260400190565b600081518084526020808501945080840160005b8381101561060c57815180516001600160a01b039081168952848201518116858a01526040808301518216908a01526060918201511690880152608090960195908201906001016105c0565b509495945050505050565b60208152610629602082018351610586565b6000602083015161063d6040840182610586565b5060408301516106506060840182610586565b5060608301516106636080840182610586565b50608083015160a083015260a083015161068060c0840182610586565b5060c083015160e083015260e083015161018061010081818601526106a96101a08601846105ac565b90860151610120868101919091528601519092506101406106cc81870183610586565b86015190506101606106e086820183610586565b90950151151593019290925250919050565b6000806040838503121561070557600080fd5b82516107108161034b565b6020939093015192949293505050565b60006020828403121561073257600080fd5b815161073d8161044e565b9392505050565b60018060a01b038316815260006020604081840152835180604085015260005b8181101561078057858101830151858201606001528201610764565b506000606082860101526060601f19601f83011685010192505050939250505056fea264697066735822122078f6a9022a9b9a76062d356f3e418a7acbc9dc3d3b3d13e18220c44d982ae6cf64736f6c63430008120033";

type SwapHandlerConstructorParams =
  | [linkLibraryAddresses: SwapHandlerLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SwapHandlerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class SwapHandler__factory extends ContractFactory {
  constructor(...args: SwapHandlerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        SwapHandler__factory.linkBytecode(linkLibraryAddresses),
        signer
      );
    }
  }

  static linkBytecode(
    linkLibraryAddresses: SwapHandlerLibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$2ebd8d293950cf319742e0db402ead4961\\$__", "g"),
      linkLibraryAddresses["contracts/swap/SwapUtils.sol:SwapUtils"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  override deploy(
    _roleStore: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SwapHandler> {
    return super.deploy(_roleStore, overrides || {}) as Promise<SwapHandler>;
  }
  override getDeployTransaction(
    _roleStore: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_roleStore, overrides || {});
  }
  override attach(address: string): SwapHandler {
    return super.attach(address) as SwapHandler;
  }
  override connect(signer: Signer): SwapHandler__factory {
    return super.connect(signer) as SwapHandler__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SwapHandlerInterface {
    return new utils.Interface(_abi) as SwapHandlerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SwapHandler {
    return new Contract(address, _abi, signerOrProvider) as SwapHandler;
  }
}

export interface SwapHandlerLibraryAddresses {
  ["contracts/swap/SwapUtils.sol:SwapUtils"]: string;
}
