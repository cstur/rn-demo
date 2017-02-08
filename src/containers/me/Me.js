'use strict';
import React, { Component, PropTypes } from 'react';
import { ScrollView, Image, View,RefreshControl ,Text,StyleSheet,Button} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import isEmpty from 'lodash/isEmpty';

class Me extends Component {

  constructor() {
    super();
  }

  render() {
    const { userReducer,favorites } = this.props;

    return (
      <View style={styles.container}>
          <Button onPress={Actions.meA} title="Go to A page"></Button>
          <Button onPress={Actions.meB} title="Go to B page"></Button>
          <Button onPress={Actions.meC} title="Go to C page"></Button>
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
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    }
});

export default connect(mapStateToProps)(Me);
