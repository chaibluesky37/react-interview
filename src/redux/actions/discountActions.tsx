import {
  DISCOUNT_REQUEST,
  DISCOUNT_REQUEST_SUCCESS,
  DISCOUNT_REQUEST_FAILURE,
} from "../../constants/ActionType";

export const discountRequest = () => ({
  type: DISCOUNT_REQUEST,
});

export const discountSuccess = (response: any) => ({
  type: DISCOUNT_REQUEST_SUCCESS,
  payload: response,
});

export const discountFailure = (error: any) => ({
  type: DISCOUNT_REQUEST_FAILURE,
  payload: error,
});
