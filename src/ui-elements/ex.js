import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import * as Colors from '../theme/colors'


const xButton = props => (
    
         <TouchableOpacity 
            style={styles.modalCircle}
            onPress={() => {props.onPress()}}
        >
        <Image
            source={require('../../assets/icons/DeleteFinal.png')}
            style={styles.modalIcon}
        />
        </TouchableOpacity>
  )

  
  const styles = StyleSheet.create({
    modalCircle: {
        position: 'absolute',
        bottom: 36, 
        right: 167,
        height: 70,
        width: 70, 
        borderRadius: 35,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalIcon: {
        height: 26,
        width: 26,
    },
  });

  export default xButton;
