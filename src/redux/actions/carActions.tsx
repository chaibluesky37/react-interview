import {
  CAR_REQUEST,
  CAR_REQUEST_SUCCESS,
  CAR_REQUEST_FAILURE,
} from "../../constants/ActionType";

export const carRequest = () => ({
  type: CAR_REQUEST,
});

export const carSuccess = (response: any) => ({
  type: CAR_REQUEST_SUCCESS,
  payload: response,
});

export const carFailure = (error: any) => ({
  type: CAR_REQUEST_FAILURE,
  payload: error,
});
