import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from 'containers/app';
import { Homepage, FakePage, Team, Prices, Services, Contact, Tools } from 'pages';

export const routes = (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={Homepage} />
      <Route path="/about" component={FakePage} />
      <Route path="/team" component={Team} />
      <Route path="/prices" component={Prices} />
      <Route path="/services" component={Services} />
      <Route path="/tools" component={Tools} />
      <Route path="/contact" component={Contact} />
    </Route>
  </Route>
);

export default routes;


