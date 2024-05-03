"use client";

import * as React from "react";
import {
  type BaseError,
  useWaitForTransactionReceipt,
  useWriteContract,
  useChainId,
} from "wagmi";
import { vaultAbi, vaultAddress } from "@/lib/contracts/generated";
import { getContractAddress } from "@/lib/utils";
import { parseEther } from "viem";
import { Button } from "../../ui/button";

export function VaultWithdraw() {
  const { data: hash, error, isPending, writeContract } = useWriteContract();

  const contractAddress = getContractAddress(useChainId(), vaultAddress);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const value = formData.get("value");

    if (!value) {
      return;
    }

    writeContract({
      address: contractAddress,
      abi: vaultAbi,
      functionName: "withdraw",
      args: [parseEther(value.toString())],
    });
  }

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

  return (
    <form onSubmit={submit}>
      <div className="flex items-center gap-4">
        <input
          id="value"
          type="number"
          name="value"
          min="0"
          max="100"
          step="0.0001"
          placeholder="0"
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <Button
          disabled={isPending}
          type="submit"
          className={`${isPending ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          {isPending ? "Confirming..." : "Withdraw"}
        </Button>
      </div>

      {hash && <div className="mt-4">Transaction Hash: {hash}</div>}
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
