'use strict';
import React, { Component, PropTypes } from 'react';
import { ScrollView, Image, View,RefreshControl ,Text} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import isEmpty from 'lodash/isEmpty';

import { fetchSessions } from '../../actions/message/sessions';
import SessionList from './SessionList';
import IMRoom from './IMRoom';

class Messages extends Component {

  constructor() {
    super();
  }

  componentDidMount() {
    this.props.dispatch(fetchSessions());
  }

  loadSession(session) {
    Actions.sessionEntity({
      title:session.name,
      itemID:session.id
    });
  }

  render() {
    console.log('render categories');
    const { sessions,sessionsReducer } = this.props;

    return (
      <View style={{flex:1,width: null,height: null,paddingBottom:50}}>
        <IMRoom />
        {/*
          <SessionList
            categories={sessions}
            loadCategory={this.loadSession}
            sessionsReducer={sessionsReducer}
          />
          */}

      </View>

    );
  }
}

function mapStateToProps(state) {
  const { entities,sessionsReducer } = state;
  return {
    sessionsReducer,
    sessions:entities.sessions && entities.sessions
  }
}

export default connect(mapStateToProps)(Messages);
