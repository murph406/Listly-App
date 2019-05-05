import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Fonts, FontColors } from '../theme/constant-styles';

const ListlyText = props => (
    <View style={ {flexDirection: 'row'}}>
        <Text style={[Fonts.displayText, { color: FontColors.WHITE }]}>Listly</Text>
        <Text style={[Fonts.labelText, { color: FontColors.WHITE }]}>™</Text>
    </View>
)

const styles = StyleSheet.create({
});

export default ListlyText;

