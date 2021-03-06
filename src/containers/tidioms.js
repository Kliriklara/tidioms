'use strict';

import React, { Component } from 'react';
import {
  NavigatorIOS,
  ListView,
  View,
  Text,
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Info from '../components/info';
import Cards from '../components/cards';
import * as cardActions from '../actions/card-actions';
import { compact, includes, filter } from 'lodash';

const NAVBAR_HEIGHT = 64,
  BAR_TINT_COLOR = '#607D8B',
  TINT_COLOR = '#ECECEC';

class Tidioms extends Component {
  constructor() {
    super();
    this.onRightButtonPress = this.onRightButtonPress.bind(this);
    this.removeCard = this.removeCard.bind(this);
    this.getRouteObject = this.getRouteObject.bind(this);
  }

  getRouteObject(ratedIdioms) {
    const { idioms } = this.props;
    const arr = Array.from(ratedIdioms, (v, k) => v[1] ? v[0] : undefined);
    const compactedArr = compact(arr);

    let dataSource;

    if (compactedArr.length > 0) {
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2 });
      dataSource = ds.cloneWithRows(compactedArr);
    }

    return {
      title: 'Info',
      component: Info,
      passProps: { dataSource, ratedIdioms, idioms, remove: this.removeCard }
    };
  }

  removeCard(id) {
    const { idioms, actions } = this.props;

    actions.remove(id);

    const { ratedIdioms } = this.props;
    const route = this.getRouteObject(ratedIdioms);

    this.refs.nav.replace(route);
  }

  onRightButtonPress() {
    const { idioms, ratedIdioms, actions } = this.props;
    const route = this.getRouteObject(ratedIdioms);

    this.refs.nav.push(route);
  }

  render() {
    const { idioms, actions } = this.props;

    return (
      <NavigatorIOS
        ref='nav'
        barTintColor={BAR_TINT_COLOR}
        tintColor={TINT_COLOR}
        titleTextColor={TINT_COLOR}
        itemWrapperStyle={{ flex:1, paddingTop: NAVBAR_HEIGHT }}
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
    ratedIdioms: state.ratedIdioms,
  }),
  dispatch => ({
    actions: bindActionCreators(cardActions, dispatch)
  })
)(Tidioms);

