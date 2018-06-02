import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';

export default class Home6 extends Component {
  static navigationOptions = ({navigation, screenProps}) => ({
      title: navigation.state.params.title,
      headerRight: (
        <Button
          title={'更换title'}
          onPress={() => navigation.setParams({title: 'newTitle'})}
        />
      )
    }
  )

  render() {
    return (
      <View style={styles.container}>
        <Text>欢迎Home6</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
})