"use client"
import React from "react";

export default function Recommendations() {

  React.useEffect(() => {

  }, []);

  return (
    <div className="grid grid-cols-1 gap-1 w-full">
        <div className="bg-white p-6 rounded-lg shadow-md w-full">
          <h2 className="text-xl font-bold mb-4">Recommendations</h2>
          <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm flex items-start space-x-3">
                  <span className="text-red-500 mt-1"><i className="fas fa-circle"></i></span>
                  <p className="text-gray-700">- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam euismod ut nunc at rutrum</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm flex items-start space-x-3">
                  <span className="text-red-500 mt-1"><i className="fas fa-circle"></i></span>
                  <p className="text-gray-700">- Maecenas commodo massa eros, eget tincidunt quam viverra non</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm flex items-start space-x-3">
                  <span className="text-yellow-500 mt-1"><i className="fas fa-circle"></i></span>
                  <p className="text-gray-700">- Integer lacinia, felis vel dignissim aliquet, magna tellus scelerisque ipsum</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm flex items-start space-x-3">
                  <span className="text-green-500 mt-1"><i className="fas fa-circle"></i></span>
                  <p className="text-gray-700">- Maecenas commodo massa eros, eget tincidunt quam viverra non</p>
              </div>
          </div>
      </div>
    </div>
  );
}
