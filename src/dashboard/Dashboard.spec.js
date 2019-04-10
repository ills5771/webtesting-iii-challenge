// Test away
import { render, fireEvent, cleanup } from "react-testing-library";
import React from "react";
import renderer from "react-test-renderer";
import "react-testing-library/cleanup-after-each";

import Dashboard from "./Dashboard.js";

describe("<Dashboard />");
