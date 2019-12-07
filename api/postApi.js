import {API_URL, MOCK_API} from "../const";

export const getPosts = (token) => (
  fetch(
    `${MOCK_API}/posts`,
    {
      method: 'GET',
    }
  )
);

export const getPost = (id) => (
  fetch(
    `${MOCK_API}/posts/${id}`,
    {
      method: 'GET',
    }
  )
);
