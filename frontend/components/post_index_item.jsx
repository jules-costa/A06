import React from 'react';

const PostIndexItem = ({ post }) => (
  <li className="post-index-item">
    {post.title}
    {post.body}
  </li>
);


export default PostIndexItem;
