import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Dimensions, ScrollView } from 'react-native';

import { Fonts, Colors, Backgrounds } from '../theme/constant-styles';

let { width, height } = Dimensions.get('window')

let text = "The trademark symbol (™) is a symbol to The trademark symbol (™) is a symbol to indicate that the preceding mark is a trademark. It is usually used for unregistered trademarks, as opposed to the indicate that the preceding mark is a trademark. It is usually used for unregistered trademarks, as opposed to the The trademark symbol (™) is a symbol to indicate that the preceding mark is a trademark. It is usually used for unregistered trademarks, as opposed to the registered trademark symbol (®) which is reserved for trademarks registered with the appropriate government agency. In Unicode it is U+2122 The trademark symbol (™)                is a symbol to indicate that the preceding mark is a trademark. It is usually used for unregistered trademarks, as opposed to the registered trademark symbol (®) which is reserved for trademarks registered with the appropriate government agency. In Unicode it is U+2122"

const DisclaimerScreen = (props) => {
    return (
        <ImageBackground
            source={Backgrounds.GREEN}
            style={styles.container}
        >
            <Text style={[Fonts.HeadlineText, { color: Colors.WHITE }]}>DISCLAIMER</Text>
           
            <View style={{ paddingTop: 160 }} />
            
            <View style={{ height: height * .4, width: width * .9, }}>
                <ScrollView
                    indicatorStyle={'white'}
                    style={{ padding: 16 }}>
                    <Text style={[Fonts.smallText, { color: Colors.WHITE }]}>{text}</Text>
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
