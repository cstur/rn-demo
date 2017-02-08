import React, { Component } from 'react';
import { View, ListView, StyleSheet, Text,TouchableHighlight,Image} from 'react-native';
import Header from './Header';

export default class MessageList extends Component {
  constructor() {
    super();
  }

  renderRow(message) {
    return (
      <View style={styles.container}>
        <Image source={{ uri: 'https://i.vimeocdn.com/portrait/58832_300x300.jpg'}} style={styles.photo} />
        <TouchableHighlight onPress={()=>this.props.onMessageSelect(message)} underlayColor='transparent'>
          <Text style={styles.text}>
            {message.name}
          </Text>
        </TouchableHighlight>
      </View>
    )
  }

  render() {
    const {messages} = this.props;
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2})
    let dataSource = messages ? ds.cloneWithRows(messages) : ds.cloneWithRows([]);
    return (
      <ListView
        dataSource={dataSource}
        renderRow={this.renderRow.bind(this)}
        renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
        renderHeader={() => <Header />}
        enableEmptySections={true}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
});
