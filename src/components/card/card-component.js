import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import CardWrapper from './card-wrapper';

class CardComponent extends Component {
  render() {
    const { text, imageUrl, description } = this.props;

    return (
      <View style={styles.card}>
        <Image
          source={{ uri: imageUrl }}
          style={styles.image}
        />
        <Text style={styles.text}>
          {text}
        </Text>
        <Text style={styles.description}>
          {description}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    alignItems: 'center',
    width: 320,
    height: 440,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    borderRadius: 2,
    backgroundColor: 'white',
    shadowColor: 'grey',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0,
    },
  },
  image: {
    height: 200,
    width: 320,
    resizeMode: 'cover',
    backgroundColor: '#d3d3d3',
  },
  text: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    marginTop: 20,
  }
});

export default CardWrapper(CardComponent);
