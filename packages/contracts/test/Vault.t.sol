// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.25;

import {Test, console} from "forge-std/Test.sol"; // Add the missing import statement for Vm
import {Vault, InsufficientBalanceError} from "../src/Vault.sol";

contract VaultTest is Test {
    Vault public vault;

    function setUp() public {
        vault = new Vault();
    }

    function test_Deposit() public {
        vault.deposit{value: 100}();
        assertEq(vault.getBalance(), 100);
        console.log("VaultTest.test_Deposit", vault.getBalance());
    }

    function test_Withdraw() public {
        vault.deposit{value: 100}();
        vault.withdraw(50);
        assertEq(vault.getBalance(), 50);
        console.log("VaultTest.test_Withdraw", vault.getBalance());
    }

    function test_GetBalance() public {
        vault.deposit{value: 100}();
        assertEq(vault.getBalance(), 100);
        console.log("VaultTest.test_GetBalance", vault.getBalance());
    }

    function test_Withdraw_InsufficientBalance() public {
        vault.deposit{value: 100}();

        vm.expectRevert(InsufficientBalanceError.selector);
        vault.withdraw(200);

        assertEq(vault.getBalance(), 100);
        console.log(
            "VaultTest.test_Withdraw_InsufficientBalance",
            vault.getBalance()
        );
    }

    // @dev: This is a fallback function that forwards all received Ether to the deposit function.
    receive() external payable {}
}
