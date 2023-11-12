import React from "react";
import "./Header.css"; // Import styles for Header component
import logo from "../../poetry.jpg";

const Header = () => {



  return (
    <header className="header">
      <h1 className="header-title/">שירים של תמיד </h1> 
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo-image" />
      </div>
    </header>
  );
};

export default Header;
