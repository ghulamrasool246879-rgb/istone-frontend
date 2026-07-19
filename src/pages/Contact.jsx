import { Helmet } from "react-helmet-async";
import ContactSection from "../components/Contact/Contact";
import PageTransition from "../components/PageTransition/PageTransition";
import Map from "../components/Map/Map";


function Contact() {
  return (
    <>
    <Helmet>
  <title>Contact I-STONE Marketing & Consultants</title>

  <meta
    name="description"
    content="Visit our office at Office No. 14, 3rd Floor, Capital Plaza, G-11 Markaz Islamabad or contact us via phone and WhatsApp."
  />
</Helmet>
<PageTransition>

      <section className="page-banner">
        {/* <h1>Contact Us</h1>
        <p>We're here to help you find your perfect property.</p> */}
      </section>

      <ContactSection />
      <Map />
      </PageTransition>
    </>
  );
}

export default Contact;