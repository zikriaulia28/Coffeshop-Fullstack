/* eslint-disable no-undef */
import axios from "axios";

const getProduct = (params, meta
  //   {
  //   category,
  //   limit,
  //   page,
  //   name,
  //   order,
  //   meta
  //   // search,
  // }
) => {
  // const url = `${process.env.REACT_APP_SERVER_HOST}/products?limit=${limit}&page=${page}&name=${name}&order=${order}&category=${category}`;
  const url = `${process.env.REACT_APP_SERVER_HOST}/products?${params}`;
  return axios.get(url, params, meta, {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
};

const getMeta = (params) => {
  const url = `${process.env.REACT_APP_SERVER_HOST}/products/${params}`;
  return axios.get(url, {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
};

export { getProduct, getMeta };