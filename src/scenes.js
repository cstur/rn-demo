'use strict';
import React, { Component } from 'react';
import {Image } from 'react-native';
import { Scene, Reducer, Router, Switch, TabBar, Modal, Schema, Actions } from 'react-native-router-flux';
import { APP_STYLES } from './utils/AppStyles';
import Messages from './containers/IM/Messages';
import Contacts from './containers/contacts/ContactList';
import LiveRoom from './containers/liveroom/RoomList';
import TabIcon from './components/TabIcon';
import NavigationDrawer from './components/NavigationDrawer';

export const scenes = Actions.create(

  <Scene key="modal" component={Modal} >
    <Scene key="root" hideNavBar={true} >
      <Scene key="tabbar" component={NavigationDrawer} >

        <Scene key="home" tabs={true} default="messages"
               tabBarStyle={{ backgroundColor:APP_STYLES.primaryColor ,height:50}}
               tabBarSelectedItemStyle={{backgroundColor:APP_STYLES.primaryColor,height:50}}
               navigationBarStyle={{ backgroundColor:APP_STYLES.primaryColor }}
        >
          <Scene key="messages" component={Messages} icon={TabIcon} title="聊天"
                 selectedTabIcon="ios-chatbubbles" tabIcon="ios-chatbubbles-outline"
                 navigationBarStyle={{ backgroundColor:APP_STYLES.primaryColor }}
                 titleStyle={{ color:'white' }}
          />
          <Scene key="contacts" component={Contacts} icon={TabIcon} title="通讯录"
                 selectedTabIcon="ios-contacts" tabIcon="ios-contacts-outline"
                 navigationBarStyle={{ backgroundColor:APP_STYLES.primaryColor }}
                 titleStyle={{ color:'white' }}
          />
          <Scene key="liveroom" component={LiveRoom} icon={TabIcon} title="直播室"
                 selectedTabIcon="ios-camera" tabIcon="ios-camera-outline"
                 navigationBarStyle={{ backgroundColor:APP_STYLES.primaryColor }}
                 titleStyle={{ color:'white' }}
          />
        </Scene>

      </Scene>
    </Scene>
  </Scene>
);
