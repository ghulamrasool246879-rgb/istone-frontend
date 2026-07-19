import { Helmet } from "react-helmet-async";
import "./Services.css";
import servicesImg from "../assets/images/services.jpg";
import PageTransition from "../components/PageTransition/PageTransition";


function Services() {
  return (
    <>
    <Helmet>
  <title>Real Estate Services | I-STONE Marketing & Consultants</title>

  <meta
    name="description"
    content="Residential and commercial property sales, investment consultancy, legal verification, rental services and overseas property assistance."
  />
</Helmet>
<PageTransition>


      {/* Hero */}

      <section className="services-hero">
        <section
  className="services-hero"
  style={{
    backgroundImage: `url(${servicesImg})`,
  }}
></section>

        <div className="overlay">

          <h1>Our Professional Services</h1>

          <p>
            Complete Real Estate Solutions Across Islamabad &
            Rawalpindi.
          </p>

        </div>

      </section>

      {/* Introduction */}

      <section className="services-intro">

        <div className="container">

          <span>WHAT WE DO</span>

          <h2>Professional Real Estate Services</h2>

          <div className="line"></div>

          <p>
            At I-STONE Marketing & Consultants, we provide complete
            real estate solutions for residential, commercial, and
            investment properties. Whether you are buying your first
            home, selling property, investing in a commercial project,
            or searching for profitable opportunities, our experienced
            consultants guide you through every step.
          </p>

        </div>

      </section>

      {/* Service Cards */}

      <section className="services-section">

        <div className="container">

          <div className="services-grid">

            <div className="service-card">
              <h3>🏡 Buy Property</h3>
              <p>
                Verified residential plots, houses, apartments,
                farmhouses, and commercial properties across
                Islamabad & Rawalpindi.
              </p>
            </div>

            <div className="service-card">
              <h3>💰 Sell Property</h3>
              <p>
                Professional marketing, property promotion,
                genuine buyers, and transparent transactions.
              </p>
            </div>

            <div className="service-card">
              <h3>📈 Investment Consultancy</h3>
              <p>
                Smart investment planning for CDA sectors,
                DHA, Bahria Town, Capital Smart City,
                Park View City and many more.
              </p>
            </div>

            <div className="service-card">
              <h3>🏢 Commercial Property</h3>
              <p>
                Offices, shops, plazas, commercial plots,
                warehouses and investment buildings.
              </p>
            </div>

            <div className="service-card">
              <h3>📄 Property Verification</h3>
              <p>
                Complete legal verification, ownership checking,
                transfer assistance and documentation support.
              </p>
            </div>

            <div className="service-card">
              <h3>🌍 Overseas Pakistanis</h3>
              <p>
                Secure property investment and buying services
                for Pakistanis living abroad.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Why Choose */}

      <section className="why-services">

        <div className="container">

          <span>WHY CHOOSE US</span>

          <h2>Why Clients Trust I-STONE</h2>

          <div className="line"></div>

          <div className="features">

            <div>✔ Verified Properties</div>
            <div>✔ Honest Consultancy</div>
            <div>✔ Legal Documentation</div>
            <div>✔ Experienced Team</div>
            <div>✔ Investment Planning</div>
            <div>✔ Residential & Commercial Experts</div>
            <div>✔ Transparent Deals</div>
            <div>✔ Customer Satisfaction</div>

          </div>

        </div>

      </section>

      {/* Process */}

      <section className="process">

        <div className="container">

          <span>HOW WE WORK</span>

          <h2>Our Working Process</h2>

          <div className="line"></div>

          <div className="process-grid">

            <div className="step">
              <h3>01</h3>
              <h4>Consultation</h4>
              <p>Understand your property requirements.</p>
            </div>

            <div className="step">
              <h3>02</h3>
              <h4>Property Search</h4>
              <p>Find verified properties that match your needs.</p>
            </div>

            <div className="step">
              <h3>03</h3>
              <h4>Documentation</h4>
              <p>Complete legal verification and paperwork.</p>
            </div>

            <div className="step">
              <h3>04</h3>
              <h4>Successful Deal</h4>
              <p>Safe, transparent and hassle-free transactions.</p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="services-cta">

        <div className="container">

          <h2>Need Professional Property Advice?</h2>

          <p>
            Contact I-STONE Marketing & Consultants today and let
            our experts help you find the perfect property.
          </p>

          <a
            href="https://wa.me/923007339654"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn"
          >
            Contact on WhatsApp
          </a>

        </div>

      </section>
      </PageTransition>

    </>
  );
}

export default Services;