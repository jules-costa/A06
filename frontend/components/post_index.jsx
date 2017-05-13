import React from 'react';

class PostIndex extends React.Component {

  componentDidMount() {
    this.props.fetchAllPosts();
  }

  render () {
    return (
      <h1>Hello</h1>
    );
  }

}

export default PostIndex;
