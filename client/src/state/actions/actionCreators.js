import * as ACTION_TYPES from "./actionTypes";

export function setCurrentFilter(filter = "") {
  return {
    type: ACTION_TYPES.SET_CURRENT_FILTER,
    payload: filter
  };
}

export function setFilterItems(items = []) {
  return {
    type: ACTION_TYPES.SET_FILTER_ITEMS,
    payload: items
  };
}
