import React from "react";
import Fade from "react-reveal/Fade";
import github from "../images/github.svg";
import mail from "../images/mail.svg";
import linkedin from "../images/linkedin.svg";

const Contact = () => {
  return (
    <section className="contact-page" id="contact-page">
      <Fade left cascade>
        <h1 className="contact-background">CONTACT</h1>
      </Fade>

      <div className="link-container">
        <a href="https://github.com/Kobahmi">
          <img src={github} alt="github" />
        </a>
        <a href="mailto:nobellamun@gmail.com">
          <img src={mail} alt="mail" />
        </a>
        <a href="https://www.linkedin.com/in/nobel-lamun-4242b4246/">
          <img src={linkedin} alt="linkedin" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
