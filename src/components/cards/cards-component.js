import React, { Component, View } from 'react-native';
import SwipeCards from 'react-native-swipe-cards';
import Card from '../card';
import { NAVBAR_HEIGHT } from '../../containers/tidioms';

class CardsComponent extends Component {
  render() {
    const { idioms, like, dislike } = this.props;

    return (
      <View style={{ paddingTop: NAVBAR_HEIGHT, flex: 1 }}>
        <SwipeCards
          cards={idioms}

          renderCard={cardData => <Card {...cardData} />}
          renderNoMoreCards={() => alert('No more cards ;(')}

          handleYup={like}
          handleNope={dislike}
        />
      </View>
    );
  }
}

export default CardsComponent;
