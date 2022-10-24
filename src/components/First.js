import React from "react";
import teslagif from "../images/tesla.gif";
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
import Zoom from "react-reveal/Zoom";

const First = () => {
  return (
    <section className="first-page">
      <div className="project">
        <div className="text-info">
          <h1>
            <Flip top cascade>
              Tesla Clone
            </Flip>
          </h1>

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

          <Flip top>
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
          </Flip>
        </div>
        <Zoom>
          <img className="info-gif" src={teslagif} alt="tesla gif" />
        </Zoom>
      </div>
      <div className="project">
        <Zoom>
          <img className="info-gif" src={shoppinggif} alt="shoppy" />
        </Zoom>
        <div className="text-info">
          <Flip top cascade>
            <h1>Unreal Polish</h1>
          </Flip>

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

          <Flip top>
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
          </Flip>
        </div>
      </div>
    </section>
  );
};

export default First;
