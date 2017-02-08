'use strict';
import React, { Component, PropTypes } from 'react';
import { ScrollView, Image, View,RefreshControl ,Text,StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import isEmpty from 'lodash/isEmpty';

class MeA extends Component {

  constructor() {
    super();
  }

  render() {
    const { userReducer,favorites } = this.props;

    return (
      <View style={styles.container}>
          <Text>a</Text>
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

export default connect(mapStateToProps)(MeA);
