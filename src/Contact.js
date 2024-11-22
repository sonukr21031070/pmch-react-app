
import React, { useState } from "react";
import "./Contact.css";
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {

    const { name, value } = e.target;
    setFormData({

      ...formData,
      [name]: value,
    });
    
   
    setErrors({
      ...errors,
      [name]: "",
    });
  };


  const validateForm = () => {
    let formErrors = {};

  
    if (!formData.name) {
      formErrors.name = "Name is required";
    }

  
    if (!formData.email) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email address is invalid";
    }

  
    if (!formData.message) {
      formErrors.message = "Message cannot be empty";
    }

    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   
    const formErrors = validateForm();

    if (Object.keys(formErrors).length === 0) {
     
      alert("Your message has been sent!");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } else {
     
      setErrors(formErrors);
    }
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>If you have any questions, feel free to reach out to us!</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Your Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          
          />
          {errors.name && <p className="error" style={{ color: "red" }}>{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email">Your Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
           
          />
          {errors.email && <p className="error" style={{ color: "red" }}>{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="message">Your Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          
          />
          {errors.message && <p className="error" style={{ color: "red" }}>{errors.message}</p>}
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactPage;
