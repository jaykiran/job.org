/* eslint-disable prettier/prettier */
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './SplashScreen';
import MainTabScreen from './BottomTabScreen';
//import SignInScreen from './SignInScreen';
//import SignUpScreen from './SignUpScreen';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="SplashScreen" component={SplashScreen}/>
        <RootStack.Screen name="BottomTabScreen" component={MainTabScreen}/>
    </RootStack.Navigator>
);

export default RootStackScreen;