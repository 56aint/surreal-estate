import React from "react";
import PropTypes from "prop-types";
import { FaTrash } from "react-icons/fa";
import "../styles/PropertyCard.css";

const FavouriteCard = ({ _id, title, city, onDeleteFavourite }) => {
  return (
    <div className="favourite-card">
      <div className="favourite-card_title" data-testid="fav_title-id">
        {title}
      </div>
      <div className="favourite-card_city" data-testid="fav_city-id">
        {city}
      </div>
      <button
        href="#"
        className="delete-button"
        type="button"
        onClick={() => onDeleteFavourite(_id)}
      >
        <FaTrash className="delete-sign" />
        Remove
      </button>
    </div>
  );
};

FavouriteCard.propTypes = {
  title: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  onDeleteFavourite: PropTypes.func.isRequired,
  _id: PropTypes.string.isRequired,
};

export default FavouriteCard;
