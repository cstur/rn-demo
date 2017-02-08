'use strict';
import React, { Component, PropTypes } from 'react';
import { ScrollView, Image, View,RefreshControl ,Text,StyleSheet,ActionSheetIOS} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import isEmpty from 'lodash/isEmpty';

var BUTTONS = [
  'Option 0',
  'Option 1',
  'Option 2',
  'Delete',
  'Cancel',
];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;

class MeB extends Component {

  state = {
    clicked: 'none',
  };

  constructor() {
    super();
  }

  render() {
    const { userReducer,favorites } = this.props;

    return (
      <View style={{marginTop:64}}>
        <Text onPress={this.showActionSheet} style={styles.button}>
          Click to show the ActionSheet
        </Text>
        <Text>
          Clicked button: {this.state.clicked}
        </Text>
      </View>
    );
  }

  showActionSheet = () => {
    ActionSheetIOS.showActionSheetWithOptions({
      options: BUTTONS,
      cancelButtonIndex: CANCEL_INDEX,
      destructiveButtonIndex: DESTRUCTIVE_INDEX,
    },
    (buttonIndex) => {
      this.setState({ clicked: BUTTONS[buttonIndex] });
    });
  };

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
    },
    button: {
      marginBottom: 10,
      fontWeight: '500',
    }
});

export default connect(mapStateToProps)(MeB);
