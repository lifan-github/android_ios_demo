/**
 * Created by guangqiang on 2018/5/26.
 */
import React, {Component} from 'react'
import { Text, View, Button} from 'react-native'

export default class Back1 extends Component {

  render() {
    const {navigate} = this.props.navigation
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>这是测试pop事件中的第一个页面</Text>
          <Button
              buttonStyle={{marginVertical: 10}}
              title={'跳转pop事件中的第二个页面'}
              onPress={() => navigate('Back2')}
          />
        </View>
    )
  }
}