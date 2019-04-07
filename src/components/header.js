import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import { Fonts } from '../theme/constant-styles';
import { WHITE, PRIMARY } from '../theme/colors';

import UserActionButton from '../ui-elements/user-action-button';
import Check from '../ui-elements/check';

const Header = (props) => {
    return (
        <View style={{ height: 100, position: 'absolute', top: 0, right: 0, left: 0, zIndex: 1000 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingTop: 50, paddingRight: 16, paddingLeft: 16, }}>

                <View >
                    <TouchableOpacity
                        onPress={() => props.goBack()}>
                        <Image
                            source={require('../../assets/icons/back-icon.png')}
                            style={styles.icon} />
                    </TouchableOpacity>
                </View>
                <Text style={[Fonts.HeadlineText, { color: props.color }]}> {props.headerText} </Text>
                <TouchableOpacity>
                    <Text style={[Fonts.medText, { color: WHITE }]}>Edit</Text>
                </TouchableOpacity>
            </View>
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
    },
    icon: {
        height: 30,
        width: 30,
    }
});
