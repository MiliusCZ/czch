import 'assets/styles/index.scss';
import 'jquery/src/jquery.js';
import 'bootstrap-sass/assets/javascripts/bootstrap-sprockets.js';
import 'bootstrap-sass/assets/javascripts/bootstrap.min.js';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from 'store';
import routes from 'routes';


import ReactGA from 'react-ga';

const logPageView = () => {
  ReactGA.set({ page: window.location.pathname + window.location.search });
  ReactGA.pageview(window.location.pathname + window.location.search);
};

const routerUpdated = () => {
  window.scrollTo(0, 0);
  logPageView();
};

ReactGA.initialize('UA-108265995-1');

ReactDOM.render(
  <Provider store={store}>
    <Router onUpdate={routerUpdated()} history={history}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('react')
);
