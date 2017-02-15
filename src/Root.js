'use strict';
import React,{ Component } from 'react';
import { Provider,StatusBar } from 'react-redux';
import configureStore from './store/configure-store';
import App from './App';
import codePush from "react-native-code-push";

class Root extends Component {

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

let CodePushApp=Root;
if (!__DEV__) {
  CodePushApp = codePush({ checkFrequency: codePush.CheckFrequency.ON_APP_RESUME, installMode: codePush.InstallMode.ON_NEXT_RESUME })(Root);
}
export default CodePushApp;
