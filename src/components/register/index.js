import React, { useState } from "react";
import "./reg.css";
import Regisback from "./../../assets/regisback.png";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDGZkBqg8OUkBD_-HnC7dKUqC8VKj5qwPk",
  authDomain: "phsykick.firebaseapp.com",
  databaseURL: "https://phsykick.firebaseio.com",
  projectId: "phsykick",
  storageBucket: "phsykick.appspot.com",
  messagingSenderId: "693358512728",
  appId: "1:693358512728:web:9c74d8ae2a70e6de3b982d",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase();
function writeUserData(formData, name) {
  set(ref(db, `responces/${name}`), formData);
}

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    eventName: "",
    branch:"",
    year:"",
    signUpForNewsletter: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = formData.fullName;
    try {
      writeUserData(formData, name);
      setFormData({
        fullName: "",
        phoneNumber: "",
        email: "",
        eventName: "",
        branch:"",
        year:"",
        signUpForNewsletter: false,
      });
      alert("Registration successful!");
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Registration failed. Please try again later.");
    }
  };
  return (
    <div className="holder">
      <div className="imgage">
        <img src={Regisback} alt="REgis" />
      </div>
      <div className="register-back" />
      <div className="register-container">
        <div className="register-header ubuntu-bold" style={{textAlign:"center", margin:"30px 0 30px 0 "}}>Register Yourself</div>
        <form className="register-form" onSubmit={handleSubmit}>
          <p className="label ubuntu-regular">Full Name</p>
          <input
            type="text"
            name="fullName"
            className="register-input"
            onChange={handleChange}
            value={formData.fullName} // Set initial value from formData
          />
          <p className="label ubuntu-regular">Phone Number</p>
          <input
            type="tel"
            name="phoneNumber"
            className="register-input"
            onChange={handleChange}
            value={formData.phoneNumber} // Set initial value from formData
          />
          <p className="label ubuntu-regular">Email</p>
          <input
            type="email"
            name="email"
            className="register-input"
            onChange={handleChange}
            value={formData.email} // Set initial value from formData
          />
          <div className="custom-dropdown-wrapper">
        <label className="label ubuntu-regular" style={{fontSize:"30px"}}>Year</label>
        <select
          name="year"
          className="custom-dropdown"
          onChange={handleChange}
          value={formData.year}
        >
          <option value="" disabled>Select Your Year</option>
          <option value="Event 1">FY</option>
          <option value="Event 2">SY</option>
          <option value="Event 3">TY</option>
          <option value="Event 4">Final Year</option>
        </select>
        </div>
        <label className="label ubuntu-regular" style={{fontSize:"30px"}}>Branch (eg : BTech, Msc, BBA)</label>
          <input
            type="text"
            name="branch"
            className="register-input"
            onChange={handleChange}
            value={formData.branch} // Set initial value from formData
          />
         <div className="custom-dropdown-wrapper">
        <label className="label ubuntu-regular" style={{fontSize:"30px"}}>Interested Event</label>
        <select
          name="eventName"
          className="custom-dropdown"
          onChange={handleChange}
          value={formData.eventName}
        >
          <option value="" disabled>Select an Event</option>
          <option value="Event 1">Elevator Pitch</option>
          <option value="Event 2">Blockchain Workshop</option>
          <option value="Event 3">Web3 & AI Hackathon</option>
          <option value="Event 4">Mock Trading Competition</option>
          <option value="Event 5">Quant Trading Workshop</option>
        </select>
        </div>
       

          <label className ="haha" >
            <input
              type="checkbox"
              name="signUpForNewsletter"
              onChange={handleChange}
              checked={formData.signUpForNewsletter} // Set initial checked state from formData
            />
            <span className="check ubuntu-regular">Sign up for newsletter</span>
          </label>
          <button className="register-button">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
