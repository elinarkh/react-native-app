import {API_URL} from "../const";

const tokenize = (username, password) => {
  const token = `${username}:${password}`
  return `Basic ${btoa(token)}`;
};

export const login = (userInfo) => fetch(
  `${API_URL}/users/me`,
  {
    method: 'GET',
    headers: {
      'Authorization': tokenize(userInfo.username, userInfo.password),
    }
  }
);

export const me = (token) => (
  fetch(
    `${API_URL}/users/me`,
    {
      method: 'GET',
      headers: {
        "Authorization": `Basic ${token}`,
      }
    }
  )
);
