import "../post/post.scss";
import React from "react";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const PF = "http://localhost:5000/images/";
  return (
    <div className="post">
      {post.photo && (
        <img className="post__img" src={PF + post.photo} alt="post image" />
      )}
      <div className="post__info">
        <div className="post__categories">
          {post.categories.map((c) => (
            <span className="post__category">{c.name}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <h3 className="post__title">{post.title}</h3>
        </Link>

        <span className="post__date">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="post__text">{post.desc}</p>
    </div>
  );
}
