import React from "react";
import { render } from "@testing-library/react";
import AddProperty from "../../components/AddProperty";

describe("AddProperty", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<AddProperty />);
    const component = asFragment();
    expect(component).toMatchSnapshot();
  });

  it("renders the correct props", () => {
    const { getByText, getByTestId, getByRole } = render(<AddProperty />);
    expect(getByTestId("ap_title-id")).toHaveClass("form-label");
    expect(getByTestId("ap_city-id")).toHaveClass("form-label");
    expect(getByTestId("ap_type-id")).toHaveClass("form-label");
    expect(getByTestId("ap_bedrooms-id")).toHaveClass("form-label");
    expect(getByTestId("ap_bathrooms-id")).toHaveClass("form-label");
    expect(getByTestId("ap_price-id")).toHaveClass("form-label");
    expect(getByTestId("ap_email-id")).toHaveClass("form-label");
    expect(getByText("Add")).toHaveClass("add-property-button");
    expect(getByText("Add")).toBeTruthy();
    expect(getByRole("button")).toBeTruthy();
    expect(getByRole("button")).toHaveClass("add-property-button");
  });
});
