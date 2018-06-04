/**
 * Created by guangqiang on 2017/12/1.
 */
import React from 'react';
import {
  ToastAndroid
} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/StackView/StackViewStyleInterpolator';
import {TabBar} from '../TabNavigator';
import HomeDetails from '../../src/pages/Home/HomeDetails'; //首页详情页
import Home3 from '../../src/pages/Home/Home3';
import Home3_1 from '../../src/pages/Home/Home3_1';
import Home4 from "../../src/pages/Home/Home4";
import Home5 from '../../src/pages/Home/Home5';
import Home6 from '../../src/pages/Home/Home6';
import Back1 from '../../src/pages/Home/Back1';
import Back2 from '../../src/pages/Home/Back2';
import Back3 from '../../src/pages/Home/Back3';

const RouteConfigs = {
  Home: {
    screen: TabBar,
  },
  HomeDetails: {
    screen: HomeDetails,
    navigationOptions: {
      title: 'HomeDetails',
    }
  },
  Home3: {
    screen: Home3,
    navigationOptions: {
      title: 'Home3',
    }
  },
  Home3_1: {
    screen: Home3_1,
    navigationOptions: {
      title: 'Home3_1',
    }
  },
  Home4: {
    screen: Home4,
      navigationOptions: {
      title: 'Home4',
    }
  },
  Home5: {
    screen: Home5,
    navigationOptions: {
      title: 'Home5',
    }
  },
  Home6: {
    screen: Home6,
  },
  Back1: {
    screen: Back1,
    navigationOptions: {
      title: 'Back1',
    }
  },
  Back2: {
    screen: Back2,
    navigationOptions: {
      title: 'Back2',
    }
  },
  Back3: {
    screen: Back3,
    navigationOptions: {
      title: 'Back3',
    }
  },
};

const StackNavigatorConfig = {
  initialRouteName: 'Home', //设置默认的页面组件，必须是上面已注册的页面组件
  initialRouteParams: {initPara: '初始页面参数'}, //初始路由参数
  navigationOptions: {
    title: '首页',
    headerTitleStyle: {fontSize: 18, color: '#fff'},
    headerStyle: {height: 49, backgroundColor: "blue"}, //navbar 高度
  },
  mode: 'card',
  headerMode: 'screen',
  cardStyle: {backgroundColor: "#ffffff"},
  transitionConfig: (() => ({ //自定义设置滑动返回的配置
    //页面跳转动画实现
    screenInterpolator: CardStackStyleInterpolator.forHorizontal,
  })),
  onTransitionStart: (() => { //当转换动画即将开始时被调用的功能
    console.log('页面跳转动画开始')
  }),
  onTransitionEnd: (() => { //当转换动画完成，将被调用的功能
    console.log('页面跳转动画结束')
  }),
};

const MainNavigator = createStackNavigator(RouteConfigs, StackNavigatorConfig);

const defaultStateAction = MainNavigator.router.getStateForAction;

MainNavigator.router.getStateForAction = (action, state) => {
  if(state && action.type === 'Navigation/BACK' && state.routes.length === 1) {
    let now = new Date().getTime();
    if(this.lastBackPressed && (now - this.lastBackPressed < 2500)) {
      return false;
    }
    this.lastBackPressed = now;
    ToastAndroid.show('再点击一次退出应用',ToastAndroid.SHORT);
    const routes = [...state.routes];
    return {
      ...state,
      ...state.routes,
      index: routes.length - 1,
    };
  }
  return defaultStateAction(action,state);
};

export {MainNavigator}