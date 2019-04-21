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
        height: 48, 
        width: 48,
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    profilPic: {
        height: 42,
        width: 42,
    },
    smallIcon: {
        height: 34,
        width: 34,
    }
})

export default UserActionButton;