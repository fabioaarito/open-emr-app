"use client"
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";

export default function ProfileCard() {

  const searchParams = useSearchParams();

  React.useEffect(() => {

  }, []);

  return (
    <div className="grid grid-cols-3 gap-3 bg-white divide-x-2">
        <div> <p className="m-1">Health Status</p></div>
        <div> <p className="m-1">Body</p></div>
        <div> <p className="m-1">Details</p></div>
    </div>
  );
}
