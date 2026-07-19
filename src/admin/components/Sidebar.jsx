import { Link } from "react-router-dom";
import "../css/sidebar.css";

function Sidebar() {

  const logoutHandler = () => {
    localStorage.removeItem("adminInfo");
    window.location.href = "/admin/login";
  };

  return (
    <div className="sidebar">

      <h2>I-STONE</h2>

      <ul>

        <li>
          <Link to="/admin/dashboard">
            Dashboard
          </Link>
        </li>

        <li>
          <Link to="/admin/properties">
            Properties
          </Link>
        </li>

        <li>
          <Link to="/admin/add-property">
            Add Property
          </Link>
        </li>

        <li>
          <button
            className="logout-btn"
            onClick={logoutHandler}
          >
            Logout
          </button>
        </li>

      </ul>

    </div>
  );
}

export default Sidebar;