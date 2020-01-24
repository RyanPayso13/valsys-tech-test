import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DataFilter from "./DataFilter";
import * as CONSTANTS from "../../constants";
import Context from "../../state/context";
import * as ACTION_TYPES from "../../state/actions/actionTypes";

function createComponent(
  filterBy = "",
  filterList = [],
  state = { currentFilter: CONSTANTS.DATA_FILTER_DEFAULT },
  dispatch = jest.fn()
) {
  return (
    <Context.Provider value={{ state, dispatch }}>
      <DataFilter filterBy={filterBy} filterList={filterList} />
    </Context.Provider>
  );
}

describe("<DataFilter />", () => {
  const filters = [CONSTANTS.DATA_FILTER_DEFAULT, "foo", "bar"];

  it("should render the filter label", () => {
    const { getByText } = render(createComponent("name", filters));
    const label = getByText(/Filter by name:/);
    expect(label).toBeInTheDocument();
  });

  it("should render the filter list", () => {
    const { container } = render(createComponent("name", filters));
    const options = container.querySelectorAll("select option");
    expect(options.length).toEqual(3);
  });

  it("should dispatch the selected filter", () => {
    const dispatch = jest.fn();
    const { getByTestId } = render(
      createComponent(
        "name",
        filters,
        { currentFilter: CONSTANTS.DATA_FILTER_DEFAULT },
        dispatch
      )
    );
    const select = getByTestId("data-filter");
    expect(select.value).toBe(CONSTANTS.DATA_FILTER_DEFAULT);
    fireEvent.change(select, { target: { value: filters[1] } });
    expect(select.value).toBe(filters[1]);
    expect(dispatch).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledWith({
      payload: "foo",
      type: ACTION_TYPES.SET_CURRENT_FILTER
    });
  });
});
