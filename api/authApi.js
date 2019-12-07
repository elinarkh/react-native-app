import {API_URL, TOKEN_KEY} from "../const";
import {AsyncStorage} from "react-native";
import base64 from 'react-native-base64'

export const tokenize = (username, password) => {
  const token = `${username}:${password}`;
  return `${base64.encode(token)}`;
};

export const login = (userInfo) => fetch(
  `${API_URL}/users/me`,
  {
    method: 'GET',
    headers: {
      'Authorization': `Basic ${tokenize(userInfo.username, userInfo.password)}`,
    }
  }
);

export const register = (userInfo) => {
  return fetch(
    `${API_URL}/users/register`,
    {
      method: 'POST',
      body: JSON.stringify(userInfo),
    }
  );
};

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


export const signedIn = async () => {
  try {
    const token = await AsyncStorage.getItem(TOKEN_KEY);
    if (!token) {
      return false;
    } else {
      const response = me(token);
      return (response.status !== 200);
    }
  } catch(e) {
    console.error(e);
    throw e;
  }
};
