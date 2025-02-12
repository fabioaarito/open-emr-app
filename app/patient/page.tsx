"use client"
import { useSearchParams } from "next/navigation";
import React, { Suspense } from "react";
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
  return (
    // You could have a loading skeleton as the `fallback` too
    <Suspense>
      <PatientComponent />
    </Suspense>
  )
}

 function PatientComponent() {

  const searchParams = useSearchParams();
 
  const id = Number(searchParams.get('id'))
  const patient = patients.filter((patient) => patient.id === id)[0];
  console.log(patient)

  React.useEffect(() => {

  }, []);

  return (
    <div className="grid sm:p-8 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-2 sm:items-start">
        <div className="grid grid-cols-3 gap-3">
          <div className="col-span-2">
            <ProfileCard patient={patient}/>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <Recommendations />
              <Orders />
            </div>
            <Predictions />
          </div>
          
          <div>
            <Problems />
            <Laboratory />
            <Reports />
            <Diagnostics />
          </div>
          
        </div>

      </main>
    </div>
  );
}
