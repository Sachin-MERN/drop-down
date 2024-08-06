"use client";

import React, { useState } from 'react';

const DropDown = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");

  const countryData = {
    india: ['Maharashtra', 'Punjab', 'Up', 'Ap'],
    australia: ['Victoria', 'New South Wales', 'Queensland', 'Tasmania'],
    unitedKingdom: ['Scotland', 'England', 'Wales', 'Northern Ireland'],
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <div>
        <label htmlFor='country' className="block text-xl font-bold text-yellow-500">
          Country
        </label>
        <select
          id='country'
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          onChange={(e) => setSelectedCountry(e.target.value)}
          value={selectedCountry}
        >
          <option value=''>Select a country</option>
          {Object.keys(countryData).map((countryName, index) => (
            <option key={index} value={countryName}>
              {countryName.charAt(0).toUpperCase() + countryName.slice(1)}
            </option>
          ))}
        </select>
      </div>
      {selectedCountry && (
        <div className="transition-opacity duration-300 ease-in-out opacity-100">
          <label htmlFor='state' className="block text-xl font-bold text-orange-500">
            State
          </label>
          <select
            id='state'
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
          >
            <option value=''>Select a state</option>
            {countryData[selectedCountry].map((stateName, index) => (
              <option key={index} value={stateName}>
                {stateName}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default DropDown;
