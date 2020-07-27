import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import FavouriteCard from "./FavouriteCard";
import Alert from "./Alert";

const Favourites = ({ userID }) => {
  const initialState = {
    favourites: [],
    alert: {
      message: "",
      isSuccess: false,
    },
    loading: false,
  };

  const [favourites, setFavourites] = useState(initialState.favourites);

  const [alert, setAlert] = useState(initialState.alert);

  const [loading, setLoading] = useState(initialState.loading);

  useEffect(() => {
    axios
      .get(
        `http://localhost:4000/api/v1/Favourite?query={"fbUserId":"${userID}"}&populate=propertyListing
      `
      )
      .then(({ data }) => {
        setFavourites(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setAlert({
          message:
            "Error loading favourites, please refresh the browser and try again",
        });
        setLoading(true);
      });
  }, [userID]);

  /* const { search } = useLocation();
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
  }, [search]); */

  const handleDeleteFavourite = (favouriteId) => {
    axios
      .delete(`http://localhost:4000/api/v1/Favourite/${favouriteId}`)
      .then((response) => {
        console.log(response);
        setAlert({
          message:
            "Your Favourite Property has been deleted, you can add it again from 'View property Link'",
          isSuccess: true,
        });
      })
      .catch((error) => {
        console.log(error);
        setAlert({
          message: "Server error, please try deleting your Favourite again",
          isSuccess: false,
        });
      });
  };

  return (
    <>
      <div className="favourites">
        {loading && (
          <div className="loading">
            <div className="spinner1" />
            <div className="spinner2" />
          </div>
        )}

        <div>
          <Alert message={alert.message} success={alert.isSuccess} />
          {favourites.map((favourite) => (
            <FavouriteCard
              key={favourite._id}
              _id={favourite._id}
              title={favourite.propertyListing.title}
              userID={userID}
              onDeleteFavourite={handleDeleteFavourite}
            />
          ))}
        </div>
      </div>
    </>
  );
};

Favourites.propTypes = {
  userID: PropTypes.string.isRequired,
};

export default Favourites;
