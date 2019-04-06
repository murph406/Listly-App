import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const Input = (props) => {
  return (
    <View style={[styles.inputContainer, style={borderBottomColor: props.Color}]}>
      <View>
        <Text style={[styles.text, style={color: props.Color}]}>{ props.label}</Text>
      </View>
      
      <View>
        <TextInput
          placeholderTextColor={props.Color}
          selectionColor={props.Color}
          secureTextEntry={props.secureTextEntry}
          autoCorrect={false}
          value={props.value}
          onChangeText={props.onChangeText}
          style={[styles.inputView, style={color: props.Color}]}
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
    marginTop: 20,
  },
  text: {
    fontFamily: 'fontBold',
    fontSize: 24,
  },
  inputView: {
    fontSize: 20,
    padding: 10,
    paddingBottom: 15,
    paddingLeft: 30,
  },
});
