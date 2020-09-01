import React from "react";
import { render } from "@testing-library/react";
import Alert from "../../components/Alert";

describe("Alert", () => {
  test("display an error message", () => {
    const { getByText, asFragment } = render(<Alert message="Error!" />);
    const alert = asFragment();
    expect(getByText(/Error/).textContent).toBe("Error!");
    expect(getByText("Error!")).toBeTruthy();
    expect(alert).toMatchSnapshot();
  });
  test("display a success message", () => {
    const { getByText, asFragment } = render(
      <Alert message="Success!!!" success />
    );
    const alert = asFragment();
    expect(getByText(/Success/).textContent).toBe("Success!!!");
    expect(getByText("Success!!!")).toBeTruthy();
    expect(getByText("Success!!!")).toHaveClass("Alert alert-success");
    expect(alert).toMatchSnapshot();
  });
  test("does not render an error or a success message if message props is empty", () => {
    const { queryByText, asFragment } = render(<Alert message="" />);
    const alert = asFragment();
    const alertMessage = queryByText(/Success/);

    expect(alert).toMatchSnapshot();
    expect(alertMessage).not.toBeInTheDocument();
  });
});
