'use strict';
import React, { Component, PropTypes } from 'react';
import { Image, StyleSheet, Text, TouchableHighlight, View, ListView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IMRoom from './IMRoom'

export default class SessionItem extends Component {

  /*
  renderContent(session) {
    return (
      <Image source={{uri:category.thumbnail.name}} style={styles.container}>
        <Text style={styles.text}>{category.name}</Text>
      </Image>
    )
  }
  */

  render() {

    const {session} = this.props;
    /*
    if (session.id && session.id > 0) {
      return this.renderContent(session);
    }
    */

    return (
      <View style={{flex:1,width: null,height: null,paddingBottom:50}}>
        <IMRoom />
      </View>
    );
  }

}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
    height: 200,
    opacity:.8
  },
  img: {
    height: 200,
    borderRadius: 5,
    paddingTop: 10
  },
  commentImg: {
    width: 24,
    height: 22,
    marginRight: 50,
    alignSelf: "center",
  },
  favoriteImg: {
    width: 24,
    height: 22,
    alignSelf: "center"
  },
  thumbnail: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  name: {
    color: '#888888',
    flex: 1,
    justifyContent: 'flex-end',
    alignSelf: 'center',
    textAlign: 'right',
    paddingRight: 3
  },
  createdAt: {
    flex: 1,
    fontWeight: '200',
    color: '#888888',
    fontSize: 12,
    alignSelf: 'center'
  }

});
