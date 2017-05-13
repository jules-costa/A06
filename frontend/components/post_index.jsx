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
    const { posts } = this.props;
    return (
      <ul className="postindex">
        {posts.map(post => <PostIndexItem key={post.id} post={post} />)}
      </ul>
    );
  }

}

export default PostIndex;
