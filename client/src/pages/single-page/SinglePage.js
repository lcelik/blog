import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "../single-page/singlepage.scss";
import SinglePost from "../../components/single-post/SinglePost";

export default function SinglePage() {
  return (
    <div className="single-page">
      <SinglePost />
      <Sidebar />
    </div>
  );
}
