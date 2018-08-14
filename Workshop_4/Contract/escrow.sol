pragma solidity ^0.4.19;

contract Escrow {

    enum State {AWAITING_PAYMENT, AWAITING_SHIPPING, AWAITING_DELIVERY, COMPLETE}

    State public currentState;  // will automatically take first state, don't need to define
    
    event Paid(
        address indexed _by,
        uint _value
    );

    event Shipped(
        address indexed _by,
        address indexed _to
    );

    event Delivered(
        address indexed _to
    );

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
        emit Paid(buyer, msg.value);
    }

    function shipped() sellerOnly inState(State.AWAITING_SHIPPING) public{    // payable allows function to accept money
        currentState = State.AWAITING_DELIVERY;
        emit Shipped(seller, buyer);
    }

    function confirmDelivery() buyerOnly inState(State.AWAITING_DELIVERY) public{
        seller.transfer(address(this).balance);
        currentState = State.COMPLETE;
        emit Delivered(buyer);
    }

}
