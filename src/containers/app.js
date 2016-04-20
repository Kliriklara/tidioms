'use strict';

import React, { Component } from 'react-native';
import Tidioms from './tidioms';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../reducer';
import { MOCKED_IDIOMS_DATA } from '../../data/idioms';

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Tidioms />
      </Provider>
    );
  }
}

export default App;
