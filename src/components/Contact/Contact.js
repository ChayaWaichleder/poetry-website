import React from "react";
import ContactForm from "./ContactForm"; // Import the ContactForm component
import "./Contact.css"; // Import the CSS file for styling if you have one

const Contact = () => {
  return (
    <div className="contact-container">
      <table>
        <tbody>
          <tr>
            <td className="info">
              <div className="contact-info">
                <h2>גם לכם יש מה לומר?</h2>
                <p>
                  אשמח לשמוע(:
                  שלחו לי מייל ל:<strong>{/* Add a comment inside braces */}</strong>cgw9219@gmail.com
                  <br />
                  או מלאו פרטים כאן
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td className="form">
              <div className="contact-form">
                <ContactForm /> {/* Include the ContactForm component here */}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Contact;
