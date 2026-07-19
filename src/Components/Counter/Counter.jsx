import "./Counter.css";

function Counter() {
  return (
    <section className="counter">

      <div className="counter-overlay">

        <div className="counter-heading">
          <p>OUR ACHIEVEMENTS</p>
          <h2>Building Trust Through Results</h2>
        </div>

        <div className="counter-container">

          <div className="counter-card">
            <h3>500+</h3>
            <p>Properties Sold</p>
          </div>

          <div className="counter-card">
            <h3>1200+</h3>
            <p>Happy Clients</p>
          </div>

          <div className="counter-card">
            <h3>10+</h3>
            <p>Years Experience</p>
          </div>

          <div className="counter-card">
            <h3>100%</h3>
            <p>Client Satisfaction</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Counter;