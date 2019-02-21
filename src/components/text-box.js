import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';

const TextBox = (props) => (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {props.onPress()}} style={{flex: 1}}>
          <View style={styles.textContainer} >
            <Text style={styles.bigText}>{props.title}</Text>
            <Text style={styles.smallText}>{props.text}</Text>
          </View>
          
      </TouchableOpacity>
    </View>
)
export default TextBox;

const styles = StyleSheet.create({
  container: {
    height: 100,
    borderRadius: 12,
    shadowOpacity: 0.2,
    shadowColor: 'black',
    shadowRadius: 8,
    shadowOffset:{ width: 2, height: 0 },
    justifyContent:'center',
    marginTop: 8,
    marginBottom: 8,
    marginRight: 20,
    marginLeft: 20,
    padding: 8,
    backgroundColor: 'white',
  },
  textContainer: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'stretch',
    margin: 16, 
  },
  smallText: {
    fontSize: 18,
    color: 'black',
    fontFamily: 'fontReg',
  },
  bigText: {
    fontFamily: 'fontReg',
    fontSize: 24,
    color: 'black',
    marginBottom: 8
  },
});
