import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; 
import logo from "../../poetry.jpg";

const Header = ({togglePoems}) => {


  return (
    <header className="header">
      <h1>
      <a href="#Poems" className="header-title" onClick={togglePoems}>
          שירים של תמיד
      </a>
      </h1>
      <div className="logo-container">
        <a href="#Poems"onClick={togglePoems}>
        <img src={logo} alt="Logo" className="logo-image" />
        </a>
      </div>
    </header>
  );
};

export default Header;
