import React from "react";
import { render } from "@testing-library/react";
import DataTable from "./DataTable";

function createComponent(items = [], hasFacts = false, startYear = "") {
  return <DataTable items={items} hasFacts={hasFacts} startYear="" />;
}

describe("<DataTable />", () => {
  describe("without item facts", () => {
    let dcfItems = [
      {
        uid: "0x1553e8",
        name: "Cash and cash equivalents",
        order: 5,
        type: "raw",
        value: 569670000,
        tag: "Cash and cash equivalents"
      },
      {
        uid: "0x1556a3",
        name: "Shares outstanding",
        order: 8,
        type: "absolute",
        value: 719490000,
        tag: "Weighted average shares outstanding diluted"
      },
      {
        uid: "0x156687",
        name: "Total debt",
        order: 4,
        type: "raw",
        value: 36396050000,
        tag: "Total debt"
      }
    ];

    it("should exist", () => {
      const { getByTestId } = render(createComponent(dcfItems));
      expect(getByTestId("data-table")).toBeInTheDocument();
    });

    it("should render six columns", () => {
      const { container } = render(createComponent(dcfItems));
      const cols = container.querySelectorAll("th");
      expect(cols.length).toEqual(6);
    });

    it("should render three rows", () => {
      const { container } = render(createComponent(dcfItems));
      const rows = container.querySelectorAll("tbody tr");
      expect(rows.length).toEqual(3);
    });
  });

  describe("with items facts", () => {
    let dcfItems = [
      {
        uid: "0x1553e8",
        name: "Cash and cash equivalents",
        facts: [
          {
            period: 2021,
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
        ],
        order: 5,
        type: "raw",
        value: 569670000,
        tag: "Cash and cash equivalents"
      }
    ];

    it("should render seven columns", () => {
      const { container } = render(createComponent(dcfItems, true));
      const cols = container.querySelectorAll(
        ".bp3-html-table > thead > tr > th"
      );
      expect(cols.length).toEqual(7);
    });

    it('shoould render the "FACTS" header', () => {
      const { getByText } = render(createComponent(dcfItems, true));
      expect(getByText(/FACTS/)).toBeInTheDocument();
    });
  });
});
