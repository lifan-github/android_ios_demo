#### react-native android ios

```
fdb117b3cb4b46c2bcfd367b07220e55a49528a4

Prodction: HnjS3VTEbsGbqEa70Hh7RneEVsyBe45d0faa-ecd3-4aeb-9255-7f3255171b68
staging:  2YwiYWXLVM4elR8noUyTMI0-eflTe45d0faa-ecd3-4aeb-9255-7f3255171b68

```
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