import React from 'react';

class PostDetail extends React.Component {
  // componentDidMount() {
  //   this.props.fetchPost(this.props.match.params.id);
  // }
  //
  // componentWillReceiveProps(newProps) {
  //   if (this.props.match.params.id !== newProps.match.params.id) {
  //     this.props.fetchPost(newProps.match.params.id);
  //   }
  // }

  render () {
    const { post } = this.props;
    return (
      <section className="post-detail">

        <h1>{post.title}</h1>
        <h3>{post.body}</h3>
      </section>
    );
  }
}

export default PostDetail;
