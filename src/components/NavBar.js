import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";
import { FaFacebookSquare, FaSignInAlt } from "react-icons/fa";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

import logo from "../images/logo.png";

const NavBar = () => {
  const responseFacebook = (response) => {
    console.log(response);
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
            <FacebookLogin
              appId="1088597931155576"
              autoLoad
              callback={responseFacebook}
              render={(renderProps) => (
                <button type="submit" onClick={renderProps.onClick}>
                  <FaSignInAlt />
                  <FaFacebookSquare />
                  <span className="tooltiptext">LOGIN WITH FACEBOOK</span>
                </button>
              )}
            />
          </form>
        </div>
      </ul>
    </div>
  );
};

export default NavBar;
