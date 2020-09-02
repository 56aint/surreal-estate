import React from "react";
import { render } from "@testing-library/react";
import FavouriteCard from "../../components/FavouriteCard";

describe("FavouriteCard", () => {
  const mockFavourites = {
    _id: "id",
    title: "1 bedroom house",
    type: "Detached",
    city: "Brighton",
    onDeleteFavourite: jest.fn(),
  };
  it("renders correctly", () => {
    const { asFragment } = render(<FavouriteCard {...mockFavourites} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the correct props", () => {
    const { getByText, getByTestId, getByRole } = render(
      <FavouriteCard {...mockFavourites} />
    );
    expect(getByTestId("fav_title-id")).toHaveClass("favourite-card_title");
    expect(getByTestId("fav_city-id")).toHaveClass("favourite-card_city");
    expect(getByText("Remove")).toHaveClass("delete-button");
    expect(getByText("Remove")).toBeTruthy();
    expect(getByRole("button")).toBeTruthy();
    expect(getByRole("button")).toHaveClass("delete-button");
  });
});
