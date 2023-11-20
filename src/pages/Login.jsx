// src/pages/Login.js
import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import Bg from "../assets/img/bg-login.png";
import Logo from "../assets/img/logo.png";

const Login = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-screen">
      {/* Left Section (Image) */}
      <div className="lg:w-2/3 md:w-2/3 relative mb-10 overflow-y-hidden">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-25"></div>
        <img src={Bg} alt="Logo" className="mx-auto" />
        <div className="absolute bottom-0 left-16 right-0 mb-6 text-white">
          Pantai Kelingking Bali
        </div>
      </div>

      {/* Right Section (Login Form) */}
      <div className="lg:w-1/2 md:w-1/2 lg:mt-52 md:mt-52">
        <Container>
          <div className="flex items-center justify-center mb-8">
            <img src={Logo} className="h-6" alt="Logo" />
          </div>
          <form>
            <div className="mb-5">
              <label
                htmlFor="username"
                className="block text-[#8F8F8F] text-sm mb-2"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="w-full p-2 border rounded-md"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="password"
                className="block text-[#8F8F8F] text-sm mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full p-2 border rounded-md"
              />
            </div>

            <button
              type="submit"
              className="bg-primary text-white px-4 py-2 w-full hover:bg-primary font-semibold text-sm lg:text-lg md:text-lg rounded mt-4"
            >
              Login
            </button>

            <div className="flex items-center gap-10 mb-10">
              {/* Forgot password link */}
              <div className="mt-5 text-sm">
                <Link
                  to="/forgot-password"
                  className="text-[#8F8F8F] hover:underline"
                >
                  Forgot password
                </Link>
              </div>

              {/* Register link */}
              <div className="mt-5 text-sm text-[#8F8F8F]">
                Don’t have an account?{" "}
                <Link to="/register" className="text-primary hover:underline">
                  Register Here
                </Link>
              </div>
            </div>
          </form>

          {/* Copyright text */}
          <div className="text-[#8F8F8F] text-sm text-center lg:mt-48 md:mt-48 lg:mb-0 md-mb-0 mb-10">
            © 2023 OPENTRIP. All rights reserved
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Login;
