import React from 'react'
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native'
import Animated from 'react-native-reanimated'


import layout from '../../styles/layout'
import color from '../../styles/color'
import { NavTouchable } from './_Nav'
import device from "~/lib/device";
import StatusBarCustom from "~/components_ui/StatusBarCustom";



// data

// typing
export interface NavProps {
  height?: any
  children?: JSX.Element
  backgroundColor?: string
  sideColor?: string
  middleColor?: string
  middleFlex?: number
  leftAction?: () => void
  leftSecondAction?: any
  middleAction?: () => void
  rightSecondAction?: () => void
  rightThirdAction?: () => void
  rightAction?: () => void
  leftContent?: string | JSX.Element
  leftSecondContent?: string | JSX.Element | any
  middleContent?: string | JSX.Element
  rightSecondContent?: string | JSX.Element | (() => JSX.Element)
  rightThirdContent?: string | JSX.Element | (() => JSX.Element | null) | null
  rightContent?: string | JSX.Element | (() => JSX.Element)
  isStatusBarGreen?: boolean
  opacity?: any
  containerStyle?: StyleProp<ViewStyle>
}

interface State {}

// main
class Nav extends React.Component<NavProps, State> {
  static defaultProps = {
    backgroundColor: 'green',
    sideColor: 'white',
    middleColor: 'white',
    middleFlex: 2.5,
    isStatusBarGreen: true,
    opacity: 1
  }

  render() {
    const {
      height,
      sideColor,
      middleColor,
      middleFlex,
      leftAction,
      leftSecondAction,
      middleAction,
      rightSecondAction,
      rightThirdAction,
      rightAction,
      leftContent,
      leftSecondContent,
      middleContent,
      rightSecondContent,
      rightThirdContent,
      rightContent,
      children,
      isStatusBarGreen,
      opacity,
      containerStyle
    } = this.props

    return (
      <Animated.View style={{ backgroundColor:color.primary,...layout.shadow }}>
        <StatusBarCustom green={isStatusBarGreen} />
        <Animated.View
          style={[{ height, opacity }, containerStyle, styles.container]}
        >
          <View style={styles.left}>
            <NavTouchable
              action={leftAction}
              content={leftContent}
              textColor={sideColor}
            />
            <NavTouchable
              action={leftSecondAction}
              content={leftSecondContent}
              textColor={sideColor}
            />
          </View>
          {!!middleContent && (
            <View style={[styles.middle, { flex: middleFlex }]}>
              <NavTouchable
                action={middleAction}
                content={middleContent}
                textColor={middleColor}
                middle
              />
            </View>
          )}
          <View style={styles.right}>
            <NavTouchable
              action={rightThirdAction}
              content={rightThirdContent}
              textColor={sideColor}
            />
            <NavTouchable
              action={rightSecondAction}
              content={rightSecondContent}
              textColor={sideColor}
            />
            <NavTouchable
              action={rightAction}
              content={rightContent}
              textColor={sideColor}
              disablePadding={!!rightSecondContent && !!rightContent}
              testId={'right_action'}
            />
          </View>
        </Animated.View>
        {children}
      </Animated.View>
    )
  }
}

// styling
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: device.isIOS ? layout.notchHeight + device.statusBarHeight : 0
  },
  left: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  middle: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  right: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingTop: 5
  }
})

export default Nav
