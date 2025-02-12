"use client"
import React from "react";

export default function Reports() {

  React.useEffect(() => {

  }, []);

  return (
    <div className="grid grid-cols-1 gap-1 mt-2">
      <div className="mx-auto bg-white p-6 rounded-lg shadow w-full">
        <h1 className="text-xl font-bold mb-4">Reports</h1>
        <div className="bg-white p-4 rounded-lg shadow mb-4 flex justify-between items-center">
            <div>
                <p className="font-semibold">Progress Note</p>
                <p className="text-gray-500">Dr. Johnson</p>
            </div>
            <p className="text-gray-500">11/09/23</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow mb-4 flex justify-between items-center">
            <div>
                <p className="font-semibold">Consult Note</p>
                <p className="text-gray-500">Dr. Johnson</p>
            </div>
            <p className="text-gray-500">11/09/23</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow mb-4 flex justify-between items-center">
            <div>
                <p className="font-semibold">Progress Note</p>
                <p className="text-gray-500">Dr. Johnson</p>
            </div>
            <p className="text-gray-500">11/09/23</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow mb-4 flex justify-between items-center">
            <div>
                <p className="font-semibold">Progress Note</p>
                <p className="text-gray-500">Dr. Johnson</p>
            </div>
            <p className="text-gray-500">11/09/23</p>
        </div>
      </div>
    </div>
  );
}
