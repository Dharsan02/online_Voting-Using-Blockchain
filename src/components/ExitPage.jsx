import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ExitPage = () => {
  const navigate = useNavigate();
  const [results, setResults] = useState([]);

  useEffect(() => {
    // Fetch vote results from localStorage
    const storedVotes = JSON.parse(localStorage.getItem("votes")) || {
      "Ravi Shankar Prasad": 0,
      "Amit Shah": 0,
      "Shashi Tharoor": 0,
      "Manish Sisodia": 0,
    };

    // Convert vote data to an array for display
    const resultsArray = Object.entries(storedVotes).map(([name, votes]) => ({
      name,
      votes,
    }));

    setResults(resultsArray);
  }, []);

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-[#0B1320] text-white text-center p-6">
      <div className="bg-gray-900 p-10 rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-4xl font-bold text-green-400">✅ You Have Successfully Voted!</h1>
        <p className="text-lg mt-4 text-gray-300">
          Thank you for participating in the election. Your vote has been recorded securely.
        </p>

        {/* Animated Checkmark */}
        <div className="mt-6">
          <svg
            className="w-24 h-24 text-green-400 mx-auto animate-bounce"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* Live Election Results */}
        <h2 className="text-2xl font-bold text-yellow-400 mt-6">📊 Live Election Results</h2>
        <div className="bg-gray-800 p-4 mt-4 rounded-lg">
          {results.length > 0 ? (
            results.map((candidate) => (
              <div key={candidate.name} className="flex justify-between text-lg border-b py-2">
                <span>{candidate.name}</span>
                <span className="text-blue-400 font-semibold">{candidate.votes} votes</span>
              </div>
            ))
          ) : (
            <p className="text-red-500">No votes have been cast yet.</p>
          )}
        </div>

        {/* Back to Home Button */}
        <div className="mt-6">
          <button
            onClick={() => navigate("/")}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
          >
            🏠 Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExitPage;
