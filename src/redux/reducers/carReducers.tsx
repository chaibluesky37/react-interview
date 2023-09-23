import {
  CAR_REQUEST,
  CAR_REQUEST_SUCCESS,
  CAR_REQUEST_FAILURE,
} from "../../constants/ActionType";
const INITIAL_STATE = {
  carData: [],
  error: null,
  loading: false,
};

function reducer(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case CAR_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CAR_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        carData: action.payload,
      };
    case CAR_REQUEST_FAILURE:
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
