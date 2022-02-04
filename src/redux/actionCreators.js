import { SET_IS_AVAILABLE_PAGE, SET_OWN_DATA } from "./constants";

export const setIsAvailablePage = (page, boolean) => ({
  type: SET_IS_AVAILABLE_PAGE,
  payload: {
    page,
    boolean,
  },
});

export const setOwnData = (values) => ({
  type: SET_OWN_DATA,
  payload: values,
});
