import React from "react";
import { render, waitForElement } from "@testing-library/react";
import { FetchMock } from "@react-mock/fetch";
import * as CONSTANTS from "../../constants";
import * as ACTION_TYPES from "../../state/actions/actionTypes";
import Context from "../../state/context";
import FreeCashFlow from "./FreeCashFlow";

const testResp = {
  status: "success",
  message: "Successfully pulled free cash flow data.",
  data: {
    startYear: 2018,
    historicalPeriod: 5,
    projectionPeriod: 5,
    uid: "0x1556bd",
    name: "Free Cash Flow To Firm",
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

function createComponent(
  resp = {},
  state = { currentFilter: CONSTANTS.DATA_FILTER_DEFAULT, items: [] },
  dispatch = jest.fn()
) {
  return (
    <FetchMock
      mocks={[
        {
          matcher: `${CONSTANTS.API_BASE_URL}/free-cash-flow`,
          response: resp
        }
      ]}
    >
      <Context.Provider value={{ state, dispatch }}>
        <FreeCashFlow />
      </Context.Provider>
    </FetchMock>
  );
}

describe("<FreeCashFlow />", () => {
  it("should exist", async () => {
    const { getByTestId } = render(createComponent(testResp));
    const summary = await waitForElement(() =>
      getByTestId("free-cash-flow-container")
    );
    expect(summary).toBeInTheDocument();
  });

  it("should dispatch the items", async () => {
    const dispatch = jest.fn();
    const { getByTestId } = render(
      createComponent(
        testResp,
        { currentFilter: CONSTANTS.DATA_FILTER_DEFAULT, items: [] },
        dispatch
      )
    );
    const summary = await waitForElement(() =>
      getByTestId("free-cash-flow-container")
    );
    expect(dispatch).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledWith({
      payload: testResp.data.dcfItems,
      type: ACTION_TYPES.SET_FILTER_ITEMS
    });
  });
});
