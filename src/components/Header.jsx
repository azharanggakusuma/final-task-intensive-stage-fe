// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>My Trip Website</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/register-choose">Register Choose</Link>
          </li>
          <li>
            <Link to="/register-hoster">Register Hoster</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/destinations">Destinations</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
