import React from "react";
import { render } from "@testing-library/react";
import PropertyCard from "../../components/PropertyCard";

describe("PropertyCard", () => {
  it("renders the correctly", () => {
    const { asFragment } = render(
      <PropertyCard
        title="1 bedroom house"
        type="Detached"
        bathrooms="3"
        bedrooms="1"
        price="450000"
        city="Brighton"
        email="no@no.email.com"
      />
    );
    expect(asFragment).toMatchSnapshot();
  });

  it("renders the correct props", () => {
    const { getByTestId } = render(
      <PropertyCard
        title=""
        type=""
        bathrooms=""
        bedrooms=""
        price=""
        city=""
        email=""
      />
    );
    expect(getByTestId("p_title-id")).toHaveClass("property-card_title");
    expect(getByTestId("p_type-id")).toHaveClass("property-card_type");
    expect(getByTestId("p_bathrooms-id")).toHaveClass(
      "property-card_bathrooms"
    );
    expect(getByTestId("p_bedrooms-id")).toHaveClass("property-card_bedrooms");
    expect(getByTestId("p_price-id")).toHaveClass("property-card_price");
    expect(getByTestId("p_email-id")).toHaveClass("property-card_email");
  });
});
