import { Helmet } from "react-helmet-async";
import Hero from "../Components/Hero/Hero";
import FeaturedProperties from "../Components/FeaturedProperties/FeaturedProperties";
import About from "../Components/About/About";
import Leadership from "../Components/Leadership/Leadership";
import WhyChoose from "../Components/WhyChoose/WhyChoose";
import Counter from "../Components/Counter/Counter";
import Testimonials from "../Components/Testimonials/Testimonials";
import Contact from "../Components/Contact/Contact";
import Map from "../Components/Map/Map";
import PageTransition from "../Components/PageTransition/PageTransition";

function Home() {
  return (
    <>
      <Helmet>
        <title>
          I-STONE Marketing & Consultants | Real Estate in Islamabad & Rawalpindi
        </title>

        <meta
          name="description"
          content="Buy, sell and invest in CDA sectors, DHA Islamabad, PHA Flats, Bahria Town, Capital Smart City and all major societies of Islamabad & Rawalpindi with I-STONE Marketing & Consultants."
        />

        <meta
          name="keywords"
          content="Real Estate Islamabad, Property Islamabad, DHA Islamabad, CDA Sectors, PHA Flats, Bahria Town, Capital Smart City, Buy Plot Islamabad, Sell Property Rawalpindi"
        />

        <meta
          name="author"
          content="I-STONE Marketing & Consultants"
        />
      </Helmet>

      <PageTransition>
        <Hero />
        <FeaturedProperties />
        <About />
        <Leadership />
        <WhyChoose />
        <Counter />
        <Testimonials />
        <Contact />
        <Map />
      </PageTransition>
    </>
  );
}

export default Home;