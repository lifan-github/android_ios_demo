import React from 'react'
import {View, Platform, Button} from 'react-native'
import {createStackNavigator} from 'react-navigation'
import {MainNavigator} from './plainNavigation/StackNavigator';

const Index = ({ navigation }) => (
  <View style={{flex: 1, marginTop: 50}}>
    <Button
      buttonStyle={{marginVertical: 20}}
      title={'react-navigation导航组件基本用法'}
      onPress={() => navigation.navigate('Main')}
    />
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
  headerMode: 'none',
  mode: Platform.OS === 'ios' ? 'card' : 'card'
};

const App = createStackNavigator(RouteConfigs, StackNavigatorConfig);

export default App