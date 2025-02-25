import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify"; // ✅ Import ToastContainer
import "react-toastify/dist/ReactToastify.css"; // ✅ Import Toast styles
import { Navbar, Footer, Home, Register, TimeLine, AboutUs, Speakers } from "./components";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
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
      <ToastContainer /> {/* ✅ Add ToastContainer here */}
    </BrowserRouter>
  );
};

// Other components
const Ideathon = () => <h1>Ideathon Page</h1>;
const TermsConditions = () => <h1>Terms and Conditions Page</h1>;
const Instagram = () => <h1>Instagram Page</h1>;
const Linkedin = () => <h1>Linkedin Page</h1>;
const Mail = () => <h1>Mail Page</h1>;

export default App;
