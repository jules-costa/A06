import React from 'react';
import PostIndexItem from './post_index_item';
import { Route } from 'react-router-dom';
import PostFormContainer from './post_form_container';
import PostDetailContainer from './post_detail_container';

class PostIndex extends React.Component {

  componentDidMount() {
    this.props.fetchAllPosts();
  }

  render () {
    const { posts, destroyPost, updatePost } = this.props;
    return (
      <ul className="postindex">
        <h1>All Posts!</h1>
        {posts.map(post =>
          <PostIndexItem key={post.id} post={post} destroyPost={destroyPost} updatePost={updatePost} />
        )}
      </ul>
    );
  }

}

export default PostIndex;
