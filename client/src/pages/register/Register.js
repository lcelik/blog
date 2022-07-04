import React from "react";
import "../register/register.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          username,
          email,
          password,
        }
      );
      response.data && window.location.replace("/login");
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="register">
      <span className="register__title">Register</span>
      <form className="register__form" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          className="register__input"
          type="text"
          placeholder="Enter your username"
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <label>Email</label>
        <input
          className="register__input"
          type="password"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <label>Password</label>
        <input
          className="register__input"
          type="password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button className="register__button" type="submit">
          Register
        </button>
      </form>
      <button className="register__button-login">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
      {error && <span>Something went wrong...</span>}
    </div>
  );
}
