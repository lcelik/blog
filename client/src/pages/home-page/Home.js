import React from "react";
import "../home-page/home.scss";
import Hero from "../../components/hero/Hero";
import Sidebar from "../../components/sidebar/Sidebar";
import Posts from "../../components/posts/Posts";
import axios from "axios";
import { useEffect, useState } from "react";
// import {API_URL} from "../../api/api";
// import api from "../../api/api";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get("http://localhost:5000/api/posts");
      setPosts(response.data);
      console.log(response);
    };
    fetchPosts();
  }, []);

  return (
    <div className="home">
      <Hero />
      <div className="main">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </div>
  );
}
