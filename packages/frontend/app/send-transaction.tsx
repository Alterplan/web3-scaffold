"use client";

import * as React from "react";
import {
  type BaseError,
  useSendTransaction,
  useWaitForTransactionReceipt,
} from "wagmi";
import { parseEther } from "viem";
import { Button } from "@/components/ui/button";

export function SendTransaction() {
  const {
    data: hash,
    error,
    isPending,
    sendTransaction,
  } = useSendTransaction();

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const to = formData.get("address") as `0x${string}`;
    const value = formData.get("value") as string;
    sendTransaction({ to, value: parseEther(value) });
  }

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

  return (
    <form
      onSubmit={submit}
      className="shadow-md rounded px-8 pt-6 pb-8 mb-4 space-y-6 w-full mx-auto"
    >
      <h1 className="font-bold">Transaction</h1>
      <input
        name="address"
        placeholder="0xA0Cf…251e"
        required
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <input
        name="value"
        placeholder="0.05"
        required
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-4"
      />
      <Button
        disabled={isPending}
        type="submit"
        className={`${isPending ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        {isPending ? "Confirming..." : "Send"}
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
