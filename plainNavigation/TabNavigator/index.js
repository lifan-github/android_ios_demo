import React from 'react';
import {Platform, Alert} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from '../../src/pages/Home/Home'; // 首页
import People from '../../src/pages/People/People'; //第二页
import Chat from '../../src/pages/Chat/Chat'; //第三页
import Setting from '../../src/pages/Setting/Setting'; //第三页

/**
 * 此页面是对tabBar页面的主要页面路由集中配置
 */

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
      ),
      tabBarOnPress: () => {
        Alert.alert(
          '注意！',
          '这里做了hook tabBar的点击事件操作，我们可以hook到这个点击事件，处理我们想要处理的业务后再打开 Chat这个页面',
          [
            {text: '进入tab页面', onPress: () => navigation.navigate('Chat')},
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          ],
          { cancelable: false }
        )
      },
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