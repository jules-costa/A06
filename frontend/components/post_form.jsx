import React from 'react';
import { withRouter } from 'react-router-dom';
import merge from 'lodash/merge';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateTitle(e) {
    this.setState({title: e.target.value});
  }

  updateBody(e) {
    this.setState({body: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const newPost = merge({}, this.state);
    this.props.createPost(newPost).then(
      () => this.setState({
        title: "",
        body: ""
      })
    ).then((post) =>
      this.props.history.push('/api/posts')
    );
  }

  render () {
    return (
      <form className="new-post-form" onSubmit={this.handleSubmit}>Create New Post
        <input type="text" value={this.state.title} placeholder="Title" onChange={this.updateTitle} />
        <input type="text" value={this.state.body} placeholder="Body" onChange={this.updateBody} />
        <button>Submit</button>
      </form>
    );
  }
}

export default PostForm;
