/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { BaseToken, BaseTokenInterface } from "../BaseToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_initialSupply",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "addAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "addNonStakingAccount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "admins",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowances",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balances",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
    ],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "gov",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "inPrivateTransferMode",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isHandler",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "nonStakingAccounts",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nonStakingSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
    ],
    name: "recoverClaim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "removeAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "removeNonStakingAccount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_gov",
        type: "address",
      },
    ],
    name: "setGov",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_handler",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_isActive",
        type: "bool",
      },
    ],
    name: "setHandler",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_inPrivateTransferMode",
        type: "bool",
      },
    ],
    name: "setInPrivateTransferMode",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
    ],
    name: "setInfo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_yieldTrackers",
        type: "address[]",
      },
    ],
    name: "setYieldTrackers",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "stakedBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalStaked",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdrawToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "yieldTrackers",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620021af380380620021af833981810160405260608110156200003757600080fd5b81019080805160405193929190846401000000008211156200005857600080fd5b9083019060208201858111156200006e57600080fd5b82516401000000008111828201881017156200008957600080fd5b82525081516020918201929091019080838360005b83811015620000b85781810151838201526020016200009e565b50505050905090810190601f168015620000e65780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200010a57600080fd5b9083019060208201858111156200012057600080fd5b82516401000000008111828201881017156200013b57600080fd5b82525081516020918201929091019080838360005b838110156200016a57818101518382015260200162000150565b50505050905090810190601f168015620001985780820380516001836020036101000a031916815260200191505b506040526020908101518551909350620001b9925060009186019062000431565b508151620001cf90600190602085019062000431565b50600480546001600160a01b03191633908117909155620001f19082620001fa565b505050620004cd565b6001600160a01b038216620002415760405162461bcd60e51b81526004018080602001828103825260238152602001806200218c6023913960400191505060405180910390fd5b6200024c8262000330565b6200026881600254620003cf60201b620011fe1790919060201c565b6002556001600160a01b0382166000908152600560209081526040909120546200029d918390620011fe620003cf821b17901c565b6001600160a01b03831660009081526005602090815260408083209390935560089052205460ff1615620002eb57620002e781600354620003cf60201b620011fe1790919060201c565b6003555b6040805182815290516001600160a01b038416916000917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b60005b600754811015620003cb576000600782815481106200034e57fe5b600091825260208220015460408051635fd6196560e01b81526001600160a01b03878116600483015291519190921693508392635fd61965926024808201939182900301818387803b158015620003a457600080fd5b505af1158015620003b9573d6000803e3d6000fd5b50506001909301925062000333915050565b5050565b6000828201838110156200042a576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200047457805160ff1916838001178555620004a4565b82800160010185558215620004a4579182015b82811115620004a457825182559160200191906001019062000487565b50620004b2929150620004b6565b5090565b5b80821115620004b25760008155600101620004b7565b611caf80620004dd6000396000f3fe608060405234801561001057600080fd5b50600436106101805760003560e01c806301e336671461018557806306fdde03146101bd578063095ea7b31461023a57806312d43a511461027a5780631785f53c1461029e57806318160ddd146102c45780631e83409a146102de57806323b872dd14610304578063276eab4e1461033a57806327e235e3146103db578063313ce56714610401578063429b62e51461041f57806346ea87af1461044557806352cd38d91461046b57806355b6ed5c146104885780635a47a1a7146104b657806360217267146104d557806362289077146104fb578063704802751461052157806370a0823114610547578063817b1cd21461056d5780639554381a1461057557806395d89b411461059b578063996f11ee146105a35780639cb7de4b146105d1578063a9059cbb146105ff578063a923fc401461062b578063c93be63614610754578063cfad57a21461075c578063dd62ed3e14610782578063dfbaefb1146107b0578063fb30d916146107b8575b600080fd5b6101bb6004803603606081101561019b57600080fd5b506001600160a01b038135811691602081013590911690604001356107de565b005b6101c5610844565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101ff5781810151838201526020016101e7565b50505050905090810190601f16801561022c5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102666004803603604081101561025057600080fd5b506001600160a01b0381351690602001356108d2565b604080519115158252519081900360200190f35b6102826108e8565b604080516001600160a01b039092168252519081900360200190f35b6101bb600480360360208110156102b457600080fd5b50356001600160a01b03166108f7565b6102cc610965565b60408051918252519081900360200190f35b6101bb600480360360208110156102f457600080fd5b50356001600160a01b031661096b565b6102666004803603606081101561031a57600080fd5b506001600160a01b03813581169160208101359091169060400135610a22565b6101bb6004803603602081101561035057600080fd5b810190602081018135600160201b81111561036a57600080fd5b82018360208201111561037c57600080fd5b803590602001918460208302840111600160201b8311171561039d57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550610abc945050505050565b6102cc600480360360208110156103f157600080fd5b50356001600160a01b0316610b1c565b610409610b2e565b6040805160ff9092168252519081900360200190f35b6102666004803603602081101561043557600080fd5b50356001600160a01b0316610b33565b6102666004803603602081101561045b57600080fd5b50356001600160a01b0316610b48565b6102826004803603602081101561048157600080fd5b5035610b5d565b6102cc6004803603604081101561049e57600080fd5b506001600160a01b0381358116916020013516610b84565b6101bb600480360360208110156104cc57600080fd5b50351515610ba1565b6102cc600480360360208110156104eb57600080fd5b50356001600160a01b0316610c01565b6101bb6004803603602081101561051157600080fd5b50356001600160a01b0316610c4a565b6101bb6004803603602081101561053757600080fd5b50356001600160a01b0316610d3d565b6102cc6004803603602081101561055d57600080fd5b50356001600160a01b0316610dae565b6102cc610dc9565b6102666004803603602081101561058b57600080fd5b50356001600160a01b0316610de7565b6101c5610dfc565b6101bb600480360360408110156105b957600080fd5b506001600160a01b0381358116916020013516610e56565b6101bb600480360360408110156105e757600080fd5b506001600160a01b0381351690602001351515610f5d565b6102666004803603604081101561061557600080fd5b506001600160a01b038135169060200135610fd5565b6101bb6004803603604081101561064157600080fd5b810190602081018135600160201b81111561065b57600080fd5b82018360208201111561066d57600080fd5b803590602001918460018302840111600160201b8311171561068e57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295949360208101935035915050600160201b8111156106e057600080fd5b8201836020820111156106f257600080fd5b803590602001918460018302840111600160201b8311171561071357600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610fe2945050505050565b6102cc611056565b6101bb6004803603602081101561077257600080fd5b50356001600160a01b031661105c565b6102cc6004803603604081101561079857600080fd5b506001600160a01b03813581169160200135166110cb565b6102666110f6565b6101bb600480360360208110156107ce57600080fd5b50356001600160a01b03166110ff565b6004546001600160a01b0316331461082b576040805162461bcd60e51b81526020600482015260146024820152600080516020611b93833981519152604482015290519081900360640190fd5b61083f6001600160a01b0384168383611256565b505050565b6000805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156108ca5780601f1061089f576101008083540402835291602001916108ca565b820191906000526020600020905b8154815290600101906020018083116108ad57829003601f168201915b505050505081565b60006108df3384846112a8565b50600192915050565b6004546001600160a01b031681565b6004546001600160a01b03163314610944576040805162461bcd60e51b81526020600482015260146024820152600080516020611b93833981519152604482015290519081900360640190fd5b6001600160a01b03166000908152600960205260409020805460ff19169055565b60025481565b60005b600754811015610a1e5760006007828154811061098757fe5b6000918252602080832090910154604080516310e059a160e11b81523360048201526001600160a01b038881166024830152915191909216945084936321c0b34293604480850194919392918390030190829087803b1580156109e957600080fd5b505af11580156109fd573d6000803e3d6000fd5b505050506040513d6020811015610a1357600080fd5b50505060010161096e565b5050565b336000908152600b602052604081205460ff1615610a4d57610a45848484611394565b506001610ab5565b6000610a97836040518060600160405280602c8152602001611b41602c91396001600160a01b038816600090815260066020908152604080832033845290915290205491906115bc565b9050610aa48533836112a8565b610aaf858585611394565b60019150505b9392505050565b6004546001600160a01b03163314610b09576040805162461bcd60e51b81526020600482015260146024820152600080516020611b93833981519152604482015290519081900360640190fd5b8051610a1e9060079060208401906119bb565b60056020526000908152604090205481565b601281565b60096020526000908152604090205460ff1681565b600b6020526000908152604090205460ff1681565b60078181548110610b6a57fe5b6000918252602090912001546001600160a01b0316905081565b600660209081526000928352604080842090915290825290205481565b6004546001600160a01b03163314610bee576040805162461bcd60e51b81526020600482015260146024820152600080516020611b93833981519152604482015290519081900360640190fd5b600a805460ff1916911515919091179055565b6001600160a01b03811660009081526008602052604081205460ff1615610c2a57506000610c45565b506001600160a01b0381166000908152600560205260409020545b919050565b3360009081526009602052604090205460ff16610c9c576040805162461bcd60e51b81526020600482015260146024820152600080516020611b93833981519152604482015290519081900360640190fd5b6001600160a01b03811660009081526008602052604090205460ff1615610cf45760405162461bcd60e51b8152600401808060200182810382526022815260200180611c056022913960400191505060405180910390fd5b610cfd81611653565b6001600160a01b0381166000908152600860209081526040808320805460ff191660011790556005909152902054600354610d37916111fe565b60035550565b6004546001600160a01b03163314610d8a576040805162461bcd60e51b81526020600482015260146024820152600080516020611b93833981519152604482015290519081900360640190fd5b6001600160a01b03166000908152600960205260409020805460ff19166001179055565b6001600160a01b031660009081526005602052604090205490565b6000610de26003546002546116e990919063ffffffff16565b905090565b60086020526000908152604090205460ff1681565b60018054604080516020600284861615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156108ca5780601f1061089f576101008083540402835291602001916108ca565b3360009081526009602052604090205460ff16610ea8576040805162461bcd60e51b81526020600482015260146024820152600080516020611b93833981519152604482015290519081900360640190fd5b60005b60075481101561083f57600060078281548110610ec457fe5b6000918252602080832090910154604080516310e059a160e11b81526001600160a01b0389811660048301528881166024830152915191909216945084936321c0b34293604480850194919392918390030190829087803b158015610f2857600080fd5b505af1158015610f3c573d6000803e3d6000fd5b505050506040513d6020811015610f5257600080fd5b505050600101610eab565b6004546001600160a01b03163314610faa576040805162461bcd60e51b81526020600482015260146024820152600080516020611b93833981519152604482015290519081900360640190fd5b6001600160a01b03919091166000908152600b60205260409020805460ff1916911515919091179055565b60006108df338484611394565b6004546001600160a01b0316331461102f576040805162461bcd60e51b81526020600482015260146024820152600080516020611b93833981519152604482015290519081900360640190fd5b8151611042906000906020850190611a20565b50805161083f906001906020840190611a20565b60035481565b6004546001600160a01b031633146110a9576040805162461bcd60e51b81526020600482015260146024820152600080516020611b93833981519152604482015290519081900360640190fd5b600480546001600160a01b0319166001600160a01b0392909216919091179055565b6001600160a01b03918216600090815260066020908152604080832093909416825291909152205490565b600a5460ff1681565b3360009081526009602052604090205460ff16611151576040805162461bcd60e51b81526020600482015260146024820152600080516020611b93833981519152604482015290519081900360640190fd5b6001600160a01b03811660009081526008602052604090205460ff166111be576040805162461bcd60e51b815260206004820152601e60248201527f42617365546f6b656e3a205f6163636f756e74206e6f74206d61726b65640000604482015290519081900360640190fd5b6111c781611653565b6001600160a01b0381166000908152600860209081526040808320805460ff191690556005909152902054600354610d37916116e9565b600082820183811015610ab5576040805162461bcd60e51b815260206004820152601b60248201527a536166654d6174683a206164646974696f6e206f766572666c6f7760281b604482015290519081900360640190fd5b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b17905261083f90849061172b565b6001600160a01b0383166112ed5760405162461bcd60e51b8152600401808060200182810382526028815260200180611bb36028913960400191505060405180910390fd5b6001600160a01b0382166113325760405162461bcd60e51b8152600401808060200182810382526026815260200180611b1b6026913960400191505060405180910390fd5b6001600160a01b03808416600081815260066020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b0383166113d95760405162461bcd60e51b8152600401808060200182810382526029815260200180611c516029913960400191505060405180910390fd5b6001600160a01b03821661141e5760405162461bcd60e51b8152600401808060200182810382526027815260200180611af46027913960400191505060405180910390fd5b600a5460ff161561147757336000908152600b602052604090205460ff166114775760405162461bcd60e51b8152600401808060200182810382526025815260200180611acf6025913960400191505060405180910390fd5b61148083611653565b61148982611653565b6114c6816040518060600160405280602a8152602001611bdb602a91396001600160a01b03861660009081526005602052604090205491906115bc565b6001600160a01b0380851660009081526005602052604080822093909355908416815220546114f590826111fe565b6001600160a01b0380841660009081526005602090815260408083209490945591861681526008909152205460ff161561153a5760035461153690826116e9565b6003555b6001600160a01b03821660009081526008602052604090205460ff161561156c5760035461156890826111fe565b6003555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a3505050565b6000818484111561164b5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156116105781810151838201526020016115f8565b50505050905090810190601f16801561163d5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b60005b600754811015610a1e5760006007828154811061166f57fe5b600091825260208220015460408051635fd6196560e01b81526001600160a01b03878116600483015291519190921693508392635fd61965926024808201939182900301818387803b1580156116c457600080fd5b505af11580156116d8573d6000803e3d6000fd5b505060019093019250611656915050565b6000610ab583836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506115bc565b6060611780826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166117dc9092919063ffffffff16565b80519091501561083f5780806020019051602081101561179f57600080fd5b505161083f5760405162461bcd60e51b815260040180806020018281038252602a815260200180611c27602a913960400191505060405180910390fd5b60606117eb84846000856117f3565b949350505050565b6060824710156118345760405162461bcd60e51b8152600401808060200182810382526026815260200180611b6d6026913960400191505060405180910390fd5b61183d8561194f565b61188e576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b602083106118cd5780518252601f1990920191602091820191016118ae565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d806000811461192f576040519150601f19603f3d011682016040523d82523d6000602084013e611934565b606091505b5091509150611944828286611955565b979650505050505050565b3b151590565b60608315611964575081610ab5565b8251156119745782518084602001fd5b60405162461bcd60e51b81526020600482018181528451602484015284518593919283926044019190850190808383600083156116105781810151838201526020016115f8565b828054828255906000526020600020908101928215611a10579160200282015b82811115611a1057825182546001600160a01b0319166001600160a01b039091161782556020909201916001909101906119db565b50611a1c929150611a9a565b5090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10611a6157805160ff1916838001178555611a8e565b82800160010185558215611a8e579182015b82811115611a8e578251825591602001919060010190611a73565b50611a1c929150611ab9565b5b80821115611a1c5780546001600160a01b0319168155600101611a9b565b5b80821115611a1c5760008155600101611aba56fe42617365546f6b656e3a206d73672e73656e646572206e6f742077686974656c697374656442617365546f6b656e3a207472616e7366657220746f20746865207a65726f206164647265737342617365546f6b656e3a20617070726f766520746f20746865207a65726f206164647265737342617365546f6b656e3a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e6365416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c42617365546f6b656e3a20666f7262696464656e00000000000000000000000042617365546f6b656e3a20617070726f76652066726f6d20746865207a65726f206164647265737342617365546f6b656e3a207472616e7366657220616d6f756e7420657863656564732062616c616e636542617365546f6b656e3a205f6163636f756e7420616c7265616479206d61726b65645361666545524332303a204552433230206f7065726174696f6e20646964206e6f74207375636365656442617365546f6b656e3a207472616e736665722066726f6d20746865207a65726f2061646472657373a26469706673582212200373d24ffeef8b0d36d9d32b706cb49196254ce75f9531e5df63a44ba11d5a6964736f6c634300060c003342617365546f6b656e3a206d696e7420746f20746865207a65726f2061646472657373";

export class BaseToken__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _name: string,
    _symbol: string,
    _initialSupply: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BaseToken> {
    return super.deploy(
      _name,
      _symbol,
      _initialSupply,
      overrides || {}
    ) as Promise<BaseToken>;
  }
  getDeployTransaction(
    _name: string,
    _symbol: string,
    _initialSupply: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _name,
      _symbol,
      _initialSupply,
      overrides || {}
    );
  }
  attach(address: string): BaseToken {
    return super.attach(address) as BaseToken;
  }
  connect(signer: Signer): BaseToken__factory {
    return super.connect(signer) as BaseToken__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BaseTokenInterface {
    return new utils.Interface(_abi) as BaseTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BaseToken {
    return new Contract(address, _abi, signerOrProvider) as BaseToken;
  }
}
