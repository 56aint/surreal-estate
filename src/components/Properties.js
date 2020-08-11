import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";

import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import SideBar from "./SideBar";

import "../styles/PropertyCard.css";

const Properties = ({ userID }) => {
  const initialState = {
    properties: [],
    alert: {
      message: "",
      isSuccess: false,
    },
    loading: false,
  };

  const [properties, setProperties] = useState(initialState.properties);

  const [alert, setAlert] = useState(initialState.alert);

  const [loading, setLoading] = useState(initialState.loading);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/PropertyListing`)
      .then(setLoading(true))
      .then(({ data }) => {
        setProperties(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setAlert({
          message:
            "Error loading properties, please refresh the browser and try again",
        });
        setLoading(true);
      });
  }, []);

  const { search } = useLocation();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:4000/api/v1/PropertyListing${search}`)
      .then(({ data }) => {
        setProperties(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setAlert({
          message:
            "Something is broken, please refresh the browser and try again.",
          isSuccess: false,
        });
      });
  }, [search]);

  const handleSaveProperty = (propertyId) => {
    axios
      .post(`http://localhost:4000/api/v1/Favourite`, {
        propertyListing: propertyId,
        fbUserId: userID,
      })
      .then(() => {
        setTimeout(
          () =>
            setAlert({
              message: "saving...",
              isSuccess: true,
            }),
          0
        );
      })
      .then(() => {
        setTimeout(
          () =>
            setAlert({
              message: "Your Favourite Property has been saved!",
              isSuccess: true,
            }),
          1000
        );
      })
      .catch((error) => {
        console.log(error);
        setAlert({
          message: "Server error, please try saving your Favourite again",
          isSuccess: false,
        });
      });
  };

  return (
    <>
      <SideBar />
      <div className="properties">
        {loading && (
          <div className="loading">
            <div className="spinner1" />
            <div className="spinner2" />
          </div>
        )}
        <Alert message={alert.message} success={alert.isSuccess} />

        <div>
          {properties.map((property) => (
            <div>
              <PropertyCard
                key={property._id}
                {...property}
                userID={userID}
                onSaveProperty={handleSaveProperty}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

Properties.propTypes = {
  userID: PropTypes.string.isRequired,
};

export default Properties;
