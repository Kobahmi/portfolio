import React from "react";
import Name from "./components/Name";
import About from "./components/About";
import First from "./components/First";
import "./styles/style.css";
import Second from "./components/Second";
import Third from "./components/Third";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Name />
      <About />
      <First />
      <Second />
      <Third />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
