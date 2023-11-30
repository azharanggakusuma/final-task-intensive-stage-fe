// src/components/Header.js
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaSearch, FaBars } from "react-icons/fa";
import Container from "./Container";
import logo from "../assets/img/logo.png";
import usersData from "../users.json"; // Sesuaikan dengan path yang benar

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Menggunakan useNavigate untuk navigasi
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isAuthenticated = false; // Ganti dengan logika otentikasi yang sesuai

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    // Lakukan aksi logout, seperti menghapus token atau membersihkan data sesi
    console.log("Logout successful!");
  };

  return (
    <div>
      {/* Navbar */}
      <header className="bg-white p-4 hidden md:block">
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
              <img src={logo} alt="Logo" className="h-6" />
            </Link>

            {/* Menu kanan */}
            <div className="flex items-center space-x-4">
              {isAuthenticated ? (
                <button
                  onClick={handleLogout}
                  className="bg-primary text-white font-semibold px-3 py-1.5 rounded text-sm hover:bg-secondary hover:text-primary"
                >
                  Logout
                </button>
              ) : (
                <>
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
                </>
              )}
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Header */}
      <div className="lg:hidden md:hidden bg-white p-4">
        <div className="flex justify-between items-center">
          <FaSearch className="text-gray-800 cursor-pointer hover:text-primary" />

          <Link to="/" className="text-2xl font-bold text-gray-800">
            <img src={logo} alt="Logo" className="h-6" />
          </Link>

          <FaBars
            className="text-gray-800 cursor-pointer hover:text-primary"
            onClick={handleMenuToggle}
          />
        </div>
      </div>

      {/* Hamburger Menu */}
      <div
        className={`transition-all duration-300 ${
          isMenuOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="text-center">
          <Link to="/" className="block text-gray-800 hover:text-primary py-2">
            Home
          </Link>
          <Link
            to="/destinations"
            className="block text-gray-800 hover:text-primary py-2 mb-3"
          >
            Destinations
          </Link>

          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="bg-primary text-white font-semibold px-3 py-1.5 w-48 rounded text-sm hover:bg-secondary hover:text-primary inline-block mx-2"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="bg-secondary text-primary font-semibold px-4 py-1.5 w-48 rounded text-sm hover:bg-primary hover:text-white inline-block mx-2"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-primary text-white font-semibold px-3 py-1.5 w-48 rounded text-sm hover:bg-secondary hover:text-primary inline-block mx-2 mb-3"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
