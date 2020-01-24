import React from "react";
import { render, waitForElement } from "@testing-library/react";
import { FetchMock } from "@react-mock/fetch";
import * as CONSTANTS from "../../constants";
import Summary from "./Summary";

const testResp = {
  status: "success",
  message: "Successfully pulled valuation summary.",
  data: {
    startYear: 2018,
    historicalPeriod: 5,
    projectionPeriod: 5,
    uid: "0x1556bd",
    name: "Valuation Summary",
    dcfItems: [
      {
        uid: "0x1553e8",
        name: "Cash and cash equivalents",
        order: 5,
        type: "raw",
        value: 569670000,
        tag: "Cash and cash equivalents"
      }
    ]
  }
};

function createComponent(resp = {}) {
  return (
    <FetchMock
      mocks={[
        {
          matcher: `${CONSTANTS.API_BASE_URL}/summary`,
          response: resp
        }
      ]}
    >
      <Summary />
    </FetchMock>
  );
}

describe("<Summary />", () => {
  it("should exist", async () => {
    const { getByTestId } = render(createComponent(testResp));
    const summary = await waitForElement(() =>
      getByTestId("summary-container")
    );
    expect(summary).toBeInTheDocument();
  });
});
