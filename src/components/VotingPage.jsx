import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const VotingPage = () => {
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [confirmed, setConfirmed] = useState(false);
  const navigate = useNavigate();

  const candidates = [
    { name: "Ravi Shankar Prasad", party: "Independent", symbol: "⚖️" },
    { name: "Amit Shah", party: "BJP", symbol: "🪷" },
    { name: "Shashi Tharoor", party: "Congress", symbol: "✋" },
    { name: "Manish Sisodia", party: "AAP", symbol: "⚡" },
  ];

  const handleCandidateSelect = (candidate) => {
    setSelectedCandidate(candidate);
    setConfirmed(false);
  };

  const handleSubmit = () => {
    if (!selectedCandidate) {
      alert("❌ Please select a candidate before submitting.");
      return;
    }
    if (!confirmed) {
      alert("⚠️ Please confirm your selection before submitting.");
      return;
    }

    // Get the current vote counts from localStorage or initialize
    let storedVotes = JSON.parse(localStorage.getItem("votes")) || {
      "Ravi Shankar Prasad": 0,
      "Amit Shah": 0,
      "Shashi Tharoor": 0,
      "Manish Sisodia": 0,
    };

    // Increase vote count for selected candidate
    storedVotes[selectedCandidate.name] += 1;

    // Save updated vote counts in localStorage
    localStorage.setItem("votes", JSON.stringify(storedVotes));

    // Redirect to exit page
    navigate("/exit");
  };

  return (
    <div className="min-h-screen bg-[#0B1320] text-white flex flex-col items-center p-10">
      <h1 className="text-4xl font-bold mb-8">🗳️ Voting Panel</h1>

      {selectedCandidate && (
        <div className="w-full max-w-3xl bg-gray-700 p-6 rounded-lg border-2 border-blue-500 shadow-lg mb-8">
          <h2 className="text-2xl font-semibold mb-2">{selectedCandidate.name}</h2>
          <p className="text-lg mb-1">🗂️ <strong>Party:</strong> {selectedCandidate.party}</p>
          <p className="text-4xl mt-4">{selectedCandidate.symbol}</p>
        </div>
      )}

      <div className="w-full max-w-3xl space-y-6">
        {candidates.map((candidate) => (
          <div
            key={candidate.name}
            className={`flex justify-between items-center bg-gray-800 p-5 rounded-lg cursor-pointer hover:bg-gray-700 transition ${
              selectedCandidate?.name === candidate.name ? "border-4 border-blue-400" : ""
            }`}
            onClick={() => handleCandidateSelect(candidate)}
          >
            <div>
              <p className="text-2xl font-semibold">{candidate.name}</p>
              <p className="text-lg">{candidate.party}</p>
            </div>
            <p className="text-4xl">{candidate.symbol}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center space-x-3">
        <input
          type="checkbox"
          id="confirmVote"
          checked={confirmed}
          onChange={() => setConfirmed(!confirmed)}
          className="w-6 h-6"
        />
        <label htmlFor="confirmVote" className="text-lg">
          I confirm my vote for <span className="font-semibold">{selectedCandidate ? selectedCandidate.name : "a candidate"}</span>.
        </label>
      </div>

      <button
        onClick={handleSubmit}
        className="bg-green-600 text-white px-8 py-3 mt-6 rounded-lg text-lg font-semibold hover:bg-green-700 disabled:bg-gray-400 transition"
        disabled={!selectedCandidate || !confirmed}
      >
        ✅ Submit Vote
      </button>
    </div>
  );
};

export default VotingPage;
