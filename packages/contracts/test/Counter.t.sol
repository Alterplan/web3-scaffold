// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.25;

import {Test, console} from "forge-std/Test.sol";
import {Counter} from "../src/Counter.sol";

contract CounterTest is Test {
    Counter public counter;

    function setUp() public {
        counter = new Counter();
        counter.setNumber(0);
        console.log("CounterTest.setUp", counter.number());
    }

    function test_Increment() public {
        counter.increment();
        assertEq(counter.number(), 1);
        console.log("CounterTest.test_Increment", counter.number());
    }

    function testFuzz_SetNumber(uint256 x) public {
        counter.setNumber(x);
        assertEq(counter.number(), x);
        console.log("CounterTest.testFuzz_SetNumber", counter.number());
    }
}
