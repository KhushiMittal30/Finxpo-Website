import React, { useState, useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Navbar,
  Footer,
  Home,
  Register,
  TimeLine,
  AboutUs,
  Speakers,
} from "./components";
import "./App.css";
import ErrorScreen from "./components/ErrorScreen/ErrorScreen";

// Additional Components
const Ideathon = () => <h1>Ideathon Page</h1>;
const TermsConditions = () => <h1>Terms and Conditions Page</h1>;
const Instagram = () => <h1>Instagram Page</h1>;
const Linkedin = () => <h1>Linkedin Page</h1>;
const Mail = () => <h1>Mail Page</h1>;

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // Tailwind `sm` breakpoint
    };

    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Router>
      {isMobile ? (
        <ErrorScreen/>
      ) : (
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/speakers" element={<Speakers />} />
            <Route path="/register" element={<Register />} />
            <Route path="/timeline" element={<TimeLine />} />
            <Route path="/ideathon" element={<Ideathon />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/instagram" element={<Instagram />} />
            <Route path="/linkedin" element={<Linkedin />} />
            <Route path="/mail" element={<Mail />} />
          </Routes>
          <Footer />
        </div>
      )}
      <ToastContainer />
    </Router>
  );
};

export default App;
