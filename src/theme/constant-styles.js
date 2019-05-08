
import { StyleSheet, AsyncStorage } from 'react-native';
import storeProvider from '../api/redux-store';
import { connect } from 'react-redux';

//var dakrmode = getTheme()

  
 //const reduxState = storeProvider.getStore().getState();
  // if (reduxState.user.darkModeEnabled === false) {
  //   return false;
  // }
  // return true;
var darkModeEnabled = false;

const Fonts = StyleSheet.create({
  displayText: {
    fontSize: 46,
    fontFamily: 'fontBold',
  },
  HeadlineText: {
    fontSize: 26,
    fontFamily: 'fontBold',
  },
  label: {
    fontFamily: 'fontBold',
    fontSize: 18,
  },
  medText: {
    fontFamily: 'fontReg',
    fontSize: 16,
  },
  smallText: {
    fontFamily: 'fontReg',
    fontSize: 14,
  },

})

const Colors = {
  //PRIMARY: '#646beb',
  PRIMARY: ((!darkModeEnabled) ? '#646beb' : '#646beb'),
  GREEN: '#48dbca',
  GREY: '#5a5a5a',
  RED: '#f44330',

  //WHITE: '#ffffff',
  WHITE: ((!darkModeEnabled) ? '#ffffff' : '#646beb'),
  BLACK: '#000000',

  MENUE_COLOR:  ((!darkModeEnabled) ? '#646beb' : 'black'),
}

const FontColors = {
  PRIMARY: ((!darkModeEnabled) ? '#646beb' : '#646beb'),
  GREEN: '#48dbca',
  GREY: '#5a5a5a',
  RED: '#f44330',

  WHITE: '#ffffff',
  BLACK: '#000000',
}

const Backgrounds = StyleSheet.create({
  PRIMARY: require("../../assets/backgrounds/drawing.png"),
  SECONDARY: ((!darkModeEnabled) ? require("../../assets/backgrounds/drawing2.png") : require("../../assets/backgrounds/background-HomeScreen-DARK.png")),
  //SECONDARY: require("../../assets/backgrounds/drawing2.png"),
  GREEN: require("../../assets/backgrounds/drawing3.png"),
  BUBBLES: require("../../assets/backgrounds/drawing4.png"),
  BUBBLES_2: require("../../assets/backgrounds/drawing5.png"),
})

const Icons = StyleSheet.create({
  CREATE: require("../../assets/icons/AddFinished.png"),
  EXIT: require("../../assets/icons/DeleteFinal.png"),
  RIGHT_ARROW: require("../../assets/icons/RightArrow-purp.png"),
  DEFUALT_USER_PIC: require("../../assets/icons/default-user-pic.png"),
  BACK_PURP: require("../../assets/icons/back-icon.png"),
  BACK_WHITE: require("../../assets/icons/back-icon-white.png"),
  CHECKMARK_PURP: require("../../assets/icons/checkmark.png"),
  CHECKMARK_WHITE: require("../../assets/icons/checkmark-white.png"),
  LISTLY_CHECK: require("../../assets/icons/check-icon.png"),
  LISTLY_CHECK_ANIMATED: require("../../assets/animat-checkmark.gif"),
})


export { Fonts, Colors, Backgrounds, Icons, FontColors};