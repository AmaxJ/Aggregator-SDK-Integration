/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  MarketStoreUtilsTest,
  MarketStoreUtilsTestInterface,
} from "../../../contracts/test/MarketStoreUtilsTest";

const _abi = [
  {
    inputs: [],
    name: "getEmptyMarket",
    outputs: [
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
        internalType: "struct Market.Props",
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
        internalType: "address",
        name: "key",
        type: "address",
      },
    ],
    name: "removeMarket",
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
        internalType: "address",
        name: "key",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
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
        internalType: "struct Market.Props",
        name: "market",
        type: "tuple",
      },
    ],
    name: "setMarket",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061038d806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80632b73c90d146100465780638593caac1461005b578063b8f1289114610079575b600080fd5b6100596100543660046101d5565b61008c565b005b6100636100ff565b60405161007091906102d5565b60405180910390f35b6100596100873660046102e9565b610114565b6040516303bc2fb360e51b815273__$ff439aa65a80c9eec648f15db20b189505$__90637785f660906100c9908790879087908790600401610322565b60006040518083038186803b1580156100e157600080fd5b505af41580156100f5573d6000803e3d6000fd5b5050505050505050565b61010761018b565b61010f61018b565b919050565b60405163b4fd626560e01b81526001600160a01b0380841660048301528216602482015273__$ff439aa65a80c9eec648f15db20b189505$__9063b4fd62659060440160006040518083038186803b15801561016f57600080fd5b505af4158015610183573d6000803e3d6000fd5b505050505050565b60408051608081018252600080825260208201819052918101829052606081019190915290565b6001600160a01b03811681146101c757600080fd5b50565b803561010f816101b2565b60008060008084860360e08112156101ec57600080fd5b85356101f7816101b2565b94506020860135610207816101b2565b9350604086013592506080605f198201121561022257600080fd5b50604051608081016001600160401b038111828210171561025357634e487b7160e01b600052604160045260246000fd5b604052610262606087016101ca565b8152610270608087016101ca565b602082015261028160a087016101ca565b604082015261029260c087016101ca565b6060820152939692955090935050565b80516001600160a01b03908116835260208083015182169084015260408083015182169084015260609182015116910152565b608081016102e382846102a2565b92915050565b600080604083850312156102fc57600080fd5b8235610307816101b2565b91506020830135610317816101b2565b809150509250929050565b6001600160a01b038581168252841660208201526040810183905260e0810161034e60608301846102a2565b9594505050505056fea2646970667358221220e9b302f1f3f63a898ad8841f4e84c7651e5da716be0cfc200d7e361d52864e1264736f6c63430008120033";

type MarketStoreUtilsTestConstructorParams =
  | [
      linkLibraryAddresses: MarketStoreUtilsTestLibraryAddresses,
      signer?: Signer
    ]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MarketStoreUtilsTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class MarketStoreUtilsTest__factory extends ContractFactory {
  constructor(...args: MarketStoreUtilsTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        MarketStoreUtilsTest__factory.linkBytecode(linkLibraryAddresses),
        signer
      );
    }
  }

  static linkBytecode(
    linkLibraryAddresses: MarketStoreUtilsTestLibraryAddresses
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
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MarketStoreUtilsTest> {
    return super.deploy(overrides || {}) as Promise<MarketStoreUtilsTest>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MarketStoreUtilsTest {
    return super.attach(address) as MarketStoreUtilsTest;
  }
  override connect(signer: Signer): MarketStoreUtilsTest__factory {
    return super.connect(signer) as MarketStoreUtilsTest__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MarketStoreUtilsTestInterface {
    return new utils.Interface(_abi) as MarketStoreUtilsTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MarketStoreUtilsTest {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MarketStoreUtilsTest;
  }
}

export interface MarketStoreUtilsTestLibraryAddresses {
  ["contracts/market/MarketStoreUtils.sol:MarketStoreUtils"]: string;
}