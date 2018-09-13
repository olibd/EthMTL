pragma solidity ^0.4.18;
library SafeAdd {
 /**
 * @dev Adds two numbers, reverts on overflow.
 */
 function add(uint256 a, uint256 b) internal pure returns (uint256) {
   uint256 c = a + b;
   require(c >= a);

   return c;
 }
}


contract SafeAddContract {
    using SafeAdd for uint;

    function add() public pure returns (uint256) {
        uint a = 3;
        return a.add(5); // returns 8
    }

    function add2() public pure returns (uint256) {
        return SafeAdd.add(3, 5); //returns 8
    }
}

contract UnSafeContract {
    using SafeAdd for uint256;

    function noOverflow() public pure returns (uint256) {
        uint256 a = 2;
        uint256 b = 255;
        return a**b;
    }
    
    function overflow() public pure returns (uint256) {
        uint256 a = 2;
        uint256 b = 256;
        return a**b;
    }
    
    function unsafeDivideByZero() public pure returns (uint256) {
        uint256 a = 3;
        uint256 b = 0;
        return a/b; //will fail and consume all gas, safe division wont
    }
}