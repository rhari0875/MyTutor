import React, { useState } from 'react';
import axios from 'axios';
import '../Components/style.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:1000/contact/send', formData);
      alert('Message sent successfully');
      setFormData({ name: '', email: '', message: '' }); 
    } catch (error) {
      console.error('There was an error sending the message!', error);
      alert('Failed to send message');
    }
  };

  return (
    <div>
      <Header />
      <section className="contact-section" id="contact">
        <h3 className="contact-title">Contact Us</h3>
        <form className="contact-form" onSubmit={handleSubmit}>
          <textarea
            className="textarea"
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <textarea
            className="textarea"
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            className="textarea"
            rows="5"
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button className="submit-button" type="submit">
            Send Message
          </button>
        </form>
      </section>
      <Footer />
    </div>
  );
};

export default ContactSection;
