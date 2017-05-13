import { connect } from 'react-redux';
import { fetchAllPosts } from '../actions/post_actions';
import PostIndex from './post_index';
import { allPosts } from '../reducers/selectors';

const mapStateToProps = state => ({
  posts: allPosts(state)
});

const mapDispatchToProps = dispatch => ({
  fetchAllPosts: () => dispatch(fetchAllPosts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex);
