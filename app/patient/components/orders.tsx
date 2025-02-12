"use client"
import React from "react";

export default function Orders() {

  React.useEffect(() => {

  }, []);

  return (
    <div className="grid grid-cols-1 gap-1">
        <div className="mx-auto bg-white rounded-lg shadow-md w-full">
          <div className="border-b border-gray-200 px-4 py-2">
              <h2 className="text-lg font-semibold">Non-medication Orders</h2>
              <div className="flex mt-2">
                  <button id="patient-tab" className="text-black font-medium border-b-2 border-black pb-1 mr-4" onClick={() => {}}>Patient</button>
                  <button id="nurse-tab" className="text-gray-500 font-medium pb-1" onClick={() => {}}>Nurse</button>
              </div>
          </div>
          <div id="patient-content" className="p-4 space-y-4">
              <div className="bg-white rounded-lg shadow p-4 flex justify-between items-center">
                  <div>
                      <p className="text-gray-500 text-sm">Activity</p>
                      <p className="text-black text-lg font-medium">Up</p>
                  </div>
                  <p className="text-gray-500 text-sm">Ad Lib</p>
              </div>
              <div className="bg-white rounded-lg shadow p-4 flex justify-between items-center">
                  <div>
                      <p className="text-gray-500 text-sm">Diet</p>
                      <p className="text-black text-lg font-medium">CHO Restricted</p>
                  </div>
                  <p className="text-gray-500 text-sm">Q Meal</p>
              </div>
              <div className="bg-white rounded-lg shadow p-4 flex justify-between items-center">
                  <div>
                      <p className="text-gray-500 text-sm">Restrict fluids</p>
                      <p className="text-black text-lg font-medium">1 L</p>
                  </div>
                  <p className="text-gray-500 text-sm">Daily</p>
              </div>
          </div>
          <div id="nurse-content" className="p-4 space-y-4 hidden">

          </div>
      </div>

    </div>
  );
}
