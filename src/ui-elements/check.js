import React from 'react';
import { StyleSheet, View, Image } from 'react-native';


const Check = props => (
    <View style={[styles.checkContainer, { height: props.height }, { width: props.width }, { borderRadius: props.height / 2, }]}>
        <Image
            source={require('../../assets/animat-checkmark.gif')}
            style={{ height: props.height * 1.8, width: props.width * 1.8 }}
        />
    </View>
)


const styles = StyleSheet.create({
    checkContainer: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Check;

