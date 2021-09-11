/** @format */

import axios from "axios";
import * as types from "../types";

export const fetchPrice = (payload) => async (dispatch) => {
const result = await axios.get("https://api.coindesk.com/v1/bpi/currentprice.json");

  dispatch({
    type: types.GET_PRICE,
    payload: result?.data?.bpi?.USD?.rate_float,
  });
};
