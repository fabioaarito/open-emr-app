"use client"
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { patients } from "../utils/dummydb";

export default function Patient() {

  const searchParams = useSearchParams();
 
  const id = Number(searchParams.get('id'))
  const patient = patients.filter((patient : any) => patient.id === id)[0];
  console.log(patient)

  React.useEffect(() => {

  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px]  min-h-screen p-4 pb-20 gap-16 sm:p-8 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 sm:items-start">
        {patient.name}
      </main>
    </div>
  );
}
