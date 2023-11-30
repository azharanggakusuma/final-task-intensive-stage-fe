// src/pages/Register.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "../components/Container";
import Bg from "../assets/img/bg-login.png";
import Logo from "../assets/img/logo.png";
import Swal from "sweetalert2";
import usersData from "../users.json";

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

const handleRegister = () => {
  if (!username || !password || !confirmPassword) {
    Swal.fire({
      icon: "error",
      title: "Registration Failed",
      text: "Please fill in all fields.",
    });
  } else if (password !== confirmPassword) {
    Swal.fire({
      icon: "error",
      title: "Registration Failed",
      text: "Passwords do not match!",
    });
  } else {
    const userExists = usersData.some((user) => user.username === username);

    if (userExists) {
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: "Username already exists. Please choose a different one.",
      });
    } else {
      const newUser = {
        id: usersData.length + 1,
        username,
        password,
      };

      // Update usersData with the new user
      usersData.push(newUser);

      // Simulate a fetch request to update the users.json file
      // Replace this with your actual file update mechanism
      // This is just a mock and not suitable for a production environment
      fetch("../users.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(usersData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("User data updated successfully:", data);
        })
        .catch((error) => {
          console.error("Error updating user data:", error);
        });

      // Display a success message and navigate to the login page
      Swal.fire({
        icon: "success",
        title: "Registration Successful",
        text: "You can now login with your credentials.",
      });

      // Navigate to the login page after successful registration
      navigate("/login");
    }
  }
};

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

      {/* Right Section (Register Form) */}
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
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border rounded-md"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="confirmPassword"
                className="block text-[#8F8F8F] text-sm mb-2"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-2 border rounded-md"
              />
            </div>

            <button
              type="button"
              onClick={handleRegister}
              className="bg-primary text-white px-4 py-2 w-full hover:bg-primary font-semibold text-sm lg:text-lg md:text-lg rounded mt-4"
            >
              Register
            </button>

            <div className="flex items-center gap-10 mb-10">
              {/* Already have an account link */}
              <div className="mt-5 text-sm text-[#8F8F8F]">
                Already have an account?{" "}
                <Link to="/login" className="text-primary hover:underline">
                  Login Here
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

export default Register;
