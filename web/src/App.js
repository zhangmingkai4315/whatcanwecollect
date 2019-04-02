import React, { Component } from 'react';

import { applyMiddleware, createStore, compose } from 'redux'
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { Router, Route } from "react-router-dom";

import history from './utils/history';
import IndexReducer from './containers/reducers';
import IndexSagas from './containers/sagas';

import './App.css';
import Header from './components/Header';
import { Home, Controller } from './containers'


const sagaMiddleware = createSagaMiddleware()
/*eslint-disable */
const composeSetup = process.env.NODE_ENV !== 'production' && typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose
/*eslint-enable */
const store = createStore(IndexReducer, composeSetup(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(IndexSagas);



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div>
            <Header />
            <Route path="/" component={Home} />
            <Controller />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
