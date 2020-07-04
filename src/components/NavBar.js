import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';
import logo from '../images/logo.png';

const NavBar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="estate-logo" />

      <ul className="navbar-links">
        <li className="navbar-link-item">
          <Link to="url">View Property</Link>

        </li>

        <li>
          <Link to="url">Add Property</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
