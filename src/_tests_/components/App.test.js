import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
// import { createMemoryHistory } from "history";
import App from "../../components/App";

describe("App", () => {
  test("renders correctly", () => {
    // const history = createMemoryHistory();
    const { asFragment } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  xtest("renders correctly", () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/surreal estate/i);
    expect(linkElement).toBeInTheDocument();
  });
});
