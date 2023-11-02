import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Poems from "./components/Poems/Poems";
import About from "./components/About/About"; 
import Contact from "./components/Contact/Contact"

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <div className="content-container">
        <div className="about">
          <About />
        </div>
        <div className="poems-container">
          <Poems />
        </div>
        <div className="contact-container">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default App;


