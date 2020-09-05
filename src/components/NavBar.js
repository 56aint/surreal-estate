import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../styles/NavBar.css";
import { FaFacebookSquare, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
// import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import FacebookLogin from "react-facebook-login";
import logo from "../images/logo.png";
import ErrorBoundary from "./ErrorBoundary";

const NavBar = ({ onLogin, onLogout, userID }) => {
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
        <li className="navbar-links-item">
          <Link to="/favourites">Favourites</Link>
        </li>
        <form className="fb-sign-in-form">
          {userID ? (
            <ErrorBoundary>
              <button type="submit" onClick={onLogout}>
                <FaSignOutAlt />
                Sign Out
              </button>
            </ErrorBoundary>
          ) : (
            <ErrorBoundary>
              <FacebookLogin
                appId="2769895153231866"
                autoLoad
                fields="name,email,picture"
                callback={onLogin}
                render={(renderProps) => (
                  <button type="submit" onClick={renderProps.onLogin}>
                    <FaSignInAlt />
                    <FaFacebookSquare />
                    <span className="tooltiptext">LOGIN WITH FACEBOOK</span>
                  </button>
                )}
              />
            </ErrorBoundary>
          )}
        </form>
      </ul>
    </div>
  );
};

NavBar.propTypes = {
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  userID: PropTypes.string.isRequired,
};
export default NavBar;
