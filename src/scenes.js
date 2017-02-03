'use strict';
import React, { Component } from 'react';
import {Image } from 'react-native';
import { Scene, Reducer, Router, Switch, TabBar, Modal, Schema, Actions } from 'react-native-router-flux';
import { APP_STYLES } from './utils/AppStyles';
import Messages from './containers/IM/Messages';
import Session from './containers/IM/SessionItem';
import Contacts from './containers/contacts/ContactList';
import ContactDetail from './containers/contacts/ContactDetail';
import LiveRoom from './containers/liveroom/RoomList';
import TabIcon from './components/TabIcon';
import NavigationDrawer from './components/NavigationDrawer';

export const scenes = Actions.create(

  <Scene key="modal" component={Modal} >
    <Scene key="root" hideNavBar={true} >
      <Scene key="tabbar" /*component={NavigationDrawer}*/ >
        <Scene key="home" tabs={true} default="messages"
               tabBarStyle={{ backgroundColor:APP_STYLES.primaryBackgroundColor ,height:50,borderTopColor:'grey',borderTopWidth:1}}
               tabBarSelectedItemStyle={{backgroundColor:APP_STYLES.primaryBackgroundColor,height:50}}
               navigationBarStyle={{ backgroundColor:APP_STYLES.primaryColor }}
        >
          <Scene key="main"  title="聊天"
                  icon={TabIcon}
                  selectedTabIcon="ios-home"
                  tabIcon="ios-home-outline"
                  navigationBarStyle={{ backgroundColor:APP_STYLES.primaryColor }}
                  titleStyle={{ color:'white' }}
          >
            <Scene key="messages" component={Messages} initial={true} icon={TabIcon}
                   selectedTabIcon="ios-chatbubbles" tabIcon="ios-chatbubbles-outline"
                   navigationBarStyle={{ backgroundColor:APP_STYLES.primaryColor }}
                   titleStyle={{ color:'white' }}
            />
            <Scene key="sessionEntity" component={Session} />
          </Scene>
          <Scene key="contacts" icon={TabIcon}
                 selectedTabIcon="ios-contacts" tabIcon="ios-contacts-outline"
                 navigationBarStyle={{ backgroundColor:APP_STYLES.primaryColor }}
                 titleStyle={{ color:'white' }} title="通讯录"
          >
            <Scene key="contactList" component={Contacts}  initial={true} />
            <Scene key="contactDetail" component={ContactDetail} title="PageTwo" />
          </Scene>
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
