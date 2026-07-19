import "./WhatsAppButton.css";
import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/923007339654?text=Hello%20I-STONE%20Marketing%20%26%20Consultants,%20I%20am%20interested%20in%20your%20properties."
      className="whatsapp-btn"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp />
      <span>Chat with us</span>
    </a>
  );
}

export default WhatsAppButton;