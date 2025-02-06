"use client"
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { patients } from "../utils/dummydb";
import ProfileCard from "./components/profile";
import Problems from "./components/problems";
import Recommendations from "./components/recommendations";
import Orders from "./components/orders";
import Laboratory from "./components/laboratory";
import Predictions from "./components/predictions";
import Diagnostics from "./components/diagnostics";
import Reports from "./components/reports";

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

        <div className="grid grid-cols-2 gap-2">
          <ProfileCard />
          <Problems />
          <Recommendations />
          <Orders />
          <Laboratory />
          <Predictions />
          <Diagnostics />
          <Reports />
        </div>

      </main>
    </div>
  );
}
