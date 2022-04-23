import React from "react";
import "./app.css";
import { FaCheckSquare } from "react-icons/fa";

const Experience = () => {
  return (
    <div id="experience">
      <div className="main_experience">
        <div className="exp_text">
          <p>What Skills I Have</p>
          <h5>My Experience</h5>
        </div>
        <div className="all_exp">
          <div className="exp_box frontend">
            <div className="small_exp">
              <h3>Frontend Developer</h3>
              <div className="all_skills">
                <div className="skill">
                  <FaCheckSquare />
                  <div className="inside">
                    <h4>HTML</h4>
                    <p>Experience</p>
                  </div>
                </div>
                <div className="skill">
                  <FaCheckSquare />
                  <div className="inside">
                    <h4>CSS</h4>
                    <p>Experienced</p>
                  </div>
                </div>
                <div className="skill">
                  <FaCheckSquare />
                  <div className="inside">
                    <h4>JavaScript</h4>
                    <p>Experienced</p>
                  </div>
                </div>
                <div className="skill">
                  <FaCheckSquare />
                  <div className="inside">
                    <h4>Bootstrap</h4>
                    <p>Intermidate</p>
                  </div>
                </div>
                <div className="skill">
                  <FaCheckSquare />
                  <div className="inside">
                    <h4>TailWind</h4>
                    <p>Intermidate</p>
                  </div>
                </div>
                <div className="skill">
                  <FaCheckSquare />
                  <div className="inside">
                    <h4>React</h4>
                    <p>Experienced</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="exp_box backend">
            <div className="small_exp">
              <h3>Backend Developer</h3>
              <div className="all_skills">
                <div className="skill">
                  <FaCheckSquare />
                  <div className="inside">
                    <h4>Node JS</h4>
                    <p>Intermidate</p>
                  </div>
                </div>
                <div className="skill">
                  <FaCheckSquare />
                  <div className="inside">
                    <h4>Mongo DB</h4>
                    <p>Intermidate</p>
                  </div>
                </div>
                <div className="skill">
                  <FaCheckSquare />
                  <div className="inside">
                    <h4>PHP</h4>
                    <p>Experienced</p>
                  </div>
                </div>
                <div className="skill">
                  <FaCheckSquare />
                  <div className="inside">
                    <h4>MySQL</h4>
                    <p>Experienced</p>
                  </div>
                </div>
                <div className="skill">
                  <FaCheckSquare />
                  <div className="inside">
                    <h4>Express Js</h4>
                    <p>Intermidate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
