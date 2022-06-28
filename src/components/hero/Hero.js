import React from "react";
import "../hero/hero.scss";
import hero from "../../assets/images/womenintech.avif";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero__container">
        <span className="hero__title">WOMEN IN TECH</span>
        <span className="hero__title2">Blog</span>
        <img src={hero} alt="hero image" className="hero__image" />
      </div>
    </div>
  );
}
