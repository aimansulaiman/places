import React from 'react'
import { NavigationContainerRef } from '@react-navigation/native'
import {NavigationContainerRefWithCurrent} from "@react-navigation/core/src/types";


export const navigationRef = React.createRef<NavigationContainerRefWithCurrent<any>>()

export const getGlobalNavigator = (): NavigationContainerRef<any> | null => {
    return navigationRef.current
}
