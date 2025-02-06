"use client"
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";

export default function Reports() {

  const searchParams = useSearchParams();

  React.useEffect(() => {

  }, []);

  return (
    <div className="grid grid-cols-1 gap-1 bg-white">
        <div className="">Reports</div>
    </div>
  );
}
