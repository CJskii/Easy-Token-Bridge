import { useSwingSdk } from "components/swing/sdk/SwingSdkProvider";
import SwingSDK from "@swing.xyz/sdk";
import { useEffect, useState } from "react";
import { useWalletClient } from "wagmi";
import { TransferParams } from "@swing.xyz/sdk";

const Swap = () => {
  const walletClient = useWalletClient();
  const sdk = useSwingSdk()[0];

  const [quote, setQuote] = useState<any>();
  const [transferParams, setTransferParams] = useState<TransferParams>({
    fromChain: "ethereum", // Source chain
    fromToken: "USDC", // Source token
    fromUserAddress: "0x0", // Source chain wallet address

    amount: "100", // Amount to transfer in token decimals

    toChain: "polygon", // Destination chain
    toToken: "USDC", // Destination token
    toUserAddress: "0x0", // Ending chain wallet address
  });

  useEffect(() => {
    const swingSDK = new SwingSDK();
    console.log("walletClient", walletClient);

    if (!walletClient.data?.transport || !walletClient.data.chain.id) {
      return;
    }
    swingSDK.wallet.connect(
      walletClient.data.transport,
      walletClient.data.chain.id as any,
    );
  }, []);

  const getQuote = async () => {
    const quote = await sdk.getQuote(transferParams);
    console.log("quote", quote);
    setQuote(quote);
  };

  return (
    <>
      <h1>Swing SDK</h1>
      <p>From: {transferParams.fromChain}</p>
      <p>To: {transferParams.toChain}</p>
      <p>From token: {transferParams.fromToken}</p>
      <p>To token: {transferParams.toToken}</p>
      <input
        type="number"
        value={transferParams.amount}
        onChange={(e) => {
          setTransferParams({
            ...transferParams,
            amount: e.target.value,
          });
        }}
      />

      {quote && (
        <div className="flex flex-col items-center justify-center">
          <h1>Quote</h1>
          <p>Routes</p>
          <div className="">
            {quote.routes.map((route: any, index: number) => (
              <div key={index}>
                <p>Integration: {route.quote.integration.toUpperCase()} </p>
                <p>Gas USD ${route.gasUSD}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <button className="btn" onClick={getQuote}>
        Get quote
      </button>
    </>
  );
};

export default Swap;
