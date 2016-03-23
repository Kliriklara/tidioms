'use strict';

import React, {
  AppRegistry,
  Component,
  NavigatorIOS,
} from 'react-native';
import Cards from './src/cards';

const MOCKED_CARDS_DATA = [
  { text: "You can't get blood out of a stone" },
  { text: "A voice as smooth as syrup" },
  { text: "Like thinking through treacle" },
  { text: "To be in a jam" },
  { text: "That's the way the cookie crumbles" }
];

class Tidioms extends Component {
  constructor() {
    super();
    this.onRightButtonPress = this.onRightButtonPress.bind(this);
  }

  onRightButtonPress() {
    this.refs.nav.push({
      title: 'Settings',
      component: Cards,
      passProps: { cards: MOCKED_CARDS_DATA },
    })
  }

  render() {
    return (
      <NavigatorIOS
        ref='nav'
        barTintColor={BAR_TINT_COLOR}
        tintColor={TINT_COLOR}
        itemWrapperStyle={{ flex:1 }}
        style={{ flex:1 }}
        initialRoute={{
          title: 'Tidioms',
          component: Cards,
          passProps: { cards: MOCKED_CARDS_DATA },
          rightButtonTitle: 'Settings',
          onRightButtonPress: this.onRightButtonPress,
        }}
      />
    );
  }
}

const BAR_TINT_COLOR = '#607D8B',
  TINT_COLOR = '#ECECEC';

AppRegistry.registerComponent('tidioms', () => Tidioms);
