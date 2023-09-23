import { combineReducers } from "redux";
import carReducers from "./carReducers";
import cartReducers from "./cartReducers";
import discountReducers from "./discountReducers";

const appReducer = combineReducers({
  carReducers,
  cartReducers,
  discountReducers,
});

export default appReducer;
