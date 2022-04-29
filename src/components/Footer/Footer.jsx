import React from "react";
import "./Footer.css";
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <div className="footer">
      <hr style={{ width: "90%", marginTop: 20 }} />
      <span className="name">
        Made by 🥰 {" "}
        <a href="" target="__blank">
          Oyedolacode
        </a>
      </span>
      <div className="iconContainer">
        <a href="https://twitter.com/Oyedola" target="__blank">
        <TwitterIcon />
        </a>
        <a href="https://www.linkedin.com/in/oluwasegun-oyedola/" target="__blank">
          <LinkedInIcon />
        </a>
        <a href="" target="__blank">
          <i className="fab fa-youtube fa-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;