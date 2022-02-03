import { SET_IS_PERSONAL_PAGE } from "./constants";

export const setIsPersonalPage = (boolean) => ({
  type: SET_IS_PERSONAL_PAGE,
  payload: boolean,
});
