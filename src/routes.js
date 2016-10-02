import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from 'containers/app';
import Homepage from 'containers/homepage';

export const routes = (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={Homepage} />
    </Route>
  </Route>
);

export default routes;


