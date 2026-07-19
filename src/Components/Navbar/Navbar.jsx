import "./Navbar.css";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container">
          <p>Welcome to I-STONE Marketing & Consultants</p>

          <div className="top-right">
            <a href="tel:+923358210101" className="phone-link">
              <p>📞 0335-8210101</p>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="navbar">
        <div className="container">

          {/* Logo */}
          <div className="logo">
            <img src={logo} alt="I-STONE Logo" />
          </div>

          {/* Navigation */}
          <nav>
            <ul className={menuOpen ? "nav-links active" : "nav-links"}>

              <li>
                <Link to="/" onClick={closeMenu}>Home</Link>
              </li>

              <li>
                <Link to="/about" onClick={closeMenu}>About</Link>
              </li>

              <li>
                <Link to="/properties" onClick={closeMenu}>Properties</Link>
              </li>

              <li>
                <Link to="/services" onClick={closeMenu}>Services</Link>
              </li>

              <li>
                <Link to="/contact" onClick={closeMenu}>Contact</Link>
              </li>

            </ul>
          </nav>

          {/* Desktop Button */}
          <button
            className="contact-btn"
            onClick={() =>
              window.open(
                "https://wa.me/923007339654?text=Hello%20I-STONE%20Marketing%20%26%20Consultants,%20I%20am%20interested%20in%20your%20services.",
                "_blank"
              )
            }
          >
            Get In Touch
          </button>

          {/* Mobile Menu Icon */}
          <div
            className="menu-icon"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </div>

        </div>
      </header>
    </>
  );
}

export default Navbar;