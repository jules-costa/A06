import values from 'lodash/values';

export const allPosts = state => (
  values(state.posts)
);
