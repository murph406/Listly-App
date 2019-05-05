import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Fonts, Colors } from '../theme/constant-styles';

const ListlyText = props => (
    <View style={ {flexDirection: 'row'}}>
        <Text style={[Fonts.displayText, { color: Colors.WHITE }]}>Listly</Text>
        <Text style={[Fonts.labelText, { color: Colors.WHITE }]}>™</Text>
    </View>
)

const styles = StyleSheet.create({
});

export default ListlyText;

