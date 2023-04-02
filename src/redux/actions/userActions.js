import {
  updateProfileRequest,
  updateProfileSuccess,
  updateProfileFailure,
} from "../reducers/userSlice";
import { updateProfile } from "../../utils/https/auth";

export const updateProfileAsync = (id, token, display_name, firstname, lastname, address, birth_day, image, gender) => {
  return async (dispatch) => {
    try {
      dispatch(updateProfileRequest());
      const response = await updateProfile(id, token, display_name, firstname, lastname, address, birth_day, image, gender);
      const result = response.data;
      console.log(result);
      dispatch(updateProfileSuccess(result));
      console.log(result);
    } catch (error) {
      dispatch(updateProfileFailure(error.message));
    }
  };
};
