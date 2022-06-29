import React from "react";
import "../login/login.scss";

export default function Login() {
  return (
    <div className="login">
      <span className="login__title">Login</span>
      <form className="login__form">
        <label>Email</label>
        <input
          className="login__input"
          type="text"
          placeholder="Enter your email"
        ></input>
        <label>Password</label>
        <input
          className="login__input"
          type="password"
          placeholder="Enter your password"
        ></input>
        <button className="login__button">Login</button>
      </form>
      <button className="login__button-register">Register</button>
    </div>
  );
}
