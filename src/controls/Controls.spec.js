// Test away!
import { render, fireEvent, cleanup } from "react-testing-library";
import React from "react";
import renderer from "react-test-renderer";
import "react-testing-library/cleanup-after-each";
import Controls from "./Controls.js";

describe("<Controls />", () => {
  it("open gate button is disabled when pressing lock gate", () => {
    const { getByText } = render(<Controls />);
    const lockButton = getByText(/lock gate/i);
    fireEvent.click(lockButton);
    expect(lockButton.disabled).toEqual(true);
  });

  it("lock gate button is disabled when pressing open gate", () => {
    const { getByText } = render(<Controls />);
    const openButton = getByText(/close gate/i);
    fireEvent.click(openButton);
    expect(openButton.disabled).toEqual(false);
    // getByText(/open gate/i);
  });
});
