var provider;
var signer;
window.addEventListener('load', function() {
    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof web3 !== 'undefined') {
      // Use the browser's ethereum provider
      provider = new ethers.providers.Web3Provider(web3.currentProvider);
      signer = provider.getSigner();
    } else {
      console.log('No web3? You should consider trying MetaMask!')
    }
});

//Contract deployment
var contract;

function Deploy(){
    var greeting = document.getElementById("greeting").value;

    var deployTransaction = ethers.Contract.getDeployTransaction(bytecode, abi, greeting);

    provider.estimateGas(deployTransaction).then(function(estimate){
        alert("estimated gas for this transaction: " + estimate);
    });

    var promise = signer.sendTransaction(deployTransaction);

    promise.then(function(transaction){
        document.getElementById("contractDepHash").innerText = transaction.hash;
        contract = new ethers.Contract(ethers.utils.getContractAddress(transaction), abi, signer);
		document.getElementById("contractAddress").innerText = contract.address;
		greet();
        console.log(transaction);
    });
};

//Contract interaction
function setGreeting(){
	var greeting = document.getElementById("newGreeting").value;
	var promise = contract.setGreeting(greeting);
	promise.then(function(transaction){
		console.log(transaction);
		greet();
	});
}

function greet(){
	contract.greet().then(function(result){
		document.getElementById("greet").innerText = result;
	});
}