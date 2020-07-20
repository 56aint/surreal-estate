import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import SideBar from "./SideBar";

const Properties = ({ userID }) => {
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
      <div className="properties">
        <SideBar />

        {properties.map((property) => (
          <PropertyCard key={property._id} {...property} userID={userID} />
        ))}
        <Alert message={alert.message} success={alert.isSuccess} />

      </div>
    </>
  );
};

Properties.propTypes = {
  userID: PropTypes.string.isRequired,
};

export default Properties;
