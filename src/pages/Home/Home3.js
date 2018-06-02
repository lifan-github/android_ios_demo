import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export default class Home3 extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>欢迎Home3</Text>
        <Text style={{marginVertical: 20}}>{`Home界面传递的参数为：${this.props.navigation.state.params.user_name}`}</Text>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => navigate('Home3_1')}
        >
          <Text style={styles.buttonText}>跳转到Home3_1界面</Text>
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