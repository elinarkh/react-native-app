export const getPosts = () => (
  fetch(
    'http://5da5c7ce57f48b0014fbad58.mockapi.io/api/posts',
    {
      method: 'GET',
    }
  )
)

export const getPost = (id) => (
  fetch(
    `http://5da5c7ce57f48b0014fbad58.mockapi.io/api/posts/${id}`,
    {
      method: 'GET',
    }
  )
)