import React from 'react';
import { Route, IndexRoute, browserHistory } from 'react-router';
import QuestionsContainer from './containers/questions_container';

import PageNotFound from './pages/page_not_found';
import Resources from './pages/resources';

import App from './components/app';

export default (
  <Route path="/" component={App} history={browserHistory} >
    <IndexRoute component={QuestionsContainer} />
    <Route path="resources" component={Resources} />
    <Route path="*" component={PageNotFound} />
  </Route>
);
