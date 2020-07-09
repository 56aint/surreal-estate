import React from "react";
import { render } from "@testing-library/react";
import Alert from "../../components/Alert";

describe("Alert", () => {
  test("display an error message", () => {
    // const component = render(<Alert message="Error!" />);
    const { getByText } = render(<Alert message="Error!" />);
    // const alertMessageNode = component.getByText("Error");
    expect(getByText(/Error/)).toBe("Error");
  });
  xtest("display a success message", () =>{
    const { getByText } = render(<Alert message="Success!!!" success />);
    expect(getByText(/Success/)).toBe("Success!!!");
  });
});
