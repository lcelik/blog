import React from "react";
import "../about/about.scss";
import photo from "../../assets/images/womenintech.avif";

export default function About() {
  return (
    <div className="about">
      <h1 className="about__title">WELCOME TO THE COMMUNITY</h1>
      <img className="about__photo" src={photo} alt="about us photo" />
      <h2 className="about__text">
        At <span className="about__logo">WOMEN IN TECH BLOG</span> we hope that
        together we can help motivate, inspire and support you throughout your
        career - whatever stage you are at!{" "}
      </h2>
      <p className="about__text">
        Check-out our blogs to read about different career journeys into tech;
        gain career advice from those that have been there and done that and get
        some top tips on how to grow and excel in what you are doing now.
      </p>
    </div>
  );
}
