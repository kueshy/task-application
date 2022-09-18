import React, { useState } from "react";
import "./App.css";
import validator from "validator";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const validate = () => {
    return password.length >= 8 && validator.isEmail(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      alert("All fields are required");
    } else if (validate()) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="form">
      <h3>Login into your user account</h3>
      {/* <div className="form-control"> */}
      <label className="label" htmlFor="email">
        Email address
      </label>
      <input
        type="email"
        value={email}
        required
        placeholder="Enter email address"
        onChange={(e) => setEmail(e.target.value)}
      />
      {/* </div> */}
      {/* <div className="form-control"> */}
      <label className="label" htmlFor="password">
        Password
      </label>
      <input
        type="password"
        value={password}
        required
        placeholder="***********"
        onChange={(e) => setPassword(e.target.value)}
      />
      {/* </div> */}
      <button onClick={handleSubmit} disabled={!validate()} className="btn">
        Save
      </button>
    </div>
  );
};

export default Form;
