import React, { Component } from 'react';
import { View } from 'react-native';
import SwipeCards from 'react-native-swipe-cards';
import Card from '../card';
import { NAVBAR_HEIGHT } from '../../containers/tidioms';

class CardsComponent extends Component {
  constructor() {
    super();
    this.handleLike = this.handleLike.bind(this);
    this.handleDislike = this.handleDislike.bind(this);
  }

  handleLike(idiom) {
    const { like } = this.props;
    like(idiom.id);
  }

  handleDislike(idiom) {
    const { dislike } = this.props;
    dislike(idiom.id);
  }

  render() {
    const { idioms } = this.props;

    return (
      <View style={{ paddingTop: NAVBAR_HEIGHT, flex: 1 }}>
        <SwipeCards
          cards={idioms}

          renderCard={cardData => <Card {...cardData} />}
          renderNoMoreCards={() => alert('No more cards ;(')}

          handleYup={this.handleLike}
          handleNope={this.handleDislike}
        />
      </View>
    );
  }
}

export default CardsComponent;
