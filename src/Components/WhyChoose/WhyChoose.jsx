import "./WhyChoose.css";

function WhyChoose() {
  return (
    <section className="why-choose">

      <div className="why-heading">

        <p>WHY CHOOSE US</p>

        <h2>Why Choose I-STONE?</h2>

        <span></span>

        <p className="why-text">
          We provide trusted real estate consultancy services across
          Islamabad & Rawalpindi. Whether you are buying, selling or
          investing, our experienced team is here to help.
        </p>

      </div>

      <div className="why-grid">

        <div className="why-card">
          <div className="icon">🏆</div>
          <h3>10+ Years Experience</h3>
          <p>Professional real estate consultancy with years of market knowledge.</p>
        </div>

        <div className="why-card">
          <div className="icon">🤝</div>
          <h3>Trusted Deals</h3>
          <p>Transparent buying and selling process with complete client satisfaction.</p>
        </div>

        <div className="why-card">
          <div className="icon">📍</div>
          <h3>Prime Locations</h3>
          <p>CDA Sectors, DHA, PHA Flats and all major societies.</p>
        </div>

        <div className="why-card">
          <div className="icon">📄</div>
          <h3>Legal Guidance</h3>
          <p>Complete documentation and legal assistance throughout the process.</p>
        </div>

      </div>

    </section>
  );
}

export default WhyChoose;