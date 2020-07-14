import React from "react";
// import styled from "styled-components";
import { Link } from "react-router-dom";
import "../styles/SideBar.css";

const SideBar = () => {
  return (
    <div className="sidebar">
      <p className="sidebar-title">Filter By City</p>
      <Link to={`/?query={"city": "Manchester"}`}>Manchester</Link>
      <Link to={`/?query={"city": "leeds"}`}>Leeds</Link>
      <Link to={`/?query={"city": "Shefield}`}>Shefield</Link>
      <Link to={`/?query={"city": "Liverpool}`}>Liverpool</Link>
    </div>
  );
};

export default SideBar;
