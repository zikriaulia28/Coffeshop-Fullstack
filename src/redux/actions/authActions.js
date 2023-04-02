import {
  loginRequest,
  loginSuccess,
  loginFailure,
  editPasswordRequest,
  editPasswordSuccess,
  editPasswordFailure,
} from "../reducers/authSlice";
import { login, editPassword } from "../../utils/https/auth";


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

export const editPasswordAsync = (oldPassword, newPassword, token) => {
  return async (dispatch) => {
    try {
      dispatch(editPasswordRequest());
      const response = await editPassword(oldPassword, newPassword, token);
      const result = response.data;
      dispatch(editPasswordSuccess(result));
      console.log(result);
    } catch (error) {
      dispatch(editPasswordFailure(error.message));
    }
  };
};
