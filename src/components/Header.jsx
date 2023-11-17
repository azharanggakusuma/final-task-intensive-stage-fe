// src/components/Header.js
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import Container from "./Container";
import Jumbotron from "./Jumbotron";
import Filter from "./Filter";

// Import gambar logo
import logo from "../assets/img/logo.png";

const Header = () => {
  const location = useLocation();

  return (
    <div>
      {/* Navbar */}
      <header className="bg-white p-4">
        <Container>
          <div className="container mx-auto flex justify-between items-center">
            {/* Menu kiri */}
            <div className="flex items-center space-x-4">
              <Link
                to="/"
                className={`text-gray-800 hover:text-primary ${
                  location.pathname === "/" && "border-b-2 border-pink-500 mb-1"
                }`}
              >
                Home
              </Link>
              <Link
                to="/destinations"
                className={`text-gray-800 hover:text-primary ${
                  location.pathname === "/destinations" &&
                  "border-b-2 border-pink-500 mb-1"
                }`}
              >
                Destinations
              </Link>
              <FaSearch className="text-gray-800 cursor-pointer hover:text-primary" />
            </div>

            {/* Logo di tengah */}
            <Link to="/" className="text-2xl font-bold text-gray-800">
              {/* Ganti teks dengan gambar logo */}
              <img src={logo} alt="Logo" className="h-6" />
            </Link>

            {/* Menu kanan */}
            <div className="flex items-center space-x-4">
              <Link
                to="/login"
                className="bg-secondary text-primary font-semibold px-4 py-1.5 rounded text-sm hover:bg-primary hover:text-white"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-primary text-white font-semibold px-3 py-1.5 rounded text-sm hover:bg-secondary hover:text-primary"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </Container>
      </header>

      <Jumbotron />
      <Filter
        onSearch={(searchCriteria) =>
          console.log("Search Criteria:", searchCriteria)
        }
      />
    </div>
  );
};

export default Header;
