// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import RegisterChoose from "./pages/RegisterChoose";
import RegisterHoster from "./pages/RegisterHoster";
import Login from "./pages/Login";
import Destinations from "./pages/Destinations";
import DestinationDetail from "./pages/DestinationDetail";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register-choose" element={<RegisterChoose />} />
        <Route path="/register-hoster" element={<RegisterHoster />} />
        <Route path="/login" element={<Login />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/destinations/:id" element={<DestinationDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
