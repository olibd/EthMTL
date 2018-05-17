var provider;
var signer;

window.addEventListener("load", function(){
    if(typeof web3 !== 'undefined'){
        provider = new ethers.providers.Web3Provider(web3.currentProvider);
        signer = provider.getSigner();
        initApp();
    }else{
        console.log("no web3.");
    }
});

var Contract;
var amount;

function Deploy(){
    var buyer = document.getElementById("buyer").value;
    var seller = document.getElementById("seller").value;
    amount = ethers.utils.parseEther(document.getElementById("amount").value);

    var deployTransaction = ethers.Contract.getDeployTransaction(bytecode, abi, buyer, seller, amount);

    var promise = signer.sendTransaction(deployTransaction);

    promise.then(function(transaction){
        initContract(ethers.utils.getContractAddress(transaction));
        UpdateAppUrl(Contract.address);
    });
}

function Pay(){
    var overrideOptions = {
        value: amount
    };

    Contract.confirmPayment(overrideOptions).then(function(transaction){
        AppState1();
    });
}

function Deliver(){
    Contract.confirmDelivery().then(function(transaction){
        AppState2();
    });
}

function GetAppStateOnPageLoad(){
    Contract.currentState().then(function(result){
        if(result == 0){
            GetAmountToPay();
            AppState0();
        }else if(result == 1){
            AppState1();
        }else if(result == 2){
            AppState2();
        }
    });
}

function GetAmountToPay(){
    Contract.amount().then(function(result){
        amount = result;
        document.getElementById("paymentAmount").innerText = ethers.utils.formatEther(amount);
    });
}

function initContract(address){
    Contract = new ethers.Contract(address, abi, signer);
    document.getElementById("contractDeploy").style.display = "none";
    GetAppStateOnPageLoad();
}

///////////////////////////////
// Web App Related Functions //
///////////////////////////////

function initApp(){
    var hash = location.hash;
    if(hash.length == 43){
        initContract(hash.substring(1));
    }
}

function UpdateAppUrl(contractAddress) {
    location.replace(location.origin + "#" +contractAddress);
}

function AppState0(){
    document.getElementById("ConfirmPayment").style.display = "block";
    console.log("State 0");
}

function AppState1(){
    document.getElementById("ConfirmPayment").style.display = "none";
    document.getElementById("ConfirmDelivery").style.display = "block";
    document.getElementById("PaymentStatus").innerText = "Paid.";
    console.log("State 1");
}

function AppState2(){
    document.getElementById("ConfirmDelivery").style.display = "none";    
    document.getElementById("PaymentStatus").innerText = "Paid.";
    document.getElementById("DeliveryStatus").innerText = "Delivered.";
    console.log("State 2");
}
