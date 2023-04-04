import axios from "axios";

// eslint-disable-next-line no-undef
const baseUrl = `${process.env.REACT_APP_SERVER_HOST}`;

export const addTransactions = (token, data) => {
  const url = `${baseUrl}/transactions`;
  // const config = controller ? { signal: controller.signal } : {};
  return axios.post(url, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getHistory = (token) => {
  const url = `${baseUrl}/transactions`;
  // const config = controller ? { signal: controller.signal } : {};
  return axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Origin": "*",
    },
  });
};