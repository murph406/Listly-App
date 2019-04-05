import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { BlurView } from "expo";

const Header = (props) => {
  return (
    <View style={{ height: 100, position: 'absolute', top: 0, right: 0, left: 0, zIndex: 1000 }}>
      <BlurView tint="light" intensity={90} style={StyleSheet.absoluteFill}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingTop: 40, paddingRight: 16, paddingLeft: 16, }}>
          <Text style={styles.font}> {"Your Notes"} </Text>
          <TouchableOpacity
            onPress={props.addNote}
          >
            <Image
              source={require('../../assets/icons/AddFinished.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </BlurView>

    </View>
  )
};

export default Header;

const styles = StyleSheet.create({
  container: {

    paddingTop: 50,
    backgroundColor: 'transparent',
    paddingHorizontal: 24,
    justifyContent: 'center',
    //shadowOffset: { width: 0, height: 30 },
    //shadowRadius: 0.1,
    //shadowOpacity: 0.5,
    //shadowColor: 'white'
    //zIndex: 1000,
  },
  font: {
    fontFamily: 'fontBold',
    fontWeight: 'bold',
    fontSize: 40,
    color: '#45286a'
  },
  icon: {
    height: 30,
    width: 30,
  }
});
