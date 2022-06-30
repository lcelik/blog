import React from "react";
import "../home-page/home.scss";
import Hero from "../../components/hero/Hero";
import Sidebar from "../../components/sidebar/Sidebar";
import Posts from "../../components/posts/Posts";

export default function Home() {
  return (
    <div className="home">
      <Hero />
      <div className="main">
        <Posts />
        <Sidebar />
      </div>
    </div>
  );
}
