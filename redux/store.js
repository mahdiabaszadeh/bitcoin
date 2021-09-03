/** @format */

import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/index";

const middleware = [thunk];
const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options
});

const makeStore = () =>
  createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(...middleware)
      // other store enhancers if any
    )
  );

export const wrapper = createWrapper(makeStore);
