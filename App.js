import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './src/reducer';
import Tidioms from './src/containers/tidioms';
import { StyleSheet, Text, View } from 'react-native';

const store = createStore(reducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Tidioms />
      </Provider>
    );
  }
}
