import "./Footer.css";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

       <div className="footer-container">

        {/* Company Info */}
        <div className="footer-col">
          <img src={logo} alt="I-STONE Logo" className="footer-logo" />

          <p>
            I-STONE Marketing & Consultants is committed to providing
            trusted real estate solutions across Islamabad and
            Rawalpindi with honesty, professionalism, and transparency.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-col">

          <h3>Quick Links</h3>

          <ul>
  <li>
    <Link to="/">Home</Link>
  </li>

  <li>
    <a href="#">Properties</a>
  </li>

  <li>
    <Link to="/about">About Us</Link>
  </li>

  <li>
    <a href="#">Contact</a>
  </li>
</ul>
        </div>

        {/* Services */}
        <div className="footer-col">

          <h3>Our Services</h3>

          <ul>
            <li>Buy Property</li>
            <li>Sell Property</li>
            <li>Property Investment</li>
            <li>Legal Consultancy</li>
          </ul>

        </div>

        {/* Contact */}
        {/* Contact */}
<div className="footer-col">

  <h3>Contact Info</h3>


  <a href="tel:+923358210101" className="phone-link">
    <h3>📞 Phone</h3>
    <p>0335-8210101</p>
  </a>


 
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


  <p>
    📍 Office No. 14, 3rd Floor,
    Capital Plaza, G-11,
    Islamabad
  </p>

  <p>🕒 Mon - Sat (9AM - 10PM)</p>

  <div className="social-icons">

    <a
  href="https://www.facebook.com/I%20STONE%20Marketing%20and%20Consultants"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaFacebookF />
</a>

    <a
  href="https://www.instagram.com/istone_marketing/"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaInstagram />
</a>

    <a
  href="https://www.tiktok.com/@istone.marketingc"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaTiktok />
</a>

     <a
  href="https://wa.me/923007339654?text=Hello%20I-STONE%20Marketing%20%26%20Consultants,%20I%20am%20interested%20in%20your%20properties."
  target="_blank"
  rel="noopener noreferrer"
>
  <FaWhatsapp />
</a>
  </div>

</div>

</div>
      <hr />

      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} I-STONE Marketing & Consultants.
          All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;