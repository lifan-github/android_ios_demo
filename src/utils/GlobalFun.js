/**
 * 屏幕适配工具类
 * ui设计基准 iphone 6
 * width: 750
 * height: 1334
 */

/**
 *
====>返回设备的像素密度，例如：

PixelRatio.get() === 1 mdpi Android 设备 (160 dpi)

PixelRatio.get() === 1.5 hdpi Android 设备 (240 dpi)

PixelRatio.get() === 2 iPhone 4, 4S iPhone 5, 5c, 5s iPhone 6 xhdpi Android 设备 (320 dpi)

PixelRatio.get() === 3 iPhone 6 plus xxhdpi Android 设备 (480 dpi)

PixelRatio.get() === 3.5 Nexus 6

*/

//react-native 样式默认单位是dp (单位长度)

import {
  Dimensions,
  PixelRatio
} from 'react-native';

let uiWidthPx = 375;
let uiHeightPx = 667; //以iPhone6设计为例

export const deviceWidthDp = Dimensions.get('window').width;      //设备的宽度
export const deviceHeightDp = Dimensions.get('window').height;    //设备的高度
console.log(deviceWidthDp, deviceHeightDp, PixelRatio.get());

//宽度适配
/**
 * <View style={{height: px2dp(400), width: px2dp(200), backgroundColor: 'blue'}}/>
 */
export function px2dp(uiElementPx) {
  return uiElementPx * deviceWidthDp / uiWidthPx;
}
