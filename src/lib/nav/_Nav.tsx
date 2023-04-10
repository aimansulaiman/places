import React from 'react'
import { StyleSheet, Text } from 'react-native'
import ContainerTouchable from "~/components_ui/ContainerTouchable";


// components
export const NavTouchable = ({
  action,
  content,
  textColor,
  middle,
  testId,
  disablePadding
}: {
  action?: () => void
  content?: string | JSX.Element | (() => JSX.Element | null) | null
  textColor?: string
  middle?: boolean
  testId?: string
  disablePadding?: boolean
}) => (
  <ContainerTouchable
    activeOpacity={action ? 0.2 : 1}
    onPress={action}
    testID={testId}
    disablePadding={disablePadding || !action}
  >
    {typeof content === 'string' ? (
      <Text
        style={[
          { color: textColor },
          middle && { fontSize: 16 }
        ]}
        numberOfLines={1}
        ellipsizeMode={'tail'}
      >
        {content}
      </Text>
    ) : (
      content
    )}
  </ContainerTouchable>
)

// styling
const styles = StyleSheet.create({})
