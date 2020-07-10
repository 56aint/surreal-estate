import React from "react";
import { render } from "@testing-library/react";
import Alert from "../../components/Alert";

describe("Alert", () => {
  test("display an error message", () => {
    // const component = render(<Alert message="Error!" />);
    const { getByText, asFragment } = render(<Alert message="Error!" />);
    const alert = asFragment();
    // const alertMessageNode = component.getByText("Error");
    expect(getByText(/Error/).textContent).toBe("Error!");
    expect(alert).toMatchSnapshot();
  });
  test("display a success message", () => {
    const { getByText, asFragment } = render(
      <Alert message="Success!!!" success />
    );
    const alert = asFragment();
    expect(getByText(/Success/).textContent).toBe("Success!!!");
    expect(alert).toMatchSnapshot();
  });
  test("does not render an error or a success message if message props is empty", () => {
    const { asFragment } = render(<Alert message="" />);
    const alert = asFragment();
    expect(alert).toMatchSnapshot();
  });
});
