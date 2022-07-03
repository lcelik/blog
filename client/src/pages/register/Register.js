import React from "react";
import "../register/register.scss";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="register">
      <span className="register__title">Register</span>
      <form className="register__form">
        <label>Username</label>
        <input
          className="register__input"
          type="text"
          placeholder="Enter your username"
        ></input>
        <label>Email</label>
        <input
          className="register__input"
          type="password"
          placeholder="Enter your email"
        ></input>
        <label>Password</label>
        <input
          className="register__input"
          type="password"
          placeholder="Enter your password"
        ></input>
        <button className="register__button">Register</button>
      </form>
      <button className="register__button-login">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
    </div>
  );
}
