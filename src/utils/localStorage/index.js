export const save = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
export const get = (key) => {
  const data = localStorage.getItem(key);
  return JSON.parse(data);
};
export const remove = (key) => {
  localStorage.removeItem(key);
};