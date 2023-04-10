import device from '../lib/device'
const notchHeight = device.isIOSWithNotch ? 15 : 0

export const androidNavHeight = 61



export default {
    notchHeight,
    btnBottomHeight: device.isIphoneX ? 70 : 50,
    listingToolHeight: 50,
    shadow:{elevation:1}
}
