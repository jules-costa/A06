import { connect } from 'react-redux';
import { fetchAllPosts } from '../actions/post_actions';
import PostIndex from './post_index';

const mapStateToProps = state => ({
  posts: state.posts
});

const mapDispatchToProps = dispatch => ({
  fetchAllPosts: () => dispatch(fetchAllPosts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex);
