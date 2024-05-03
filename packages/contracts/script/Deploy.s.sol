// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.25;

import {Counter} from "../src/Counter.sol";
import {Vault} from "../src/Vault.sol";

import {BaseScript} from "./Base.s.sol";

/// @dev See the Solidity Scripting tutorial: https://book.getfoundry.sh/tutorials/solidity-scripting
contract Deploy is BaseScript {
    function run() public broadcast returns (Counter counter, Vault vault) {
        counter = new Counter();
        vault = new Vault();
    }
}
