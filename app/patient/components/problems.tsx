"use client"
import React from "react";

export default function Problems() {

  React.useEffect(() => {

  }, []);

  return (
    <div className="flex-row">
        
        <div className="bg-white p-6 rounded-lg shadow-md w-full">
          <h1 className="text-xl font-bold mb-4 w-full">Problems & Active Medications</h1>
          <div className="space-y-4">
              <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center">
                      <i className="fas fa-circle text-red-500 mr-2"></i>
                      <span className="text-red-500 font-medium">⬤ Asthma</span>
                  </div>
                  <span className="text-gray-700">Albuterol</span>
              </div>
              <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center">
                      <i className="fas fa-circle text-yellow-500 mr-2"></i>
                      <span className="text-yellow-500 font-medium">⬤ Crohn’s Disease</span>
                  </div>
                  <div className="text-gray-700 text-right">
                      <div>Adalimumab</div>
                      <div>Prednisone</div>
                  </div>
              </div>
              <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center">
                      <i className="fas fa-circle text-green-500 mr-2"></i>
                      <span className="text-green-500 font-medium">⬤ Rheumatic Fever</span>
                  </div>
                  <span className="text-gray-700">-</span>
              </div>
              <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center">
                      <i className="fas fa-circle text-green-500 mr-2"></i>
                      <span className="text-green-500 font-medium">⬤ Goodpasture’s Syndrome</span>
                  </div>
                  <span className="text-gray-700">-</span>
              </div>
          </div>
      </div>
        
    </div>
  );
}
