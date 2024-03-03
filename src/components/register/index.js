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
    collegeName: "",
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
        collegeName: "",
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
        <div className="register-header">Register</div>
        <form className="register-form" onSubmit={handleSubmit}>
          <p className="label">Full Name</p>
          <input
            type="text"
            name="fullName"
            className="register-input"
            onChange={handleChange}
            value={formData.fullName} // Set initial value from formData
          />
          <p className="label">Phone Number</p>
          <input
            type="tel"
            name="phoneNumber"
            className="register-input"
            onChange={handleChange}
            value={formData.phoneNumber} // Set initial value from formData
          />
          <p className="label">Email</p>
          <input
            type="email"
            name="email"
            className="register-input"
            onChange={handleChange}
            value={formData.email} // Set initial value from formData
          />
          <p className="label">College Name</p>
          <input
            type="text"
            name="collegeName"
            className="register-input"
            onChange={handleChange}
            value={formData.collegeName} // Set initial value from formData
          />
          <label className ="haha" >
            <input
              type="checkbox"
              name="signUpForNewsletter"
              onChange={handleChange}
              checked={formData.signUpForNewsletter} // Set initial checked state from formData
            />
            <span className="check">Sign up for newsletter</span>
          </label>
          <button className="register-button">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
