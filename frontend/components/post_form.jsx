import React from 'react';
import { withRouter } from 'react-router-dom';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      title: e.target.value,
      body: e.target.body
    });
  }

  handleClick(e) {
    e.preventDefault();
    this.props.createPost(this.state);
  }

  render () {
    return (
      <form className="new-post-form" onSubmit={() => this.handleClick}>
        <input type="text" value={this.state.title} placeholder="Title" onChange={() => this.handleChange} />
        <input type="text" value={this.state.body} placeholder="Body" onChange={() => this.handleChange} />
        <button>Submit</button>
      </form>
    );
  }
}

export default PostForm;
