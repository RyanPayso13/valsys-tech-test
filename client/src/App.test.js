import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

it("should render a summary container", () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId("summary-container")).toBeInTheDocument();
});

it("should render a free cash flow container", () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId("free-cash-flow-container")).toBeInTheDocument();
});
