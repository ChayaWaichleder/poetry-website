// Poems.js
import React, { useState } from "react";
import "./Poems.css";
import { poems } from "./poemsList"; // Import the poems array directly

const Poems = ({ isAboutOpen, isContactOpen }) => {
  const [currentPoemIndex, setCurrentPoemIndex] = useState(0);
  const currentPoem = poems[currentPoemIndex];

  const createMarkup = (content) => {
    return { __html: content.replace(/\n/g, "<br />") };
  };

  const handleNextPoem = () => {
    setCurrentPoemIndex((prevIndex) => (prevIndex + 1) % poems.length);
  };

  const handlePrevPoem = () => {
    setCurrentPoemIndex((prevIndex) => (prevIndex - 1 + poems.length) % poems.length);
  };

  return (
    <div className="poem-container">
      <div className="poem-card">
        <h2 className="poem-title">{currentPoem.title}</h2>
        <div className="poem-content" dangerouslySetInnerHTML={createMarkup(currentPoem.content)} />
      </div>
      <div className="navigation-buttons">
        <button className="arrow-button" onClick={handlePrevPoem}>&lt; הקודם </button>
        <button className="arrow-button" onClick={handleNextPoem}> הבא &gt;</button>
      </div>
    </div>
  );
};

export default Poems;
