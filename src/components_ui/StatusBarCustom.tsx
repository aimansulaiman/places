import React from 'react'
import { StatusBar } from 'react-native'
import color from '../styles/color'

const StatusBarCustom = () => {
    return (
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={color.primary}
      />
    )

}

export default StatusBarCustom
