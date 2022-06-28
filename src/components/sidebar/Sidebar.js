import "../sidebar/sidebar.scss";

import React from "react";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h3 className="sidebar__title">CATEGORIES</h3>
      <ul className="sidebar__categories-list">
        <li className="sidebar__categories-item">Women in Tech</li>
        <li className="sidebar__categories-item">Inspiration</li>
        <li className="sidebar__categories-item">Lifestyle</li>
        <li className="sidebar__categories-item">Advices</li>
      </ul>
      <div className="sidebar-social">
        <h3 className="sidebar__title">FOLLOW US ON:</h3>
        <div className="sidebar-socail__container">
        <i className="icon fab fa-facebook-square"></i>
        <i className="icon fab fa-github-square"></i>
        <i className="icon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}
