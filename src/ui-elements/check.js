import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import * as Colors from '../theme/colors'


const Check = props => (
    <View style={styles.checkContainer}>
        <Image
            source={require('../../assets/animat-checkmark.gif')}
            style={styles.check}
        />
    </View>
  )

  
  const styles = StyleSheet.create({
    checkContainer: {
        height: 100,
        width: 100,
        backgroundColor: 'white',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    check: {
        height: 160,
        width: 160,
    }, 
  });

  export default Check;

