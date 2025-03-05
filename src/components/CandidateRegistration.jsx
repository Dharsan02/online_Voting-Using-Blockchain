import React, { useState } from "react";

const CandidateRegistration = () => {
  const [formData, setFormData] = useState({
    name: "",
    party: "",
    booth_no: "",
    age: "",
    election_type: "",
    mobile: "",
    captcha: "",
  });

  const [error, setError] = useState("");
  const [captcha, setCaptcha] = useState(generateCaptcha());

  function generateCaptcha() {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation: Age should be 25 or above
    if (parseInt(formData.age) < 25) {
      setError("❌ Candidate must be at least 25 years old.");
      return;
    }

    // Validate Captcha
    if (formData.captcha !== captcha) {
      setError("❌ Incorrect Captcha!");
      return;
    }

    setError(""); // Clear error if valid
    console.log("Candidate Registered:", formData);
    alert("✅ Candidate Registered Successfully!");
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="w-1/3 p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-[#FF9933]">
          Candidate Registration
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Candidate Name"
            onChange={handleChange}
            className="w-full p-3 border rounded bg-white text-black"
            required
          />
          <input
            type="text"
            name="party"
            placeholder="Political Party"
            onChange={handleChange}
            className="w-full p-3 border rounded bg-white text-black"
            required
          />
          <input
            type="number"
            name="booth_no"
            placeholder="Booth No."
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
          {error && <p className="text-red-500">{error}</p>}

          {/* Election Type Selection */}
          <select
            name="election_type"
            onChange={handleChange}
            className="w-full p-3 border rounded bg-white text-black"
            required
          >
            <option value="">Select Election Type</option>
            <option value="Parliamentary">Parliamentary Election</option>
            <option value="Assembly">Assembly Election</option>
          </select>

          <input
            type="text"
            name="mobile"
            placeholder="Mobile No."
            onChange={handleChange}
            className="w-full p-3 border rounded bg-white text-black"
            required
          />

          {/* Captcha */}
          <div className="flex items-center space-x-4">
            <span className="text-xl font-bold bg-gray-200 px-4 py-2">{captcha}</span>
            <button type="button" onClick={() => setCaptcha(generateCaptcha())} className="text-blue-600 underline">
              Reload Captcha
            </button>
          </div>
          <input
            type="text"
            name="captcha"
            placeholder="Enter Captcha"
            onChange={handleChange}
            className="w-full p-3 border rounded bg-white text-black"
            required
          />

          <button
            type="submit"
            className="w-full bg-[#138808] text-white p-3 rounded hover:bg-[#FFC107]"
          >
            REGISTER CANDIDATE
          </button>
        </form>
      </div>
    </div>
  );
};

export default CandidateRegistration;
