import React from 'react';
import { createDrawerNavigator } from 'react-navigation';
import { Dimensions } from 'react-native';

import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import SignUpScreen from './SignUpScreen'
import ExpandedListScreen from './ExpandedListScreen';
import ProfileScreen from './ProfileScreen';
import Menu from '../screens/MenuScreen';
import DisclaimerScreen from './DisclaimerScreen';

const AppNavigator = createDrawerNavigator({
    login: LoginScreen,
    home: HomeScreen,
    signUp: SignUpScreen,
    expandedList: ExpandedListScreen,
    profile: ProfileScreen,
    disclaimer: DisclaimerScreen
  },
  {
    contentComponent: Menu,
    drawerWidth: Dimensions.get('window').width * 0.6,
    drawerType: 'front'
  }) 

export default AppNavigator;