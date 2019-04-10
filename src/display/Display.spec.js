// Test away!
import { render, fireEvent, cleanup } from "react-testing-library";
import React from "react";
import renderer from "react-test-renderer";
import "react-testing-library/cleanup-after-each";
import Display from "./Display.js";

describe("<Display />", () => {
  it("displays closed when gate is closed", () => {
    const { getByText } = render(<Display />);
    const closedDiv = getByText(/open/i);

    expect(closedDiv).toBeTruthy();
  });

  it("displays locked when gate is locked", () => {
    const { getByText } = render(<Display />);
    const lockedDiv = getByText(/unlocked/i);

    expect(lockedDiv).toBeTruthy();
  });
});
