"use client";

import React, { useState } from "react";
import Image from "next/image";
import NFCReader from "@/components/NFCReader";

interface Profile {
  user: {
    name: string;
    avatar: {
      fullUrl: string;
    };
  };
}

export default function Reader() {
  const [urlRecord, setUrlRecord] = useState("");
  const [profile, setProfile] = useState<Profile | null>(null);
  const [serialNumber, setSerialNumber] = useState("");

  const fetchProfile = async (profileId: string) => {
    const res = await fetch(`/api/getProfile/${profileId}`);
    const json = await res.json();
    console.log(">>> json", json);
    setProfile(json.profile);
  };

  const handleNFCData = ({ message, serialNumber }: { message: any; serialNumber: string }) => {
    setSerialNumber(serialNumber);
    const textDecoder = new TextDecoder();
    for (const record of message.records) {
      console.log("Record type:  " + record.recordType);
      console.log("MIME type:    " + record.mediaType);
      console.log("Record id:    " + record.id);
      console.log("Record data:    " + textDecoder.decode(record.data));
      if (record.recordType === "url") {
        const urlstr = textDecoder.decode(record.data);
        setUrlRecord(urlstr);
        const profileId = urlstr.substring(urlstr.lastIndexOf("/") + 1);
        fetchProfile(profileId);
      }
    }
  };

  return (
    <div>
      <h1>Read NFC tag</h1>
      <div>
        {profile && <h2>{profile.user.name}</h2>}
        {profile && profile.user.avatar && (
          <Image src={profile.user.avatar.fullUrl} alt="avatar" width="300" height="300" />
        )}
        <p>Serial Number: {serialNumber}</p>
        <p>
          URL: <a href={urlRecord}>{urlRecord}</a>
        </p>
      </div>
      <NFCReader onChange={handleNFCData} />
    </div>
  );
}
