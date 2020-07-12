import React, { useState, useEffect } from "react";
import axios from "axios";

const Properties = () => {
  const initialState = {
    properties: [],
  };

  const [properties, setProperties] = useState(initialState.properties);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/PropertyListing`, {
        properties,
      })
      .then((response) => setProperties(response.data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div>nothing</div>
    </>
  );
};

export default Properties;
