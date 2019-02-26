import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const Header = (props) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
       <Text style={styles.font}> {props.title} </Text>
        <TouchableOpacity
          onPress={props.onPress}
        >
          <Image
            source={require('../../assets/icons/AddFinished.png')}
            style={styles.icon}
        />
        </TouchableOpacity>
       
      </View>
      
      
    </View>
  )
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 90,
    paddingTop: 50,
    marginBottom: 24,
    backgroundColor: 'white',
    paddingHorizontal: 24,
    justifyContent: 'center',
    shadowOffset: {width: 0, height: 30},
    //shadowRadius: 0.1,
    shadowOpacity: 0.5,
    shadowColor: 'white'
    //zIndex: 1000,
  },
  font: {
    fontFamily: 'fontBold',
    fontWeight: 'bold',
    fontSize: 40,
    color: '#45286a'
  },
  icon: {
    height: 34, 
    width: 34,
  }
});
