"use client";

import { vaultAbi, vaultAddress } from "@/lib/contracts/generated";
import { getContractAddress } from "@/lib/utils";
import { formatEther } from "viem";

import { useAccount, useChainId, useReadContract } from "wagmi";

export function VaultBalance() {
  const { address: account, isConnected } = useAccount();

  const contractAddress = getContractAddress(useChainId(), vaultAddress);

  const {
    data: balance,
    error,
    isPending,
  } = useReadContract({
    account: account,
    abi: vaultAbi,
    functionName: "getBalance",
    address: contractAddress,
    query: {
      enabled: true,
      refetchInterval: 1000,
      refetchIntervalInBackground: true,
    },
  });

  if (isPending) return <div>Loading...</div>;

  if (isConnected && error)
    return <div>Error: {error.shortMessage || error.message}</div>;

  return (
    <div>
      <div>
        Balance:{" "}
        {isConnected && !error
          ? formatEther(balance) + " ETH"
          : "Not connected"}
      </div>
    </div>
  );
}
