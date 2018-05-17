pragma solidity ^0.4.19;

contract Escrow {

    enum State {AWAITING_PAYMENT, AWAITING_DELIVERY, COMPLETE}

    State public currentState;  // will automatically take first state, don't need to define

    address public buyer;  // "public" creates automatic getter function
    address public seller;

    constructor(address _buyer, address _seller) public{
        buyer = _buyer;
        seller = _seller;
    }

    function confirmPayment() payable public{    // payable allows function to accept money
        require(msg.sender == buyer);   // checks for particular condition, and fails if not true
        currentState = State.AWAITING_PAYMENT;
        currentState = State.AWAITING_DELIVERY;
    }

    function confirmDelivery() public{
        require(msg.sender == buyer);
        require(currentState == State.AWAITING_DELIVERY);
        seller.transfer(address(this).balance);
        currentState = State.COMPLETE;
    }

}
