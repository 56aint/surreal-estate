import React from "react";
// import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import qs from "qs";
import "../styles/SideBar.css";

const SideBar = () => {
  const { search } = useLocation();
  const buildQueryString = (operation, valueObj) => {
    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });

    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify(valueObj),
    };
    return qs.stringify(newQueryParams, {
      addQueryPrefix: true,
      encode: false,
    });
  };
  return (
    <nav role="navigation">
      <div className="sidebarToggle">
        <input name="toggle" type="checkbox" />
        <label htmlFor="toggle">
          <span>menu</span>
          <div />
          <div />
          <div />
        </label>

        <ul className="sidebar">
          <p className="sidebar-title">Filter by City</p>
          <Link to={buildQueryString("query", { city: "Manchester" })}>
            <li>Manchester</li>
          </Link>
          <Link to={buildQueryString("query", { city: "Leeds" })}>
            <li>Leeds</li>
          </Link>
          <Link to={buildQueryString("query", { city: "Shefield" })}>
            <li>Shefield</li>
          </Link>
          <Link to={buildQueryString("query", { city: "Liverpool" })}>
            <li>Liverpool</li>
          </Link>
          <p className="sidebar-title">Sort by</p>
          <Link to={buildQueryString("sort", { price: 1 })}>
            <li>Price Ascending</li>
          </Link>
          <Link to={buildQueryString("sort", { price: -1 })}>
            <li>Price Descending</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default SideBar;
