const abi = [
    {
        "constant": false,
        "inputs": [],
        "name": "toggleSaleStatus",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "toggleTradeOn",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "currentAuction",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "auctions",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "currentICOPhase",
        "outputs": [
            {
                "name": "",
                "type": "uint8"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_phaseName",
                "type": "string"
            },
            {
                "name": "_priceStart",
                "type": "uint256"
            },
            {
                "name": "_priceReserve",
                "type": "uint256"
            },
            {
                "name": "_minimumBid",
                "type": "uint256"
            },
            {
                "name": "_claimPeriod",
                "type": "uint256"
            },
            {
                "name": "_walletAddress",
                "type": "address"
            },
            {
                "name": "_intervalDuration",
                "type": "uint256"
            },
            {
                "name": "_offering",
                "type": "uint256"
            }
        ],
        "name": "addICOPhase",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "tokenAddress",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getAuctions",
        "outputs": [
            {
                "name": "",
                "type": "address[]"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint8"
            }
        ],
        "name": "icoPhases",
        "outputs": [
            {
                "name": "phaseName",
                "type": "string"
            },
            {
                "name": "tokensStaged",
                "type": "uint256"
            },
            {
                "name": "tokensAllocated",
                "type": "uint256"
            },
            {
                "name": "startPrice",
                "type": "uint256"
            },
            {
                "name": "finalPrice",
                "type": "uint256"
            },
            {
                "name": "saleOn",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "_tokenAddress",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "phaseName",
                "type": "string"
            }
        ],
        "name": "ICOPhaseAdded",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "to",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    }
];
const address = '0xc332655b4f87db24bb2bd8c204344bf9c4747273';

module.exports = {abi, address};
//new web3.eth.Contract(abi, address);
