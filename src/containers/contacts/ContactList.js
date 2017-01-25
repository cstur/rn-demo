'use strict';
import React, { Component, PropTypes } from 'react';
import { ScrollView, Image, View,RefreshControl ,Text} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import isEmpty from 'lodash/isEmpty';

class ContactList extends Component {

  constructor() {
    super();
  }
  
  render() {
    const { userReducer,favorites } = this.props;

    return (
      <Image style={{flex:1,width: null,height: null,paddingTop:64,backgroundColor:'white'}}>
        <ScrollView
          automaticallyAdjustContentInsets={false}
          contentInset={{bottom:40}}
        >
          <Text>222</Text>
        </ScrollView>
      </Image>
    );
  }
}

function mapStateToProps(state) {
  const { entities } = state;

  return {

  }
}

export default connect(mapStateToProps)(ContactList);
