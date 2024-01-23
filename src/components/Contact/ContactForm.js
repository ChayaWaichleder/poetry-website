import React, { useState } from "react";
import axios from "axios";
import "./ContactForm.css"; // Import the CSS file for styling if you have one



const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errorMessage, setErrorMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    

    try {
      const response = await axios.post("http://localhost:3456/send-email", formData);
      console.log(response.data);
      // Handle success (e.g., show a success message to the user)
    } catch (error) {
      console.error(error);

      if (error.response && error.response.status === 404) {
        // Server endpoint not found
        setErrorMessage("  שגיאה בשליחת הטופס): אפשר לנסות שוב מאוחר יותר.");
      } else {
        // Other error
        setErrorMessage("Error submitting the form. Please try again later.");
      }
    }
  };

  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="שם"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </td>
              <td>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="אימייל"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <textarea
                  id="message"
                  name="message"
                  placeholder="כל מה שתרצו לספר לי"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button type="submit">מחכה לשמוע</button>
      </form>
      {errorMessage && (
        <div className="error-message">
          <p>{errorMessage}</p>
        </div>
      )}
      <div className="line-space" />
    </div>
  );
};

export default ContactForm;
