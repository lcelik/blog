import React, { useContext, useEffect, useState } from "react";
import "../single-post/singlePost.scss";
// import post from "../../assets/images/women.png";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { Context } from "../../context/Context";

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const PF = "http://localhost:5000/images/";
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const response = await axios.get(
        "http://localhost:5000/api/posts/" + path
      );
      console.log(response);
      setPost(response.data);
      setTitle(response.data.title);
      setDesc(response.data.desc);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {}
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:5000/api/posts/${post._id}`, {
        username: user.username,
        title,
        desc,
      });
      // window.location.reload();
      setUpdateMode(false);
    } catch (err) {}
  };

  return (
    <div className="single-post">
      <div className="single-post__container">
        {post.photo && (
          <img
            className="single-post__photo"
            src={PF + post.photo}
            alt="post-photo"
          />
        )}
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="single-post__title-input"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="single-post__title">
            {title}
            {post.username === user?.username && (
              <div className="single-post__edit-container">
                <i
                  className="single-post__icon fa-solid fa-pen-to-square"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="single-post__icon fa-solid fa-trash-can"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}
        {/* <img className="single-post__photo" src={post} alt="post-photo" /> */}

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
        {updateMode ? (
          <textarea
            className="single-post__description-input"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="single-post__description">{desc}</p>
        )}
        {updateMode && (
          <button className="single-post__editbutton" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
}
