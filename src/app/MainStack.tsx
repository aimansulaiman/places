import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from "../home/Home";

export type MainStackParamList = {
    Home: undefined;
};

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    );
};

export default MainStack;
