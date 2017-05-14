import { RECEIVE_POST, RECEIVE_POSTS, REMOVE_POST } from '../actions/post_actions';
import merge from 'lodash/merge';

const defaultState = {
  title: "",
  body: ""
};

const PostsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_POST:
      let newPost = {[action.post.id]: action.post};
      return merge({}, state, newPost);
    case RECEIVE_POSTS:
      return merge({}, action.posts);
    case REMOVE_POST:
      let newState = merge({}, state);
      delete newState[action.post.id];
      return newState;
    default:
      return state;
  }
};

export default PostsReducer;
