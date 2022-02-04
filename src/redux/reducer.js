import { SET_IS_AVAILABLE_PAGE } from "./constants";
import { SET_IS_OWN_DATA_DONE } from "./constants";

const initialState = {
  isAvailablePages: {
    personalPage: false,
    creditCardDataPage: false,
    resultDataPage: false,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_AVAILABLE_PAGE:
      return {
        ...state,
        isAvailablePages: {
          ...state.isAvailablePages,
          [action.payload.page]: action.payload.boolean,
        },
      };
    case SET_IS_OWN_DATA_DONE:
      return {
        ...state,
        isOwnDataDone: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
