import React from 'react';
import { withRouter } from 'react-router-dom';
import merge from 'lodash/merge';

class EditPostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.post.id,
      title: this.props.post.title,
      body: this.props.post.body
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
    this.props.updatePost(newPost);
  }

  render () {
    return (
      <form className="edit-post-form" onSubmit={this.handleSubmit}>Edit Post
        <input type="text" value={this.state.title} placeholder="Title" onChange={this.updateTitle} />
        <input type="text" value={this.state.body} placeholder="Body" onChange={this.updateBody} />
        <button>Update</button>
      </form>
    );
  }
}

export default EditPostForm;
