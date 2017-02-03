'use strict';

import React, { Component, PropTypes } from 'react';
import { Image, StyleSheet, Text, TouchableHighlight, View, ListView } from 'react-native';
import LoadingIndicator from './../../components/LoadingIndicator';

export default class SessionList extends Component {

  static propTypes = ({
    sessions : PropTypes.object.isRequired,
    sessionReducer:PropTypes.object.isRequired,
    loadSession:PropTypes.func.isRequired
  });

  renderHeader() {
    //return this.props.sessionReducer.isFetching && <LoadingIndicator />
  }

  renderRow(session) {

    return (
      <TouchableHighlight onPress={() => this.props.loadSession(session)} underlayColor="transparent">
        <View style={styles.row}>
          <View style={styles.cellWrapper}>
            <Text style={styles.text}> {session.name}</Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }
  render() {
    const {sessions} = this.props;
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2})
    let dataSource = ds.cloneWithRows(['row 1', 'row 2','row 3','row 4','row 5','row 6','row 7','row 8','row 9','row 10','row 11','row 12']);

    return (
        <ListView
          contentContainerStyle={styles.contentContainer}
          dataSource={dataSource}
          renderRow={this.renderRow.bind(this)}
          enableEmptySections={true} //@todo remove this in future version
          ref='listView'
          renderHeader={()=>this.renderHeader()}
          contentInset={{ top:100, bottom:100 }}
          showsVerticalScrollIndicator={false}
          automaticallyAdjustContentInsets={false}
        />
    )

  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    width: null,
    height: null,
    paddingTop: 64,
    backgroundColor:'white'
  },
  contentContainer:{
    justifyContent: 'center',
  },
  row: {
    flex:1,
    alignItems:'center',
    opacity:.9,
    padding:10,
  },
  cellWrapper: {
    width:150,
    height:150,
    borderRadius:75,
    backgroundColor:'white',
    opacity: 0.7,
    alignItems:'center',
    overflow:'hidden',
    justifyContent:'center'
  },
  thumbnail: {
    width: 80,
    height: 80,
  },
  text: {
    color:'black',
    fontSize:20,
    fontWeight:'800',
    fontFamily:'SnellRoundhand',
  },

});
