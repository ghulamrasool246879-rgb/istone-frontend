import "./Testimonials.css";

function Testimonials() {
  return (
    <section className="testimonials">

      <div className="testimonial-heading">

        <p>TESTIMONIALS</p>

        <h2>What Our Clients Say</h2>

        <span></span>

        <p>
          Our clients trust I-STONE Marketing & Consultants for
          honest advice, professional service and successful
          property transactions.
        </p>

      </div>

      <div className="testimonial-grid">

        <div className="testimonial-card">

          <div className="stars">★★★★★</div>

          <p>
            I-STONE helped us purchase our dream property.
            Their team guided us throughout the process with
            complete transparency.
          </p>

          <h3>Muhammad Ahmed</h3>

          <h4>Home Buyer</h4>

        </div>

        <div className="testimonial-card">

          <div className="stars">★★★★★</div>

          <p>
            Professional consultants with excellent market
            knowledge. I highly recommend I-STONE for
            property investment.
          </p>

          <h3>Ali Hassan</h3>

          <h4>Investor</h4>

        </div>

        <div className="testimonial-card">

          <div className="stars">★★★★★</div>

          <p>
            Selling my property was quick and hassle-free.
            The team handled everything professionally.
          </p>

          <h3>Usman Khan</h3>

          <h4>Property Seller</h4>

        </div>

      </div>

    </section>
  );
}

export default Testimonials;