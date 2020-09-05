import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../styles/NavBar.css";
import { FaSignOutAlt } from "react-icons/fa";
import FacebookLogin from "react-facebook-login";
import logo from "../images/logo.png";
import ErrorBoundary from "./ErrorBoundary";

const NavBar = ({ onLogin, onLogout, userID }) => {
  return (
    <div className="navbar" data-testid="navbar-id">
      <img src={logo} alt="estate-logo" />

      <ul className="navbar-links" data-testid="navbar-links-id">
        <li className="navbar-links-item" data-testid="navbar-links-item-id">
          <Link to="/">Home</Link>
        </li>

        <li className="navbar-links-item" data-testid="navbar-links-item-id">
          <Link to="/properties">View Property</Link>
        </li>

        <li className="navbar-links-item" data-testid="navbar-links-item-id">
          <Link to="/add-property">Add Property</Link>
        </li>
        <li className="navbar-links-item" data-testid="navbar-links-item-id">
          <Link to="/favourites">Favourites</Link>
        </li>
        <form className="fb-sign-in-form" data-testid="fb-sign-in-form-id">
          {userID ? (
            <ErrorBoundary>
              <button
                className="sign-out-button"
                type="submit"
                onClick={onLogout}
              >
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
