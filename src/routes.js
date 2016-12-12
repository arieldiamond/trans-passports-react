import React from 'react';
import { Route, IndexRoute, browserHistory } from 'react-router';
import NodesContainer from './containers/nodes_container';

import PageNotFound from './pages/page_not_found';
import Resources from './pages/resources';

import App from './components/app';

export default (
  <Route path="/" component={App} history={browserHistory} >
    <IndexRoute component={NodesContainer} />
    <Route path="resources" component={Resources} />
    <Route path="*" component={PageNotFound} />
  </Route>
);
