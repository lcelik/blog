import React, { useEffect, useState } from "react";
import "../single-post/singlePost.scss";
import post from "../../assets/images/women.png";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      const response = await axios.get(
        "http://localhost:5000/api/posts/" + path
      );
      console.log(response);
      setPost(response.data);
    };
    getPost();
  }, [path]);

  return (
    <div className="single-post">
      <div className="single-post__container">
        {post.photo && (
          <img
            className="single-post__photo"
            src={post.photo}
            alt="post-photo"
          />
        )}
        <img className="single-post__photo" src={post} alt="post-photo" />
        <h1 className="single-post__title">
          {post.title}
          <div className="single-post__edit-container">
            <i class="single-post__icon fa-solid fa-pen-to-square"></i>
            <i class="single-post__icon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="single-post__info-container">
          <span className="single-post__author">
            Author:
            <Link to={`/?user=${post.username}`} className="link">
              <b>{post.username}</b>
            </Link>
          </span>
          <span className="single-post__date">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        <p className="single-post__description">{post.desc}</p>
      </div>
    </div>
  );
}
