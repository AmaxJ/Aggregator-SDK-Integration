/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  PositionStoreUtilsTest,
  PositionStoreUtilsTestInterface,
} from "../../../contracts/test/PositionStoreUtilsTest";

const _abi = [
  {
    inputs: [],
    name: "getEmptyPosition",
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
                name: "market",
                type: "address",
              },
              {
                internalType: "address",
                name: "collateralToken",
                type: "address",
              },
            ],
            internalType: "struct Position.Addresses",
            name: "addresses",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "sizeInUsd",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "sizeInTokens",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "collateralAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "borrowingFactor",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "fundingFeeAmountPerSize",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "longTokenClaimableFundingAmountPerSize",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "shortTokenClaimableFundingAmountPerSize",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "increasedAtBlock",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "decreasedAtBlock",
                type: "uint256",
              },
            ],
            internalType: "struct Position.Numbers",
            name: "numbers",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "bool",
                name: "isLong",
                type: "bool",
              },
            ],
            internalType: "struct Position.Flags",
            name: "flags",
            type: "tuple",
          },
        ],
        internalType: "struct Position.Props",
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
    name: "removePosition",
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
                name: "market",
                type: "address",
              },
              {
                internalType: "address",
                name: "collateralToken",
                type: "address",
              },
            ],
            internalType: "struct Position.Addresses",
            name: "addresses",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "sizeInUsd",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "sizeInTokens",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "collateralAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "borrowingFactor",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "fundingFeeAmountPerSize",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "longTokenClaimableFundingAmountPerSize",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "shortTokenClaimableFundingAmountPerSize",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "increasedAtBlock",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "decreasedAtBlock",
                type: "uint256",
              },
            ],
            internalType: "struct Position.Numbers",
            name: "numbers",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "bool",
                name: "isLong",
                type: "bool",
              },
            ],
            internalType: "struct Position.Flags",
            name: "flags",
            type: "tuple",
          },
        ],
        internalType: "struct Position.Props",
        name: "position",
        type: "tuple",
      },
    ],
    name: "setPosition",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061058b806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063258c131f146100465780635c427a8c1461005b578063e4e92aec14610079575b600080fd5b610059610054366004610205565b61008c565b005b61006361010c565b60405161007091906102c8565b60405180910390f35b6100596100873660046103ca565b610121565b6040516374b6fe1360e01b81526001600160a01b038085166004830152602482018490528216604482015273__$3d31b232fb363902662fbc281b11ab3357$__906374b6fe13906064015b60006040518083038186803b1580156100ef57600080fd5b505af4158015610103573d6000803e3d6000fd5b50505050505050565b61011461015c565b61011c61015c565b919050565b6040516318ed19e160e01b815273__$3d31b232fb363902662fbc281b11ab3357$__906318ed19e1906100d790869086908690600401610503565b6040805160c081019091526000606082018181526080830182905260a0830191909152819081526020016101d56040518061012001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b81526040805160208181019092526000815291015290565b6001600160a01b038116811461020257600080fd5b50565b60008060006060848603121561021a57600080fd5b8335610225816101ed565b925060208401359150604084013561023c816101ed565b809150509250925092565b80516001600160a01b03908116835260208083015182169084015260409182015116910152565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015181840152505050565b60006101a0820190506102dc828451610247565b60208301516102ee606084018261026e565b50604083015151151561018083015292915050565b604051606081016001600160401b038111828210171561033357634e487b7160e01b600052604160045260246000fd5b60405290565b60405161012081016001600160401b038111828210171561033357634e487b7160e01b600052604160045260246000fd5b60006020828403121561037c57600080fd5b604051602081016001600160401b03811182821017156103ac57634e487b7160e01b600052604160045260246000fd5b604052905080823580151581146103c257600080fd5b905292915050565b60008060008385036101e08112156103e157600080fd5b84356103ec816101ed565b935060208501359250603f1981016101a08082121561040a57600080fd5b610412610303565b606083121561042057600080fd5b610428610303565b92506040880135610438816101ed565b83526060880135610448816101ed565b6020840152608088013561045b816101ed565b604084015291825261012091609f19840183131561047857600080fd5b610480610339565b935060a0880135845260c0880135602085015260e0880135604085015261010080890135606086015283890135608086015261014089013560a086015261016089013560c086015261018089013560e08601528289013581860152508360208201526104f0896101c08a0161036a565b6040820152809450505050509250925092565b6001600160a01b03841681526020810183905281516101e082019061052c906040840190610247565b602083015161053e60a084018261026e565b5060408301515115156101c083015294935050505056fea26469706673582212205ff1bf7a635f543da14f6cbe5a513d59608c07b1c10f0f2c2ffc8e03923c437a64736f6c63430008120033";

type PositionStoreUtilsTestConstructorParams =
  | [
      linkLibraryAddresses: PositionStoreUtilsTestLibraryAddresses,
      signer?: Signer
    ]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PositionStoreUtilsTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class PositionStoreUtilsTest__factory extends ContractFactory {
  constructor(...args: PositionStoreUtilsTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        PositionStoreUtilsTest__factory.linkBytecode(linkLibraryAddresses),
        signer
      );
    }
  }

  static linkBytecode(
    linkLibraryAddresses: PositionStoreUtilsTestLibraryAddresses
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

    return linkedBytecode;
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<PositionStoreUtilsTest> {
    return super.deploy(overrides || {}) as Promise<PositionStoreUtilsTest>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): PositionStoreUtilsTest {
    return super.attach(address) as PositionStoreUtilsTest;
  }
  override connect(signer: Signer): PositionStoreUtilsTest__factory {
    return super.connect(signer) as PositionStoreUtilsTest__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PositionStoreUtilsTestInterface {
    return new utils.Interface(_abi) as PositionStoreUtilsTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PositionStoreUtilsTest {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as PositionStoreUtilsTest;
  }
}

export interface PositionStoreUtilsTestLibraryAddresses {
  ["contracts/position/PositionStoreUtils.sol:PositionStoreUtils"]: string;
}
