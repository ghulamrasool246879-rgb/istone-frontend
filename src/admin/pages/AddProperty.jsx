import { useState } from "react";
import axios from "axios";
import AdminLayout from "../components/AdminLayout";
import "../css/addProperty.css";

function AddProperty() {
  const adminInfo = JSON.parse(localStorage.getItem("adminInfo"));

  const [formData, setFormData] = useState({
    title: "",
    city: "Islamabad",
    location: "",
    propertyType: "Residential",
    description: "",
    featured: false,
    images: [],
  });

  const changeHandler = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const imageHandler = (e) => {
    setFormData({
      ...formData,
      images: e.target.files,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();

      data.append("title", formData.title);
      data.append("city", formData.city);
      data.append("location", formData.location);
      data.append("propertyType", formData.propertyType);
      data.append("description", formData.description);
      data.append("featured", formData.featured);

      for (let i = 0; i < formData.images.length; i++) {
        data.append("images", formData.images[i]);
      }

      await axios.post(
        "http://localhost:5000/api/properties",
        data,
        {
          headers: {
            Authorization: `Bearer ${adminInfo.token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("Property Added Successfully");

      setFormData({
        title: "",
        city: "Islamabad",
        location: "",
        propertyType: "Residential",
        description: "",
        featured: false,
        images: [],
      });
    } catch (error) {
      console.log(error);
      alert(
        error.response?.data?.message || "Failed to Add Property"
      );
    }
  };

  return (
    <AdminLayout>
      <div className="add-property">

        <h1>Add Property</h1>

        <form onSubmit={submitHandler}>

          <input
            type="text"
            name="title"
            placeholder="Property Title"
            value={formData.title}
            onChange={changeHandler}
            required
          />

          <input
            type="file"
            multiple
            accept="image/*"
            onChange={imageHandler}
            required
          />

          <select
            name="city"
            value={formData.city}
            onChange={changeHandler}
          >
            <option value="Islamabad">Islamabad</option>
            <option value="Rawalpindi">Rawalpindi</option>
          </select>

          <input
            type="text"
            name="location"
            placeholder="Location / Society"
            value={formData.location}
            onChange={changeHandler}
            required
          />

          <select
            name="propertyType"
            value={formData.propertyType}
            onChange={changeHandler}
          >
            <option value="Residential">Residential</option>
            <option value="Commercial">Commercial</option>
            <option value="Plot">Plot</option>
            <option value="House">House</option>
            <option value="Apartment">Apartment</option>
          </select>

          <textarea
            name="description"
            placeholder="Property Description"
            rows="5"
            value={formData.description}
            onChange={changeHandler}
            required
          />

          <label>
            <input
              type="checkbox"
              name="featured"
              checked={formData.featured}
              onChange={changeHandler}
            />
            Featured Property
          </label>

          <button type="submit">
            Add Property
          </button>

        </form>

      </div>
    </AdminLayout>
  );
}

export default AddProperty;