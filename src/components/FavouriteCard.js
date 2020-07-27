import React from "react";
import PropTypes from "prop-types";
import { FaTrash } from "react-icons/fa";
import "../styles/PropertyCard.css";

const PropertyCard = ({
  _id,
  title,
  onDeleteFavourite,
}) => {
  return (
    <div className="favourite-card">
      <div className="favourite-card_title">{title}</div>
      <button
        href="#"
        className="delete-button"
        type="button"
        onClick={() => onDeleteFavourite(_id)}
      >
        <FaTrash className="delete-sign" />
        Delete
      </button>
    </div>
  );
};

PropertyCard.propTypes = {
  title: PropTypes.string.isRequired,
  onDeleteFavourite: PropTypes.func.isRequired,
  _id: PropTypes.string.isRequired,
};

export default PropertyCard;
