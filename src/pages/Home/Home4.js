import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
} from 'react-native';

export default class Home4 extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  static navigationOptions = ({navigation, screenProps}) => ({
      title: 'Home4',
      headerRight: (
        <Button
          title={'customAction'}
          onPress={() => navigation.state.params.customAction()}
        />
      )
    }
  )

  componentDidMount() {
    const {setParams} = this.props.navigation;
    setParams({customAction: () => this.tempAction()})
  }

  tempAction() {
    alert('在导航栏按钮上调用Component内中的函数，因为static修饰的函数为静态函数，内部不能使用this')
  }

  render() {
    const {goBack} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>欢迎Home4</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
});