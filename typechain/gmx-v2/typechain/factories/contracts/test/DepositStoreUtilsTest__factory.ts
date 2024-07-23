/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  DepositStoreUtilsTest,
  DepositStoreUtilsTestInterface,
} from "../../../contracts/test/DepositStoreUtilsTest";

const _abi = [
  {
    inputs: [],
    name: "getEmptyDeposit",
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "account",
                type: "address",
              },
              {
                internalType: "address",
                name: "receiver",
                type: "address",
              },
              {
                internalType: "address",
                name: "callbackContract",
                type: "address",
              },
              {
                internalType: "address",
                name: "uiFeeReceiver",
                type: "address",
              },
              {
                internalType: "address",
                name: "market",
                type: "address",
              },
              {
                internalType: "address",
                name: "initialLongToken",
                type: "address",
              },
              {
                internalType: "address",
                name: "initialShortToken",
                type: "address",
              },
              {
                internalType: "address[]",
                name: "longTokenSwapPath",
                type: "address[]",
              },
              {
                internalType: "address[]",
                name: "shortTokenSwapPath",
                type: "address[]",
              },
            ],
            internalType: "struct Deposit.Addresses",
            name: "addresses",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "initialLongTokenAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "initialShortTokenAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "minMarketTokens",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "updatedAtBlock",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "updatedAtTime",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "executionFee",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "callbackGasLimit",
                type: "uint256",
              },
            ],
            internalType: "struct Deposit.Numbers",
            name: "numbers",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "bool",
                name: "shouldUnwrapNativeToken",
                type: "bool",
              },
            ],
            internalType: "struct Deposit.Flags",
            name: "flags",
            type: "tuple",
          },
        ],
        internalType: "struct Deposit.Props",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract DataStore",
        name: "dataStore",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "removeDeposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract DataStore",
        name: "dataStore",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "account",
                type: "address",
              },
              {
                internalType: "address",
                name: "receiver",
                type: "address",
              },
              {
                internalType: "address",
                name: "callbackContract",
                type: "address",
              },
              {
                internalType: "address",
                name: "uiFeeReceiver",
                type: "address",
              },
              {
                internalType: "address",
                name: "market",
                type: "address",
              },
              {
                internalType: "address",
                name: "initialLongToken",
                type: "address",
              },
              {
                internalType: "address",
                name: "initialShortToken",
                type: "address",
              },
              {
                internalType: "address[]",
                name: "longTokenSwapPath",
                type: "address[]",
              },
              {
                internalType: "address[]",
                name: "shortTokenSwapPath",
                type: "address[]",
              },
            ],
            internalType: "struct Deposit.Addresses",
            name: "addresses",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "initialLongTokenAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "initialShortTokenAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "minMarketTokens",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "updatedAtBlock",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "updatedAtTime",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "executionFee",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "callbackGasLimit",
                type: "uint256",
              },
            ],
            internalType: "struct Deposit.Numbers",
            name: "numbers",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "bool",
                name: "shouldUnwrapNativeToken",
                type: "bool",
              },
            ],
            internalType: "struct Deposit.Flags",
            name: "flags",
            type: "tuple",
          },
        ],
        internalType: "struct Deposit.Props",
        name: "deposit",
        type: "tuple",
      },
    ],
    name: "setDeposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506108ae806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806354a9e1ca14610046578063db4f82a91461005b578063f3f9957614610079575b600080fd5b61005961005436600461040c565b61008c565b005b6100636100fc565b604051610070919061061d565b60405180910390f35b61005961008736600461071e565b610111565b60405163151a2c8b60e11b815273__$b63e253a228f0e32f671cc49c7fc32477c$__90632a345916906100c790869086908690600401610760565b60006040518083038186803b1580156100df57600080fd5b505af41580156100f3573d6000803e3d6000fd5b50505050505050565b610104610160565b61010c610160565b919050565b6040516374b6fe1360e01b81526001600160a01b038085166004830152602482018490528216604482015273__$b63e253a228f0e32f671cc49c7fc32477c$__906374b6fe13906064016100c7565b604080516101808101909152600060608083018281526080840183905260a0840183905260c0840183905260e0840183905261010084018390526101208401929092526101408301819052610160830152819081526020016101f86040518060e00160405280600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b81526040805160208181019092526000815291015290565b6001600160a01b038116811461022557600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b604051606081016001600160401b038111828210171561026057610260610228565b60405290565b60405161012081016001600160401b038111828210171561026057610260610228565b803561010c81610210565b600082601f8301126102a557600080fd5b813560206001600160401b03808311156102c1576102c1610228565b8260051b604051601f19603f830116810181811084821117156102e6576102e6610228565b60405293845285810183019383810192508785111561030457600080fd5b83870191505b8482101561032c57813561031d81610210565b8352918301919083019061030a565b979650505050505050565b600060e0828403121561034957600080fd5b60405160e081016001600160401b038111828210171561036b5761036b610228565b8060405250809150823581526020830135602082015260408301356040820152606083013560608201526080830135608082015260a083013560a082015260c083013560c08201525092915050565b6000602082840312156103cc57600080fd5b604051602081016001600160401b03811182821017156103ee576103ee610228565b6040529050808235801515811461040457600080fd5b905292915050565b60008060006060848603121561042157600080fd5b833561042c81610210565b92506020840135915060408401356001600160401b038082111561044f57600080fd5b818601915061012080838903121561046657600080fd5b61046e61023e565b83358381111561047d57600080fd5b8401808a0383131561048e57600080fd5b610496610266565b92506104a181610289565b83526104af60208201610289565b60208401526104c060408201610289565b60408401526104d160608201610289565b60608401526104e260808201610289565b60808401526104f360a08201610289565b60a084015261050460c08201610289565b60c084015260e08101358481111561051b57600080fd5b6105278b828401610294565b60e085015250610100808201358581111561054157600080fd5b61054d8c828501610294565b82860152508383526105628b60208801610337565b60208401526105738b8288016103ba565b60408401525050809450505050509250925092565b6001600160a01b03169052565b600081518084526020808501945080840160005b838110156105ce5781516001600160a01b0316875295820195908201906001016105a9565b509495945050505050565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c08301525050565b602081526000825161012080602085015261063d61014085018351610588565b6020820151610650610160860182610588565b506040820151610664610180860182610588565b5060608201516106786101a0860182610588565b50608082015161068c6101c0860182610588565b5060a08201516106a06101e0860182610588565b5060c08201516106b4610200860182610588565b5060e0820151816102208601526106cf610260860182610595565b9050610100830151925061013f19858203016102408601526106f18184610595565b925050602085015161070660408601826105d9565b50604085015180511515858301525090949350505050565b60008060006060848603121561073357600080fd5b833561073e81610210565b925060208401359150604084013561075581610210565b809150509250925092565b60018060a01b0384168152826020820152606060408201526000825161012080606085015261079461018085018351610588565b60208201516107a76101a0860182610588565b5060408201516107bb6101c0860182610588565b5060608201516107cf6101e0860182610588565b5060808201516107e3610200860182610588565b5060a08201516107f7610220860182610588565b5060c082015161080b610240860182610588565b5060e0820151816102608601526108266102a0860182610595565b915050610100820151915061017f19848203016102808501526108498183610595565b915050602084015161085e60808501826105d9565b50604084015180511515610160850152509594505050505056fea2646970667358221220e00e8ea56fcc34efc40119faba0b58abd3632d886bef9a8df1c90f935f277bc264736f6c63430008120033";

