"use client";

import * as React from "react";
import {
  type BaseError,
  useWaitForTransactionReceipt,
  useWriteContract,
  useChainId,
} from "wagmi";
import { counterAbi, counterAddress } from "@/lib/contracts/generated";
import { getContractAddress } from "@/lib/utils";
import { Button } from "../../ui/button";

export function CounterIncrement() {
  const { data: hash, error, isPending, writeContract } = useWriteContract();

  const contractAddress = getContractAddress(useChainId(), counterAddress);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    writeContract({
      address: contractAddress,
      abi: counterAbi,
      functionName: "increment",
      args: [],
    });
  }

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

  return (
    <form onSubmit={submit} className="">
      <Button
        disabled={isPending}
        type="submit"
        className={`${isPending ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        {isPending ? "Confirming..." : "Increment Counter"}
      </Button>
      {isConfirming && (
        <div className="mt-4 text-yellow-600">Waiting for confirmation...</div>
      )}
      {isConfirmed && (
        <div className="mt-4 text-green-600">Transaction confirmed.</div>
      )}
      {error && (
        <div className="mt-4 text-red-600">
          Error: {(error as BaseError).shortMessage || error.message}
        </div>
      )}
    </form>
  );
}
