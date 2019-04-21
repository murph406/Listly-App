import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { Fonts } from '../theme/constant-styles';
import { WHITE, PRIMARY } from '../theme/colors';

const Button = (props) => {
  return (
    <View style={styles.buttonContainter}>
      <TouchableOpacity
        style={styles.button}
        onPress={props.onPress}
        onPressIn={props.onPressIn}
        activeOpacity={props.activeOpacity}
        
      >
        <Text style={[Fonts.label, { color: PRIMARY }]}>{props.label}</Text>
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
  button: {
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 28,
    backgroundColor: 'white',
    marginTop: 6,
   
  },
});