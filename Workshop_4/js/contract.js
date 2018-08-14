var bytecode = "0x608060405234801561001057600080fd5b5060405160608061076983398101806040528101908080519060200190929190805190602001909291908051906020019092919050505082600060016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600281905550505050610687806100e26000396000f300608060405260043610610083576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806308551a53146100885780630c3f6acf146100df5780635e10177b1461011857806362ef1f811461012f5780637150d8ae14610139578063aa8c217c14610190578063ba446ae9146101bb575b600080fd5b34801561009457600080fd5b5061009d6101d2565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156100eb57600080fd5b506100f46101f8565b6040518082600381111561010457fe5b60ff16815260200191505060405180910390f35b34801561012457600080fd5b5061012d61020a565b005b6101376103a5565b005b34801561014557600080fd5b5061014e6104db565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561019c57600080fd5b506101a5610501565b6040518082815260200191505060405180910390f35b3480156101c757600080fd5b506101d0610507565b005b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900460ff1681565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561026657600080fd5b600280600381111561027457fe5b6000809054906101000a900460ff16600381111561028e57fe5b14151561029a57600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc3073ffffffffffffffffffffffffffffffffffffffff16319081150290604051600060405180830381858888f19350505050158015610319573d6000803e3d6000fd5b5060036000806101000a81548160ff0219169083600381111561033857fe5b0217905550600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167ffedf826d9b4a1fe2a221dc900337fc72788ddb41c7ae6600c110ca2858365da460405160405180910390a250565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561040157600080fd5b600080600381111561040f57fe5b6000809054906101000a900460ff16600381111561042957fe5b14151561043557600080fd5b3460025414151561044557600080fd5b60016000806101000a81548160ff0219169083600381111561046357fe5b0217905550600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f737c69225d647e5994eab1a6c301bf6d9232beb2759ae1e27a8966b4732bc489346040518082815260200191505060405180910390a250565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60025481565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561056357600080fd5b600180600381111561057157fe5b6000809054906101000a900460ff16600381111561058b57fe5b14151561059757600080fd5b60026000806101000a81548160ff021916908360038111156105b557fe5b0217905550600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f4cda03c40a91251de090a894ea66b12aab81e02ae100aa362c7f1800b3fb3af060405160405180910390a3505600a165627a7a72305820a4a6ab32c93db93e9c83fae21c08bb2cb55a7c4bad490bf3d9e16de18f3a57710029";
var abi = [
	{
		"constant": true,
		"inputs": [],
		"name": "seller",
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
		"name": "currentState",
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
		"inputs": [],
		"name": "confirmDelivery",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "confirmPayment",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "buyer",
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
		"name": "amount",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "shipped",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "_buyer",
				"type": "address"
			},
			{
				"name": "_seller",
				"type": "address"
			},
			{
				"name": "_amount",
				"type": "uint256"
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
				"name": "_by",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "Paid",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "_by",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "_to",
				"type": "address"
			}
		],
		"name": "Shipped",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "_to",
				"type": "address"
			}
		],
		"name": "Delivered",
		"type": "event"
	}
];