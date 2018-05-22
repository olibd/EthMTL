var bytecode = "608060405234801561001057600080fd5b5060405160608061051e83398101806040528101908080519060200190929190805190602001909291908051906020019092919050505082600060016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508060028190555050505061043c806100e26000396000f300608060405260043610610078576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806308551a531461007d5780630c3f6acf146100d45780635e10177b1461010d57806362ef1f81146101245780637150d8ae1461012e578063aa8c217c14610185575b600080fd5b34801561008957600080fd5b506100926101b0565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156100e057600080fd5b506100e96101d6565b604051808260028111156100f957fe5b60ff16815260200191505060405180910390f35b34801561011957600080fd5b506101226101e8565b005b61012c61031e565b005b34801561013a57600080fd5b506101436103e4565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561019157600080fd5b5061019a61040a565b6040518082815260200191505060405180910390f35b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900460ff1681565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561024457600080fd5b600180600281111561025257fe5b6000809054906101000a900460ff16600281111561026c57fe5b14151561027857600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc3073ffffffffffffffffffffffffffffffffffffffff16319081150290604051600060405180830381858888f193505050501580156102f7573d6000803e3d6000fd5b5060026000806101000a81548160ff0219169083600281111561031657fe5b021790555050565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561037a57600080fd5b600080600281111561038857fe5b6000809054906101000a900460ff1660028111156103a257fe5b1415156103ae57600080fd5b346002541415156103be57600080fd5b60016000806101000a81548160ff021916908360028111156103dc57fe5b021790555050565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600254815600a165627a7a723058202482af38e05b3a5e0509edd28b636617488727925610f1b7568afd15414fd20c0029";
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
	}
];