export const RECEIVE_POST = "RECEIVE_POST";
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const REMOVE_POST = "REMOVE_POST";
import * as APIUtil from '../util/api_util';

export const receivePost = (post) => ({
  type: RECEIVE_POST,
  post
});

export const receivePosts = (posts) => ({
  type: RECEIVE_POSTS,
  posts
});

export const removePost = (post) => ({
  type: REMOVE_POST,
  post
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

export const deletePost = (id) => dispatch => {
  return APIUtil.deletePost(id).then(postToRemove => dispatch(removePost(postToRemove)));
};

export const updatePost = id => dispatch => {
  return APIUtil.updatePost(id).then(postToUpdate => dispatch(receivePost(postToUpdate)));
};
