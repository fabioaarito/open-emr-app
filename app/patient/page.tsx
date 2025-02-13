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
    <div className="container p-2">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* <!-- First Column (spans 2 columns) --> */}
        <ProfileCard patient={patient}/>
        {/* <!-- Second Column --> */}
        <div className="">
          <Problems />
        </div>
        {/* <!-- Third Cell with 2 components inside --> */}
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Recommendations />
          <Orders />
        </div>
        {/* <!-- Fourth Cell --> */}
        <div className="">
          <Laboratory />
        </div>
        {/* <!-- Fifth Cell --> */}
        <div className="md:col-span-2">
          <Predictions />
        </div>
        {/* <!-- Sixth Cell --> */}
        <div className="">
          <Diagnostics />
          <Reports />
        </div>
      </div>
    </div>
  );
}
