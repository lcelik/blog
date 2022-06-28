import React from "react";
import "../header/header.scss";
import photo from "../../assets/images/lidija.jpg";

export default function Header() {
  return (
    <div className="header">
      <h1 className="header__logo">
        WOMEN IN <br /> TECH BLOG
      </h1>
      <ul className="header__list">
        <li className="header__list-item">HOME</li>
        <li className="header__list-item">ABOUT ME</li>
        <li className="header__list-itempost">POST</li>
        <li className="header__list-item">LOGIN</li>
        <li className="header__list-item">REGISTER</li>
        <li className="header__list-item">LOGOUT</li>
      </ul>
      {/* <i class="fa-solid fa-magnifying-glass"></i> */}
      <div className="search-container">
        <div className="search">
          <div>
            <input type="text" placeholder="Search..." required></input>
          </div>
        </div>
        <img  className="search__photo" src={photo} alt="photo" />
      </div>
    </div>
  );
}
