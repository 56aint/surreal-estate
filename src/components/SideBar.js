import React, { useState } from "react";
// import styled from "styled-components";
import { Link, useLocation, useHistory } from "react-router-dom";
import qs from "qs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "../styles/SideBar.css";

const SideBar = () => {
  const { search } = useLocation();

  const buildQueryString = (operation, valueObj) => {
    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });

    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify({
        ...JSON.parse(currentQueryParams[operation] || "{}"),
        ...valueObj,
      }),
    };
    return qs.stringify(newQueryParams, {
      addQueryPrefix: true,
      encode: false,
    });
  };

  const [query, setQuery] = useState("");

  const history = useHistory();

  const handleSearch = (event) => {
    event.preventDefault();
    const newQueryString = buildQueryString("query", {
      title: { $regex: query },
    });
    console.log(query);
    history.push(newQueryString);
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <nav role="navigation">
      <form
        className="property-search-form"
        onChange={(e) => handleInputChange(e)}
        onSubmit={(e) => handleSearch(e)}
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <button type="submit" className="property-search-button">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
      <p>View</p>
      <p>Options</p>
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
