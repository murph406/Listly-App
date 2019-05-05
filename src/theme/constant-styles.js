
import { StyleSheet } from 'react-native'

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
  PRIMARY: '#646beb',
  GREEN: '#48dbca',
  GREY: '#5a5a5a',
  RED: '#f44330',

  WHITE: '#ffffff',
  BLACK: '#000000',
}

const Backgrounds = StyleSheet.create({
  PRIMARY: require("../../assets/backgrounds/drawing.png"),
  SECONDARY: require("../../assets/backgrounds/drawing2.png"),
  GREEN: require("../../assets/backgrounds/drawing3.png"),
  BUBBLES: require("../../assets/backgrounds/drawing4.png"),
  BUBBLES_2: require("../../assets/backgrounds/drawing5.png"),
})

const Icons = StyleSheet.create({
  //   require("./assets/icons/AddFinished.png"),
  //   require("./assets/icons/DeleteFinal.png"),
  //   require("./assets/icons/RightArrow-purp.png"),
  //   require("./assets/icons/default-user-pic.png"),
  //   require("./assets/icons/check-icon.png"),
  //   require("./assets/icons/back-icon.png"),
  //   require("./assets/icons/checkmark.png"),
  //   require("./assets/icons/checkmark-white.png"),
  //   require("./assets/icons/back-icon-white.png"),
  //   require("./assets/animat-checkmark.gif"),
})


export { Fonts, Colors, Backgrounds, Icons } 