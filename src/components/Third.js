import React from "react";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import html from "../images/html.svg";
import css from "../images/css.svg";
import js from "../images/js.svg";
import npm from "../images/npm.svg";
import git from "../images/git.svg";
import prettier from "../images/prettier.svg";
import weather from "../images/weather.gif";
import library from "../images/library.gif";
import webpack from "../images/webpack.svg";
import eslint from "../images/eslint.png";
import github from "../images/github.svg";
import computer from "../images/computer.svg";

const Third = () => {
  return (
    <section className="first-page">
      <div className="project">
        {" "}
        <Flip top cascade>
          <div className="text-info">
            <h1>Weather App</h1>
            <div className="technologies-container">
              <img className="technologies" src={html} alt="html" />
              <img className="technologies" src={css} alt="css" />
              <img className="technologies" src={js} alt="js" />
              <img className="technologies" src={webpack} alt="react" />
              <img className="technologies" src={npm} alt="npm" />
              <img className="technologies" src={git} alt="git" />
              <img className="technologies" src={prettier} alt="prettier" />
              <img className="technologies" src={eslint} alt="eslint" />
            </div>
            <p>
              Minimalist weather app with imperial and metric units. Fully
              responsive, tablet and phone friendly.
            </p>
            <div className="button-container">
              <a href="https://kobahmi.github.io/weather-app/">
                Live
                <img src={computer} alt="computer" />
              </a>
              <a href="https://github.com/Kobahmi/weather-app">
                Code
                <img src={github} alt="github" />
              </a>
            </div>
          </div>{" "}
        </Flip>
        <Fade>
          <img className="info-gif" src={weather} alt="weather" />
        </Fade>
      </div>
      <div className="project">
        <Fade>
          <img className="info-gif" src={library} alt="library" />
        </Fade>
        <Flip top cascade>
          <div className="text-info">
            <h1>Library App</h1>
            <div className="technologies-container">
              <img className="technologies" src={html} alt="html" />
              <img className="technologies" src={css} alt="css" />
              <img className="technologies" src={js} alt="js" />
              <img className="technologies" src={npm} alt="npm" />
              <img className="technologies" src={git} alt="git" />
              <img className="technologies" src={prettier} alt="prettier" />
            </div>
            <p>
              Virtual library web app. Fully responsive, tablet and phone
              friendly.
            </p>
            <div className="button-container">
              <a href="https://kobahmi.github.io/Library/">
                Live
                <img src={computer} alt="computer" />
              </a>
              <a href="https://github.com/Kobahmi/Library">
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

export default Third;
