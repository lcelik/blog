import React from "react";
import "../publish/publish.scss";
import publishImg from "../../assets/images/women.png";

export default function Publish() {
  return (
    <div className="publish">
      <img className="publish__image" src={publishImg} alt="pulish img" />
      <form className="publish__form">
        <div className="publish__form-container">
          <label htmlFor="fileInput"></label>
          <i class="publishIcon fa-solid fa-plus"></i>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            className="publish__input"
            type="text"
            placeholder="Title"
            autoFocus={true}
          />
        </div>
        <div className="publish__form-container">
          <textarea
            className="publish__input"
            placeholder="Write your story..."
            type="text"
          ></textarea>
        </div>
        <button className="publish__button">Publish</button>
      </form>
    </div>
  );
}
