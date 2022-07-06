import "../sidebar/sidebar.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

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
        <li className="sidebar__categories-item">Learning</li>
        <li className="sidebar__categories-item">Women in Tech</li>
        <li className="sidebar__categories-item">Inspiration</li>
        <li className="sidebar__categories-item">Lifestyle</li>
      </ul>

      <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
        <p className="pt-3 text-center  sidebar-title">Contact details:</p>
        <div className="d-flex justify-content-center">
          <FacebookShareButton
            url={"https://www.facebook.com/profile.php?id=507650953"}
            hashtag="#frontenddevelopment"
            quote={"FrontEnd Developer"}
          >
            <FacebookIcon className="mx-3" size={36} />
          </FacebookShareButton>

          <TwitterShareButton
            url={"https://www.facebook.com/profile.php?id=507650953"}
            hashtag="#frontenddevelopment"
            quote={"FrontEnd Developer"}
          >
            <TwitterIcon className="mx-3" size={36} />
          </TwitterShareButton>

          <LinkedinShareButton
            url={"https://www.facebook.com/profile.php?id=507650953"}
            hashtag="#frontenddevelopment"
            quote={"FrontEnd Developer"}
          >
            <LinkedinIcon className="mx-3" size={36} />
          </LinkedinShareButton>
        </div>
      </div>
    </div>
  );
}
