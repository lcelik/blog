import "../sidebar/sidebar.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const response = await axios.get("http://localhost:5000/api/categories");
      setCats(response.data);
    };
    getCats();
  }, []);

  return (
    <div className="sidebar">
      <h3 className="sidebar__title">CATEGORIES</h3>
      <ul className="sidebar__categories-list">
        {cats.map((c) => (
          <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebar__categories-item">{c.name}</li>
          </Link>
        ))}
        {/* <li className="sidebar__categories-item">Learning, Women in Tech</li>
        <li className="sidebar__categories-item">Inspiration</li>
        <li className="sidebar__categories-item">Lifestyle</li> */}
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
