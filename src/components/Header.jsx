import React from "react";
import "./app.css";
import spl from "../images/spl.png";
import { FaLinkedin, FaGithub, FaStackOverflow } from "react-icons/fa";

const Header = () => {
  return (
    <div className="main_div">
      <div className="header_main">
        <h5>Hello, I'm</h5>
        <h1>
          Satya <span>prasanna</span> Lenka
        </h1>
        <p>Fullstack Developer</p>
        <div className="header_btn">
          <button className="download_btn">Download CV</button>
          <button className="tals_btn">
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="#contact"
            >
              Let's Talk
            </a>
          </button>
        </div>
      </div>
      <div className="image_icons">
        <div className="icon">
          <a
            style={{ color: "aqua" }}
            href="https://www.linkedin.com/in/satya-prasanna-lenka-996470219"
          >
            <FaLinkedin className="span1" />
          </a>
          <a
            style={{ color: "aqua" }}
            href="https://github.com/satya-prasanna-lenka"
          >
            <FaGithub className="span1" />
          </a>
          <a
            style={{ color: "aqua" }}
            href="https://stackoverflow.com/users/17472701/web-developer"
          >
            <FaStackOverflow className="span1" />
          </a>
        </div>
        <div className="image">
          <img src={spl} alt="" height={400} />
        </div>
        <div className="scroll">
          <a href="#footer" style={{ textDecoration: "none", color: "aqua" }}>
            <h6>Scroll Down</h6>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
