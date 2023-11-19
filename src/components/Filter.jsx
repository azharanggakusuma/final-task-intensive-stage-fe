// src/components/Filter.js
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Filter = ({ onSearch }) => {
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState(null);

  const handleSearch = () => {
    const searchCriteria = {
      destination,
      startDate,
    };
    onSearch(searchCriteria);
  };

  return (
    <div
      className="relative mx-auto flex flex-col justify-between items-center w-3/5 p-4 bg-white shadow-md rounded-md md:flex-row md:items-center lg:-mt-[90px] md:-mt-[90px]"
      style={{ zIndex: 1 }}
    >
      <div className="flex flex-col items-start mb-4 md:mb-0 md:flex-row md:space-x-8 w-full">
        <div className="w-full md:w-2/5 pr-0 md:pr-6">
          <label className="text-lg font-medium text-gray-700 mb-2">
            Tujuan
          </label>
          <input
            type="text"
            className="w-full p-2 border rounded-md"
            placeholder="Semua Tempat"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>
        <div className="w-full md:w-2/5 pr-0 md:pr-6 mt-4 md:mt-0">
          <label className="text-lg font-medium text-gray-700 mb-2">
            Jadwal
          </label>
          <div className="w-full p-2 border rounded-md">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="dd/MM/yyyy"
              className="w-full"
              placeholderText="Kapan Saja"
            />
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/5 mt-4 md:mt-0">
        <button
          className="bg-primary text-white font-semibold lg:px-12 lg:py-5 md:px-12 md:py-5 hover:bg-primary lg:text-lg sm:text-sm rounded w-full"
          onClick={handleSearch}
        >
          Cari
        </button>
      </div>
    </div>
  );
};

export default Filter;
