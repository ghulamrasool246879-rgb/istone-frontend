import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

import "../css/addProperty.css";

const API_URL = import.meta.env.VITE_API_URL;

function EditProperty() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    city: "",
    society: "",
    propertyType: "",
    price: "",
    featured: false,
    description: "",
  });

  useEffect(() => {
    loadProperty();
  }, []);

  const loadProperty = async () => {
    try {
      const { data } = await axios.get(
        `${API_URL}/api/properties/${id}`
      );

      setFormData(data);
    } catch (error) {
      console.error(error);
      alert("Property not found.");
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const updateProperty = async (e) => {
    e.preventDefault();

    try {
      const adminInfo = JSON.parse(localStorage.getItem("adminInfo"));

      await axios.put(
        `${API_URL}/api/properties/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${adminInfo?.token}`,
          },
        }
      );

      alert("Property Updated Successfully");

      navigate("/admin/properties");
    } catch (error) {
      console.error(error);
      alert(
        error.response?.data?.message || "Update Failed"
      );
    }
  };

  return (
    <div className="admin-container">
      <Sidebar />

      <div className="admin-content">
        <Topbar />

        <div className="add-property">
          <h1>Edit Property</h1>

          <form onSubmit={updateProperty}>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />

            <select
              name="city"
              value={formData.city}
              onChange={handleChange}
            >
              <option value="Islamabad">Islamabad</option>
              <option value="Rawalpindi">Rawalpindi</option>
            </select>

            <input
              type="text"
              name="society"
              value={formData.society}
              onChange={handleChange}
              required
            />

            <select
              name="propertyType"
              value={formData.propertyType}
              onChange={handleChange}
            >
              <option value="Residential">Residential</option>
              <option value="Commercial">Commercial</option>
            </select>

            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
            />

            <textarea
              rows="5"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />

            <label>
              <input
                type="checkbox"
                name="featured"
                checked={formData.featured}
                onChange={handleChange}
              />
              Featured Property
            </label>

            <button type="submit">
              Update Property
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditProperty;