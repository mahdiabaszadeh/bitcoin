/** @format */

import { SET_PRICE } from "../types";
const priceInfo = (
  state = {
    bitcoinPrice: 0,
  },
  action
) => {
  switch (action.type) {
    case SET_PRICE: {
      return { ...state, bitcoinPrice: action.payload };
    }
    default: {
      return {...state};
    }
  }
};

export default priceInfo;
