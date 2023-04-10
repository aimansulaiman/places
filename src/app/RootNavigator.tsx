import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import MainStack from "~/app/MainStack";




const RootNavigator = () => {
    return (
        <NavigationContainer>
            <SafeAreaProvider>
                <MainStack/>
            </SafeAreaProvider>
        </NavigationContainer>
    );
};

export default RootNavigator;
