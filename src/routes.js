import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from 'containers/app';
import { Homepage, Team, Prices, Services, Contact, Tools } from 'pages';

export const routes = (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={Homepage} />
      <Route path="/tym" component={Team} />
      <Route path="/cenik" component={Prices} />
      <Route path="/sluzby" component={Services} />
      <Route path="/pristroje" component={Tools} />
      <Route path="/kontakt" component={Contact} />
    </Route>
  </Route>
);

export default routes;
