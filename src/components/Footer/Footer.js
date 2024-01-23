// Footer.js
import React from "react";
import "./Footer.css";

const Footer = ({ toggleAbout, togglePoems, toggleContact }) => {
  return (
    <div className="footer">
      <div className="about-click" onClick={() => { toggleAbout();  }}>        
      <span className="link">
        אודות 
      </span>

      </div>

      <div className="poems-click" onClick={() => { togglePoems();  }}>        
      <span className="link">
        שירים 
      </span>
      </div>

      <div className="contact-click" onClick={() => { toggleContact();  }}>        
      <span className="link">
        יצירת קשר
        </span>
       </div>
    </div>
  );
};

export default Footer;