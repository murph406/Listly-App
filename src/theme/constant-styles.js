
import { StyleSheet } from 'react-native';
// const store = createStore(todos, ['Use Redux'])

var darkModeEnabled = false;
//((!darkModeEnabled)? NORMAL : DARK_MODE )

// let unsubscribe = store.subscribe(function(){
//   const state = store.getState();
//   debugger
// })

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

var mapStateToProps = state => {
  return {
      cards: state.user.user.cards,
      //selectedCatagory: state.selectedData.selectedCatagory
  }
}

export { Fonts, Colors, Backgrounds, Icons, FontColors};