import React, { useState } from "react";
import "../publish/publish.scss";
// import publishImg from "../../assets/images/women.png";
import { useContext } from "react";
import axios from "axios";
import { Context } from "../../context/Context";

export default function Publish() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("http://localhost:5000/api/upload", data);
      } catch (err) {}
    }
    try {
      const response = await axios.post(
        "http://localhost:5000/api/posts",
        newPost
      );
      window.location.replace("/post/" + response.data._id);
    } catch (err) {}
  };

  return (
    <div className="publish">
      {file && (
        <img
          className="publish__image"
          src={URL.createObjectURL(file)}
          alt="publish img"
        />
      )}

      <form className="publish__form" onSubmit={handleSubmit}>
        <div className="publish__form-container">
          <label htmlFor="fileInput">
            <i className="publishIcon fa-solid fa-plus"></i>
          </label>

          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            className="publish__input"
            type="text"
            placeholder="Title"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="publish__form-container">
          <textarea
            className="publish__input"
            placeholder="Write your story..."
            type="text"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        <button className="publish__button" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}
