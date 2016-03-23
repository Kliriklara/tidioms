import React, {
  View,
  Component,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import CardWrapper from './card-wrapper';

class CardComponent extends Component {
  render() {
    const { text, imageUrl } = this.props;

    return (
      <View style={styles.card}>
        <Image
          source={{ uri: imageUrl }}
          style={styles.image}
        />
        <Text style={styles.text}>
          {text}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    alignItems: 'center',
    width: 280,
    height: 340,
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
    width: 280,
    resizeMode: 'cover',
  },
  text: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default CardWrapper(CardComponent);