type DepositStoreUtilsTestConstructorParams =
  | [
      linkLibraryAddresses: DepositStoreUtilsTestLibraryAddresses,
      signer?: Signer
    ]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DepositStoreUtilsTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class DepositStoreUtilsTest__factory extends ContractFactory {
  constructor(...args: DepositStoreUtilsTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        DepositStoreUtilsTest__factory.linkBytecode(linkLibraryAddresses),
        signer
      );
    }
  }

  static linkBytecode(
    linkLibraryAddresses: DepositStoreUtilsTestLibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$b63e253a228f0e32f671cc49c7fc32477c\\$__", "g"),
      linkLibraryAddresses[
        "contracts/deposit/DepositStoreUtils.sol:DepositStoreUtils"
      ]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DepositStoreUtilsTest> {
    return super.deploy(overrides || {}) as Promise<DepositStoreUtilsTest>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): DepositStoreUtilsTest {
    return super.attach(address) as DepositStoreUtilsTest;
  }
  override connect(signer: Signer): DepositStoreUtilsTest__factory {
    return super.connect(signer) as DepositStoreUtilsTest__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DepositStoreUtilsTestInterface {
    return new utils.Interface(_abi) as DepositStoreUtilsTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DepositStoreUtilsTest {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as DepositStoreUtilsTest;
  }
}

export interface DepositStoreUtilsTestLibraryAddresses {
  ["contracts/deposit/DepositStoreUtils.sol:DepositStoreUtils"]: string;
}