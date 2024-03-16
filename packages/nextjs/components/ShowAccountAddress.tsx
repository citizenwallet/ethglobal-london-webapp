"use client";

import QRCode from "react-qr-code";
import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";
import { getHash } from "~~/utils/crypto";

export default function ShowAccountAddress({ serialNumber }: { serialNumber: string }) {
  const hash = getHash(
    serialNumber,
    BigInt(process.env.NEXT_PUBLIC_CHAIN_ID || 0),
    process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || "",
  );

  const { data: accountAddress } = useScaffoldContractRead({
    contractName: "CardManager",
    functionName: "getCardAddress",
    args: [hash as `0x${string}`],
  });

  return (
    <div>
      <h2>Account Address</h2>
      <p>{accountAddress}</p>
      {accountAddress && <QRCode value={accountAddress} />}
    </div>
  );
}
