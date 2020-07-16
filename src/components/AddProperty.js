import React, { useState } from "react";
import "../styles/AddProperty.css";
import Alert from "./Alert";

const axios = require("axios");

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
      city: "",
      type: "",
      bedrooms: "",
      bathrooms: "",
      price: "",
      email: "",
    },
    alert: {
      message: "",
      isSuccess: false,
    },
  };

  const [fields, setFields] = useState(initialState.fields);
  const [alert, setAlert] = useState(initialState.alert);

  const handleAddProperty = (event) => {
    event.preventDefault();
    // console.log(fields);
    setAlert({ message: "", isSuccess: false });
    axios
      .post(`http://localhost:4000/api/v1/PropertyListing`, {
        ...fields,
      })
      .then((response) => {
        console.log(response);
        setAlert({
          message: "Property Added",
          isSuccess: true,
        });
      })
      .catch((error) => {
        console.log(error);
        setAlert({
          message: "Server error, Please try again later",
          isSuccess: false,
        });
      });
  };

  const handleFieldChange = (event) => {
    const changeField = event.target.name;
    const newValue = event.target.value;
    setFields({ ...fields, [changeField]: newValue });
    console.log(fields);
  };

  return (
    <>
      <div className="add-property">
        <form onSubmit={handleAddProperty}>
          <Alert message={alert.message} success={alert.isSuccess} />
          <label htmlFor="title" className="form-label">
            Title
            <input
              placeholder="Property Description"
              type="text"
              id="title"
              name="title"
              value={fields.title}
              onChange={handleFieldChange}
            />
          </label>

          <label htmlFor="city" className="form-label">
            <select
              id="city"
              name="city"
              value={fields.city}
              onChange={handleFieldChange}
            >
              <option value="">Choose a city</option>
              <option value="Manchester">Manchester</option>
              <option value="Leeds">Leeds</option>
              <option value="Shefield">Shefield</option>
              <option value="Liverpool">Liverpool</option>
            </select>
          </label>

          <label htmlFor="type" className="form-label">
            <select
              id="type"
              name="type"
              value={fields.type}
              onChange={handleFieldChange}
            >
              <option value="">Choose a Property type</option>
              <option value="Flat">Flat</option>
              <option value="Detached">Detached</option>
              <option value="Semi-Detached">Semi-Detached</option>
              <option value="Terraced">Terraced</option>
              <option value="End of Terrace">End of Terrace</option>
              <option value="Cottage">Cottage</option>
              <option value="Bungalow">Bungalow</option>
            </select>
          </label>
          <label htmlFor="bedrooms" className="form-label">
            Bedrooms
            <input
              className="number-input"
              type="number"
              id="bedrooms"
              name="bedrooms"
              value={fields.bedrooms}
              onChange={handleFieldChange}
            />
          </label>

          <label htmlFor="bathrooms" className="form-label">
            Bathrooms
            <input
              className="number-input"
              type="number"
              id="bathrooms"
              name="bathrooms"
              value={fields.bathrooms}
              onChange={handleFieldChange}
            />
          </label>

          <label htmlFor="price" className="form-label">
            Price
            <span className="gbp">
              <input
                className="number-input"
                placeholder="Enter whole GBP (&pound;)"
                type="number"
                id="price"
                name="price"
                value={fields.price}
                onChange={handleFieldChange}
              />
            </span>
          </label>
          <br />
          <label htmlFor="email" className="form-label">
            Email
            <input
              className="email-input"
              placeholder="your email"
              type="email"
              id="email"
              name="email"
              value={fields.email}
              onChange={handleFieldChange}
            />
          </label>
          <button type="submit" className="add-property-button">
            Add
          </button>
        </form>
      </div>
    </>
  );
};

export default AddProperty;
