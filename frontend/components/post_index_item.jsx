import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import PostDetailContainer from './post_detail_container';

class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    let id = parseInt(e.currentTarget.id);
    this.props.destroyPost(id);
  }

  render () {
    const { post } = this.props;
    return (
      <li className="post-index-item" >
        <NavLink to={`/api/posts/${post.id}`}>
          {post.title}
        </NavLink>
        <button id={post.id} onClick={ this.handleClick } className="delete-button">Delete</button>
      </li>
    );
  }
}

export default PostIndexItem;
