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

export const createPost = (data) => (
  fetch(
    `${MOCK_API}/posts/`,
    {
      method: 'POST',
      body: JSON.stringify({
        title: data.title,
        body: data.body,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8;"
      }
    }
  )
)
