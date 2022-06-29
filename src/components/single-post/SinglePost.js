import React from "react";
import "../single-post/singlePost.scss";
import post from "../../assets/images/women.png";

export default function SinglePost() {
  return (
    <div className="single-post">
      <div className="single-post__container">
        <img className="single-post__photo" src={post} alt="post-photo" />
        <h1 className="single-post__title">
          Lorem ipsum dolor sit amet.
          <div className="single-post__edit-container">
            <i class="single-post__icon fa-solid fa-pen-to-square"></i>
            <i class="single-post__icon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="single-post__info-container">
          <span className="single-post__author">
            Author: <b>Lidija</b>
          </span>
          <span className="single-post__date">1 hour ago</span>
        </div>
        <p className="single-post__description">
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
          distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
          cumque nihil impedit quo minus id quod maxime placeat facere possimus,
          omnis voluptas assumenda est, omnis dolor repellendus. Temporibus
          autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
          eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
          Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
          voluptatibus maiores alias consequatur aut perferendis doloribus
          asperiores repellat."
        </p>
      </div>
    </div>
  );
}
