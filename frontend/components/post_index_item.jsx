import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import PostDetailContainer from './post_detail_container';


const PostIndexItem = ({ post }) => (
  <li className="post-index-item" key={post.id}>
    <NavLink to={`/api/posts/${post.id}`}>
      {post.title}
    </NavLink>
  </li>
);


export default PostIndexItem;
