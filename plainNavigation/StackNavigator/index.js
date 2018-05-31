/**
 * Created by guangqiang on 2017/12/1.
 */
import React from 'react'
import {createStackNavigator} from 'react-navigation'
import {TabBar} from '../TabNavigator'

const RouteConfigs = {
  Home: {
    screen: TabBar, // android 默认在顶部，iOS默认在底部
  },
};

const StackNavigatorConfig = {
  initialRouteName: 'Home',
  initialRouteParams: {initPara: '初始页面参数'},
  navigationOptions: {
    title: '标题',
    headerTitleStyle: {fontSize: 18, color: 'red'},
    headerStyle: {height: 49}, //navbar 高度
  },
  mode: 'card',
  headerMode: 'screen',
  cardStyle: {backgroundColor: "#ffffff"},
  transitionConfig: (() => ({
  })),
  onTransitionStart: (() => {
    console.log('页面跳转动画开始')
  }),
  onTransitionEnd: (() => {
    console.log('页面跳转动画结束')
  }),
};

const MainNavigator = createStackNavigator(RouteConfigs, StackNavigatorConfig);

const defaultStateAction = MainNavigator.router.getStateForAction;

MainNavigator.router.getStateForAction = (action, state) => {
  if (state && action.key && action.type === 'Navigation/BACK') {
    const desiredRoute = state.routes.find((route) => route.routeName === action.key);
    if (desiredRoute) {
      const index = state.routes.indexOf(desiredRoute);
      const finalState = {
        ...state,
        routes: state.routes.slice(0, index + 1),
        index: index,
      };
      return finalState
    } else {
      if (state.routes.length > action.key) {
        const stacksLength = state.routes.length - action.key;
        const stacks = state.routes.slice(0, stacksLength);
        const finalState = {
          ...state,
          routes: stacks,
          index: stacksLength - 1,
        };
        return finalState
      }
    }
  }
  return defaultStateAction(action, state)
};

export {MainNavigator}