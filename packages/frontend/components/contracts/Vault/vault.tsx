"use client";

import * as React from "react";
import { toast } from "@/components/ui/use-toast";
import { VaultBalance } from "./vault-balance";
import { VaultDeposit } from "./vault-deposit";
import { VaultWithdraw } from "./vault-withdraw";
import { useChainId, useWatchContractEvent } from "wagmi";
import { vaultAbi, vaultAddress } from "@/lib/contracts/generated";
import { getContractAddress } from "@/lib/utils";
import { formatEther } from "viem";

export function Vault() {
  const contractAddress = getContractAddress(useChainId(), vaultAddress);

  useWatchContractEvent({
    address: contractAddress,
    abi: vaultAbi,
    eventName: "Deposit",
    batch: false,
    onLogs(logs) {
      const {
        args: { account, amount = BigInt(0) },
      } = logs[0];

      toast({
        title: "New deposit!",
        description: (
          <div>
            {account} deposited {formatEther(amount)} ETH
          </div>
        ),
      });
    },
  });

  useWatchContractEvent({
    address: contractAddress,
    abi: vaultAbi,
    eventName: "Withdraw",
    batch: false,
    onLogs(logs) {
      const {
        args: { account, amount = BigInt(0) },
      } = logs[0];

      toast({
        title: "New withdraw!",
        description: (
          <div>
            {account} withdrew {formatEther(amount)} ETH
          </div>
        ),
      });
    },
  });

  return (
    <div className="shadow-md rounded px-8 pt-6 pb-8 mb-4 space-y-6 w-full mx-auto">
      <h1 className="font-bold">Vault</h1>
      <VaultBalance />
      <VaultDeposit />
      <VaultWithdraw />
    </div>
  );
}
