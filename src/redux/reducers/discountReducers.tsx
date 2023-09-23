import {
  DISCOUNT_REQUEST,
  DISCOUNT_REQUEST_SUCCESS,
  DISCOUNT_REQUEST_FAILURE,
} from "../../constants/ActionType";
const INITIAL_STATE = {
  discountData: [],
  error: null,
  loading: false,
};

function reducer(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case DISCOUNT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DISCOUNT_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        discountData: action.payload,
      };
    case DISCOUNT_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
export default reducer;
