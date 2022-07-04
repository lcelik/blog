import React from "react";
import "../login/login.scss";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import axios from "axios";
import { useContext } from "react";
import { useRef } from "react";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          username: userRef.current.value,
          password: passwordRef.current.value,
        }
      );
      dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div className="login">
      <span className="login__title">Login</span>
      <form className="login__form" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          className="login__input"
          type="text"
          placeholder="Enter your username"
          ref={userRef}
        ></input>
        <label>Password</label>
        <input
          className="login__input"
          type="password"
          placeholder="Enter your password"
          ref={passwordRef}
        ></input>
        <button className="login__button" type="submit">
          Login
        </button>
      </form>
      <button
        className="login__button-register"
        type="submit"
        disabled={isFetching}
      >
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
    </div>
  );
}
