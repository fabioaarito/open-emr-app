"use client"
import React from "react";

export default function Laboratory() {

  React.useEffect(() => {

  }, []);

  return (
    <div className="grid grid-cols-1 gap-1 bg-white mt-2">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-bold mb-4">Laboratory</h2>
          <div className="flex justify-center mb-4">
              <div className="flex space-x-2">
                  <div className="w-10 h-20 bg-yellow-500 rounded-t-lg"></div>
                  <div className="w-10 h-20 bg-yellow-500 rounded-t-lg"></div>
                  <div className="w-10 h-20 bg-yellow-500 rounded-t-lg"></div>
                  <div className="w-10 h-20 bg-green-500 rounded-t-lg"></div>
                  <div className="w-10 h-20 bg-red-500 rounded-t-lg"></div>
                  <div className="w-10 h-20 bg-red-500 rounded-t-lg"></div>
                  <div className="w-10 h-20 bg-red-500 rounded-t-lg"></div>
              </div>
          </div>
          <div className="overflow-x-auto">
              <table className="min-w-full text-center">
                  <thead>
                      <tr>
                          <th className="py-2"></th>
                          <th className="py-2">Aug</th>
                          <th className="py-2">Sep</th>
                          <th className="py-2">Oct</th>
                          <th className="py-2">Nov</th>
                          <th className="py-2">Dec</th>
                          <th className="py-2">Jan</th>
                          <th className="py-2">Feb</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td className="py-2 font-bold">RBC</td>
                          <td className="py-2 text-yellow-500">11</td>
                          <td className="py-2 text-yellow-500">15</td>
                          <td className="py-2 text-yellow-500">9</td>
                          <td className="py-2 text-yellow-500">14</td>
                          <td className="py-2 text-red-500">21</td>
                          <td className="py-2 text-red-500">20</td>
                          <td className="py-2 text-red-500">18</td>
                      </tr>
                      <tr className="bg-gray-100">
                          <td className="py-2 font-bold">Hgb</td>
                          <td className="py-2 text-yellow-500">9</td>
                          <td className="py-2 text-yellow-500">9</td>
                          <td className="py-2 text-green-500">8</td>
                          <td className="py-2 text-yellow-500">10</td>
                          <td className="py-2 text-red-500">11</td>
                          <td className="py-2 text-red-500">11</td>
                          <td className="py-2 text-yellow-500">9</td>
                      </tr>
                      <tr>
                          <td className="py-2 font-bold">Hct</td>
                          <td className="py-2 text-green-500">27</td>
                          <td className="py-2 text-green-500">27</td>
                          <td className="py-2 text-green-500">24</td>
                          <td className="py-2 text-green-500">30</td>
                          <td className="py-2 text-red-500">33</td>
                          <td className="py-2 text-red-500">33</td>
                          <td className="py-2 text-red-500">27</td>
                      </tr>
                      <tr className="bg-gray-100">
                          <td className="py-2 font-bold">MCV</td>
                          <td className="py-2 text-green-500">97</td>
                          <td className="py-2 text-green-500">98</td>
                          <td className="py-2 text-green-500">98</td>
                          <td className="py-2 text-green-500">97</td>
                          <td className="py-2 text-red-500">98</td>
                          <td className="py-2 text-red-500">98</td>
                          <td className="py-2 text-green-500">97</td>
                      </tr>
                      <tr>
                          <td className="py-2 font-bold">MCHC</td>
                          <td className="py-2 text-green-500">97</td>
                          <td className="py-2 text-green-500">97</td>
                          <td className="py-2 text-green-500">98</td>
                          <td className="py-2 text-green-500">97</td>
                          <td className="py-2 text-red-500">98</td>
                          <td className="py-2 text-red-500">98</td>
                          <td className="py-2 text-green-500">97</td>
                      </tr>
                      <tr className="bg-gray-100">
                          <td className="py-2 font-bold">RDW</td>
                          <td className="py-2 text-green-500">97</td>
                          <td className="py-2 text-green-500">98</td>
                          <td className="py-2 text-green-500">98</td>
                          <td className="py-2 text-green-500">97</td>
                          <td className="py-2 text-red-500">98</td>
                          <td className="py-2 text-red-500">98</td>
                          <td className="py-2 text-green-500">97</td>
                      </tr>
                  </tbody>
              </table>
          </div>
      </div>
    </div>
  );
}
