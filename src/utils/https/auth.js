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


// export const updateProfile = (display_name, firstname, lastname, address, birth_day, image,) => {
//   const formData = new FormData();
//   formData.append("image", image);
//   formData.append("display_name", display_name);
//   formData.append("firstname", firstname);
//   formData.append("lastname", lastname);
//   formData.append("address", address);
//   formData.append("birth_day", birth_day);
//   // const token = get("tokokopi-token");
//   const url = `${baseUrl}/users/${id}`
//   return axios.patch(url, formData, {
//     // signal: controller.signal,
//     data: formData,
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
// };


export const updateProfile = (id, token, display_name, firstname, lastname, address, birth_day, image,) => {
  const formData = new FormData();
  formData.append("image", image);
  formData.append("display_name", display_name);
  formData.append("firstname", firstname);
  formData.append("lastname", lastname);
  formData.append("address", address);
  formData.append("birth_day", birth_day);
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

// function AuthData(props) {
//   const id = useSelector((state) => state.auth.data.id);
//   const token = useSelector((state) => state.auth.data.token);
//   const data = { id, token };
//   props.getData(data); // Mem-passing data ke fungsi getData
//   return null; // Komponen AuthData tidak merender apa-apa
// }

// export default AuthData;





