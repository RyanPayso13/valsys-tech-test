import React from "react";
import { render } from "@testing-library/react";
import DataFacts from "./DataFacts";

function createComponent(facts = [], startYear = 2018) {
  return <DataFacts facts={facts} startYear={startYear} />;
}

describe("<DataFacts />", () => {
  const facts = [
    {
      period: 2017,
      value: 18536402502.576
    },
    {
      period: 2020,
      value: 18953376792
    },
    {
      period: 2018,
      value: 21025200000
    }
  ];

  it("should exist", () => {
    const { getByTestId } = render(createComponent());
    expect(getByTestId("data-facts")).toBeInTheDocument();
  });

  it("should render the facts by period DESC", () => {
    const { container } = render(createComponent(facts));
    const cells = container.querySelectorAll(
      ".facts-table > tbody > tr td:first-child"
    );
    expect(cells.length).toEqual(3);
    expect(cells[0].textContent).toBe("2017");
    expect(cells[1].textContent).toBe("2018");
    expect(cells[2].textContent).toBe("2020");
  });

  it("should style periods after start year", () => {
    const { container } = render(createComponent(facts));
    const styledRow = container.querySelectorAll(".facts-table-row");
    expect(styledRow.length).toEqual(1);
  });
});
