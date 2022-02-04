import { SET_IS_AVAILABLE_PAGE } from "./constants";

export const setIsAvailablePage = (page, boolean) => ({
  type: SET_IS_AVAILABLE_PAGE,
  payload: {
    page,
    boolean
  },
});


