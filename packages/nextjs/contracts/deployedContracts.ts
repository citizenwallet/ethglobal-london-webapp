/**
 * This file is autogenerated by Scaffold-ETH.
 * You should not edit it manually or your changes might be overwritten.
 */
import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

const deployedContracts = {
  84532: {
    CardManager: {
      address: "0xA376A0EA9d971C2fCf3b51C8BeCDd85fa894e8BC",
      abi: [
        {
          inputs: [
            {
              internalType: "contract IEntryPoint",
              name: "_entryPoint",
              type: "address",
            },
            {
              internalType: "contract ITokenEntryPoint",
              name: "_tokenEntryPoint",
              type: "address",
            },
            {
              internalType: "address[]",
              name: "_whitelistAddresses",
              type: "address[]",
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
              name: "voucher",
              type: "address",
            },
          ],
          name: "CardCreated",
          type: "event",
        },
        {
          inputs: [],
          name: "cardImplementation",
          outputs: [
            {
              internalType: "contract Card",
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
              internalType: "bytes32",
              name: "cardHash",
              type: "bytes32",
            },
          ],
          name: "createCard",
          outputs: [
            {
              internalType: "contract Card",
              name: "ret",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "codeHash",
              type: "bytes32",
            },
          ],
          name: "getCardAddress",
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
          inputs: [
            {
              internalType: "uint256",
              name: "serial",
              type: "uint256",
            },
          ],
          name: "getCardHash",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "addr",
              type: "address",
            },
          ],
          name: "isWhitelisted",
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
          name: "owner",
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
          inputs: [
            {
              internalType: "contract Card",
              name: "card",
              type: "address",
            },
            {
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "transferCardOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address[]",
              name: "addresses",
              type: "address[]",
            },
          ],
          name: "updateWhitelist",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract IWithdrawable",
              name: "card",
              type: "address",
            },
            {
              internalType: "contract IERC20",
              name: "token",
              type: "address",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "withdraw",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      inheritedFunctions: {
        isWhitelisted: "contracts/cards/interfaces/IWhitelist.sol",
      },
    },
  },
} as const;

export default deployedContracts satisfies GenericContractsDeclaration;
