'use strict';

import React, {
  AppRegistry,
  Component,
} from 'react-native';

const MOCKED_CARDS_DATA = [
  { text: "You can't get blood out of a stone" },
  { text: "Don't teach your grandmother to suck eggs" },
  { text: "A voice as smooth as syrup" },
  { text: "Like thinking through treacle" },
  { text: "To be in a jam" },
  { text: "That's the way the cookie crumbles" }
];

import Cards from './src/cards';

class Tidioms extends Component {
  render() {
    return (
      <Cards cards={MOCKED_CARDS_DATA} style={{flex: 1}} />
    );
  }
}

AppRegistry.registerComponent('tidioms', () => Tidioms);
