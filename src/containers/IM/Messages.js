'use strict';
import React, { Component, PropTypes } from 'react';
import { ScrollView, Image, View,RefreshControl ,Text} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import isEmpty from 'lodash/isEmpty';
import IMRoom from './IMRoom'

class Messages extends Component {

  constructor() {
    super();
  }

  render() {
    const { userReducer,favorites } = this.props;

    return (
      <View style={{flex:1,width: null,height: null,paddingBottom:50}}>
          <IMRoom/>
      </View>
    );
  }
}

function mapStateToProps(state) {
  const { entities } = state;

  return {

  }
}

export default connect(mapStateToProps)(Messages);
