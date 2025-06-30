import { defineChain } from "thirdweb";

// Define any custom chain using `defineChain`
export const bitrock = defineChain({
  chain: "marketcapy",
  name: "marketcapy",
  chainId: 586,
  rpc: ["https://fraa-flashbox-4646-rpc.a.stagenet.tanssi.network"], // Change this to an array
  nativeCurrency: {
    name: "CAPY",
    symbol: "CAPY",
    decimals: 18,
  },
  shortName: "marketcapy",
  testnet: false,
  slug: "capy",
});

export default bitrock;
