import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Read from "./components/Read";
import About from "./components/About";
import Contact from "./components/Contact";
import Registration from "./components/Registration";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Election from "./components/Election";
import Vote from "./components/Vote";
import VotingPage from "./components/VotingPage";
import ExitPage from "./components/ExitPage";
import CandidateRegistration from "./components/CandidateRegistration";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/read" element={<Read />} />
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/register" element={<Registration />} />
        <Route path="/candidate-register" element={<CandidateRegistration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/election" element={<Election />}/>
        <Route path="/vote" element={<Vote />} />
        <Route path="/voting" element={<VotingPage />} />
        <Route path="/exit" element={<ExitPage />} />
      </Routes>
    </Router>
  );
}

export default App;
