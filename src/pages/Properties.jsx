import "./Properties.css";
import { Helmet } from "react-helmet-async";
import PageTransition from "../Components/PageTransition/PageTransition";

function Properties() {
  return (
    <>
      <Helmet>
        <title>Properties in Islamabad & Rawalpindi | I-STONE Marketing</title>

        <meta
          name="description"
          content="Explore CDA sectors, DHA Islamabad, PHA Flats, Bahria Town, Gulberg, Park View City, Capital Smart City and all major societies."
        />
      </Helmet>

      <PageTransition>
        {/* Hero Section */}
        <section className="properties-hero">
          <div className="overlay">
            <h1>Properties Across Islamabad & Rawalpindi</h1>

            <p>
              Buy, Sell & Invest in Premium Residential and Commercial
              Properties with I-STONE Marketing & Consultants.
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="properties-intro">
          <div className="container">
            <span>OUR PROPERTIES</span>

            <h2>Find the Perfect Property With Confidence</h2>

            <div className="line"></div>

            <p>
              I-STONE Marketing & Consultants provides complete real estate
              solutions throughout Islamabad and Rawalpindi. Our experienced
              consultants help individuals, families, investors and overseas
              Pakistanis buy, sell and invest in verified residential,
              commercial and investment properties.
            </p>

            <p>
              From CDA sectors and DHA Islamabad to Bahria Town, Capital Smart
              City, Gulberg Greens, Gulberg Residencia, Park View City, Blue
              World City, Faisal Hills, Multi Gardens (B-17), Top City-1, PHA
              Flats, Eighteen, University Town, Faisal Town, Nova City, Kingdom
              Valley and every major housing society, we provide honest advice,
              verified properties, transparent dealings and complete
              documentation support.
            </p>
          </div>
        </section>

        {/* Property Services */}
        <section className="property-services">
          <div className="container">
            <span>WHAT WE OFFER</span>

            <h2>Our Property Services</h2>

            <div className="line"></div>

            <div className="services-grid">
              <div className="service-card">
                <h3>🏡 Buy Property</h3>

                <p>
                  Residential plots, luxury homes, apartments, commercial plots
                  and offices.
                </p>
              </div>

              <div className="service-card">
                <h3>💰 Sell Property</h3>

                <p>
                  Professional marketing with genuine buyers and transparent
                  transactions.
                </p>
              </div>

              <div className="service-card">
                <h3>📈 Investment Consultancy</h3>

                <p>
                  Long-term and short-term investment opportunities with maximum
                  returns.
                </p>
              </div>

              <div className="service-card">
                <h3>📑 Property Verification</h3>

                <p>
                  Complete legal verification, file checking and ownership
                  confirmation.
                </p>
              </div>

              <div className="service-card">
                <h3>🌍 Overseas Pakistanis</h3>

                <p>
                  Secure property purchase, documentation and investment
                  consultancy from abroad.
                </p>
              </div>

              <div className="service-card">
                <h3>⚖ Legal Consultancy</h3>

                <p>
                  Property transfer, registry, documentation and legal
                  assistance.
                </p>
              </div>
            </div>
          </div>
        </section>
      </PageTransition>
    </>
  );
}

export default Properties;