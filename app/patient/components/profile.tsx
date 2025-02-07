"use client"
import { AudioLines, HeartPulse, Thermometer } from "lucide-react";
import React from "react";

export default function ProfileCard() {

  React.useEffect(() => {

  }, []);

  return (
    <div className="grid grid-cols-3 gap-3">
        {/* 1st box */}
        <div className="flex-row">
            <div className="flex items-center justify-center bg-gray-100">
                <div className="bg-white rounded-lg shadow-lg p-6 w-80">
                <div className="flex items-center mb-4">
                 <img alt="Portrait of a woman with blonde hair, wearing a white shirt, smiling and standing with arms crossed" className="w-16 h-16 rounded-full mr-4" height="100" src="https://storage.googleapis.com/a1aa/image/MtTX23Fn-oFtpKDJCmllqbUYCRPR4LhWjxglViEo6Cw.jpg" width="100"/>
                <div>
                <h2 className="text-xl font-bold">
                    DOE, Jane
                </h2>
                <p className="text-gray-600">
                    34 y.o. F (1/1/1990)
                </p>
                </div>
                </div>
                <div className="flex flex-col items-center">
                <div className="relative w-40 h-32">
                <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 36 36">
                    <path className="text-gray-200" d="M18 2.0845
                                    a 15.9155 15.9155 0 0 1 0 31.831
                                    a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-width="2.8">
                    </path>
                    <path className="text-red-500" d="M18 2.0845
                                    a 15.9155 15.9155 0 0 1 0 31.831" fill="none" stroke="currentColor" stroke-dasharray="15, 100" stroke-width="2.8">
                    </path>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-red-500">
                    15%
                    </span>
                </div>
                </div>

                </div>
                </div>
            </div>
        </div>
        
        {/* 2nd box */}
        <div className="flex-row">
            <div className="flex items-center justify-center">
                <div className="flex bg-white rounded-lg shadow-lg p-6 w-80 justify-center items-center flex-row">
                    <div className="relative inline-block">
                        <img alt="Silhouette of a human body" className="w-14 mx-auto" height="100" src="https://phire.techascent.com/img/body-light.svg" width="100"/>
                        <div className="absolute top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                        </div>
                        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 mt-2">
                            <div className="flex items-center justify-center space-x-2 bg-yellow-100 rounded-full py-2 px-4">
                                <Thermometer/>
                                <span className="text-yellow-500 font-semibold text-xs">
                                99
                                </span>
                            </div>
                            <div className="flex items-center justify-center space-x-2 bg-green-100 rounded-full py-2 px-4">
                                <HeartPulse />
                                <span className="text-green-500 font-semibold text-s">
                                70
                                </span>
                            </div>
                            <div className="flex items-center justify-center space-x-2 bg-red-100 rounded-full py-2 px-4">
                                <HeartPulse />
                                <span className="text-red-500 font-semibold text-x">
                                18
                                </span>
                            </div>
                            <div className="flex items-center justify-center space-x-2 bg-yellow-100 rounded-full py-2 px-4">
                                <AudioLines />
                                <span className="text-yellow-500 font-semibold text-xs">
                                10/60
                                </span>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </div>


        {/* 3rd box */}
        <div className="flex items-center justify-center bg-gray-100">

        </div>
    </div>
  );
}