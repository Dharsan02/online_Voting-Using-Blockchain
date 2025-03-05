import React from "react";
import { FaLock, FaEthereum, FaLaptop, FaHandPointUp, FaDollarSign } from "react-icons/fa";

const Read = () => {
  return (
    <div className="flex items-center h-screen bg-white p-10">
      {/* Left Side - Vertical "Features" */}
      <div className="w-1/4 flex items-center justify-end pr-4">
        <h1 className="text-6xl font-bold rotate-[-90deg] text-black">Features</h1>
      </div>

      {/* Blue Line Divider */}
      <div className="w-1 bg-blue-600 h-3/4"></div>

      {/* Right Side - Features List */}
      <div className="w-3/4 pl-10 space-y-6">
        <div className="flex items-center space-x-4">
          <FaLock className="text-3xl" />
          <p className="text-lg font-semibold">Secured by 256-bit encryption</p>
        </div>
        <div className="flex items-center space-x-4">
          <FaEthereum className="text-3xl" />
          <p className="text-lg font-semibold">Backed by Ethereum-based technology</p>
        </div>
        <div className="flex items-center space-x-4">
          <FaLaptop className="text-3xl" />
          <p className="text-lg font-semibold">Verifiable transactions</p>
        </div>
        <div className="flex items-center space-x-4">
          <FaHandPointUp className="text-3xl" />
          <p className="text-lg font-semibold">Easy to use</p>
        </div>
        <div className="flex items-center space-x-4">
          <FaDollarSign className="text-3xl" />
          <p className="text-lg font-semibold">Cheaper than ballot voting system</p>
        </div>
      </div>
    </div>
  );
};

export default Read;
