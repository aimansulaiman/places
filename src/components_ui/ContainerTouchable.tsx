import React from 'react'
import {
  TouchableOpacity,
} from 'react-native'

interface Props {
  disablePadding?: boolean
}

const ContainerTouchable = (props:Props) => {
    const { style, disablePadding, children, ...otherProps } = props
    return (
      <TouchableOpacity
        style={[
          disablePadding
            ? { paddingRight: 20 }
            : { padding: 20 },
          style
        ]}
        {...otherProps}
      >
        {children}
      </TouchableOpacity>
    )
}

export default ContainerTouchable
