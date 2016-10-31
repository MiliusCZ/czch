import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from 'containers/app';
import { Homepage, FakePage } from 'pages';

export const routes = (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={Homepage} />
      <Route path="/about" component={FakePage} />
      <Route path="/team" component={FakePage} />
      <Route path="/prices" component={FakePage} />
      <Route path="/services" component={FakePage} />
      <Route path="/contact" component={FakePage} />
    </Route>
  </Route>
);

export default routes;


