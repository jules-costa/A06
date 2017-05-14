import React from 'react';
import { Route } from 'react-router-dom';

import PostsIndexContainer from './posts_index_container';
import PostFormContainer from './post_form_container';
import PostDetailContainer from './post_detail_container';
import EditPostContainer from './edit_post_container';

class App extends React.Component {
  render () {
    return (
      <div>
        <Route exact path='/' component={PostsIndexContainer} />
        <Route path='/api/posts' component={PostsIndexContainer} />
        <Route path='/' component={PostFormContainer} />
        <Route exact path='/api/posts/:id' component={PostDetailContainer} />
        <Route exact path='/api/posts/:id/edit' component={EditPostContainer} />
      </div>
    );
  }
}

export default App;
