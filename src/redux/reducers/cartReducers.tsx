import { ADD_CART, INCREASE, DECREASE } from "../../constants/ActionType";
const items = localStorage.getItem("items");
const INITIAL_STATE = {
  cartData: items ? JSON.parse(items) : [],
  amount: 0,
};

function reducer(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case ADD_CART:
      // console.log("action.response", action.payload);
      return {
        cartData: action.payload,
      };
    case INCREASE:
      return {
        ...state,
        amount: Math.random() * 1000,
      };
    case DECREASE:
      return {
        ...state,
        amount: Math.random() * 1000,
      };
    default:
      return state;
  }
}
export default reducer;
