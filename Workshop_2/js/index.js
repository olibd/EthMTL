var provider;
var signer;

window.addEventListener("load", function(){
    if(typeof web3 !== 'undefined'){
        provider = new ethers.providers.Web3Provider(web3.currentProvider);
        signer = provider.getSigner();
    }else{
        console.log("no web3.");
    }
});

var Contract;
function Deploy(){
    var greeting = document.getElementById("greeting").value;
    var deployTransaction = ethers.Contract.getDeployTransaction(bytecode, abi, greeting);
    provider.estimateGas(deployTransaction).then(function(estimate){
        alert(estimate);
    });

    var promise = signer.sendTransaction(deployTransaction);

    promise.then(function(transaction){
        Contract = new ethers.Contract(ethers.utils.getContractAddress(transaction), abi, signer);
        Greet();
    });
}

function SetGreeting(){
    var greeting = document.getElementById("newGreeting").value;
    var promise = Contract.setGreeting(greeting);
    promise.then(function(transaction){
        Greet();
    });
}

function Greet(){
    Contract.greet().then(function(result){
        document.getElementById("greet").innerText = result;
    });
}