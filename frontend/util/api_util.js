export const fetchAllPosts = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/posts'
  });
};

export const fetchPost = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/posts/${id}`
  });
};

export const createNewPost = (post) => {
  return $.ajax({
    method: 'POST',
    url: '/api/posts',
    data: {post}
  });
};
