/**
 * Created by guangqiang on 2017/12/1.
 */
import React, {Component} from 'react'
import { Text, View, ScrollView} from 'react-native'
class Home extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView>
          <Text>Home</Text>
        </ScrollView>
      </View>
    )
  }
}

export default Home