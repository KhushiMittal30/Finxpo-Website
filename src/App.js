// App.js
import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Navbar, Footer, Home, Register, TimeLine ,Web3, AboutUs} from "./components";

import "./App.css";
const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/register" element={<Register />} />
          <Route path="/timeline" element={<TimeLine />} />
          <Route path="/web3" element={<Web3 />} />

          {/* {} */}
          {/* <Route path="/speaker-sessions" element={<SpeakerSessions />} /> */}
          <Route path="/ideathon" element={<Ideathon />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          {/* <Route path="/privacy-policy" element={<PrivacyPolicy />} /> */}
          <Route path="/instagram" element={<Instagram />} />
          <Route path="/linkedin" element={<Linkedin />} />
          <Route path="/mail" element={<Mail />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

// const About = () => <h1>About Page</h1>;
const Sponsors = () => <h1>Sponsors Page</h1>;
// const SpeakerSessions = () => <h1>Speaker Sessions Page</h1>;
const Ideathon = () => <h1>Ideathon Page</h1>;
const TermsConditions = () => <h1>Terms and Conditions Page</h1>;
// const PrivacyPolicy = () => <h1>Privacy Policy Page</h1>;
const Instagram = () => <h1>Instagram Page</h1>;
const Linkedin = () => <h1>Linkedin Page</h1>;
const Mail = () => <h1>Mail Page</h1>;

export default App;
