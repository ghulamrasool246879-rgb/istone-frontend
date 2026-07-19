import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { Link } from "react-router-dom";
import "../css/properties.css";

function Properties() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:5000/api/properties"
      );

      setProperties(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProperty = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this property?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(
        `http://localhost:5000/api/properties/${id}`
      );

      fetchProperties();

    } catch (error) {
      alert("Delete Failed");
    }
  };

  return (
    <AdminLayout>
    <div className="admin-container">

      <Sidebar />

      <div className="admin-content">

        <Topbar />

        <h1 className="page-title">
          Manage Properties
        </h1>

        <table className="property-table">

          <thead>

            <tr>

              <th>Title</th>

              <th>City</th>

              <th>Society</th>

              <th>Category</th>

              <th>Featured</th>

              <th>Actions</th>

            </tr>

          </thead>

          <tbody>

            {properties.map((property) => (

              <tr key={property._id}>

                <td>{property.title}</td>

                <td>{property.city}</td>

                <td>{property.society}</td>

                <td>{property.propertyType}</td>

                <td>
                  {property.featured ? "Yes" : "No"}
                </td>

                <td>

                  <Link to={`/admin/edit-property/${property._id}`}>
    <button className="edit-btn">Edit</button>
    </Link>

                  <button
                    className="delete-btn"
                    onClick={() =>
                      deleteProperty(property._id)
                    }
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
    </AdminLayout>
  );
}

export default Properties;