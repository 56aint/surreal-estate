import React from "react";
import { render } from "@testing-library/react";
import AddProperty from "../../components/AddProperty";

describe("AddProperty", () => {
  /* const mockProperty = {
    title: "1 bedroom house",
    type: "Detached",
    bathrooms: "3",
    bedrooms: "1",
    price: "450000",
    city: "Brighton",
    email: "no@no.email.com",
    userID: "userID",
    _id: "id",
    onSaveProperty: jest.fn(),
  }; */
  it("renders correctly", () => {
    const { asFragment } = render(<AddProperty />);
    const component = asFragment();
    expect(component).toMatchSnapshot();
  });

  xit("renders the correct props", () => {
    const { getByText, getByTestId, getByRole } = render(<AddProperty />);
    expect(getByTestId("p_title-id")).toHaveClass("property-card_title");
    expect(getByTestId("p_type-id")).toHaveClass("property-card_type");
    expect(getByTestId("p_bathrooms-id")).toHaveClass(
      "property-card_bathrooms"
    );
    expect(getByTestId("p_bedrooms-id")).toHaveClass("property-card_bedrooms");
    expect(getByTestId("p_price-id")).toHaveClass("property-card_price");
    expect(getByTestId("p_email-id")).toHaveClass("property-card_email");
    expect(getByText("Save")).toHaveClass("save-button");
    expect(getByText("Save")).toBeTruthy();
    expect(getByRole("button")).toBeTruthy();
    expect(getByRole("button")).toHaveClass("save-button");
  });
});
