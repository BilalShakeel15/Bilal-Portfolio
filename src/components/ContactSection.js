import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/ContactSection.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [thankYouMessage, setThankYouMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log('Email sent:', result.text);
          setThankYouMessage(true);
          setFormData({ name: '', email: '', message: '' });
          setTimeout(() => setThankYouMessage(false), 3000);
        },
        (error) => {
          console.error('Error sending email:', error.text);
        }
      );

  };

  return (
    <div className="contact-section" id="contact">
      <h2 className="section-title">Contact Me</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" className="submit-btn">
          Send Message
        </button>
      </form>
      {thankYouMessage && <div className="thank-you-message">Thank you for reaching out!</div>}
    </div>
  );
};

export default ContactSection;
