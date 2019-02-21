import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Button = (props) => {
  return (
    <View style={styles.buttonContainter}>
      <TouchableOpacity
        style={styles.buttonOn}
        onPress={props.onPress}
        onPressIn={props.onPressIn}
        activeOpacity={props.activeOpacity}
        
      >
        <Text style={styles.textOn}>{props.label}</Text>
      </TouchableOpacity>
    </View>
  )
};

export default Button;

const styles = StyleSheet.create({
  buttonContainter: {
    height: 56,
    justifyContent: 'center',
    marginTop: 16,
    alignSelf: 'stretch',
  },
  buttonOff: {
    flex: 1,
    borderRadius: 28,
    borderWidth: 2,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  
  },
  buttonOn: {
    height: 56,
    //width: 140,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 28,
    backgroundColor: 'white',
    marginTop: 6,
   
  },
  textOff: {
    fontSize: 20,
    color: '#546e7a',
  },
  textOn: {
    fontFamily: 'fontBold',
    fontSize: 24,
    color: '#45286a',
    fontWeight: 'bold'
  },
});