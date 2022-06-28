import React from "react";
import "../header/header.scss";

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
      </ul>
      <i class="fa-solid fa-magnifying-glass"></i>
      <img />
    </div>
  );
}
