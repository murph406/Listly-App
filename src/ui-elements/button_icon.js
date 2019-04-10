import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import { Fonts } from '../theme/constant-styles';
import { WHITE, GREEN } from '../theme/colors';

const ButtonIcon = (props) => {
    return (
        <View style={styles.buttonContainter}>
            <TouchableOpacity
                style={styles.button}
                onPress={props.onPress}
                onPressIn={props.onPressIn}
                activeOpacity={props.activeOpacity}>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ paddingRight: 8 }}>
                        <Image
                            style={{ height: props.dementions, width: props.dementions, }}
                            source={props.icon} />
                    </View>

                    <View style={{ borderLeftWidth: 2, borderLeftColor: props.color, paddingLeft: 8 }}>
                        <Text style={[Fonts.label, { color: props.color }]}>{props.label}</Text>
                    </View>
                </View>

            </TouchableOpacity>
        </View>
    )
};

export default ButtonIcon;

const styles = StyleSheet.create({
    buttonContainter: {
        height: 56,
        justifyContent: 'center',
        marginTop: 16,
        alignSelf: 'stretch',
    },
    button: {
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 28,
        backgroundColor: WHITE,
        marginTop: 6,

    },
});