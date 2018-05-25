#### react-native android ios

## 项目初始化中遇到的问题

 (ios)

#### 解决 react-native run-ios 报 ":CFBundleIdentifier", Does Not Exist错误


```

// 初始化项目后运行（react-native run-android 👌）
react-native ios

** BUILD FAILED **

The following commands produced analyzer issues:

Analyze /Users/facglt/Desktop/RNDemo/node_modules/react-native/ReactCommon/yoga/yoga/YGNodeList.c
Analyze /Users/facglt/Desktop/RNDemo/node_modules/react-native/ReactCommon/yoga/yoga/Yoga.c
(2 commands with analyzer issues)

The following build commands failed:
PhaseScriptExecution Install\ Third\ Party /Users/facglt/Desktop/RNDemo/ios/build/Build/Intermediates/React.build/Debug-iphonesimulator/double-conversion.build/Script-190EE32F1E6A43DE00A8543A.sh
(1 failure)

Installing build/Build/Products/Debug-iphonesimulator/RNDemo.app
An error was encountered processing the command (domain=NSPOSIXErrorDomain, code=2):
Failed to install the requested application
An application bundle was not found at the provided path.
Provide a valid path to the desired application bundle.
Print: Entry, ":CFBundleIdentifier", Does Not Exist

Command failed: /usr/libexec/PlistBuddy -c Print:CFBundleIdentifier build/Build/Products/Debug-iphonesimulator/RNDemo.app/Info.plist
Print: Entry, ":CFBundleIdentifier", Does Not Exist

```

#### 原因
RN iOS 0.45以上版本开始需要依赖一些第三方编译库(boost_1_63_0)，这些库在国内下载都非常困难（一般的翻墙工具都很难下载）

boost_1_63_0次第三方编译库大小100多M，运行报错可以查看上面的包的大小，查看是否下载完全

下载地址： https://sourceforge.net/projects/boost/files/boost/1.63.0/

#### 解决办法

```
node_modules/react-native/third-party/boost_1_63_0
// 替换为自己下载的，重新编译运行iOS

```

## 热更新 code-push

#### 1、安装code-push-cil

安装完查看 code-push -v 版本号

#### 2、创建codepush账号

在控制台输入 code-push register 后，将会打开一个网页进行注册
CodePush账号支持 github和 Microsofe，选其中一个就可以了。
我选择的是 github，授权完毕后，网页将会显示一个token，复制它到控制台的中就enter成功了。

得到：

```
fdb117b3cb4b46c2bcfd367b07220e55a49528a4 // 浏览器等到的token

Prodction: HnjS3VTEbsGbqEa70Hh7RneEVsyBe45d0faa-ecd3-4aeb-9255-7f3255171b68  //生产环境
Staging:  2YwiYWXLVM4elR8noUyTMI0-eflTe45d0faa-ecd3-4aeb-9255-7f3255171b68 // 开发测试

```

#### 页面代码

```
import codePush from 'react-native-code-push'; // 引入包
// 终端中 react-native link react-native-code-push 会显示提示

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
        <Text style={styles.welcome}>
          Welcome code-push-react-native!
        </Text>
        <Text style={styles.instructions}>
          👌终于好了修复一些
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}

```

修改页面后   code-push release-react android_ios_demo android  默认版本号是和Android中版本号一致

如果项目线上有多个版本的话，每次热更新需要进入指定的版本中升级对应的版本

```
myApp 1.0.0 code-push release-react android_ios_demo android

myApp 1.0.2 code-push release-react android_ios_demo android -t 1.0.2 -d Staging --dev true  --des "汉服大家好" -m true

code-push release-react 平台(ios\android) -t (版本号) -d (Staging测试环境|| Production 生产环境) --des (更新介绍) -m true(强制更新)
//比如： code-push release-react cloud-miner-android android -d "Production" --des "界面优化" -m true

```



