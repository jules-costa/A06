import React from 'react';
import { Route } from 'react-router-dom';

import PostsIndexContainer from './posts_index_container';
import PostFormContainer from './post_form_container';
import PostDetailContainer from './post_detail_container';

class App extends React.Component {
  render () {
    return (
      <div>
        <Route exact path='/api/posts' component={PostsIndexContainer} />
        <Route exact path='/api/posts' component={PostFormContainer} />
        <Route path='/api/posts/:id' component={PostDetailContainer} />
      </div>
    );
  }
}

export default App;
