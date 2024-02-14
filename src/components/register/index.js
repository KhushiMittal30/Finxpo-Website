import React from "react";
import "./reg.css";
import Regisback from "./../../assets/regisback.png";

const Register = () => {
  return (
    <div className="holder">
      <div className="imgage">
        <img src={Regisback} alt="REgis" />
      </div>
      <div className="register-back" />
      <div className="register-container">
        <div className="register-header">Register</div>
        <form className="register-form">
          <p className="label">Full Name</p>
          <input type="text" className="register-input" />
          <p className="label">Phone Number</p>
          <input type="tel" className="register-input" />
          <p className="label">Email</p>
          <input type="email" className="register-input" />
          <p className="label">College Name</p>
          <input type="text" className="register-input" />
          <label style={{ marginTop: 80 }}>
            <input type="checkbox" />
            <span className="check" >Sign up for newsletter</span>
          </label>
          <button className="register-button">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
