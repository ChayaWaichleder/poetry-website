import React, { useState } from "react";
import axios from "axios";
import "./ContactForm.css"; // Import the CSS file for styling if you have one

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

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
      // Handle error (e.g., show an error message to the user)
    }
  };

  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="שם"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="אימייל"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          id="message"
          name="message"
          placeholder="כל מה שתרצו לספר לי"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">מחכה לשמוע</button>
      </form>
    </div>
  );
};

export default ContactForm;