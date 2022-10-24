import React from "react";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <section className="about-page" id="about-page">
      <Fade left cascade>
        <h1 className="about-background">ABOUT</h1>
      </Fade>

      <p>
        Front-end developer with a passion for new technologies and who cares
        deeply about user experience.
      </p>
    </section>
  );
};

export default About;
