//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Counter
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 *
 */
export const counterAbi = [
  {
    type: "function",
    inputs: [],
    name: "increment",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [],
    name: "number",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "newNumber", internalType: "uint256", type: "uint256" }],
    name: "setNumber",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "number",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "NumberSet",
  },
] as const;

/**
 *
 */
export const counterAddress = {
  31337: "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",
} as const;

/**
 *
 */
export const counterConfig = {
  address: counterAddress,
  abi: counterAbi,
} as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC165
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc165Abi = [
  {
    type: "function",
    inputs: [{ name: "interfaceID", internalType: "bytes4", type: "bytes4" }],
    name: "supportsInterface",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc20Abi = [
  {
    type: "function",
    inputs: [
      { name: "owner", internalType: "address", type: "address" },
      { name: "spender", internalType: "address", type: "address" },
    ],
    name: "allowance",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "spender", internalType: "address", type: "address" },
      { name: "amount", internalType: "uint256", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "account", internalType: "address", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "decimals",
    outputs: [{ name: "", internalType: "uint8", type: "uint8" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "name",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "symbol",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "totalSupply",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "to", internalType: "address", type: "address" },
      { name: "amount", internalType: "uint256", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "from", internalType: "address", type: "address" },
      { name: "to", internalType: "address", type: "address" },
      { name: "amount", internalType: "uint256", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "owner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "spender",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "value",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "Approval",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "from", internalType: "address", type: "address", indexed: true },
      { name: "to", internalType: "address", type: "address", indexed: true },
      {
        name: "value",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "Transfer",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721Abi = [
  {
    type: "function",
    inputs: [
      { name: "_approved", internalType: "address", type: "address" },
      { name: "_tokenId", internalType: "uint256", type: "uint256" },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [{ name: "_owner", internalType: "address", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "_tokenId", internalType: "uint256", type: "uint256" }],
    name: "getApproved",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "_owner", internalType: "address", type: "address" },
      { name: "_operator", internalType: "address", type: "address" },
    ],
    name: "isApprovedForAll",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "_tokenId", internalType: "uint256", type: "uint256" }],
    name: "ownerOf",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "_from", internalType: "address", type: "address" },
      { name: "_to", internalType: "address", type: "address" },
      { name: "_tokenId", internalType: "uint256", type: "uint256" },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [
      { name: "_from", internalType: "address", type: "address" },
      { name: "_to", internalType: "address", type: "address" },
      { name: "_tokenId", internalType: "uint256", type: "uint256" },
      { name: "data", internalType: "bytes", type: "bytes" },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [
      { name: "_operator", internalType: "address", type: "address" },
      { name: "_approved", internalType: "bool", type: "bool" },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "interfaceID", internalType: "bytes4", type: "bytes4" }],
    name: "supportsInterface",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "_from", internalType: "address", type: "address" },
      { name: "_to", internalType: "address", type: "address" },
      { name: "_tokenId", internalType: "uint256", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "_owner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "_approved",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "_tokenId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
    ],
    name: "Approval",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "_owner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "_operator",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      { name: "_approved", internalType: "bool", type: "bool", indexed: false },
    ],
    name: "ApprovalForAll",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "_from",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      { name: "_to", internalType: "address", type: "address", indexed: true },
      {
        name: "_tokenId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
    ],
    name: "Transfer",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721Enumerable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721EnumerableAbi = [
  {
    type: "function",
    inputs: [
      { name: "_approved", internalType: "address", type: "address" },
      { name: "_tokenId", internalType: "uint256", type: "uint256" },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [{ name: "_owner", internalType: "address", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "_tokenId", internalType: "uint256", type: "uint256" }],
    name: "getApproved",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "_owner", internalType: "address", type: "address" },
      { name: "_operator", internalType: "address", type: "address" },
    ],
    name: "isApprovedForAll",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "_tokenId", internalType: "uint256", type: "uint256" }],
    name: "ownerOf",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "_from", internalType: "address", type: "address" },
      { name: "_to", internalType: "address", type: "address" },
      { name: "_tokenId", internalType: "uint256", type: "uint256" },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [
      { name: "_from", internalType: "address", type: "address" },
      { name: "_to", internalType: "address", type: "address" },
      { name: "_tokenId", internalType: "uint256", type: "uint256" },
      { name: "data", internalType: "bytes", type: "bytes" },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [
      { name: "_operator", internalType: "address", type: "address" },
      { name: "_approved", internalType: "bool", type: "bool" },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "interfaceID", internalType: "bytes4", type: "bytes4" }],
    name: "supportsInterface",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "_index", internalType: "uint256", type: "uint256" }],
    name: "tokenByIndex",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "_owner", internalType: "address", type: "address" },
      { name: "_index", internalType: "uint256", type: "uint256" },
    ],
    name: "tokenOfOwnerByIndex",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "totalSupply",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "_from", internalType: "address", type: "address" },
      { name: "_to", internalType: "address", type: "address" },
      { name: "_tokenId", internalType: "uint256", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "_owner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "_approved",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "_tokenId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
    ],
    name: "Approval",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "_owner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "_operator",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      { name: "_approved", internalType: "bool", type: "bool", indexed: false },
    ],
    name: "ApprovalForAll",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "_from",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      { name: "_to", internalType: "address", type: "address", indexed: true },
      {
        name: "_tokenId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
    ],
    name: "Transfer",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721Metadata
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721MetadataAbi = [
  {
    type: "function",
    inputs: [
      { name: "_approved", internalType: "address", type: "address" },
      { name: "_tokenId", internalType: "uint256", type: "uint256" },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [{ name: "_owner", internalType: "address", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "_tokenId", internalType: "uint256", type: "uint256" }],
    name: "getApproved",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "_owner", internalType: "address", type: "address" },
      { name: "_operator", internalType: "address", type: "address" },
    ],
    name: "isApprovedForAll",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "name",
    outputs: [{ name: "_name", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "_tokenId", internalType: "uint256", type: "uint256" }],
    name: "ownerOf",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "_from", internalType: "address", type: "address" },
      { name: "_to", internalType: "address", type: "address" },
      { name: "_tokenId", internalType: "uint256", type: "uint256" },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [
      { name: "_from", internalType: "address", type: "address" },
      { name: "_to", internalType: "address", type: "address" },
      { name: "_tokenId", internalType: "uint256", type: "uint256" },
      { name: "data", internalType: "bytes", type: "bytes" },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [
      { name: "_operator", internalType: "address", type: "address" },
      { name: "_approved", internalType: "bool", type: "bool" },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "interfaceID", internalType: "bytes4", type: "bytes4" }],
    name: "supportsInterface",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "symbol",
    outputs: [{ name: "_symbol", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "_tokenId", internalType: "uint256", type: "uint256" }],
    name: "tokenURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "_from", internalType: "address", type: "address" },
      { name: "_to", internalType: "address", type: "address" },
      { name: "_tokenId", internalType: "uint256", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "_owner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "_approved",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "_tokenId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
    ],
    name: "Approval",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "_owner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "_operator",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      { name: "_approved", internalType: "bool", type: "bool", indexed: false },
    ],
    name: "ApprovalForAll",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "_from",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      { name: "_to", internalType: "address", type: "address", indexed: true },
      {
        name: "_tokenId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
    ],
    name: "Transfer",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721TokenReceiver
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721TokenReceiverAbi = [
  {
    type: "function",
    inputs: [
      { name: "_operator", internalType: "address", type: "address" },
      { name: "_from", internalType: "address", type: "address" },
      { name: "_tokenId", internalType: "uint256", type: "uint256" },
      { name: "_data", internalType: "bytes", type: "bytes" },
    ],
    name: "onERC721Received",
    outputs: [{ name: "", internalType: "bytes4", type: "bytes4" }],
    stateMutability: "nonpayable",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IMulticall3
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iMulticall3Abi = [
  {
    type: "function",
    inputs: [
      {
        name: "calls",
        internalType: "struct IMulticall3.Call[]",
        type: "tuple[]",
        components: [
          { name: "target", internalType: "address", type: "address" },
          { name: "callData", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "aggregate",
    outputs: [
      { name: "blockNumber", internalType: "uint256", type: "uint256" },
      { name: "returnData", internalType: "bytes[]", type: "bytes[]" },
    ],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "calls",
        internalType: "struct IMulticall3.Call3[]",
        type: "tuple[]",
        components: [
          { name: "target", internalType: "address", type: "address" },
          { name: "allowFailure", internalType: "bool", type: "bool" },
          { name: "callData", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "aggregate3",
    outputs: [
      {
        name: "returnData",
        internalType: "struct IMulticall3.Result[]",
        type: "tuple[]",
        components: [
          { name: "success", internalType: "bool", type: "bool" },
          { name: "returnData", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "calls",
        internalType: "struct IMulticall3.Call3Value[]",
        type: "tuple[]",
        components: [
          { name: "target", internalType: "address", type: "address" },
          { name: "allowFailure", internalType: "bool", type: "bool" },
          { name: "value", internalType: "uint256", type: "uint256" },
          { name: "callData", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "aggregate3Value",
    outputs: [
      {
        name: "returnData",
        internalType: "struct IMulticall3.Result[]",
        type: "tuple[]",
        components: [
          { name: "success", internalType: "bool", type: "bool" },
          { name: "returnData", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "calls",
        internalType: "struct IMulticall3.Call[]",
        type: "tuple[]",
        components: [
          { name: "target", internalType: "address", type: "address" },
          { name: "callData", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "blockAndAggregate",
    outputs: [
      { name: "blockNumber", internalType: "uint256", type: "uint256" },
      { name: "blockHash", internalType: "bytes32", type: "bytes32" },
      {
        name: "returnData",
        internalType: "struct IMulticall3.Result[]",
        type: "tuple[]",
        components: [
          { name: "success", internalType: "bool", type: "bool" },
          { name: "returnData", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [],
    name: "getBasefee",
    outputs: [{ name: "basefee", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "blockNumber", internalType: "uint256", type: "uint256" }],
    name: "getBlockHash",
    outputs: [{ name: "blockHash", internalType: "bytes32", type: "bytes32" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getBlockNumber",
    outputs: [
      { name: "blockNumber", internalType: "uint256", type: "uint256" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getChainId",
    outputs: [{ name: "chainid", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getCurrentBlockCoinbase",
    outputs: [{ name: "coinbase", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getCurrentBlockDifficulty",
    outputs: [{ name: "difficulty", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getCurrentBlockGasLimit",
    outputs: [{ name: "gaslimit", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getCurrentBlockTimestamp",
    outputs: [{ name: "timestamp", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "addr", internalType: "address", type: "address" }],
    name: "getEthBalance",
    outputs: [{ name: "balance", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getLastBlockHash",
    outputs: [{ name: "blockHash", internalType: "bytes32", type: "bytes32" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "requireSuccess", internalType: "bool", type: "bool" },
      {
        name: "calls",
        internalType: "struct IMulticall3.Call[]",
        type: "tuple[]",
        components: [
          { name: "target", internalType: "address", type: "address" },
          { name: "callData", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "tryAggregate",
    outputs: [
      {
        name: "returnData",
        internalType: "struct IMulticall3.Result[]",
        type: "tuple[]",
        components: [
          { name: "success", internalType: "bool", type: "bool" },
          { name: "returnData", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [
      { name: "requireSuccess", internalType: "bool", type: "bool" },
      {
        name: "calls",
        internalType: "struct IMulticall3.Call[]",
        type: "tuple[]",
        components: [
          { name: "target", internalType: "address", type: "address" },
          { name: "callData", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "tryBlockAndAggregate",
    outputs: [
      { name: "blockNumber", internalType: "uint256", type: "uint256" },
      { name: "blockHash", internalType: "bytes32", type: "bytes32" },
      {
        name: "returnData",
        internalType: "struct IMulticall3.Result[]",
        type: "tuple[]",
        components: [
          { name: "success", internalType: "bool", type: "bool" },
          { name: "returnData", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    stateMutability: "payable",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Test
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const testAbi = [
  {
    type: "function",
    inputs: [],
    name: "IS_TEST",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "excludeArtifacts",
    outputs: [
      {
        name: "excludedArtifacts_",
        internalType: "string[]",
        type: "string[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "excludeContracts",
    outputs: [
      {
        name: "excludedContracts_",
        internalType: "address[]",
        type: "address[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "excludeSenders",
    outputs: [
      {
        name: "excludedSenders_",
        internalType: "address[]",
        type: "address[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "failed",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "targetArtifactSelectors",
    outputs: [
      {
        name: "targetedArtifactSelectors_",
        internalType: "struct StdInvariant.FuzzSelector[]",
        type: "tuple[]",
        components: [
          { name: "addr", internalType: "address", type: "address" },
          { name: "selectors", internalType: "bytes4[]", type: "bytes4[]" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "targetArtifacts",
    outputs: [
      {
        name: "targetedArtifacts_",
        internalType: "string[]",
        type: "string[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "targetContracts",
    outputs: [
      {
        name: "targetedContracts_",
        internalType: "address[]",
        type: "address[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "targetInterfaces",
    outputs: [
      {
        name: "targetedInterfaces_",
        internalType: "struct StdInvariant.FuzzInterface[]",
        type: "tuple[]",
        components: [
          { name: "addr", internalType: "address", type: "address" },
          { name: "artifacts", internalType: "string[]", type: "string[]" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "targetSelectors",
    outputs: [
      {
        name: "targetedSelectors_",
        internalType: "struct StdInvariant.FuzzSelector[]",
        type: "tuple[]",
        components: [
          { name: "addr", internalType: "address", type: "address" },
          { name: "selectors", internalType: "bytes4[]", type: "bytes4[]" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "targetSenders",
    outputs: [
      {
        name: "targetedSenders_",
        internalType: "address[]",
        type: "address[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "", internalType: "string", type: "string", indexed: false },
    ],
    name: "log",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "", internalType: "address", type: "address", indexed: false },
    ],
    name: "log_address",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "val",
        internalType: "uint256[]",
        type: "uint256[]",
        indexed: false,
      },
    ],
    name: "log_array",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "val",
        internalType: "int256[]",
        type: "int256[]",
        indexed: false,
      },
    ],
    name: "log_array",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "val",
        internalType: "address[]",
        type: "address[]",
        indexed: false,
      },
    ],
    name: "log_array",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "", internalType: "bytes", type: "bytes", indexed: false },
    ],
    name: "log_bytes",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "", internalType: "bytes32", type: "bytes32", indexed: false },
    ],
    name: "log_bytes32",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "", internalType: "int256", type: "int256", indexed: false },
    ],
    name: "log_int",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "address", type: "address", indexed: false },
    ],
    name: "log_named_address",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      {
        name: "val",
        internalType: "uint256[]",
        type: "uint256[]",
        indexed: false,
      },
    ],
    name: "log_named_array",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      {
        name: "val",
        internalType: "int256[]",
        type: "int256[]",
        indexed: false,
      },
    ],
    name: "log_named_array",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      {
        name: "val",
        internalType: "address[]",
        type: "address[]",
        indexed: false,
      },
    ],
    name: "log_named_array",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "bytes", type: "bytes", indexed: false },
    ],
    name: "log_named_bytes",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "bytes32", type: "bytes32", indexed: false },
    ],
    name: "log_named_bytes32",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "int256", type: "int256", indexed: false },
      {
        name: "decimals",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "log_named_decimal_int",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "uint256", type: "uint256", indexed: false },
      {
        name: "decimals",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "log_named_decimal_uint",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "int256", type: "int256", indexed: false },
    ],
    name: "log_named_int",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "string", type: "string", indexed: false },
    ],
    name: "log_named_string",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "string", type: "string", indexed: false },
      { name: "val", internalType: "uint256", type: "uint256", indexed: false },
    ],
    name: "log_named_uint",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "", internalType: "string", type: "string", indexed: false },
    ],
    name: "log_string",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "", internalType: "uint256", type: "uint256", indexed: false },
    ],
    name: "log_uint",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "", internalType: "bytes", type: "bytes", indexed: false },
    ],
    name: "logs",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Vault
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 *
 */
export const vaultAbi = [
  { type: "receive", stateMutability: "payable" },
  {
    type: "function",
    inputs: [{ name: "account", internalType: "address", type: "address" }],
    name: "balances",
    outputs: [{ name: "balance", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [],
    name: "getBalance",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "amount", internalType: "uint256", type: "uint256" }],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "amount",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "Deposit",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "amount",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "Withdraw",
  },
  { type: "error", inputs: [], name: "InsufficientBalanceError" },
] as const;

/**
 *
 */
export const vaultAddress = {
  31337: "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9",
} as const;

/**
 *
 */
export const vaultConfig = { address: vaultAddress, abi: vaultAbi } as const;
