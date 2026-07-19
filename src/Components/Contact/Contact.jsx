import "./Contact.css";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";

function Contact() {
  return (
    
    <section className="contact">

      <div className="contact-heading">

        <p>CONTACT US</p>
        

        <h2>Let's Find Your Perfect Property</h2>

        <span></span>

        <p>
          Have questions or looking for your next investment?
          Get in touch with I-STONE Marketing & Consultants.
          Our team is ready to assist you.
        </p>

      </div>

      <div className="contact-container">

        {/* Left Side */}

       <div className="info-box">
  <a href="tel:+923358210101" className="phone-link">
    <h3>📞 Phone</h3>
    <p>0335-8210101</p>
  </a>
</div>

<div className="info-box">
  <a
    href="https://wa.me/923007339654"
    target="_blank"
    rel="noopener noreferrer"
    className="whatsapp-link"
  >
    <h3>
      <FaWhatsapp className="whatsapp-icon" /> WhatsApp
    </h3>

    <p>+92 300 7339654</p>
  </a>
</div>



<div className="info-box">
  <h3>📍 Office</h3>
  <p>Office number 14 floor 3rd Capital Plaza G11 Markaz Islamabad, Pakistan</p>
</div>

<div className="info-box">
  <h3>🕒 Office Hours</h3>
  <p>Monday - Saturday</p>
  <p>9:00 AM - 10:00 PM</p>
</div>
      </div>

    </section> 
  );
}

export default Contact;