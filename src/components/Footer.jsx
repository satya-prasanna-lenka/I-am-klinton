import React from "react";
import "./app.css";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaFacebookMessenger,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div id="footer" className="foot_main">
      <h1>I'M KLINTON</h1>
      <div className="foot_links">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="social_foot">
        <a target="_blank" href="https://www.facebook.com/satyaprasanna.lenka">
          <FaFacebookSquare />
        </a>
        <a href="#">
          <FaTwitterSquare />
        </a>
        <a target="_blank" href="https://m.me/satyaprasanna.lenka">
          <FaFacebookMessenger />
        </a>
      </div>
      <p>&copy; Satya prasanna lenka | All rights reserved</p>
    </div>
  );
};

export default Footer;
