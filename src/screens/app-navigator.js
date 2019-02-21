import React from 'react';
import { createDrawerNavigator } from 'react-navigation';
import { Dimensions } from 'react-native';

import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import SignUpScreen from './SignUpScreen'

const AppNavigator = createDrawerNavigator({
    login: LoginScreen,
    home: HomeScreen,
    signUp: SignUpScreen
  });

export default AppNavigator;