import React from "react";
import { render } from "@testing-library/react";
import DataTitle from "./DataTitle";

function createComponent(name = "", startYear = "") {
  return <DataTitle name={name} startYear={startYear} />;
}

describe("<DataTitle />", () => {
  it("should render a title", () => {
    const { getByText } = render(
      createComponent("Free Cash Flow To Firm", "2018")
    );
    const title = getByText(/Free Cash Flow To Firm 2018/);
    expect(title).toBeInTheDocument();
  });
});
