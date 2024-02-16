/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useAddress, useDisconnect, useMetamask, useSigner } from "@thirdweb-dev/react";
import { createContext } from "react";

export const KryptoContext = createContext();

export const KryptoProvider = ({ children }) => {
    const connectMetaMask = useMetamask();
    const address = useAddress();
    const signer = useSigner(); 
    const disconnectWallet = useDisconnect();

  return <KryptoContext.Provider value={{connectMetaMask, signer,address, disconnectWallet}}>{children}</KryptoContext.Provider>;
};