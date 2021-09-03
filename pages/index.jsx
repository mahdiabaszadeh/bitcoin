/** @format */

import axios from "axios";
import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { setBitcoinPrice } from "../redux/actions/priceInfo";

function index() {
  const dispatch = useDispatch();
  const { price } = useSelector((state) => ({
    price: state.priceInfo.bitcoinPrice,
  }));
    axios
      .get("https://api.coinbase.com/v2/prices/spot?currency=USD")
      .then((response) => {
        response && dispatch(setBitcoinPrice(response.amount));
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        dispatch(setBitcoinPrice(0));
      });

  return (
    <div className="p-4 shadow rounded bg-white">
      <span className="text-purple-500 leading-normal">current price is: </span>
      <span className="text-gray-500 fon">{`$${price}`}</span>
    </div>
  );
}

const mapStateToProps = (state) => ({
  bitcoinInfo: state.priceInfo,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setBitcoinPrice: setBitcoinPrice,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
