import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Animated } from 'react-native';

const UserActionButton = props => (
    <Animated.View style={[props.animated, {backgroundColor: 'transparent'}]}>
        <TouchableOpacity
            onPress={props.onPress}>
            <View style={[styles.container, { backgroundColor: props.color }]} >
                <Image
                    style={(props.isIconLarge) ? styles.profilPic : styles.smallIcon}
                    source={props.icon}
                />
            </View>
        </TouchableOpacity>
    </Animated.View>

)

const styles = StyleSheet.create({
    container: {
        height: 44, 
        width: 44,
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    profilPic: {
        height: 36,
        width: 36,
    },
    smallIcon: {
        height: 26,
        width: 26,
    }
})

export default UserActionButton;