import React from "react";
import "../footer/footer.scss";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

export default function Footer() {
  return (
    <div className="footer">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="d-flex">
            <p className="p">London, United Kingdom</p>
          </div>
          <div className="d-flex">
            <p className="p">lidijacelik87@gmail.com</p>
          </div>
        </div>
        <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
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
          <p className="pt-3 text-center p">
            Copyright&copy;
            {new Date().getFullYear()}&nbsp; Lidija Celik | All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}
