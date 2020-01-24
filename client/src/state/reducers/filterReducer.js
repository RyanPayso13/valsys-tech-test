import * as CONSTANTS from "../../constants";
import * as ACTION_TYPES from "../actions/actionTypes";

export const initialState = {
  currentFilter: CONSTANTS.DATA_FILTER_DEFAULT,
  items: []
};

export const filterReducer = (state = initialState, action = "") => {
  switch (action.type) {
    case ACTION_TYPES.SET_CURRENT_FILTER:
      return {
        ...state,
        currentFilter: action.payload
      };
    case ACTION_TYPES.SET_FILTER_ITEMS:
      return {
        ...state,
        items: action.payload
      };
    default:
      return { ...state };
  }
};
