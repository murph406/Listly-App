 
 import { StyleSheet } from 'react-native'
  
 const fonts = StyleSheet.create({  
    headerText: {
        fontSize: 54,
        fontFamily: 'fontBold',
        paddingBottom: 20,
    }, 
    medText: {
        fontFamily: 'fontReg',
        fontSize: 24,
    },
    smallText: {
        fontFamily: 'fontReg',
        fontSize: 16,
    },
 })
  
 const buttons = StyleSheet.create({  
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
  
 export { fonts, buttons } 