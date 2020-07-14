import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import SideBar from "./SideBar";

const Properties = () => {
  const initialState = {
    properties: [],
    alert: {
      message: "",
      isSuccess: false,
    },
  };

  const [properties, setProperties] = useState(initialState.properties);

  const [alert, setAlert] = useState(initialState.alert);

  const { search } = useLocation();
  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/PropertyListing${search}`)
      .then(({ data }) => {
        setProperties(data);
      })
      .catch((error) => {
        console.log(error);
        setAlert({
          message:
            "Something is broken, please refresh the browser and try again later.",
          isSuccess: false,
        });
      });
  }, [search]);

  return (
    <>
      <div>
        {properties.map((property) => (
          <PropertyCard key={property._id} {...property} />
        ))}
        <Alert message={alert.message} success={alert.isSuccess} />
      </div>
    </>
  );
};

export default Properties;
