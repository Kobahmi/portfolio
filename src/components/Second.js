import React from "react";
import Flip from "react-reveal/Flip";
import html from "../images/html.svg";
import css from "../images/css.svg";
import js from "../images/js.svg";
import react from "../images/react.svg";
import npm from "../images/npm.svg";
import git from "../images/git.svg";
import prettier from "../images/prettier.svg";
import battleship from "../images/battleship.gif";
import memory from "../images/memory.gif";
import webpack from "../images/webpack.svg";
import test from "../images/test.png";
import eslint from "../images/eslint.png";
import jest from "../images/jest.png";
import github from "../images/github.svg";
import computer from "../images/computer.svg";
import Zoom from "react-reveal/Zoom";

const Second = () => {
  return (
    <section className="first-page">
      <div className="project">
        <div className="text-info">
          <Flip top cascade>
            <h1>Battlecat Game</h1>
          </Flip>

          <div className="technologies-container">
            <img className="technologies" src={js} alt="js" />
            <img className="technologies" src={webpack} alt="react" />
            <img className="technologies" src={npm} alt="npm" />
            <img className="technologies" src={git} alt="git" />
            <img className="technologies" src={prettier} alt="prettier" />
            <img className="technologies" src={test} alt="prettier" />
            <img className="technologies" src={eslint} alt="eslint" />
            <img className="technologies" src={jest} alt="jest" />
          </div>

          <p>
            Battleship web game created using Test Driven Development + Webpack
            + ESLint + Javascript. Responsive design.
          </p>

          <Flip top>
            <div className="button-container">
              <a href="https://kobahmi.github.io/battleship/">
                Live
                <img src={computer} alt="computer" />
              </a>
              <a href="https://github.com/Kobahmi/battleship">
                Code
                <img src={github} alt="github" />
              </a>
            </div>
          </Flip>
        </div>
        <Zoom>
          <img className="info-gif" src={battleship} alt="Battleship" />
        </Zoom>
      </div>
      <div className="project">
        <Zoom>
          <img className="info-gif" src={memory} alt="shoppy" />
        </Zoom>

        <div className="text-info">
          <Flip top cascade>
            <h1>Memory Game</h1>
          </Flip>

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
            Memory game app with Eevee and friends! Created using React JS +
            Functional Components. Fully responsive.
          </p>

          <Flip top>
            <div className="button-container">
              <a href="https://kobahmi.github.io/memory-card-game/">
                Live
                <img src={computer} alt="computer" />
              </a>
              <a href="https://github.com/Kobahmi/memory-card-game">
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

export default Second;
