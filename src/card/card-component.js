import React, {
  View,
  Component,
  Text,
  StyleSheet,
} from 'react-native';

class CardComponent extends Component {
  render() {
    return (
      <View style={styles.card}>
        <Text>{this.props.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 280,
    height: 280,
    padding: 20,
    backgroundColor: '#c4b8ce',
  }
});

export default CardComponent;
