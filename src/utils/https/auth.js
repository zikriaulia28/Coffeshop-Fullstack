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

export const uploadImage = (img, controller) => {
  const formData = new FormData();
  formData.append("image", img);
  // eslint-disable-next-line no-undef
  // const url = `${process.env.REACT_APP_SERVER_HOST}`;
  const token = get("tokokopi-token");
  return axios.post(baseUrl, formData, {
    signal: controller.signal,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};