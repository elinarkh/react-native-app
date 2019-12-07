import {API_URL, MOCK_API, TOKEN_KEY} from "../const";
import {AsyncStorage} from "react-native";

export const getPosts = async () => (
  fetch(
    `${API_URL}/events`,
    {
      method: 'GET',
      headers: {
        Authorization: `Basic ${await AsyncStorage.getItem(TOKEN_KEY)}`
      }
    }
  )
);

export const getPost = async (id) => (
  fetch(
    `${API_URL}/events/${id}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Basic ${await AsyncStorage.getItem(TOKEN_KEY)}`
      }
    }
  )
);
