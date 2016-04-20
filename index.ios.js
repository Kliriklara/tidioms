'use strict';

import React, {
  AppRegistry,
  Component,
  NavigatorIOS,
} from 'react-native';
import Info from './src/components/info';
import Cards from './src/components/cards';
import { MOCKED_IDIOMS_DATA } from './data/idioms';

class Tidioms extends Component {
  constructor() {
    super();
    this.onRightButtonPress = this.onRightButtonPress.bind(this);
  }

  onRightButtonPress() {
    this.refs.nav.push({
      title: 'Info',
      component: Info,
      passProps: { cards: MOCKED_IDIOMS_DATA },
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
          passProps: { cards: MOCKED_IDIOMS_DATA },
          rightButtonTitle: 'Info',
          onRightButtonPress: this.onRightButtonPress,
        }}
      />
    );
  }
}

const BAR_TINT_COLOR = '#607D8B',
  TINT_COLOR = '#ECECEC';

const NAVBAR_HEIGHT = 61;

AppRegistry.registerComponent('tidioms', () => Tidioms);
export { NAVBAR_HEIGHT };
