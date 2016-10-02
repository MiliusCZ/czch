import { compose, createStore, applyMiddleware, combineReducers } from 'redux';

import firebase from 'firebase';

import * as reducers from 'reducers';
import sagas from 'sagas';

import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { browserHistory } from 'react-router';
import createSagaMiddleware from 'redux-saga';

const reducer = combineReducers({ ...reducers, routing: routerReducer });

const config = {
    apiKey: "AIzaSyA9HteFZgKoYM3_Cw2_pB373qTSTAWJIPw",
    authDomain: "czch-cz.firebaseapp.com",
    databaseURL: "https://czch-cz.firebaseio.com",
    storageBucket: "czch-cz.appspot.com",
    messagingSenderId: "299483382572"
};

firebase.initializeApp(config);

const sagaMiddleware = createSagaMiddleware();

export const store = compose(
  applyMiddleware(sagaMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)(reducer);

export const history = syncHistoryWithStore(browserHistory, store);

sagaMiddleware.run(sagas);

export default store;
