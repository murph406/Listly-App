import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import { Fonts } from '../theme/constant-styles';
import { WHITE, PRIMARY, BLACK } from '../theme/colors';

const Input = (props) => {
  return (
    <View style={[styles.inputContainer, style={borderBottomColor: props.Color}]}>
 
      <View>
        <TextInput
          //ref={textInput}
          
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
    //padding: 16,
    paddingBottom: 16,
    paddingLeft: 15,
  },
});
