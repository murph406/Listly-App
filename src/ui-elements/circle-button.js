import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import * as Colors from '../theme/colors'


const xButton = props => (

    <TouchableOpacity
        style={styles.modalCircle}
        onPress={() => { props.onPress() }}>
        <Image
            source={props.icon}
            style={styles.modalIcon}
        />
    </TouchableOpacity>
)


const styles = StyleSheet.create({
    modalCircle: {
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
