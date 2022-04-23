import React from "react";
import "./app.css";
import { FaMicroblog, FaUsers, FaProjectDiagram } from "react-icons/fa";
import klinton from "../images/klinton.jpg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="main_about">
        <div className="about_me">
          <p>Ger To Know</p>
          <h4>About Me</h4>
        </div>
        <div className="vago">
          <div className="image_box">
            <div className="image_main">
              <img src={klinton} height={350} alt="" />
            </div>
          </div>

          <div className="right_box">
            <div className="right_main">
              <div className="boxes">
                <div className="box box1">
                  <FaMicroblog />
                  <h5>Experience</h5>
                  <p>1+ Year Working</p>
                </div>
                <div className="box box2">
                  <FaUsers />
                  <h5>Clients</h5>
                  <p>10+ Worldwide</p>
                </div>
                <div className="box box3">
                  <FaProjectDiagram />
                  <h5>Projects</h5>
                  <p>50+ Completed</p>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatem molestias repellat possimus non accusantium libero
                voluptatibus praesentium fugiat, ipsa sunt voluptatum eius
                sapiente enim quo sequi. Delectus doloremque iste quis. Lorem
                ipsum, dolor sit amet consectetur adipisicing elit. At sit
                similique, impedit necessitatibus temporibus illum minima ab
                nobis dignissimos nam dolore, cum nemo a ipsam eum quos ipsa
                earum molestiae?
              </p>

              <button className="talk_btn">
                <a
                  style={{ textDecoration: "none", color: "white" }}
                  href="#contact"
                >
                  Let's Talk
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
