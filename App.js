import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import {createStackNavigator} from 'react-navigation'
import {MainNavigator} from './plainNavigation/StackNavigator';

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: "blue",
    marginHorizontal: 40,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: "#fff"
  }
});

const Index = ({ navigation }) => (
  <View style={{flex: 1, marginTop: 50}}>
    <TouchableOpacity
      style={styles.buttonStyle}
      onPress={() => navigation.navigate('Main')}
    >
      <Text style={styles.buttonText}>导航组件基本用法</Text>
    </TouchableOpacity>
  </View>
);

//路由注册
const RouteConfigs = {
  Index: {
    screen: Index
  },
  Main: {
    screen: MainNavigator
  },
};

//配置
const StackNavigatorConfig = {
  headerMode: 'none', //页面跳转时，头部的动画模式，有 float 、 screen 、 none 三种
  mode: 'card'
};

const App = createStackNavigator(RouteConfigs, StackNavigatorConfig);

export default App