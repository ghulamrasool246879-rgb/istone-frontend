import "./Hero.css";
import HeroImage from "../../assets/images/hero.jpg";

function Hero() {
  return (
    <section className="hero">

      <img
        src={HeroImage}
        alt="Luxury Home"
        className="hero-image"
      />

    </section>
  );
}

export default Hero;