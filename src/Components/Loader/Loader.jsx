import "./Loader.css";
import logo from "../../assets/images/logo.png";

function Loader() {
  return (
    <div className="loader-container">
      <div className="loader-content">
        <img src={logo} alt="I-STONE" className="loader-logo" />

        <h2>I-STONE Marketing & Consultants</h2>

        <p>Finding Your Perfect Property...</p>

        <div className="loader-spinner"></div>
      </div>
    </div>
  );
}

export default Loader;