import React, {
  View,
  Component,
  ScrollView,
  Text,
  StyleSheet,
} from 'react-native';
import { NAVBAR_HEIGHT } from '../../../index.ios.js';

class InfoComponent extends Component {
  render() {
    return (
      <ScrollView>
        <Text style={styles.text}>
          Idioms are phrases, words or expressions that do not have the same meaning as the actual words used in the phrase.
        </Text>
        <Text style={styles.text}>
          In other words, their meaning cannot be taken literally.
          For example, we can say:
          "I’m over the moon that I got a band 7.5 in IELTS".
          Obviously you can’t take the words ‘over the moon’ literally. It does not mean the person is standing over the moon!
        </Text>
        <Text style={styles.text}>
          The phrase is used when someone wants to express that they are incredibly happy about something that has happened.
          They are also expressions that are grammatically unusual. For example:
          "So far, so good".
          This means that up until this point in time, things are going well.
        </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    paddingTop: 20,
    paddingRight: 20,
    paddingLeft: 20,
  },
});

export default InfoComponent;


