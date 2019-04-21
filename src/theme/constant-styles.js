
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

const Buttons = StyleSheet.create({
  primary: {
    flex: 1,
    height: 70,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20
  }
})

export { Fonts, Buttons } 