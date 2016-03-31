import React, { Component } from 'react-native';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';

import RootApp from './app';
import * as reducers from '../reducers';
import { application } from '../sagas/';

const sagaMiddleware = createSagaMiddleware(application);

const rootReducers = combineReducers(Object.assign({}, reducers));

const store = createStore(
  rootReducers,
  applyMiddleware(sagaMiddleware)
);

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootApp />
      </Provider>
    );
  }
}
