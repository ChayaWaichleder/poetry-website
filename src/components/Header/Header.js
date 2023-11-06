import React, { useState } from "react";
import "./Header.css"; // Import styles for Header component
import logo from "../../jar of love.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo-image" />
      </div>
    </header>
  );
};

export default Header;
