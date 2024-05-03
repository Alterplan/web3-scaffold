import { defineConfig } from "@wagmi/cli";
import { foundry } from "@wagmi/cli/plugins";

import * as fs from "fs";
import * as path from "path";

function exploreDirectory(directoryPath: string): {
  [key: string]: { [chainId: number]: string };
} {
  if (
    !fs.existsSync(directoryPath) ||
    !fs.lstatSync(directoryPath).isDirectory()
  ) {
    console.error(`Directory not found: ${directoryPath}`);
    return {};
  }

  const returnValues: { [key: string]: { [chainId: number]: string } } = {};

  const scriptDirectories = fs
    .readdirSync(directoryPath, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  scriptDirectories.forEach((scriptName) => {
    const scriptPath = path.join(directoryPath, scriptName);
    const chainIds = fs
      .readdirSync(scriptPath, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name);

    chainIds.forEach((chainId) => {
      const numericChainId = parseInt(chainId, 10); // Parse chainId as a number
      const runLatestPath = path.join(scriptPath, chainId, "run-latest.json");
      if (fs.existsSync(runLatestPath)) {
        const runLatestData = fs.readFileSync(runLatestPath, "utf-8");
        try {
          const runLatestJson = JSON.parse(runLatestData);
          for (const key in runLatestJson.returns) {
            if (
              runLatestJson.returns.hasOwnProperty(key) &&
              runLatestJson.returns[key].hasOwnProperty("value")
            ) {
              const internalType =
                runLatestJson.returns[key].internal_type.split(" ")[1];
              const capitalizedType =
                internalType.charAt(0).toUpperCase() + internalType.slice(1);
              if (!returnValues[capitalizedType]) {
                returnValues[capitalizedType] = {};
              }
              returnValues[capitalizedType][numericChainId] =
                runLatestJson.returns[key].value;
            }
          }
        } catch (error) {
          console.error(`Error parsing JSON file ${runLatestPath}: ${error}`);
        }
      } else {
        console.error(`File not found: ${runLatestPath}`);
      }
    });
  });

  return returnValues;
}

// Usage example
const directoryPath = "../contracts/broadcast";
const deployments = exploreDirectory(directoryPath);

console.log(deployments);

export default defineConfig({
  out: "lib/contracts/generated.ts",
  contracts: [],
  plugins: [
    foundry({
      project: "../contracts",
      deployments: deployments as any,
      exclude: [
        // the following patterns are excluded by default
        "Common.sol/**",
        "Components.sol/**",
        "Script.sol/**",
        "StdAssertions.sol/**",
        "StdInvariant.sol/**",
        "StdError.sol/**",
        "StdCheats.sol/**",
        "StdMath.sol/**",
        "StdJson.sol/**",
        "StdStorage.sol/**",
        "StdUtils.sol/**",
        "Vm.sol/**",
        "console.sol/**",
        "console2.sol/**",
        "test.sol/**",
        "**.s.sol/*.json",
        "**.t.sol/*.json",
        "MockERC**.sol/**",
      ],
    }),
  ],
});
