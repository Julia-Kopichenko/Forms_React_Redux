import { SET_IS_AVAILABLE_PAGE, SET_OWN_DATA } from "./constants";

const initialState = {
  isAvailablePages: {
    personalPage: false,
    creditCardDataPage: false,
    resultDataPage: false,
  },
  userOwnData: {
    firstName: "",
    lastName: "",
    patronymic: "",
    dateOfBirthday: "",
    gender: "",
    country: "",
    address: "",
    mothersSurname: "",
    codeword: "",
    info: "",
    friendsEmail: "",
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
    case SET_OWN_DATA:
      return {
        ...state,
        userOwnData: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
