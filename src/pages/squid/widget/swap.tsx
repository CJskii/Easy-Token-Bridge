import MainnetSwap from "components/squid/widget/MainnetSwap";
import TestnetSwap from "components/squid/widget/TestnetSwap";
import { useState } from "react";

const SquidSwap = () => {
  const [env, setEnv] = useState("mainnet");

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      {env === "mainnet" ? (
        <>
          {" "}
          <button className="btn" onClick={() => setEnv("testnet")}>
            Switch to testnet
          </button>
          <MainnetSwap />
        </>
      ) : (
        <>
          <button className="btn" onClick={() => setEnv("mainnet")}>
            Switch to mainnet
          </button>
          <TestnetSwap />
        </>
      )}
    </div>
  );
};

export default SquidSwap;
