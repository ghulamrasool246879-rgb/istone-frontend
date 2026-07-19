import "./FeaturedProperties.css";
import PropertyCard from "./PropertyCard";

import cda from "../../assets/properties/cda.jpg";
import dha from "../../assets/properties/dha.jpg";
import pha from "../../assets/properties/pha.jpg";
import societies from "../../assets/properties/societies.jpg";

function FeaturedProperties() {

  const properties = [
    {
      image: cda,
      title: "All CDA Sectors",
      description:
        "Explore all CDA sectors with residential and commercial properties available for sale and rent.",
    },
    {
      image: dha,
      title: "DHA",
      description:
        "Find premium residential and commercial properties in DHA Islamabad.",
    },
    {
      image: pha,
      title: "PHA Flats",
      description:
        "Affordable apartments in prime locations for families and investors.",
    },
    {
      image: societies,
      title: "Islamabad & Rawalpindi All Societies",
      description:
        "Browse properties across all major housing societies in Islamabad and Rawalpindi.",
    },
  ];

  return (
    <section className="featured">

      <div className="featured-heading">
        <p>FEATURED PROPERTIES</p>
        <h2>Explore Properties</h2>
        <span>
          Discover the best investment opportunities in Islamabad &
          Rawalpindi.
        </span>
      </div>

      <div className="featured-grid">
        {properties.map((item, index) => (
          <PropertyCard
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

    </section>
  );
}

export default FeaturedProperties;