import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "../settings/settings.scss";
import axios from "axios";
import { useContext } from "react";
import { Context } from "../../context/Context";
import { useState } from "react";

export default function Settings() {
  const [file, setFile] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post("http://localhost:5000/api/upload", data);
      } catch (err) {}
    }
    try {
      const response = await axios.put(
        "http://localhost:5000/api/users/" + user._id,
        updatedUser
      );
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: response.data });
    } catch (err) {
      dispatch({ type: "FAILURE" });
    }
  };

  return (
    <div className="settings">
      <div className="settings__container">
        <div className="settings__title">
          <span className="settings__update-title">Update your account</span>
          <span className="settings__delete-title">Delete your account</span>
        </div>
        <form className="settings__form" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settings__profile-picture">
            <img
              src={file ? URL.createObjectURL(file) : PF + user.profilePic}
              alt="settings img"
            />
            <label htmlFor="fileInput">
              <i class="settings__profile-icon fa-solid fa-user"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            ></input>
          </div>
          <label>Username</label>
          <input
            type="text"
            placeholder={user.username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder={user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="settings__button" type="submit">
            Update
          </button>
          {success && <span>Profile has been updated</span>}
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
