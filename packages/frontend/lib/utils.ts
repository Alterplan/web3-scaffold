import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getContractAddress(chain: number, contractAddressObj: any) {
  let contractAddress = contractAddressObj[31337];
  if (chain in contractAddressObj) {
    contractAddress =
      contractAddressObj[chain as keyof typeof contractAddressObj];
  }
  return contractAddress;
}
