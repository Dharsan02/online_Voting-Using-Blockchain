import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // Fetch user data from localStorage
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("userData"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#0B1320] text-white p-10 flex flex-col items-center">
      {/* Navigation Bar */}
      <nav className="w-full max-w-5xl flex justify-between items-center mb-10 bg-[#1E1E1E] p-4 rounded-lg shadow-lg">
        <div className="flex space-x-6">
          <button onClick={() => navigate("/profile")} className="text-lg font-semibold text-[#FFC107] hover:underline">
            Personal Info
          </button>
          <button onClick={() => navigate("/election")} className="text-lg font-semibold hover:underline">
            Election
          </button>
          <button onClick={() => navigate("/contact")} className="text-lg font-semibold hover:underline">
            Contact
          </button>
        </div>
        <button onClick={() => navigate("/vote")} className="bg-blue-600 px-6 py-2 rounded text-white hover:bg-blue-700 shadow-md">
          Vote
        </button>
      </nav>

      {/* Profile Card */}
      <div className="bg-[#1E1E1E] p-10 rounded-lg shadow-lg flex w-full max-w-5xl">
        {/* Left - Profile Image & Edit Options */}
        <div className="w-1/3 flex flex-col items-center space-y-4">
          <img src="/profile_img.jpg" alt="Profile" className="w-32 h-32 rounded-full border-4 border-[#FFC107]" />
          <button className="bg-blue-600 px-4 py-2 rounded shadow-md hover:bg-blue-700">
            Change Profile Picture
          </button>
          <p className="text-sm cursor-pointer hover:text-[#FFC107]">✏ Edit Profile</p>
        </div>

        {/* Right - User Information */}
        <div className="w-2/3 pl-10 space-y-4">
          <h2 className="text-3xl font-bold text-[#FF9933] border-b pb-2">User Information</h2>
          {user ? (
            <div className="text-lg space-y-2">
              <p><strong className="text-[#138808]">Name:</strong> {user.name}</p>
              <p>
                <strong className="text-[#138808]">Age:</strong> {user.age} 
                <span className="ml-6"><strong className="text-[#138808]">Mobile Number:</strong> {user.mobile}</span>
              </p>
              <p><strong className="text-[#138808]">Email:</strong> {user.email}</p>
              <p><strong className="text-[#138808]">Voter ID:</strong> {user.voter_id}</p>
              <p>
                <strong className="text-[#138808]">Eligible:</strong> <span className="text-green-400">True</span> 
                <span className="ml-6"><strong className="text-[#138808]">Verified:</strong> <span className="text-green-400">True</span></span>
              </p>
            </div>
          ) : (
            <p className="text-red-500">No user data found. Please register first.</p>
          )}
        </div>
      </div>

      {/* ✅ Corrected Vote Section - Only One Instance */}
      <div className="mt-10">
        <button 
          onClick={() => navigate("/vote")} 
          className="bg-[#138808] px-8 py-3 rounded text-white font-semibold hover:bg-[#FFC107] shadow-md"
        >
          Proceed to Vote
        </button>
      </div>
    </div>
  );
};

export default Profile;
