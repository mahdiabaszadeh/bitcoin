/** @format */

import axios from "axios";
import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { fetchPrice } from "../store/action/priceAction";

const Home = () => {
  const dispatch = useDispatch();

  const price = useSelector((state) => state?.price?.USD);

  useEffect(() => {
    dispatch(fetchPrice());
  }, []);

  return (
    <div className="p-4 shadow rounded bg-white">
      <span className="text-purple-500 leading-normal">current price is: </span>
      <span className="text-gray-500 fon">
        {price ? (
          `$${price}`
        ) : (
          <div className="flex items-center justify-center ">
            <div className="w-5 h-5 border-b-2 border-gray-900 rounded-full animate-spin" />
          </div>
        )}
      </span>
    </div>
  );
};

export default Home;
