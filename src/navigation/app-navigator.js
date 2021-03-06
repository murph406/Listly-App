import React from 'react';
import { createDrawerNavigator } from 'react-navigation';
import { Dimensions } from 'react-native';

import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import SignUpScreen from '../screens/SignUpScreen'
import ExpandedListScreen from '../screens/ExpandedListScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Menu from '../screens/MenuScreen';
import DisclaimerScreen from '../screens/DisclaimerScreen';
import ListScreen from '../screens/ListScreen';
import LoadScreen from '../screens/LoadingScreen';

const AppNavigator = createDrawerNavigator({
    load: LoadScreen,
    login:  LoginScreen,
    home: HomeScreen,
    signUp: SignUpScreen,
    expandedList: ExpandedListScreen,
    profile: ProfileScreen,
    disclaimer: DisclaimerScreen,
    listScreen: ListScreen
  },
  {
    contentComponent: Menu,
    drawerWidth: Dimensions.get('window').width * 0.6,
    drawerType: 'front'
  }) 

export default AppNavigator;