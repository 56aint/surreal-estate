import React, { useState } from "react";
import "../styles/AddProperty.css";

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
      city: "Manchester",
      type: "Flat",
      bedrooms: 3,
      bathrooms: 1,
      price: 300000,
      email: "myemail@email.com",
    },
  };

  const [fields, setFields] = useState(initialState.fields);

  const handleAddProperty = (event) => {
    event.preventDefault();
    console.log(fields);
  };
  const handleFieldChange = (event) => {
    const changeField = event.target.name;
    const newValue = event.target.value;
    setFields({ ...fields, [changeField]: newValue });
  };

  return (
    <>
      <div className="add-property">
        <form onSubmit={handleAddProperty}>
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
              value="fields.city"
              onChange={handleFieldChange}
            >
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
              value="fields.type"
              onChange={handleFieldChange}
            >
              <option value="Flat">Flat</option>
              <option value="Detached">Detached</option>
              <option value="Semi-Detached">Semi-Detached</option>
              <option value="Terraced">Terraced</option>
              <option value="End of Terrace">End of Terrace</option>
              <option value="Cottage">Cottage</option>
              <option value="Bungalow">Bungalow</option>
            </select>
          </label>
          <label htmlFor="title" className="form-label">
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

          <label htmlFor="title" className="form-label">
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

          <label htmlFor="title" className="form-label">
            Price
            <span className="gbp">
              <input
                placeholder="Enter whole GBP (&pound;)"
                type="number"
                id="price"
                name="price"
                value={fields.price}
                onChange={handleFieldChange}
              />
            </span>
          </label>

          <label htmlFor="title" className="form-label">
            Email
            <input
              className=""
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
