import axios from "axios";

export const fetchUsers = (controller) => {
  return fetch("https://jsonplaceholder.typicode.com/users", {
    signal: controller.signal,
  })
}

export const getUsers = (controller, onSuccess, onFailure) => {
  axios.get("https://jsonplaceholder.typicode.com/users", {
    signal: controller.signal,
  })
    .then(onSuccess)
    .catch(onFailure)
}