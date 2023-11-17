// src/components/Filter.js
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Filter = ({ onSearch }) => {
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState(null);

  const handleSearch = () => {
    // Do something with the search criteria
    const searchCriteria = {
      destination,
      startDate,
    };
    onSearch(searchCriteria);
  };

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 p-6 bg-white shadow-md rounded-md mt-40">
      <div className="flex space-x-8 items-center">
        <div className="flex flex-col items-start flex-grow w-3/5 pr-6">
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
        <div className="flex flex-col items-start flex-grow w-3/5 pr-6">
          <label className="text-lg font-medium text-gray-700 mb-2">
            Jadwal
          </label>
          <div className="w-full p-2 border rounded-md">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="dd/MM/yyyy"
              className="w-full"
              placeholderText="Pilih Tanggal"
            />
          </div>
        </div>
        <div className="flex flex-col items-start flex-grow w-1/5">
          <button
            className="bg-primary text-white px-16 py-5 mt-2 hover:bg-primary text-lg"
            onClick={handleSearch}
          >
            Cari
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
