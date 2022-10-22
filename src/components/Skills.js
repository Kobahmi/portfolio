import React from "react";
import Fade from "react-reveal/Fade";
import react from "../images/react.svg";
import responsive from "../images/responsive.png";
import wcag from "../images/wcag.png";
import webpack from "../images/webpack.svg";
import eslint from "../images/eslint.png";
import jest from "../images/jest.png";
import test from "../images/test.png";
import router from "../images/react-router.svg";
import html from "../images/html.svg";
import css from "../images/css.svg";
import js from "../images/js.svg";
import prettier from "../images/prettier.svg";
import git from "../images/git.svg";
import node from "../images/node.svg";
import npm from "../images/npm.svg";
import mongodb from "../images/mongodb.svg";

const Skills = () => {
  return (
    <section className="skills-page" id="skills-page">
      <Fade right cascade>
        <h1 className="skills-background">SKILLS</h1>
      </Fade>
      <div className="skills-grid">
        <div className="skills-container">
          <ul>
            <li>
              <img src={responsive} alt="responsive" />
              Responsive & Adaptive design
            </li>
            <li>
              <img src={wcag} alt="wcag" />
              Web Content Accessibility Guideline
            </li>
            <li>
              <img src={react} alt="react" />
              React
            </li>
            <li>
              <img src={webpack} alt="webpack" />
              Webpack
            </li>
          </ul>
        </div>

        <div className="skills-container">
          <ul>
            <li>
              <img src={eslint} alt="eslint" />
              ESLint
            </li>
            <li>
              <img src={jest} alt="jest" />
              Jest
            </li>
            <li>
              <img src={test} alt="test" />
              Test Driven Development
            </li>
            <li>
              <img src={router} alt="router" />
              React-Router
            </li>
          </ul>
        </div>
        <div className="skills-container">
          <ul>
            <li>
              <img src={prettier} alt="prettier" />
              Prettier
            </li>
            <li>
              <img src={html} alt="html" />
              HTML
            </li>
            <li>
              <img src={css} alt="css" />
              CSS
            </li>
            <li>
              <img src={js} alt="js" />
              Javascript
            </li>
          </ul>
        </div>
        <div className="skills-container">
          <ul>
            <li>
              <img src={git} alt="git" />
              Git
            </li>
            <li>
              <img src={npm} alt="npm" />
              NPM
            </li>
            <li>
              <img src={node} alt="node" />
              NodeJS (Learning)
            </li>
            <li>
              <img src={mongodb} alt="mongodb" />
              MongoDB (Learning)
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
