// App.js
import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Navbar, Footer, Home } from "./components";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/sponsors" component={Sponsors} />
          <Route path="/register" component={Register} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

const About = () => <h1>About Page</h1>;
const Sponsors = () => <h1>Sponsors Page</h1>;
const Register = () => <h1>Register Page</h1>;

export default App;
