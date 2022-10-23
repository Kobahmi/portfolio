import React from "react";
import { TextScramble } from "@a7sc11u/scramble";
import arrow from "../images/arrow.svg";

const Name = () => {
  const handleComplete = () => {
    console.log("scramble is done");
  };

  return (
    <section className="name-page" id="name-page">
      <h1>Nobel Lamun</h1>
      <h2 id="text1">
        <TextScramble
          as="div"
          play={true}
          speed={0.4}
          scramble={8}
          step={1}
          stepInterval={1}
          seed={3}
          seedInterval={10}
          onComplete={handleComplete}
          text="Front-end Developer"
        />
      </h2>
      <a href="#about-page" className="arrow-button">
        <img className="arrow-down" src={arrow} alt="arrow" />
      </a>
    </section>
  );
};

export default Name;
