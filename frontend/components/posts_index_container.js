import { connect } from 'react-redux';
import { fetchAllPosts, deletePost } from '../actions/post_actions';
import PostIndex from './post_index';
import { allPosts } from '../reducers/selectors';


const mapStateToProps = (state, { match }) => ({
  posts: allPosts(state)
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllPosts: () => dispatch(fetchAllPosts()),
  destroyPost: id => dispatch(deletePost(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex);
