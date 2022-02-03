import { SET_IS_PERSONAL_PAGE } from "./constants";

const initialState = {
  isPersonalPage: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_PERSONAL_PAGE:
      return {
        ...state,
        isPersonalPage: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
