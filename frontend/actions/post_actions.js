export const RECEIVE_POST = "RECEIVE_POST";
export const RECEIVE_POSTS = "RECEIVE_POSTS";
import * as APIUtil from '../util/api_util';

export const receivePost = (post) => ({
  type: RECEIVE_POST,
  post
});

export const receivePosts = (posts) => ({
  type: RECEIVE_POSTS,
  posts
});

export const fetchAllPosts = () => dispatch => {
  return APIUtil.fetchAllPosts().then(posts => dispatch(receivePosts(posts)));
};

export const fetchPost = (id) => dispatch => {
  return APIUtil.fetchPost(id).then(post => dispatch(receivePost(post)));
};

export const createPost = (newPost) => dispatch => {
  return APIUtil.createNewPost(newPost).then(post => dispatch(receivePost));
};
