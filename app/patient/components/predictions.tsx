"use client"
import React from "react";

export default function Predictions() {

  React.useEffect(() => {

  }, []);

  return (
    <div className="grid grid-cols-1 gap-2 mt-2 w-full">
        <div className="mx-auto w-full">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h1 className="text-xl font-semibold mb-4">
            Predictions
            </h1>
            <div className="bg-white rounded-lg shadow-md p-4 mb-4 flex items-center">
              <div className="w-1/6 flex items-center justify-center">
                <div className="bg-green-100 text-green-600 text-2xl font-bold p-2 rounded-lg h-24 flex items-center justify-center">
                93%
                </div>
              </div>
              <div className="w-4/6 px-4">
                <h2 className="text-lg font-semibold">
                Myocardial Infarction
                </h2>
                <p className="text-gray-600 flex items-center">
                <i className="fas fa-heartbeat mr-2">
                </i>
                Chest pain
                </p>
                <p className="text-gray-600 flex items-center">
                <i className="fas fa-arrow-down mr-2">
                </i>
                </p>
                <p className="text-green-600 flex items-center mt-2">
                <i className="fas fa-pills mr-2">
                </i>
                Start aspirin, perform nuclear stress test
                </p>
              </div>
              <div className="w-1/6 flex flex-col items-center mr-2">
                <div className="flex items-center">
                <div className="bg-gray-100 text-gray-600 text-sm p-1 rounded-lg m-2">
                  Troponin
                  <br/>
                  0.2 ng/mL
                </div>
                <img alt="ECG graph showing heart activity" className="rounded-lg" height="50" src="https://phire.techascent.com/img/chart.png" width="70"/>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 mb-4 flex items-center">
              <div className="w-1/6 flex items-center justify-center">
                <div className="bg-green-100 text-green-600 text-2xl font-bold p-2 rounded-lg h-24 flex items-center justify-center">
                93%
                </div>
              </div>
              <div className="w-4/6 px-4">
                <h2 className="text-lg font-semibold">
                Myocardial Infarction
                </h2>
                <p className="text-gray-600 flex items-center">
                <i className="fas fa-heartbeat mr-2">
                </i>
                Chest pain
                </p>
                <p className="text-gray-600 flex items-center">
                <i className="fas fa-arrow-down mr-2">
                </i>
                </p>
                <p className="text-green-600 flex items-center mt-2">
                <i className="fas fa-pills mr-2">
                </i>
                Start aspirin, perform nuclear stress test
                </p>
              </div>
              <div className="w-1/6 flex flex-col items-center mr-2">
                <div className="flex items-center">
                <div className="bg-gray-100 text-gray-600 text-sm p-1 rounded-lg m-2">
                  Troponin
                  <br/>
                  0.2 ng/mL
                </div>
                <img alt="ECG graph showing heart activity" className="rounded-lg" height="50" src="https://phire.techascent.com/img/chart.png" width="70"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
