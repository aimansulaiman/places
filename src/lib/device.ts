import { Dimensions, I18nManager, Platform, StatusBar } from 'react-native'
import { isIphoneX } from 'react-native-iphone-x-helper'
import DeviceInfo, { getDeviceId } from 'react-native-device-info'

const iOSModelWithNotch = [
    'iPhone15',
    'iPhone14',
    'iPhone13',
    'iPhone12',
    'iPhone11'
]
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
const isIOS = Platform.OS === 'ios'
const isAndroid = Platform.OS === 'android'
const isIOSModelWithNotch = iOSModelWithNotch.includes(
    getDeviceId().split(',')[0]
)
const statusBarHeight = StatusBar.currentHeight || 20

export default {
    width,
    statusBarHeight,
    height: isIOS ? height : height - statusBarHeight,
    percentHeight: '100%',
    isIOS,
    isAndroid,
    isIphoneX: isIphoneX(),
    isIOSWithNotch: isIOS && (DeviceInfo.hasNotch() || isIOSModelWithNotch),
    androidRTL: !isIOS && I18nManager.isRTL
}
