import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Vote = () => {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);

  const handleProceed = () => {
    if (checked) {
      navigate("/voting"); // Navigate to actual voting page
    } else {
      alert("Please check the box to proceed.");
    }
  };

  return (
    <div className="h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full">
        <h1 className="text-xl font-bold">
          This <span className="text-blue-600">election</span> is being conducted by the <span className="text-blue-600">Election Commission of India</span>.
        </h1>
        <div className="border border-blue-400 p-4 mt-4">
          <p className="text-gray-800">
            Please follow the steps below to cast your vote securely.
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Stay in the camera frame alone with proper lighting.</li>
            <li>Keep your **Security Keys** ready.</li>
            <li>You can vote **only once per election**.</li>
            <li>Only **one candidate** per election can be selected.</li>
            <li>Candidate information is displayed on the page.</li>
            <li>Confirm the candidate’s **name and symbol** before submitting.</li>
          </ul>
        </div>

        {/* Checkbox Confirmation */}
        <div className="mt-4 flex items-center">
          <input 
            type="checkbox" 
            id="agree" 
            className="mr-2" 
            checked={checked} 
            onChange={() => setChecked(!checked)}
          />
          <label htmlFor="agree" className="text-gray-800 font-semibold">
            I understand and will follow the above steps.
          </label>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-end space-x-4">
          <button onClick={() => navigate("/profile")} className="bg-gray-400 px-6 py-2 rounded-lg text-white hover:bg-gray-500">
            Cancel
          </button>
          <button 
            onClick={handleProceed} 
            className={`px-6 py-2 rounded-lg text-white ${checked ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-300 cursor-not-allowed"}`}
            disabled={!checked}
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

export default Vote;
