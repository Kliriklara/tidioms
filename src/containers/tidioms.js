'use strict';

import React, {
  AppRegistry,
  Component,
  NavigatorIOS,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Info from '../components/info';
import Cards from '../components/cards';
import * as cardActions from '../actions/card-actions';

const NAVBAR_HEIGHT = 61,
  BAR_TINT_COLOR = '#607D8B',
  TINT_COLOR = '#ECECEC';

class Tidioms extends Component {
  constructor() {
    super();
    this.onRightButtonPress = this.onRightButtonPress.bind(this);
  }

  onRightButtonPress() {
    this.refs.nav.push({
      title: 'Info',
      component: Info,
      passProps: { idioms },
    })
  }

  render() {
    const { idioms, actions } = this.props;

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
          passProps: { idioms, ...actions },
          rightButtonTitle: 'Info',
          onRightButtonPress: this.onRightButtonPress,
        }}
      />
    );
  }
}

export default connect(
  state => ({
    idioms: state.idioms,
  }),
  dispatch => ({
    actions: bindActionCreators(cardActions, dispatch)
  })
)(Tidioms);

export { NAVBAR_HEIGHT };
