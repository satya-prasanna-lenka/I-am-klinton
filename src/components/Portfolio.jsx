import React from "react";
import "./app.css";
import dd from "../images/klinton.jpg";
import data from "./data";

const Portfolio = () => {
  return (
    <div id="portfolio" className="port_main">
      <div className="port_text">
        <p>My Recent Work</p>
        <h3>Portfolio</h3>
      </div>
      <div className="port_box">
        {data.map((all) => {
          const { id, image, title, github, demo } = all;
          return (
            <div className="my_port_box" key={id}>
              <img src={image} alt="Loading..." />
              <h3>{title}</h3>
              <div className="port_btn">
                <button className="git_btn">
                  <a target="_blank" href={github}>
                    Github
                  </a>
                </button>
                <button className="port_live">
                  <a target="_blank" href={demo}>
                    Live Demo
                  </a>
                </button>
              </div>
            </div>
          );
        })}
        {/* <div className="my_port_box">
          <img src={dd} height={300} alt="Loading..." />
          <h3>Lorem ipsum dolor sit amet consectetur.</h3>
          <div className="port_btn">
            <button className="git_btn">Github</button>
            <button className="port_live">Live Demo</button>
          </div>
        </div>
        <div className="my_port_box">
          <img src={dd} height={300} alt="Loading..." />
          <h3>Lorem ipsum dolor sit amet consectetur.</h3>
          <div className="port_btn">
            <button className="git_btn">Github</button>
            <button className="port_live">Live Demo</button>
          </div>
        </div>
        <div className="my_port_box">
          <img src={dd} height={300} alt="Loading..." />
          <h3>Lorem ipsum dolor sit amet consectetur.</h3>
          <div className="port_btn">
            <button className="git_btn">Github</button>
            <button className="port_live">Live Demo</button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Portfolio;
