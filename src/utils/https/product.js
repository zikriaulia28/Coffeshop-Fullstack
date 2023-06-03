/* eslint-disable no-undef */
import axios from "axios";
const baseUrl = `${process.env.REACT_APP_SERVER_HOST}`;

export const getProduct = (params, controller) => {
  const url = `${baseUrl}/products?limit=${params.limit}&page=${params.page}&category=${params.category}&search=${params.search}&order=${params.order}`;
  console.log(url);
  return axios.get(url, params, {
    signal: controller.signal,
    'Access-Control-Allow-Origin': '*',
  });
};


