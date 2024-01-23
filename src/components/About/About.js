import React from "react";
import "./About.css"; 

const About = ({toggleAbout}) => {
  return (
    <div className="about">
      <div className="about-container">
      <h2>קצת עליי</h2>
      <p>
        נעים להכיר, חיה(:<br></br>
        חושבת וכותבת שירים בזמני הלא פנוי,<br></br>
        כי השירים באים מתי שלא מתכוונים אליהם.<br></br>
        אבל תמיד הם באים, כותבים את עצמם ואת החיים.<br></br>
        <br></br>
        מבטיחה לעדכן תמיד את כל השירים שעוד יבואו.<br></br>
        עד אז, בהנאה! קריאה מועילה.
        
      </p>
      <div className="back-to-poems" onClick={toggleAbout}>
          בחזרה לשירים
      </div>
    </div>
  </div>
  );
};

export default About;
