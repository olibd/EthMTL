var provider;
var signer;

//Verify that there is a web provider present in the browser (like metamask)
//and load the app
window.addEventListener("load", function(){
    if(typeof web3 !== 'undefined'){
        //
        initApp();
    }else{
        console.log("no web3.");
    }
});

var Contract;
var amount;

function Deploy(){
    //
}

//Calls the confirmPayment() function of the contract
function Pay(){
    //
}

//Calls the confirmDelivery() function of the contract
function Deliver(){
    //
}

//Get, from the contract, its current state
//and update the app state accordingly
//this function is called on page load
function GetAppStateOnPageLoad(){
    //
}

//Get from the contract the amount the seller has to pay
function GetAmountToPay(){
    //
}

//Given an address, initialize a contract object the references
//the contract on the blockchain
function initContract(address){
    //
    document.getElementById("contractDeploy").style.display = "none";
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
        GetAppStateOnPageLoad();
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
