import "./Leadership.css";

import ceo from "../../assets/team/ceo.jpg";
import manager from "../../assets/team/manager.jpg";

function Leadership() {
  return (
    <section className="leadership">

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

          <h4>Director</h4>

          <p>
            Leading I-STONE Marketing & Consultants with a vision to deliver
  trusted real estate solutions and exceptional client value.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Leadership;