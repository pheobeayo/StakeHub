import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./init.js";
import "./assets/styles/index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { KryptoProvider } from "./context/KryptoContext.jsx";

const network = "testnet";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <MantineProvider
        theme={{
          fontFamily: "sans-serif",
          primaryColor: "violet",
          colors: {
            violet: [
              "#f2ebf7",
              "#d8c0e6",
              "#c5a2da",
              "#ab77c9",
              "#8134af",
              "#752f9f",
              "#471d60",
              "#36164a",
            ],
          },
        }}
      >
        <ThirdwebProvider
          activeChain={{
            // === Required information for connecting to the network === \\
            chainId: "0x128", // Chain ID of the network
            // Array of RPC URLs to use
            rpc: [`https://${network}.hashio.io/api`],

            // === Information for adding the network to your wallet (how it will appear for first time users) === \\
            // Information about the chains native currency (i.e. the currency that is used to pay for gas)
            nativeCurrency: { name: "HBAR", symbol: "ℏℏ", decimals: 18 },
            shortName: "Hbar", // Display value shown in the wallet UI
            slug: "hedera", // Display value shown in the wallet UI
            testnet: true, // Boolean indicating whether the chain is a testnet or mainnet
            chain: "Hedera Testnet", // Name of the network
            name: "Hedera Testnet", // Name of the network
            explorers: [`https://hashscan.io/${network}/`], //Array of blockExplorers url to use
          }}
        >
          <KryptoProvider>
            <App />
          </KryptoProvider>
        </ThirdwebProvider>
        <Notifications></Notifications>
      </MantineProvider>
    </Router>
  </React.StrictMode>
);
