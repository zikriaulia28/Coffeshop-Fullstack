/* eslint-disable no-undef */
import axios from "axios";

const getProduct = ({
  category,
  limit,
  page,
  name,
  order,
  // search,
}) => {
  const url = `${process.env.REACT_APP_SERVER_HOST}/products?limit=${limit}&page=${page}&name=${name}&order=${order}&category=${category}`;
  return axios.get(url, {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
};

const getMeta = (params) => {
  const url = `${process.env.REACT_APP_SERVER_HOST}${params}`;
  return axios.get(url, {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
};

export { getProduct, getMeta };