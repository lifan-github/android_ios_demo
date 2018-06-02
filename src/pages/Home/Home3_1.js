import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity
} from 'react-native';

export default class Home3_1 extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  static navigationOptions = ({navigation, screenProps}) => ({
    title: 'Home4',
    headerRight: (
      <Button
        title={'自定义导航'}
        onPress={() => alert('rightBtn')}
      />
    )
  });

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    const {goBack} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>欢迎Home3_1</Text>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => goBack()}
        >
          <Text style={styles.buttonText}>返回上一页面</Text>
        </TouchableOpacity>
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
  buttonStyle: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'blue',
    borderRadius: 4,
    marginHorizontal: 20,
    marginBottom: 10,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: "#fff"
  }
});