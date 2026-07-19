import "./Map.css";

function Map() {
  return (
    <section className="map-section">

      <div className="map-heading">

        <p>OUR LOCATION</p>

        <h2>Visit Our Office</h2>

        <span></span>

        <p>
          We welcome you to visit our office for professional real estate
          consultation. Our team is always ready to assist you.
        </p>

      </div>

      <div className="map-container">

        <iframe
          title="I-STONE Office Location"
          src="https://www.google.com/maps?q=Capital+Plaza+G-11+Islamabad&output=embed"
          loading="lazy"
          allowFullScreen=""
        ></iframe>

      </div>

    </section>
  );
}

export default Map;