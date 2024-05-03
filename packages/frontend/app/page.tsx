import { ConnectButton } from "@rainbow-me/rainbowkit";
import { SendTransaction } from "./send-transaction";
import { Counter } from "@/components/contracts/Counter/counter";
import { Vault } from "@/components/contracts/Vault/vault";
import { ModeToggle } from "@/components/ui/mode-toggle";

function Page() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-end p-4 space-x-6">
        <ConnectButton />
        <ModeToggle />
      </div>
      <div className="flex flex-col w-full h-[calc(100vh-7rem)] justify-center items-center space-y-12">
        <div className="flex w-1/2 xl:w-1/3 text-center">
          <SendTransaction />
        </div>
        <div className="flex w-1/2 xl:w-1/3 text-center">
          <Counter />
        </div>
        <div className="flex w-1/2  xl:w-1/3 text-center">
          <Vault />
        </div>
      </div>
    </div>
  );
}

export default Page;
