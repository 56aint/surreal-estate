import React from "react";
import PropTypes from "prop-types";
import "../styles/PropertyCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBath, faBed, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const PropertyCard = ({
  title = "House",
  type = "Detached",
  bathrooms = "5",
  bedrooms = "6",
  price = "400,000",
  city = "York",
  email = (
    <p>
      <a href="mailto:cole@cole.com">
        <FontAwesomeIcon icon={faEnvelope} />
        Email
      </a>
    </p>
  ),
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
        <span className="property-card_email" data-testid="p_email-id">
          {email}
        </span>
      </div>
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
};

export default PropertyCard;
