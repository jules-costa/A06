import { RECEIVE_POST, RECEIVE_POSTS } from '../actions/post_actions';

const defaultState = {
  title: "",
  body: ""
};

const PostsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_POST:

    case RECEIVE_POSTS:
    
    default:
      return state
  }
};

export default PostsReducer;
