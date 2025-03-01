"use client"
import React, { useState } from "react";


const SUBJECT_ID = 30163;
const URL =  "https://hapi.fhir.org/baseR4/MedicationStatement?_include=*&subject=";

export default function Home() {
  const [patientMedications, setPatientMedications] = useState([]);

  React.useEffect(() => {

    const fetchMedication = async (SUBJECT_ID: number) => {

    try {
      const response = await fetch(URL+SUBJECT_ID, {
        headers: {
          "Accept": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      console.log(json);

      setPatientMedications(json.entry)

    } catch (error) {
      console.error(error);
    }

    }

    fetchMedication(SUBJECT_ID);

  }, []);

  const renderMedicationsList = () => {
    return patientMedications.map((entry, index: number) => {
      console.log(entry);
      return (
        <div key={index}>
          {/* 
            // @ts-expect-error just for testing purposes */}
          {entry.resource.medicationCodeableConcept?.text}
        </div>
      )
    })
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px]  min-h-screen p-4 pb-20 gap-16 sm:p-8 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 sm:items-start">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Medications
          </h3>
          <div>
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
              {/* 
                // @ts-expect-error just for testing purposes */}
              {patientMedications.length > 0 && patientMedications[patientMedications.length-1].resource.name[0].given[0]}
            </h3>
            { patientMedications.length > 0 && renderMedicationsList()}
          </div>
      </main>
    </div>
  );
}
