/** @format */

import * as types from "../types";

const initialState = {
  USD: 0,
};
export const priceReducer = (state = initialState, action) => {
  switch (action.type) {
      case types.GET_PRICE: return{
          ...state,
          USD: action.payload
      }
    default:
      return state;
  }
};
