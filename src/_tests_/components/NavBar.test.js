import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavBar from "../../components/NavBar";

describe("NavBar", () => {
  const mockNavBarFbLogingData = {
    onLogin: jest.fn(),
    onLogout: jest.fn(),
    userID: "userID",
  };
  it("renders correctly against snapshot", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <NavBar {...mockNavBarFbLogingData} />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the correct props", () => {
    const { getByText, getByTestId, queryByText, getByRole } = render(
      <MemoryRouter>
        <NavBar {...mockNavBarFbLogingData} />
      </MemoryRouter>
    );
    expect(getByTestId("navbar-id")).toHaveClass("navbar");
    expect(getByTestId("navbar-links-id")).toHaveClass("navbar-links");
    expect(getByText("Home")).toBeInTheDocument();
    expect(getByText("Add Property")).toBeTruthy();
    expect(getByText("View Property")).toBeInTheDocument();
    expect(getByText("Favourites")).toBeTruthy();
    expect(queryByText("Favourite")).not.toBeInTheDocument();
    expect(getByRole("button")).toHaveClass("sign-out-button");
    // expect(getByText("LOGIN WITH FACEBOOK")).toBeInTheDocument();
  });
});
