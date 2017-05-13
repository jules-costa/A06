import { connect } from 'react-redux';
import { fetchPost } from '../actions/post_actions';
import PostDetail from './post_detail';
import { onePost } from '../reducers/selectors';

const mapStateToProps = (state, { match }) => ({
  post: onePost(state, match.params.id)
});

export default connect(
  mapStateToProps,
  null
)(PostDetail);
