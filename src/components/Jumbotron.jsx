// src/components/Jumbotron.js
import React from "react";

// Import gambar jumbotron
import jumbotronImage from "../assets/img/jumbotron.png";

const Jumbotron = () => {
  return (
    <div className="relative h-1/4 md:h-1/4 flex items-center">
      <img
        src={jumbotronImage}
        alt="Jumbotron"
        className="object-cover w-full h-full"
      />

      {/* Teks di dalam gambar */}
      <div className="absolute text-white text-left ml-20 p-8">
        <h1 className="text-4xl font-bold mb-4">NEVER STOP</h1>
        <p className="text-4xl font-bold">EXPLORING THE WORLD</p>
      </div>
    </div>
  );
};

export default Jumbotron;
