import { all } from "redux-saga/effects";
import CarSaga from "./carSaga";
import DiscountSaga from "./discountSaga";
const root = function* rootSaga() {
  yield all([CarSaga(), DiscountSaga()]);
};

export default root;
