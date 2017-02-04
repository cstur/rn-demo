import React, { Component } from 'react';
import { View, Text, StyleSheet ,Dimensions,TextInput,ListView} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class ContactDetail extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      showText: true,
      text:'',
      dataSource: ds.cloneWithRows([
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
      ])
    };
  }

  render() {
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <View style={{flex: 1,margin:40}}>
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <Text>{rowData}</Text>}
      />
      </View>
    )
  }
}

const styles=StyleSheet.create({
  y:{
    color:'blue',
    flex:2
  }
});
