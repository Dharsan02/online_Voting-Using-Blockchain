import React from "react";
import { useNavigate } from "react-router-dom";

const Election = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-[#0B1320] text-white p-10 flex flex-col items-center">
      {/* Navigation */}
      <nav className="w-full max-w-4xl flex justify-between items-center mb-10 bg-[#1E1E1E] p-4 rounded-lg shadow-lg">
        <div className="flex space-x-6">
          <button onClick={() => navigate("/profile")} className="text-lg font-semibold hover:underline">
            Personal Info
          </button>
          <button className="text-lg font-semibold text-[#FFC107] underline">
            Election
          </button>
          <button onClick={() => navigate("/contact")} className="text-lg font-semibold hover:underline">
            Contact
          </button>
        </div>
        <button className="bg-blue-600 px-6 py-2 rounded text-white hover:bg-blue-700 shadow-md">
          Vote
        </button>
      </nav>

      {/* Election Sections */}
      <div className="w-full max-w-4xl">
        <h2 className="text-2xl font-bold mb-4">Upcoming Elections:</h2>
        <div className="bg-gray-400 text-black font-semibold p-4 rounded-lg flex justify-between mb-4">
          <span>TamilNadu Election:</span>
          <span>02-04-2026</span>
        </div>

        <h2 className="text-2xl font-bold mt-6 mb-4">Other Elections:</h2>
        <div className="bg-gray-400 text-black font-semibold p-4 rounded-lg flex justify-between mb-4">
          <span>Manipur State Election:</span>
          <span>04-04-2026</span>
        </div>
        <div className="bg-gray-400 text-black font-semibold p-4 rounded-lg flex justify-between mb-4">
          <span>Chhattisgarh State Election:</span>
          <span>12-04-2026</span>
        </div>
        <div className="bg-gray-400 text-black font-semibold p-4 rounded-lg flex justify-between mb-4">
          <span>Bangalore State Election:</span>
          <span>20-04-2026</span>
        </div>
        <div className="bg-gray-400 text-black font-semibold p-4 rounded-lg flex justify-between">
          <span>Gurgaon Municipal Corporation:</span>
          <span>26-04-2026</span>
        </div>
      </div>
    </div>
  );
};

export default Election;
