import React from "react";
import "../home-page/home.scss";
import Hero from "../../components/hero/Hero";
import Sidebar from "../../components/sidebar/Sidebar";
import Posts from "../../components/posts/Posts";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Home() {
  const [posts, setPosts] = useState([]);

  //we are destructuring the search property for a user after console logging the location (const location = useLocation();)
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(
        "http://localhost:5000/api/posts" + search
      );
      setPosts(response.data);
      console.log(response);
    };
    fetchPosts();
  }, [search]);

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
