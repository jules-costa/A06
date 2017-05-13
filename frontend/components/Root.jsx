import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';
import PostsIndexContainer from './posts_index_container';

const Root = ({store}) => (
  <Provider store={ store }>
    <HashRouter>
      <Route path='/' component={PostsIndexContainer} />
    </HashRouter>
  </Provider>
);

export default Root;
