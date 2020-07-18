import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";
import { FaFacebookSquare, FaSignInAlt } from "react-icons/fa";

import logo from "../images/logo.png";

const NavBar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="estate-logo" />

      <ul className="navbar-links">
        <li className="navbar-links-item">
          <Link to="/">Home</Link>
        </li>

        <li className="navbar-links-item">
          <Link to="/properties">View Property</Link>
        </li>

        <li className="navbar-links-item">
          <Link to="/add-property">Add Property</Link>
        </li>
        <div form-tooltip>
          <form className="fb-sign-in-form">
            <button type="submit">
              <FaSignInAlt />
              <FaFacebookSquare />
            </button>
            <span className="tooltiptext">LOGIN WITH FACEBOOK</span>
          </form>
        </div>
      </ul>
    </div>
  );
};

export default NavBar;
