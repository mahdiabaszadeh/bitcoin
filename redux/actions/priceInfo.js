/** @format */

import { SET_PRICE } from "../types";
export const setBitcoinPrice = (payload) => {
  console.log(payload, SET_PRICE);
  return { type: SET_PRICE, payload: payload };
};
