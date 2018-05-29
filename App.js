/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Alert,
} from 'react-native';
import codePush from 'react-native-code-push';
import {autoHeight, autoWidth} from './src/utils/Pixeltools';

type Props = {};
export default class App extends Component<Props> {
  componentDidMount(){
    codePush.checkForUpdate("2YwiYWXLVM4elR8noUyTMI0-eflTe45d0faa-ecd3-4aeb-9255-7f3255171b68").then((update) => {
      console.log('update is ',update);
      if(!update){
        Alert.alert("提示","已是最新版本了",[
          {text:"Ok", onPress:()=>{ console.log("点了OK");}}
        ]);
      }else{
        codePush.sync({
          deploymentKey: "2YwiYWXLVM4elR8noUyTMI0-eflTe45d0faa-ecd3-4aeb-9255-7f3255171b68",
          updateDialog: {
            title: '更新提示', // 要显示的更新通知的标题. Defaults to “Update available”
            appendReleaseDescription: false, // 是否显示更新description，默认false
            descriptionPrefix: "更新内容：\n",
            mandatoryUpdateMessage: "1、处理了一些已知bug \n2、转让算力添加 \n", //强制更新时，更新通知. Defaults to “An update is available that must be installed.”.
            mandatoryContinueButtonLabel: "更新", // 强制更新的按钮文字. 默认 to “Continue”.
            optionalIgnoreButtonLabel: '稍后', //非强制更新时，取消按钮文字. Defaults to “Ignore”
            optionalInstallButtonLabel: '后台更新', //非强制更新时，确认文字. Defaults to “Install”.
            optionalUpdateMessage: '有新版本了，是否更新？', //非强制更新时，更新通知. Defaults to “An update is available. Would you like to install it?”.
          },
          installMode: codePush.InstallMode.IMMEDIATE
        })
      }
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{height: 100, width: autoWidth(375/2), backgroundColor: 'blue'}}/>
        <View style={{height: autoHeight(667/2), width: 200, backgroundColor: 'red'}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
