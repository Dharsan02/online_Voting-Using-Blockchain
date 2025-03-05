import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    voter_id: "",
    email: "",
    password: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  // Handle Login Submit
  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("userData"));

    if (storedUser) {
      if (
        storedUser.voter_id === credentials.voter &&  // Ensure correct key names
        storedUser.email === credentials.email &&
        storedUser.password === credentials.password
      ) {
        navigate("/profile"); // Redirect to profile page after successful login
      } else {
        alert("Invalid Credentials! Please check Voter ID, Email, or Password.");
      }
    } else {
      alert("No registered user found. Please sign up first.");
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-900">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-[#FF9933] mb-6 text-center">Login</h2>
        <form className="space-y-4" onSubmit={handleLogin}>
          <input
            type="text"
            name="voter"
            placeholder="Voter ID"
            onChange={handleChange}
            className="w-full p-3 border rounded bg-white text-black"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full p-3 border rounded bg-white text-black"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full p-3 border rounded bg-white text-black"
            required
          />
          <button
            type="submit"
            className="w-full bg-[#138808] text-white p-3 rounded font-semibold hover:bg-[#FFC107]"
          >
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
