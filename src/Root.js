'use strict';
import React,{ Component } from 'react';
import { Provider,StatusBar } from 'react-redux';
import configureStore from './store/configure-store';
import App from './App';

export default class Root extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <Provider store={configureStore()}>
        <App />
      </Provider>
    )
  }
}