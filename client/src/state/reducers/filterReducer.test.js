import * as CONSTANTS from "../../constants";
import * as ACTION_TYPES from "../actions/actionTypes";
import { filterReducer } from "./filterReducer";

describe("Core reducer", () => {
  it("should return the initial state", () => {
    const initialState = filterReducer();
    expect(initialState).toEqual({
      currentFilter: CONSTANTS.DATA_FILTER_DEFAULT,
      items: []
    });
  });

  it("should set the current filter", () => {
    expect(
      filterReducer(
        {
          currentFilter: CONSTANTS.DATA_FILTER_DEFAULT
        },
        {
          type: ACTION_TYPES.SET_CURRENT_FILTER,
          payload: "foo"
        }
      )
    ).toEqual({ currentFilter: "foo" });
  });
});
