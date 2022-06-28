import React from "react";
import Header from "../../components/header/Header";
import "../home-page/home.scss";
import Hero from "../../components/hero/Hero";
import Sidebar from "../../components/sidebar/Sidebar";
import Posts from "../../components/posts/Posts";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <Hero />
      <div className="main">
        <Posts />
        <Sidebar />
      </div>
    </div>
  );
}
