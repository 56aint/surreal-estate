import React from "react";
import PropTypes from "prop-types";
import { FaSave, FaArchive } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBath, faBed, faEnvelope } from "@fortawesome/free-solid-svg-icons";
// import "../styles/PropertyCard.css";

const PropertyCard = ({
  _id,
  title,
  type,
  bathrooms,
  bedrooms,
  price,
  city,
  email,
  userID,
  onSaveProperty,
}) => {
  return (
    <div className="property-card">
      <div>
        <span className="property-card_title" data-testid="p_title-id">
          {title}
        </span>
      </div>

      <div>
        <span className="property-card_type" data-testid="p_type-id">
          {type}
        </span>
      </div>

      <div>
        <span className="property-card_bathrooms" data-testid="p_bathrooms-id">
          <FontAwesomeIcon icon={faBed} />
          {bathrooms}
        </span>
      </div>

      <div>
        <span className="property-card_bedrooms" data-testid="p_bedrooms-id">
          <FontAwesomeIcon icon={faBath} />
          {bedrooms}
        </span>
      </div>

      <div>
        <span className="property-card_price" data-testid="p_price-id">
          {price}
        </span>
      </div>

      <div>
        <span className="property-card_city" data-testid="p_city-id">
          {city}
        </span>
      </div>

      <div>
        <a href={`mailto:${email}`}>
          <span className="property-card_email" data-testid="p_email-id">
            <FontAwesomeIcon icon={faEnvelope} />
            Email
          </span>
        </a>
      </div>
      {userID && (
        <button
          href="#"
          className="save-button"
          type="button"
          onClick={() => onSaveProperty(_id)}
        >
          <FaArchive className="save-sign" />
          Save
          <FaSave className="save-sign" />
        </button>
      )}
    </div>
  );
};

PropertyCard.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  bathrooms: PropTypes.string.isRequired,
  bedrooms: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  userID: PropTypes.string.isRequired,
  onSaveProperty: PropTypes.func.isRequired,
  _id: PropTypes.string.isRequired,
};

export default PropertyCard;
