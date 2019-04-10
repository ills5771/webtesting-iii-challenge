// Test away
import { render, fireEvent, cleanup } from "react-testing-library";
import React from "react";
import renderer from "react-test-renderer";
import "react-testing-library/cleanup-after-each";

import Dashboard from "./Dashboard.js";

describe("<Dashboard />", () => {
  it("matches snapshot", () => {
    const tree = renderer.create(<Dashboard />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("<Controls />", () => {
  it("should lock gate when pressing lock gate button", () => {
    const { getByText } = render(<Dashboard />);
    const lockButton = getByText(/lock gate/i);
    fireEvent.click(lockButton);

    getByText(/locked/i);
  });
});
