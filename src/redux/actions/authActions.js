import { loginRequest, loginSuccess, loginFailure } from "../reducers/authSlice";
import { login } from "../../utils/https/auth";

export const loginAsync = (email, password) => {
  return async (dispatch) => {
    try {
      dispatch(loginRequest());
      const response = await login(email, password);
      const token = response.data;
      dispatch(loginSuccess(token));
    } catch (error) {
      dispatch(loginFailure(error.message));
    }
  };
};
