import axios from "axios";
// import { get } from "../localStorage";


// eslint-disable-next-line no-undef
const baseUrl = `${process.env.REACT_APP_SERVER_HOST}`;

export const login = (email, password, controller) => {
  const body = {
    email,
    password,
  };
  const url = `${baseUrl}/auth`;
  const config = controller ? { signal: controller.signal } : {};
  return axios.post(url, body, config);
};

export const register = (email, password, phone_number, controller) => {
  const body = {
    email,
    password,
    phone_number,
  };
  const url = `${baseUrl}/auth/new`;
  const config = controller ? { signal: controller.signal } : {};
  return axios.post(url, body, config);
};

export const updateProfile = (id, token, display_name, firstname, lastname, address, birth_day, image, gender) => {
  const formData = new FormData();
  formData.append("image", image);
  formData.append("display_name", display_name);
  formData.append("firstname", firstname);
  formData.append("lastname", lastname);
  formData.append("address", address);
  formData.append("birth_day", birth_day);
  formData.append("gender", gender);
  const url = `${baseUrl}/users/profile/${id}`
  return axios.patch(url, formData, {
    data: formData,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateUser = (id, token, email, phone_number) => {
  const formData = new FormData();
  formData.append("email", email);
  formData.append("phone_number", phone_number);
  const url = `${baseUrl}/users/${id}`
  return axios.patch(url, formData, {
    data: formData,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const fetchProfileData = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}/users/${id}`);
    const result = response.data.data[0];
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const editPassword = (oldPassword, newPassword, token) => {
  const body = {
    oldPassword,
    newPassword,
  };
  const url = `${baseUrl}/auth`
  return axios.patch(url, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};






