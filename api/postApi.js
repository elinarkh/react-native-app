const API_URL = 'http://5da5c7ce57f48b0014fbad58.mockapi.io/api';

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
