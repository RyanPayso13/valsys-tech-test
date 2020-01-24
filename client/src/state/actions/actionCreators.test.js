import * as ACTION_TYPES from "./actionTypes";
import * as actions from "./actionCreators";

describe("Action Creators", () => {
  it("should set the total donations", () => {
    const payload = "foo";
    const expectedAction = {
      type: ACTION_TYPES.SET_CURRENT_FILTER,
      payload
    };
    expect(actions.setCurrentFilter(payload)).toEqual(expectedAction);
  });

  it("should set the items for filtering", () => {
    const payload = [1, 2, 3, 4];
    const expectedAction = {
      type: ACTION_TYPES.SET_FILTER_ITEMS,
      payload
    };
    expect(actions.setFilterItems(payload)).toEqual(expectedAction);
  });
});
