import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { createMemoryHistory } from "history";
import SideBar from "../../components/SideBar";

describe("Sidebar", () => {
  it("renders correct props", () => {
    const history = createMemoryHistory();
    const { asFragment } = render(
      <MemoryRouter history={history}>
        <SideBar />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
