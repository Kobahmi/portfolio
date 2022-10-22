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

const Second = () => {
  return (
    <section className="first-page">
      <div className="project">
        {" "}
        <Flip left cascade>
          <div className="text-info">
            <h1>Battlecat Game</h1>
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
              Battleship game web app, but with cats! Player versus Computer.
              Responsive design.
            </p>
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
          </div>{" "}
        </Flip>
        <Flip top>
          <img className="info-gif" src={battleship} alt="Battleship" />
        </Flip>
      </div>
      <div className="project">
        <Flip top>
          <img className="info-gif" src={memory} alt="shoppy" />
        </Flip>
        <Flip left cascade>
          <div className="text-info">
            <h1>Memory Game</h1>
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
              Memory game app with Eevee and friends! Fully responsive, tablet
              and phone friendly.
            </p>
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
          </div>
        </Flip>
      </div>
    </section>
  );
};

export default Second;
