'use strict';
import React, { Component, PropTypes } from 'react';
import { ScrollView, Image, View,RefreshControl ,Text} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import isEmpty from 'lodash/isEmpty';

import { fetchMessages } from '../../actions/messages';
import MessageList from '../../components/MessageList';
import IMRoom from './IMRoom';

class Messages extends Component {

  constructor() {
    super();
  }

  componentDidMount() {
    this.props.dispatch(fetchMessages());
  }

  onMessageSelect(messsage) {
    Actions.messageItem({messsage: messsage});
  }

  render() {
    const { messages } = this.props;
    return (
      <ScrollView style={{ flex:1,backgroundColor:'white' }} contentContainerStyle={{paddingTop: 64}} contentInset={{ bottom:50 }} >
        <View>
          <MessageList
            messages={messages}
            onMessageSelect={this.onMessageSelect}
          />
        </View>
      </ScrollView>
    );
  }
}

function mapStateToProps(state) {
  const { entities } = state;
  return {
    messages : entities.messages
  }
}

export default connect(mapStateToProps)(Messages);
