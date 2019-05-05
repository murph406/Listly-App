import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';

const CircleButton = props => (

    <TouchableOpacity
        style={[styles.modalCircle, { backgroundColor: props.color,}]}
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
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalIcon: {
        height: 26,
        width: 26,
    },
});

export default CircleButton;
