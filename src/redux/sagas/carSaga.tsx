import { put, takeEvery } from "redux-saga/effects";
import { AxiosResponse } from "axios";

import { CAR_REQUEST } from "../../constants/ActionType";
import { carSuccess, carFailure } from "../actions";
import service from "../../service/instance";

const getCar = async () => {
  try {
    const response = await service.get(
      `/spaces/vveq832fsd73/entries?content_type=car`,
    );
    if (response.status !== 200) throw new Error("Something Went Wrong!!");

    // replace("Parking");
    console.log("response", response);

    const responseData = response.data?.items;
    console.log("response data", responseData);
    return responseData;
  } catch (error) {
    console.log("err", error);
  }
};

function* onCarRequest() {
  try {
    //   console.log(payload.email);
    const response: AxiosResponse = yield getCar();
    if (response) {
      console.log("response", response);
      yield put(carSuccess(response));
    }
  } catch (error) {
    console.log("error == > ", error);
    // alert("Username or password incorrect");
    yield put(carFailure("Something went wrong!"));
  }
}

function* CarSaga() {
  yield takeEvery(CAR_REQUEST, onCarRequest);
}

export default CarSaga;
