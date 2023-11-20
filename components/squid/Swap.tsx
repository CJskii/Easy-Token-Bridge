import { SquidWidget } from "@0xsquid/widget";

const Swap = () => {
  return (
    <SquidWidget
      config={{
        integratorId: "swapper-swap-widget",
        companyName: "Squid",
        slippage: 1, // default slippage
        style: {
          neutralContent: "#9DA7B1",
          baseContent: "#FFFDFD",
          base100: "#434565",
          base200: "#202230",
          base300: "#161522",
          error: "#ED6A5E",
          warning: "#FFB155",
          success: "#62C555",
          primary: "#AB67CB",
          secondary: "#37394C",
          secondaryContent: "#B2BCD3",
          neutral: "#383A4C",
          roundedBtn: "24px",
          roundedBox: "20px",
          roundedDropDown: "0px",
          advanced: {
            transparentWidget: false,
          },
        },
        hideAnimations: true,
        infiniteApproval: true,
        apiUrl: "https://api.0xsquid.com",
        mainLogoUrl: "",

        priceImpactWarnings: {
          warning: 3,
          critical: 5,
        },
        initialFromChainId: 42161, // Arbitrum
        initialToChainId: 1284, // Moonbeam
        favTokens: [
          {
            address: "0x539bdE0d7Dbd336b79148AA742883198BBF60342", // Token address for MAGIC
            chainId: 42161, // Chain ID for Arbitrum
          },
          {
            address: "0x0E358838ce72d5e61E0018a2ffaC4bEC5F4c88d2", // Token address for STELLA
            chainId: 1284, // Chain ID for Moonbeam
          },
        ],
        defaultTokens: [
          {
            address: "0xd4d42F0b6DEF4CE0383636770eF773390d85c61A", // Token address for SUSHI
            chainId: 42161, // Chain ID for Arbitrum
          },
          {
            address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", // Token address for GLMR
            chainId: 1284, // Chain ID for Moonbeam
          },
        ],
      }}
    />
  );
};

export default Swap;
