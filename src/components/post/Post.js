import "../post/post.scss";
import img from "../../assets/images/womenintech.avif";

import React from "react";

export default function Post() {
  return (
    <div className="post">
      <img className="post__img" src={img} alt="post image" />
      <div className="post__info">
        <div className="post__categories">
          <span className="post__category">Motivation</span>
          <span className="post__category">Lifestyle</span>
        </div>
        <h3 className="post__title"> lorem ipsum dolor sit amen</h3>
        {/* <hr /> */}
        <span className="post__date">1 hour ago</span>
      </div>
      <p className="post__text">
        lorbbkjbkbjkbkbk bkjbkbkbkjbbkbkbk sdjfbksdfjb sjfbbfksfba sdsda sdsdsds
        sdsdsds sdsds
      </p>
    </div>
  );
}
