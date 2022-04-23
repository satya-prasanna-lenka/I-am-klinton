import React from "react";
import "./app.css";
import { FaMailBulk, FaFacebookMessenger, FaWhatsapp } from "react-icons/fa";
import emailjs from "emailjs-com";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xd6hldm",
        "template_1edmjin",
        form.current,
        "CH3HY_yDzJEn9piYR"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <div id="contact">
      <div className="contact_main">
        <div className="con_text">
          <p>Get In Touch</p>
          <h3>Contact Me</h3>
        </div>
        <div className="con_main_box">
          <div className="con_left">
            <div className="con_box">
              <FaMailBulk />
              <h5>Email</h5>
              <p>satyale39@gmail.com</p>
              <a href="mailto:satyale39@gmail.com">Sent a message</a>
            </div>
            <div className="con_box">
              <FaFacebookMessenger />
              <h5>Messenger</h5>
              <p>satya prasanna lenka</p>
              <a target="_blank" href="https://m.me/satyaprasanna.lenka">
                Sent a message
              </a>
            </div>
            <div className="con_box">
              <FaWhatsapp />
              <h5>WhatsApp</h5>
              <p>8280799142</p>
              <a href="https://api.whatsapp.com/send?phone=+918280799142">
                Sent a meaasge
              </a>
            </div>
          </div>
          <div className="con_right">
            <form ref={form} onSubmit={sendEmail}>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your First Name"
              />
              <input type="email" name="email" placeholder="Your Email" />
              <textarea
                name="msg"
                id="msg"
                cols="30"
                rows="5"
                placeholder="Your Message"
              ></textarea>
              <button className="submit_btn" type="submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
