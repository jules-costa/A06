import values from 'lodash/values';

export const allPosts = state => (
  values(state.posts)
);

export const onePost = (state, id) => (
  state.posts[id]
);
