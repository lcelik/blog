import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "../settings/settings.scss";
import settingsPhoto from "../../assets/images/lidija.jpg";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settings__container">
        <div className="settings__title">
          <span className="settings__update-title">Update your account</span>
          <span className="settings__delete-title">Delete your account</span>
        </div>
        <form className="settings__form">
          <label>Profile Picture</label>
          <div className="settings__profile-picture">
            <img src={settingsPhoto} alt="settings img" />
            <label htmlFor="fileInput">
              <i class="settings__profile-icon fa-solid fa-user"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
            ></input>
          </div>
          <label>Username</label>
          <input type="text" placeholder="Lidija" />
          <label>Email</label>
          <input type="email" placeholder="lidija@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settings__button">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
