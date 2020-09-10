import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../../components/App";

describe("App", () => {
  test("renders correctly", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  test("renders correctly", () => {
    const { getByText, getByTestId } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const linkElement = getByText(/Aaron Hays/i);
    expect(linkElement).toBeInTheDocument();
    fireEvent.click(getByText(/View Property/i));
    expect(getByText("Price Descending")).toBeInTheDocument();
    expect(getByTestId("sidebar-id")).toBeInTheDocument();
  });
});
