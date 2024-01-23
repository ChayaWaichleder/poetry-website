import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Poems from "./components/Poems/Poems";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer";

const App = () => {
  const [showAbout, setShowAbout] = useState(false);
  const [poemsVisible, setPoemsVisible] = useState(true);
  const [showContact, setShowContact] = useState(false);

  const toggleAbout = () => {
    if (!showAbout) {
    setShowAbout(true);
    setShowContact(false);
    setPoemsVisible(false);
    }
  };


  const togglePoems = () => {
    if (!poemsVisible) {
    setPoemsVisible(true);
    setShowAbout(false);
    setShowContact(false);
    }
  };

  const toggleContact = () => {
    if (!showContact) {
    setShowContact(true);
    setShowAbout(false);
    setPoemsVisible(false);
    }
  };

  return (
    <div className="app-container">
      <Header togglePoems={togglePoems} />
      <div className="content-container">
      {showAbout && <About toggleAbout={toggleAbout} />}
      {showContact && <Contact toggleContact={toggleContact} />}
      {poemsVisible && !showAbout && !showContact && <Poems />}      <Footer toggleAbout={toggleAbout} togglePoems={togglePoems} toggleContact={toggleContact} />
      <Footer toggleAbout={toggleAbout} togglePoems={togglePoems} toggleContact={toggleContact} />    
    </div>
    </div>
  );
};

export default App;
