/**
 * Created by guangqiang on 2017/11/30.
 */
import React from 'react';
import {Platform} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../Components/Home/Home';
import People from '../Components/People/People';
import Chat from '../Components/Chat/Chat';
import Setting from '../Components/Setting/Setting';


const RouteConfigs = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: '首页',
      tabBarIcon: ({focused, tintColor}) => (
        <Ionicons
          name={focused ? 'ios-home' : 'ios-home-outline'}
          size={26}
          style={{ color: tintColor }}/>
      )
    }),
  },
  People: {
    screen: People,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: '商城',
      tabBarIcon: ({focused, tintColor}) => (
        <Ionicons
          name={focused ? 'ios-people' : 'ios-people-outline'}
          size={26}
          style={{ color: tintColor }}/>
      )
    }),
  },
  Chat: {
    screen: Chat,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: '聊天',
      tabBarIcon: ({focused, tintColor}) => (
        <Ionicons
          name={focused ? 'ios-chatboxes' : 'ios-chatboxes-outline'}
          size={26}
          style={{ color: tintColor }}/>
      )
    }),
  },
  Setting: {
    screen: Setting,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: '设置',
      tabBarIcon: ({focused, tintColor}) => (
        <Ionicons
          name={focused ? 'ios-settings' : 'ios-settings-outline'}
          size={26}
          style={{ color: tintColor }}/>
      )
    })
  }
};

const TabNavigatorConfigs = {
  initialRouteName: 'Home',
  lazy: true,
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? 'blue' : 'red',
  }
};

const TabBar = createBottomTabNavigator(RouteConfigs, TabNavigatorConfigs);

export {TabBar}