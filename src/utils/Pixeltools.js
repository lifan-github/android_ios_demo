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
} from 'react-native';

let init_height = 667;
let init_width = 375; //以iPhone6设计为例

export const deviceWidth = Dimensions.get('window').width;      //设备的宽度
export const deviceHeight = Dimensions.get('window').height;    //设备的高度
console.log(deviceHeight,'deviceHeight')

//适配高度 例如我的设计稿某个样式高度是50pt autoHeight(50)
export function autoHeight(value) {
  return deviceHeight * value / init_height;
}

/*宽度适配，例如我的设计稿某个样式宽度是50pt，那么使用就是：autoWidth(50)*/
export function autoWidth(value) {
  return deviceWidth * value / init_width;
}