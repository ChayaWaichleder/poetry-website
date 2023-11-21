// Footer.js
import React from "react";
import "./Footer.css";

const Footer = ({ toggleAbout, toggleContact }) => {
  return (
    <div className="footer">
      <div className="about-click">
        <a href="#" className="click" onClick={toggleAbout}>
        אודות
      </a>{" "}
      </div>
      
      <div className="contact-click">
        <a href="#" className="click" onClick={toggleContact}>
        יצירת קשר
      </a>
      </div>
    </div>
  );
};

export default Footer;
