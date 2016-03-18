import React, { Component } from 'react-native';
import SwipeCards from 'react-native-swipe-cards';
import Card from '../card';

class CardsComponent extends Component {
  handleYup (card) {
    console.log(`Yup for ${card.text}`)
  }

  handleNope (card) {
    console.log(`Nope for ${card.text}`)
  }

  render() {
    const { cards } = this.props;

    return (
      <SwipeCards
        cards={cards}

        renderCard={(cardData) => <Card {...cardData} />}
        renderNoMoreCards={() => alert('No more cards ;(')}

        handleYup={this.handleYup}
        handleNope={this.handleNope}
      />
    );
  }
}

export default CardsComponent;
