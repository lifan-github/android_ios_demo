/**
 * Created by guangqiang on 2017/11/30.
 */
import React from 'react'
import {Platform} from 'react-native'
import {createBottomTabNavigator} from 'react-navigation'
import Home from '../Components/Home/Home'
import People from '../Components/People/People'
import Chat from '../Components/Chat/Chat'
import Setting from '../Components/Setting/Setting'

const RouteConfigs = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: 'Home',
    }),
  },
  People: {
    screen: People,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: 'People',
    }),
  },
  Chat: {
    screen: Chat,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: 'Chat',
    }),
  },
  Setting: {
    screen: Setting,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: 'Settings',
    })
  }
};

const TabNavigatorConfigs = {
  initialRouteName: 'Home',
  lazy: true,
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? '#e91e63' : '#fff',
  }
};

const TabBar = createBottomTabNavigator(RouteConfigs, TabNavigatorConfigs);

export {TabBar}