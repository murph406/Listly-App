import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

import { Fonts } from '../theme/constant-styles';

const Input = (props) => {
  return (
    <View style={[styles.inputContainer, style={borderBottomColor: props.Color}]}>
 
      <View>
        <TextInput          
          placeholderTextColor={props.Color}
          selectionColor={props.Color}
          secureTextEntry={props.secureTextEntry}
          autoCorrect={false}
          value={props.value}
          onChangeText={props.onChangeText}
          style={[Fonts.label, style={color: props.Color, paddingBottom: 16, paddingLeft: 15, }]}
          placeholder= {props.placeholder}
          >
        </TextInput>
      </View>
    </View>
  )
};

export default Input;

const styles = StyleSheet.create({
  inputContainer:{
    borderBottomWidth: 2,
    marginTop: 16,
  },
  inputView: {
    fontSize: 20,
    paddingBottom: 16,
    paddingLeft: 15,
  },
});
