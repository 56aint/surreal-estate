import React from 'react';
import '../styles/NavBar.css';
import logo from '../images/logo.png';

const NavBar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="estate-logo" />
    </div>
  );
};

export default NavBar;
