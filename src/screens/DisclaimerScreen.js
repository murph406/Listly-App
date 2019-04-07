import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Dimensions, ScrollView } from 'react-native';

import { Fonts } from '../theme/constant-styles';
import { WHITE, PRIMARY } from '../theme/colors';

import UserActionButton from '../ui-elements/user-action-button';
import Check from '../ui-elements/check';

let { width, height } = Dimensions.get('window')

let text =  "The trademark symbol (™) is a symbol to indicate that the preceding mark is a trademark. It is usually used for unregistered trademarks, as opposed to the registered trademark symbol (®) which is reserved for trademarks registered with the appropriate government agency. In Unicode it is U+2122 The trademark symbol (™)                is a symbol to indicate that the preceding mark is a trademark. It is usually used for unregistered trademarks, as opposed to the registered trademark symbol (®) which is reserved for trademarks registered with the appropriate government agency. In Unicode it is U+2122"

const DisclaimerScreen = (props) => {
    return (
        <ImageBackground
            source={require('../../assets/drawing3.png')}
            style={styles.container}
        >
            <Text style={[Fonts.HeadlineText, { color: WHITE }]}>DISCLAIMER</Text>
            <View style={{ paddingTop: 180}}/>
            <View style={{height: height * .35, width: width * .75,}}>
                <ScrollView>
                    <Text style={[Fonts.smallText, { color: WHITE }]}>{text}</Text>
                </ScrollView>
            </View>

        </ImageBackground>
    )
};

export default DisclaimerScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: undefined,
        height: undefined,
        backgroundColor: 'transparent',
        alignItems: 'center',
        padding: 16,
        paddingTop: 90,
    },
});
