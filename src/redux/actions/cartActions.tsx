import { ADD_CART, INCREASE, DECREASE } from "../../constants/ActionType";

export const increaseCart = () => ({
  type: INCREASE,
});
export const decreaseCart = () => ({
  type: DECREASE,
});
export const addCartAction = (response: any) => ({
  type: ADD_CART,
  payload: response,
});
