import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select"; // Import React Select

// List of All 28 States and 8 Union Territories
const states = [
  { value: "Andhra Pradesh", label: "Andhra Pradesh" },
  { value: "Arunachal Pradesh", label: "Arunachal Pradesh" },
  { value: "Assam", label: "Assam" },
  { value: "Bihar", label: "Bihar" },
  { value: "Chhattisgarh", label: "Chhattisgarh" },
  { value: "Goa", label: "Goa" },
  { value: "Gujarat", label: "Gujarat" },
  { value: "Haryana", label: "Haryana" },
  { value: "Himachal Pradesh", label: "Himachal Pradesh" },
  { value: "Jharkhand", label: "Jharkhand" },
  { value: "Karnataka", label: "Karnataka" },
  { value: "Kerala", label: "Kerala" },
  { value: "Madhya Pradesh", label: "Madhya Pradesh" },
  { value: "Maharashtra", label: "Maharashtra" },
  { value: "Manipur", label: "Manipur" },
  { value: "Meghalaya", label: "Meghalaya" },
  { value: "Mizoram", label: "Mizoram" },
  { value: "Nagaland", label: "Nagaland" },
  { value: "Odisha", label: "Odisha" },
  { value: "Punjab", label: "Punjab" },
  { value: "Rajasthan", label: "Rajasthan" },
  { value: "Sikkim", label: "Sikkim" },
  { value: "Tamil Nadu", label: "Tamil Nadu" },
  { value: "Telangana", label: "Telangana" },
  { value: "Tripura", label: "Tripura" },
  { value: "Uttar Pradesh", label: "Uttar Pradesh" },
  { value: "Uttarakhand", label: "Uttarakhand" },
  { value: "West Bengal", label: "West Bengal" },
  { value: "Andaman and Nicobar Islands", label: "Andaman and Nicobar Islands" },
  { value: "Chandigarh", label: "Chandigarh" },
  { value: "Dadra and Nagar Haveli and Daman and Diu", label: "Dadra and Nagar Haveli and Daman and Diu" },
  { value: "Lakshadweep", label: "Lakshadweep" },
  { value: "Delhi", label: "Delhi" },
  { value: "Puducherry", label: "Puducherry" },
  { value: "Ladakh", label: "Ladakh" },
  { value: "Jammu and Kashmir", label: "Jammu and Kashmir" }
];

const Registration = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    age: "",
    mobile: "",
    email: "",
    password: "",
    voter_id: "",
    booth_no: "",
    state: "",
  });

  const [error, setError] = useState(""); // Store age error

  // Handle Input Change
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Handle State Selection
  const handleStateChange = (selectedOption) => {
    setUser({ ...user, state: selectedOption.value });
  };

  // Handle Form Submit with Age Validation
  const handleSubmit = (e) => {
    e.preventDefault();

    // Age Validation
    if (parseInt(user.age) < 18) {
      setError("You must be 18 or older to register.");
      return; // Stop form submission
    }

    // Clear Error & Save Data
    setError("");
    localStorage.setItem("userData", JSON.stringify(user)); // Save in localStorage
    navigate("/login"); // Redirect to Login Page
  };

  return (
    <div className="h-screen flex justify-center items-center bg-blue-200">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-[#FF9933]">
          Voter Registration
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            className="w-full p-3 border rounded bg-white text-black"
            required
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            onChange={handleChange}
            className="w-full p-3 border rounded bg-white text-black"
            required
          />
          {error && <p className="text-red-500 text-sm">{error}</p>} {/* Show Error if Age < 18 */}

          {/* State Dropdown */}
          <Select
            options={states}
            onChange={handleStateChange}
            placeholder="Select your State"
            className="w-full text-black"
            isSearchable
          />

          <input
            type="text"
            name="mobile"
            placeholder="Mobile No."
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
          <input
            type="text"
            name="voter_id"
            placeholder="Voter ID"
            onChange={handleChange}
            className="w-full p-3 border rounded bg-white text-black"
            required
          />
          <input
            type="number"
            name="booth_no"
            placeholder="Booth No"
            onChange={handleChange}
            className="w-full p-3 border rounded bg-white text-black"
            required
          />

          <button
            type="submit"
            className="w-full bg-[#138808] text-white p-3 rounded font-semibold hover:bg-[#FFC107]"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
