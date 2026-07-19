import "./About.css";
import { Helmet } from "react-helmet-async";
import PageTransition from "../components/PageTransition/PageTransition";

import aboutImg from "../assets/images/about.jpg";
import ceo from "../assets/team/ceo.jpg";
import manager from "../assets/team/manager.jpg";


function About() {
  return (
    <>
<Helmet>
  <title>About Us | I-STONE Marketing & Consultants</title>

  <meta
    name="description"
    content="Learn about I-STONE Marketing & Consultants, our leadership, experience, mission and trusted real estate services across Islamabad and Rawalpindi."
  />
</Helmet>
<PageTransition>
  <section className="about" id="about">

      <div className="about-container">

        <div className="about-image">
          <img
  src={aboutImg}
  alt="About I-STONE"
/>
        </div>

        <div className="about-content">

          <span>ABOUT US</span>

          <h2>
            Trusted Real Estate Experts in
            Islamabad & Rawalpindi
          </h2>

          <p>
            I-STONE Marketing & Consultants is a trusted real estate
            company dedicated to helping clients buy, sell, and invest
            in premium residential and commercial properties.
          </p>

          <p>
            With honesty, transparency, and professional guidance,
            we strive to provide secure investment opportunities and
            exceptional customer service for every client.
          </p>

          <div className="about-stats">

            <div>
              <h3>10+</h3>
              <p>Years Experience</p>
            </div>

            <div>
              <h3>500+</h3>
              <p>Happy Clients</p>
            </div>

            <div>
              <h3>1000+</h3>
              <p>Properties Sold</p>
            </div>

          </div>

          <a
            href="https://wa.me/923007339654"
            target="_blank"
            rel="noopener noreferrer"
            className="about-btn"
          >
            Contact Us
          </a>

        </div>

      </div>

    
          <div className="section-heading">
            <p>OUR LEADERSHIP</p>
    
            <h2>Meet Our Leadership Team</h2>
    
            <span></span>
    
            <p>
              Our experienced leadership team is committed to delivering
              trusted real estate solutions with professionalism,
              transparency and integrity.
            </p>
          </div>
    
          <div className="team-container">
    
            <div className="team-card">
    
              <img src={ceo} alt="CEO" />
    
              <h3>Ghulam Rasool</h3>
    
              <h4>Chief Executive Officer</h4>
    
              <p>
                Leading I-STONE with years of experience in real estate,
                property investment and business development.
              </p>
    
            </div>
    
            <div className="team-card">
    
              <img src={manager} alt="Manager" />
    
              <h3>Alyan Khan</h3>
    
              <h4>General Manager</h4>
    
              <p>
                Helping clients find the best investment opportunities
                across Islamabad and Rawalpindi.
              </p>
    
            </div>
    
          </div>
     </section>
     </PageTransition>
     </>
     
  );
}

export default About;