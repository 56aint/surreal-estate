import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
import "../styles/NavBar.css";
import { FaFacebookSquare, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
// import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import FacebookLogin from "react-facebook-login";

import logo from "../images/logo.png";

const NavBar = ({ onLogin, onLogout, userID }) => {
  const handleLogin = (event) => {
    event.preventDefault();
  };

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
            {userID ? (
              <button type="submit" onClick={onLogout}>
                <FaSignOutAlt />
                Sign Out
              </button>
            ) : (
              <FacebookLogin
                appId="2769895153231866"
                autoLoad={false}
                fields="name,email,picture"
                callback={onLogin}
                cssClass="facebook-login-class"
              />
            )}
          </form>
        </div>
      </ul>
    </div>
  );
};

NavBar.propTypes = {
  onLogin: propTypes.func.isRequired,
  onLogout: propTypes.func.isRequired,
  userID: propTypes.func.isRequired,
};
export default NavBar;
