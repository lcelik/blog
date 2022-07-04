import React from "react";
import "../header/header.scss";
import { Link } from "react-router-dom";
import myPhoto from "../../assets/images/lidija.jpg";
import { Context } from "../../context/Context";
import { useContext } from "react";

export default function Header() {
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="header">
      <h1 className="header__logo">
        WOMEN IN <br /> TECH BLOG
      </h1>
      <ul className="header__list">
        <li className="header__list-item">
          <Link className="link" to="/">
            HOME
          </Link>
        </li>
        <li className="header__list-item">
          <Link className="link" to="/about">
            ABOUT
          </Link>
        </li>
        <li className="header__list-itempost">
          <Link className="link" to="/publish">
            PUBLISH
          </Link>
        </li>
        <li className="header__list-item">
          <Link className="link" to="/login">
            LOGIN
          </Link>
        </li>
        <li className="header__list-item">
          <Link className="link" to="/register">
            REGISTER
          </Link>
        </li>
        <li className="header__list-item" onClick={handleLogout}>
          {user && "LOGOUT"}
        </li>
      </ul>
      <i className="header__sreach-icon fa-solid fa-magnifying-glass"></i>
      {user ? (
        // <img src={myPhoto} alt="" className="header__photo" />
        <img src={user.profilePic} alt="" className="header__photo" />
      ) : (
        <ul className="header__list">
          <li className="header__list-item">
            <Link className="link" to="/login">
              LOGIN
            </Link>
          </li>
          <li className="header__list-item">
            <Link className="link" to="/register">
              REGISTER
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}
