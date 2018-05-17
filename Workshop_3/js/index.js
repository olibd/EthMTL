var provider;
var signer;

//Verify that there is a web provider present in the browser (like metamask)
//and load the app
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

//Calls the confirmPayment() function of the contract
function Pay(){
    var overrideOptions = {
        value: amount
    };

    Contract.confirmPayment(overrideOptions).then(function(transaction){
        AppState1();
    });
}

//Calls the confirmDelivery() function of the contract
function Deliver(){
    Contract.confirmDelivery().then(function(transaction){
        AppState2();
    });
}

//Get, from the contract, its current state
//and update the app state accordingly
//this function is called on page load
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

//Get from the contract the amount the seller has to pay
function GetAmountToPay(){
    Contract.amount().then(function(result){
        amount = result;
        document.getElementById("paymentAmount").innerText = ethers.utils.formatEther(amount);
    });
}

//Given an address, initialize a contract object the references
//the contract on the blockchain
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
    //If the url, after the hashtag contains a contract address
    if(hash.length == 43){
        //initialize a contract object that references the ethereum smart contract
        initContract(hash.substring(1));
    }
}

//Append the contract address to the contract URL
function UpdateAppUrl(contractAddress) {
    location.replace(location.origin + "#" +contractAddress);
}

//Puts the app ui in state 0. (asks the buyer to confirm the payment)
function AppState0(){
    document.getElementById("ConfirmPayment").style.display = "block";
    console.log("State 0");
}

//Puts the app ui in state 1. (Hides the confirm payment section
//and asks the buyer to confirm the reception of the package)
function AppState1(){
    document.getElementById("ConfirmPayment").style.display = "none";
    document.getElementById("ConfirmDelivery").style.display = "block";
    document.getElementById("PaymentStatus").innerText = "Paid.";
    console.log("State 1");
}

//Puts the app ui in state 1. (Only shows the payment and delivery status)
function AppState2(){
    document.getElementById("ConfirmDelivery").style.display = "none";    
    document.getElementById("PaymentStatus").innerText = "Paid.";
    document.getElementById("DeliveryStatus").innerText = "Delivered.";
    console.log("State 2");
}
