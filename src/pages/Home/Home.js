/**
 * Created by guangqiang on 2017/12/1.
 */
import React, {Component} from 'react'
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

class Home extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView>
          <Text style={styles.textStyle}>当前页面为Home页面</Text>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => this.props.navigation.navigate('HomeDetails')}
          >
            <Text style={styles.buttonText}>跳转到Home2界面</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => this.props.navigation.navigate('Home3', {user_name: "lifan66666"})}
          >
            <Text style={styles.buttonText}>跳转到Home3界面并传递参数</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => this.props.navigation.navigate('Home4')}
          >
            <Text style={styles.buttonText}>跳转到Home4界面，使用导航按钮自定义事件</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => this.props.navigation.navigate('Home5', {callback: (response) => alert(response)})}
          >
            <Text style={styles.buttonText}>跳转到Home5界面，回调传参</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => this.props.navigation.navigate('Home6', {title: 'Home6'})}
          >
            <Text style={styles.buttonText}>跳转到Home6界面，使用SetParams修改导航标题</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => this.props.navigation.navigate('Back1')}
          >
            <Text style={styles.buttonText}>返回时pop多层页面</Text>
          </TouchableOpacity>

        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  textStyle: {
    textAlign: 'center',
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

export default Home