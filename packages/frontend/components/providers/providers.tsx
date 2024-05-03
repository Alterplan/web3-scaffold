"use client";

import * as React from "react";
import {
  RainbowKitProvider,
  getDefaultConfig,
  getDefaultWallets,
  lightTheme,
  darkTheme,
  Theme,
} from "@rainbow-me/rainbowkit";
import { ledgerWallet } from "@rainbow-me/rainbowkit/wallets";
import { mainnet, sepolia, foundry } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { ThemeProvider } from "./theme-provider";
import { useTheme } from "next-themes";

const { wallets } = getDefaultWallets();

const config = getDefaultConfig({
  appName: "Frontend Template",
  projectId: "62fbfb76dda863cba8a8ae63ffd4927a",
  wallets: [
    ...wallets,
    {
      groupName: "Other",
      wallets: [ledgerWallet],
    },
  ],
  chains: [
    mainnet,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true"
      ? [sepolia, foundry]
      : []),
  ],
  ssr: true,
});

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = React.useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  let rainbowTheme: Theme = lightTheme();
  if (localStorage.getItem("theme") == "dark") {
    rainbowTheme = darkTheme();
  }

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider theme={rainbowTheme}>
            {children}
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </ThemeProvider>
  );
}
