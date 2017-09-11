// /routes.js
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import App from './app';
import Search from './layout/search';
import Detail from './layout/detail';
import NotFound from './app';

const Routes = (props) => (
  <Router {...props}>
    <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/make/model/:modelId" component={Detail} />
        <Route exact path="*" component={NotFound} />
    </Switch>
  </Router>
);

export default Routes;