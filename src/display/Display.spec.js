// Test away!
import { render, fireEvent, cleanup } from "react-testing-library";
import React from "react";
import renderer from "react-test-renderer";
import "react-testing-library/cleanup-after-each";
import Display from "./Display.js";

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
});
