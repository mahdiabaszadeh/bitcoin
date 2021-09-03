import { combineReducers } from "redux";
import priceInfo from "./priceInfo";

const rootReducer = combineReducers({
    priceInfo: priceInfo
});
console.log(priceInfo);
export default rootReducer;