import {API_URL} from "../const";

export const getPosts = () => (
  fetch(
    `${API_URL}/posts`,
    {
      method: 'GET',
    }
  )
);

export const getPost = (id) => (
  fetch(
    `${API_URL}/posts/${id}`,
    {
      method: 'GET',
    }
  )
);
