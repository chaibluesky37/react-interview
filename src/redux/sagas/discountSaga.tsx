import { put, takeEvery } from "redux-saga/effects";
import { AxiosResponse } from "axios";

import { DISCOUNT_REQUEST } from "../../constants/ActionType";
import { discountSuccess, discountFailure } from "../actions";
import service from "../../service/instance";

const getDiscount = async () => {
  try {
    const response = await service.get(
      `/spaces/vveq832fsd73/entries?content_type=discount`,
    );
    if (response.status !== 200) throw new Error("Something Went Wrong!!");

    // replace("Parking");
    console.log("response dis", response);

    const responseData = response.data?.items;
    console.log("response data dis", responseData);
    return responseData;
  } catch (error) {
    console.log("err", error);
  }
};

function* onDiscountRequest() {
  try {
    //   console.log(payload.email);
    const response: AxiosResponse = yield getDiscount();
    if (response) {
      console.log("response", response);
      yield put(discountSuccess(response));
    }
  } catch (error) {
    console.log("error == > ", error);
    // alert("Username or password incorrect");
    yield put(discountFailure("Something went wrong!"));
  }
}

function* DiscountSaga() {
  yield takeEvery(DISCOUNT_REQUEST, onDiscountRequest);
}

export default DiscountSaga;
