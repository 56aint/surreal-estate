import React, { useState } from "react";
import "../styles/AddProperty.css";

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
      city: "Manchester",
    },
  };

  const [fields, setFields] = useState(initialState.fields);

  const handleAddProperty = (event) => {
    event.preventDefault();
    console.log(fields);
  };
  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <>
      <div className="add-property">
        <form onSubmit={handleAddProperty}>
          <label htmlFor="title">
            Title
            <input
              type="text"
              id="title"
              name="title"
              value={fields.title}
              onChange={handleFieldChange}
            />
          </label>

          <button type="submit" className="add-property-button">
            <span>Add</span>
          </button>
        </form>
      </div>
    </>
  );
};

export default AddProperty;
