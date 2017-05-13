import React from 'react';
import { Route, Link } from 'react-router-dom';
import PostDetailContainer from './post_detail_container';


const PostIndexItem = ({ post }) => (
  <li className="post-index-item">
    <Link to={`/api/posts/${post.id}`}>
      <span>{post.title}</span>
    </Link>
    <Route path='/api/posts/:id' component={PostDetailContainer} />
  </li>
);


export default PostIndexItem;
