import React from "react";
import teslagif from "../images/tesla.gif";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import shoppinggif from "../images/shopping.gif";
import html from "../images/html.svg";
import css from "../images/css.svg";
import js from "../images/js.svg";
import react from "../images/react.svg";
import npm from "../images/npm.svg";
import git from "../images/git.svg";
import prettier from "../images/prettier.svg";
import router from "../images/react-router.svg";
import github from "../images/github.svg";
import computer from "../images/computer.svg";

const First = () => {
  return (
    <section className="first-page">
      <div className="project">
        {" "}
        <Flip top cascade>
          <div className="text-info">
            <h1>Tesla Clone</h1>
            <div className="technologies-container">
              <img className="technologies" src={html} alt="html" />
              <img className="technologies" src={css} alt="css" />
              <img className="technologies" src={js} alt="js" />
              <img className="technologies" src={react} alt="react" />
              <img className="technologies" src={npm} alt="npm" />
              <img className="technologies" src={git} alt="git" />
              <img className="technologies" src={prettier} alt="prettier" />
            </div>
            <p>
              Web app designed to look like Tesla's UI. Fully responsive, tablet
              and phone friendly.
            </p>
            <div className="button-container">
              <a href="https://kobahmi.github.io/tesla-clone/">
                Live
                <img src={computer} alt="computer" />
              </a>
              <a href="https://github.com/Kobahmi/tesla-clone">
                Code
                <img src={github} alt="github" />
              </a>
            </div>
          </div>
        </Flip>
        <Fade>
          <img className="info-gif" src={teslagif} alt="tesla gif" />
        </Fade>
      </div>
      <div className="project">
        <img className="info-gif" src={shoppinggif} alt="shoppy" />

        <Flip top cascade>
          <div className="text-info">
            <h1>Unreal Polish</h1>
            <div className="technologies-container">
              <img className="technologies" src={html} alt="html" />
              <img className="technologies" src={css} alt="css" />
              <img className="technologies" src={js} alt="js" />
              <img className="technologies" src={react} alt="react" />
              <img className="technologies" src={npm} alt="npm" />
              <img className="technologies" src={git} alt="git" />
              <img className="technologies" src={prettier} alt="prettier" />
              <img className="technologies" src={router} alt="router" />
            </div>
            <p>
              Web shopping app to buy nail polish. Fully responsive, tablet and
              phone friendly.
            </p>

            <div className="button-container">
              <a href="https://kobahmi.github.io/shopping-cart/">
                Live
                <img src={computer} alt="computer" />
              </a>
              <a href="https://github.com/Kobahmi/shopping-cart">
                Code
                <img src={github} alt="github" />
              </a>
            </div>
          </div>
        </Flip>
      </div>
    </section>
  );
};

export default First;
