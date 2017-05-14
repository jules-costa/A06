import React from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
import PostDetailContainer from './post_detail_container';

class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    let id = parseInt(e.currentTarget.id);
    this.props.destroyPost(id);
  }

  render () {
    const { post } = this.props;
    return (
      <li className="post-index-item">
        <NavLink to={`/api/posts/${post.id}`} className="post-title">
          {post.title}
        </NavLink>
        <Link to={`/api/posts/${post.id}/edit`} className="edit-link">Edit</Link>
        <button id={post.id} onClick={ this.handleDelete } className="delete-button">Delete</button>
      </li>
    );
  }
}

export default PostIndexItem;
