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
var buyer;
var seller;
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

//Calls the shipped() function of the contract
function ConfirmShipment(){
    Contract.shipped().then(function(transaction){
        AppState2();
    });
}

//Calls the confirmDelivery() function of the contract
function Deliver(){
    Contract.confirmDelivery().then(function(transaction){
        AppState3();
    });
}

//Get, from the contract, its current state
//and update the app state accordingly
//this function is called on page load
function GetAppStateOnPageLoad(){
    Contract.currentState().then(function(result){
        switch(result){
            case 0:
                GetAmountToPay();
                AppState0();
                break;
            case 1:
                AppState1();
                break;
            case 2:
                AppState2();
                break;
            case 3:
                AppState3();
                break;
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

function GetBuyerAndSeller(){
    Contract.buyer().then(function(result){
        buyer = result;
    });

    Contract.seller().then(function(result){
        seller = result;
    });
}

//Given an address, initialize a contract object the references
//the contract on the blockchain
function initContract(address){
    Contract = new ethers.Contract(address, abi, signer);
    document.getElementById("contractDeploy").style.display = "none";

    GetBuyerAndSeller();
    //TODO: WATCH EVENTS
    GetAppStateOnPageLoad();
}

///////////////////////////////
// Web App Related Functions //
///////////////////////////////

var account;

function initApp(){
    var hash = location.hash;
    //If the url, after the hashtag contains a contract address
    if(hash.length == 43){
        //initialize a contract object that references the ethereum smart contract
        initContract(hash.substring(1));
    }
    
    //get the current account
    provider.listAccounts().then(function(accounts) {
        account = accounts[0];
    });
}

//Append the contract address to the contract URL
function UpdateAppUrl(contractAddress) {
    location.replace(location.origin + "#" +contractAddress);
}

//Puts the app ui in state 0. (asks the buyer to confirm the payment)
function AppState0(){
    if(account == buyer){
        document.getElementById("ConfirmPayment").style.display = "block";
    }
    console.log("State 0");
}

//Puts the app ui in state 1. (Hides the confirm payment section
//and asks the buyer to confirm the reception of the package)
function AppState1(){
    document.getElementById("ConfirmPayment").style.display = "none";

    if(account == seller){
       document.getElementById("ConfirmShipment").style.display = "block"; 
    }
    
    document.getElementById("PaymentStatus").innerText = "Held in escrow.";
    console.log("State 1");
}

//Puts the app ui in state 2. (Only shows the payment and delivery status)
function AppState2(){
    document.getElementById("ConfirmShipment").style.display = "none";  
    
    if(account == buyer){
        document.getElementById("ConfirmDelivery").style.display = "block";
    }

    document.getElementById("PaymentStatus").innerText = "Held in escrow.";  
    document.getElementById("DeliveryStatus").innerText = "Not Delivered.";
    console.log("State 2");
}

//Puts the app ui in state 2. (Only shows the payment and delivery status)
function AppState3(){
    document.getElementById("ConfirmDelivery").style.display = "none";
    document.getElementById("PaymentStatus").innerText = "Paid.";    
    document.getElementById("DeliveryStatus").innerText = "Delivered.";
    console.log("State 3");
}
