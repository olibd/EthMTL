pragma solidity ^0.4.19;

contract Escrow {

    enum State {AWAITING_PAYMENT, AWAITING_SHIPPING, AWAITING_DELIVERY, COMPLETE}

    State public currentState;  // will automatically take first state, don't need to define

    modifier buyerOnly() {
        require(msg.sender == buyer);   // checks for particular condition, and fails if not true
        _;
    }

    modifier sellerOnly() {
        require(msg.sender == seller);   // checks for particular condition, and fails if not true
        _;
    }

    modifier inState(State expectedState) {
        require(currentState == expectedState);
        _;
    }

    //TODO: ADD EVENTS

    address public buyer;  // "public" creates automatic getter function
    address public seller;
    uint public amount;

    constructor(address _buyer, address _seller, uint _amount) public {
        buyer = _buyer;
        seller = _seller;
        amount = _amount;
    }

    function confirmPayment() buyerOnly inState(State.AWAITING_PAYMENT) payable public{    // payable allows function to accept money
        require(amount == msg.value);
        currentState = State.AWAITING_SHIPPING;
    }

    function shipped() sellerOnly inState(State.AWAITING_SHIPPING) public{    // payable allows function to accept money
        currentState = State.AWAITING_DELIVERY;
    }

    function confirmDelivery() buyerOnly inState(State.AWAITING_DELIVERY) public{
        seller.transfer(address(this).balance);
        currentState = State.COMPLETE;
    }

}
