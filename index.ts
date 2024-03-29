import { createPublicClient, webSocket } from "viem";
import { base } from "viem/chains";

export const publicClient = createPublicClient({
  chain: base,
  transport: webSocket("ws://IP:PORT"),
});

const unwatch = publicClient.watchPendingTransactions({
  onTransactions: (hashes) => console.log(hashes),
});
