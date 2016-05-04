import React, {
  View,
  Component,
  ScrollView,
  ListView,
  Text,
  StyleSheet,
} from 'react-native';
import { NAVBAR_HEIGHT } from '../../containers/tidioms';
import Swipeout from 'react-native-swipeout';
import { compact, includes, find, partial } from 'lodash';

class InfoComponent extends Component {
  constructor() {
    super();
    this.renderRow = this.renderRow.bind(this);
  }

  renderRow(rowData, sectionID, rowID) {
    const { idioms, remove } = this.props;
    const idiom = find(idioms, ({ id }) => id === rowData);
    const onPress = partial(remove, rowData);

    return (
      <Swipeout
        right={[ { text: 'Delete', type: 'delete', onPress } ]}
        rowID={rowID}
        sectionID={sectionID}
        autoClose={true}
      >
        <View style={styles.li}>
          <Text>{idiom.text}</Text>
        </View>
      </Swipeout>
    );
  }

  render() {
    const { dataSource } = this.props;

    return (
      <ListView
        dataSource={dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const styles = StyleSheet.create({
  text: {
    paddingTop: 20,
    paddingRight: 20,
    paddingLeft: 20,
  },
  li: {
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    paddingLeft: 16,
    paddingTop: 14,
    paddingBottom: 16,
  }
});

export default InfoComponent;
