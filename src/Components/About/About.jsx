import "./About.css";
import AboutImage from "../../assets/About/about.jpg";
import { Link } from "react-router-dom";

function About() {
  return (
    <section className="about">

      <div className="about-container">

        {/* Left Side */}
        <div className="about-image">

          <img src={AboutImage} alt="About I-STONE" />

        </div>

        {/* Right Side */}
        <div className="about-content">

          <span className="section-tag">
            ABOUT I-STONE
          </span>

          <h2>
            Your Trusted Real Estate Partner
          </h2>

          <p>
            I-STONE Marketing & Consultants specializes in buying,
            selling, renting, and investment consultancy across
            Islamabad and Rawalpindi. We are committed to providing
            transparent, professional, and reliable real estate
            solutions tailored to your needs.
          </p>

          <div className="about-features">

            <div>✔ Verified Properties</div>
            <div>✔ Expert Investment Advice</div>
            <div>✔ Professional Consultants</div>
            <div>✔ Trusted Client Support</div>

          </div>

          <Link to="/about" className="learn-btn">
    Learn More
</Link>

        </div>

      </div>

    </section>
  );
}

export default About;