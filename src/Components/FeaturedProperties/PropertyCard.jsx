import "./PropertyCard.css";
import { Link } from "react-router-dom";

function PropertyCard({ image, title, description }) {
  return (
    <Link to="/properties" className="featured-link">
  <div className="featured-card">
    <img src={image} alt={title} />

    <div className="card-content">
      <h3>{title}</h3>

      <div className="line"></div>

      <p>{description}</p>

      <button className="property-btn">
        View Properties →
      </button>
    </div>
  </div>
</Link>
  );
}

export default PropertyCard;