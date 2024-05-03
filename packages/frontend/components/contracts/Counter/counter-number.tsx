"use client";

import { counterAbi, counterAddress } from "@/lib/contracts/generated";
import { getContractAddress } from "@/lib/utils";

import { useChainId, useReadContract } from "wagmi";

export function CounterNumber() {
  const contractAddress = getContractAddress(useChainId(), counterAddress);

  const {
    data: number,
    error,
    isPending,
  } = useReadContract({
    abi: counterAbi,
    functionName: "number",
    address: contractAddress,
    query: {
      enabled: true,
      refetchInterval: 1000,
      refetchIntervalInBackground: true,
    },
  });

  if (isPending) return <div>Loading...</div>;

  if (error) return <div>Error: {error.shortMessage || error.message}</div>;

  return (
    <div>
      <div>Number: {number?.toString()}</div>
    </div>
  );
}
