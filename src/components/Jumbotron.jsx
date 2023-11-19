// src/components/Jumbotron.js
import React from "react";

// Import gambar jumbotron
import jumbotronImage from "../assets/img/jumbotron.png";

const Jumbotron = () => {
  return (
    <div className="relative h-1/4 md:h-1/4 flex items-center mb-10">
      <img
        src={jumbotronImage}
        alt="Jumbotron"
        className="object-cover w-full lg:h-full"
      />

      {/* Teks di dalam gambar */}
      <div className="absolute text-white lg:text-left lg:ml-20 md:text-left md:ml-20 p-8">
        <h1 className="lg:text-4xl md:text-4xl sm:text-lg font-bold mb-4">
          NEVER STOP
        </h1>
        <p className="lg:text-4xl md:text-4xl sm:text-lg font-bold">
          EXPLORING THE WORLD
        </p>
      </div>
    </div>
  );
};

export default Jumbotron;
