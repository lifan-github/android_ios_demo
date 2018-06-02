import React, {Component} from 'react'
import { Text, View, Button} from 'react-native'
export default class Home5 extends Component {

  static navigationOptions = ({navigation, screenProps}) => ({
    title: 'Home5'
  });

  render() {
    const {state, goBack} = this.props.navigation;
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Home6</Text>
        <Button
          title={'回调传参'}
          onPress={() => {
            state.params.callback && state.params.callback('这是回调参数')
            goBack()
          }}
        />
      </View>
    )
  }
}