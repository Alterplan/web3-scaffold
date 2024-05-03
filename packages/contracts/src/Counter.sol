// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.25;

contract Counter {
    uint256 public number;

    event NumberSet(uint256 number);

    function setNumber(uint256 newNumber) public {
        number = newNumber;
        emit NumberSet(newNumber);
    }

    function increment() public {
        number++;
        emit NumberSet(number);
    }
}
