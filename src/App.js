import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Poems from "./components/Poems/Poems";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const toggleAbout = () => {
    setShowAbout(!showAbout);
  };

  const toggleContact = () => {
    setShowContact(!showContact);
  };

  return (
    <div className="app-container">
      <Header />
      <div className="content-container">
        <div
          className="about"
          style={{ display: showAbout ? "block" : "none" }}
        >
          <About />
        </div>
        <div className="poems-container">
          <Poems />
        </div>
        <div
          className="contact-container"
          style={{ display: showContact ? "block" : "none" }} >
          <Contact />
        </div>
      </div>
      <Footer toggleAbout={toggleAbout} toggleContact={toggleContact} />
    </div>
  );
};

export default App;
