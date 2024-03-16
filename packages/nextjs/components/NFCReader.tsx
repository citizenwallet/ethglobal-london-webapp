"use client";

import React, { useCallback, useEffect, useState } from "react";

const Scan = ({ onChange }: { onChange: (event: NDEFReadingEvent) => any }) => {
  const [nfcAvailable, setNfcAvailable] = useState(false);
  const [scanning, setScanning] = useState(false);

  const startScanner = async () => {
    try {
      const ndef = new NDEFReader();
      console.log("Starting scanner...", ndef.scan);
      await ndef.scan();

      console.log("Scan started successfully.");
      ndef.onreadingerror = () => {
        console.log("Cannot read data from the NFC tag. Try another one?");
      };

      ndef.onreading = event => {
        console.log("NDEF message read.");
        onChange(event);
      };

      setScanning(true);
    } catch (error) {
      console.log(`Error! Scan failed to start: ${error}.`);
    }
  };

  const scan = useCallback(async () => {
    if ("NDEFReader" in window) {
      try {
        new NDEFReader();
        setNfcAvailable(true);
      } catch (error) {
        console.log(`Error! Scan failed to start: ${error}.`);
      }
    }
  }, []);

  useEffect(() => {
    scan();
  }, [scan]);

  return (
    <center>
      {nfcAvailable && !scanning && (
        <button className="btn btn-primary w-64 rounded-md" onClick={startScanner}>
          Start scanning
        </button>
      )}
      {!nfcAvailable && <button className="btn disabled btn-primary w-64 rounded-md">NFC not available</button>}
    </center>
  );
};

export default Scan;
