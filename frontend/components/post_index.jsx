import React from 'react';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {

  componentDidMount() {
    this.props.fetchAllPosts();
  }

  render () {
    const { posts } = this.props;
    return (
      <section className="postindex">
        <ul>
          {posts.map(post => <PostIndexItem key={post.id} post={post} />)}
        </ul>
      </section>
    );
  }

}

export default PostIndex;
