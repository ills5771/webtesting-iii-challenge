// Test away!
import { render, fireEvent, cleanup, container } from "react-testing-library";
import React from "react";
import renderer from "react-test-renderer";
import "react-testing-library/cleanup-after-each";
import Display from "./Display.js";

import { toHaveClass } from "jest-dom";
expect.extend({ toHaveClass });

describe("<Display />", () => {
  it("displays open when gate is open", () => {
    const { getByText } = render(<Display />);
    const openDiv = getByText(/open/i);

    expect(openDiv).toBeTruthy();
  });

  it("displays unlocked when gate is unlocked", () => {
    const { getByText } = render(<Display />);
    const unlockedDiv = getByText(/unlocked/i);

    expect(unlockedDiv).toBeTruthy();
  });

  it("displays red-led class when locked", () => {
    const { getByText } = render(<Display locked={true} />);
    const lockedDiv = getByText(/locked/i);

    expect(lockedDiv).toHaveClass("red-led");
  });
  it("displays red-led class when closed", () => {
    const { getByText } = render(<Display closed={true} />);
    const closedDiv = getByText(/closed/i);

    expect(closedDiv).toHaveClass("red-led");
  });
});
