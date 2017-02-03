'use strict';
import React, { Component, PropTypes } from 'react';
import { ScrollView, Image, View,RefreshControl ,Text,StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import isEmpty from 'lodash/isEmpty';

class RoomList extends Component {

  constructor() {
    super();
  }

  render() {
    const { userReducer,favorites } = this.props;

    return (
      <View style={styles.parent}>

        <Text style={styles.aaa}>
        11111
        </Text>

        <Text style={styles.bbb} >
        222
        </Text>

        <Text style={styles.ccc} >
        333
        </Text>

      </View>
    );
  }
}

function mapStateToProps(state) {
  const { entities } = state;

  return {

  }
}

var styles = StyleSheet.create({
  parent: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ddc',
  },

  aaa:{
    width:100,
    height:100,
    color:'green',
    textAlign: 'center',
    fontSize: 20,
    backgroundColor: '#a9ea00',
    lineHeight: 60,
  },
  bbb:{
    width:100,
    height:100,
    color:'#fff',
    textAlign: 'center',
    backgroundColor: 'black',
    lineHeight: 100,
  },

  ccc:{
    width:100,
    height:100,
    color:'blue',
    textAlign: 'center',
    backgroundColor: 'pink',
  },
});

export default connect(mapStateToProps)(RoomList);
