import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { BlurView } from "expo";

import UserActionButton from '../ui-elements/user-action-button';
import Check from '../ui-elements/check';

const Header = (props) => {
  return (
    <View style={{ height: 100, position: 'absolute', top: 0, right: 0, left: 0, zIndex: 1000 }}>
      <BlurView tint="light" intensity={90} style={StyleSheet.absoluteFill}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingTop: 50, paddingRight: 16, paddingLeft: 16, }}>
          {(props.isCheckAnimationEnabled)
            ? <Check
              height={44}
              width={44} />
            : <UserActionButton
              color={"white"}
              icon={require('../../assets/icons/default-user-pic.png')}
              isIconLarge={true} />
          }
          <Text style={styles.font}> {"YOUR NOTES"} </Text>
          <TouchableOpacity
            onPress={props.addNote}
          >
            <View style={{marginLeft: 16}}>
              <Image
                source={require('../../assets/icons/AddFinished.png')}
                style={styles.icon}
              />
            </View>

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
    fontSize: 32,
    color: '#45286a'
  },
  icon: {
    height: 30,
    width: 30,
  }
});
