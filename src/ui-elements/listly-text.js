import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import { Fonts } from '../theme/constant-styles';
import { WHITE, PRIMARY } from '../theme/colors';

const ListlyText = props => (
    <View style={ {flexDirection: 'row'}}>
        <Text style={[Fonts.displayText, { color: WHITE }]}>Listly</Text>
        <Text style={[Fonts.labelText, { color: WHITE }]}>™</Text>
    </View>
)

const styles = StyleSheet.create({
});

export default ListlyText;

