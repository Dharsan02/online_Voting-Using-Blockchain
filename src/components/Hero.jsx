import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <nav className="bg-[#1E1E1E] text-white py-4 px-8 flex justify-between items-center shadow-md">
  {/* Logo & Text */}
  <div className="flex items-center space-x-3">
    <img src="/election_img2.png" alt="ECI Logo" className="h-16 w-16 object-contain" />  {/* Increased Size */}
    <h4 className="text-2xl font-bold text-[#FF9933]">Election Commission of India</h4>
  </div>

  {/* Navigation Links */}
  <div className="space-x-6">
    <button onClick={() => navigate("/about")} className="hover:text-[#FFC107]">About</button>
    <button onClick={() => navigate("/contact")} className="hover:text-[#FFC107]">Contact</button>
    <button onClick={() => navigate("/help")} className="hover:text-[#FFC107]">Help</button>
    <button onClick={() => navigate("/login")} className="bg-[#138808] px-4 py-2 rounded hover:bg-[#FFC107]">Login</button>
  </div>
</nav>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row flex-grow">
        {/* Left Section - Hero Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center p-10">
          <h2 className="text-4xl font-bold text-[#FF9933]">Welcome to India's Online Voting System</h2>
          <p className="text-lg text-gray-700 mt-4">A secure and transparent way to cast your vote online.</p>
          <div className="mt-6 space-x-4">
            <button onClick={() => navigate("/register")} className="bg-[#138808] px-6 py-3 rounded text-white font-semibold hover:bg-[#FFC107]">
              Voter Registration
            </button>
            <button onClick={() => navigate("/candidate-register")} className="bg-[#FF9933] px-6 py-3 rounded text-white font-semibold hover:bg-[#FFC107]">
              Candidate Registration
            </button>
          </div>
          <button onClick={() => navigate("/read")} className="mt-4 bg-blue-600 px-6 py-3 rounded text-white font-semibold hover:bg-blue-700">
            Read More
          </button>
        </div>

        {/* Right Section - Background Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img src="/vote_img.jpg" alt="Voting" className="w-4/5 h-auto object-cover rounded-lg shadow-lg" />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#1E1E1E] text-white py-4 text-center">
        <p>Helpline: 1800-11-001 | Privacy Policy | Terms & Conditions</p>
        <p>© 2025 Election Commission of India</p>
      </footer>
    </div>
  );
};

export default Hero;
