import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="item">
          <i className="fas fa-hand-point-right" />
        </div>

        <div className="footer-content">
          <p>Aaron Hays 2020</p>
        </div>

        <div className="item">
          <i className="fas fa-thumbs-up" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
