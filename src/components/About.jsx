import React from "react";

const About = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-[#0B1320] text-white p-10">
      {/* Left Side - Vertical "About" */}
      <div className="w-1/4 flex items-center justify-end pr-4">
        <h1 className="text-5xl font-bold rotate-[-90deg]">About</h1>
      </div>

      {/* White Line Divider */}
      <div className="w-1 bg-white h-3/4"></div>

      {/* Right Side - Description */}
      <div className="w-3/4 pl-10">
        <p className="text-lg leading-relaxed">
          An online voting system that will replace the old ballot system or paper system.
          Over time, we have utilized the required technology in every sector to improve
          efficiency and save extra resources. But the voting system is still very expensive
          and requires a bigger workforce. The system is slower and still not completely
          tamper-proof. We bring a system that is safe, reliable, and solves modern issues
          like higher reachability of the booth, crowd-free voting, inexpensive, faster results, and more.
        </p>
      </div>
    </div>
  );
};

export default About;
