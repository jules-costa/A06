import { connect } from 'react-redux';
import { onePost } from '../reducers/selectors';
import { updatePost } from '../actions/post_actions';
import EditPostForm from './edit_post_form';

const mapStateToProps = (state, { match }) => ({
  post: onePost(state, match.params.id)
});

const mapDispatchToProps = (dispatch) => ({
  updatePost: id => dispatch(updatePost(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPostForm);
