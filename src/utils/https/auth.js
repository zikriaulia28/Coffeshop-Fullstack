import axios from "axios";
import { get } from "../localStorage";

// eslint-disable-next-line no-undef
const baseUrl = `${process.env.REACT_APP_SERVER_HOST}`;

export const login = (email, password, controller) => {
  const body = {
    email,
    password,
  };
  const url = `${baseUrl}/auth`;
  return axios.post(url, body, {
    signal: controller.signal,
  });
};

export const register = (email, pwd, phoneNumber, controller) => {
  const body = {
    email,
    pwd,
    phoneNumber,
  };
  const url = `${baseUrl}/auth/new`;
  return axios.post(url, body, {
    signal: controller.signal,
  });
};

export const updateProfile = (display_name, firstname, lastname, address, birth_day, image) => {
  const formData = new FormData();

  formData.append("image", image);
  formData.append("display_name", display_name);
  formData.append("firstname", firstname);
  formData.append("lastname", lastname);
  formData.append("address", address);
  formData.append("birth_day", birth_day);
  // eslint-disable-next-line no-undef
  // const url = `${process.env.REACT_APP_SERVER_HOST}`;
  const token = get("tokokopi-token");
  const url = `${baseUrl}/users/${token.id}`
  return axios.patch(url, formData, {
    // signal: controller.signal,
    data: formData,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

