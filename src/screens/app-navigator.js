import React from 'react';
import { createDrawerNavigator } from 'react-navigation';
import { Dimensions } from 'react-native';

import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import SignUpScreen from './SignUpScreen'
import ExpandedListScreen from './ExpandedListScreen';
import ProfileScreen from './ProfileScreen';

const AppNavigator = createDrawerNavigator({
    login: LoginScreen,
    home: HomeScreen,
    signUp: SignUpScreen,
    expandedList: ExpandedListScreen,
    profile: ProfileScreen,
  });

export default AppNavigator;