import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import { Fonts } from '../theme/constant-styles';
import { WHITE, PRIMARY, BLACK } from '../theme/colors';

import { TextField } from 'react-native-material-textfield';

const Input = (props) => {
    return (
        <View style={{paddingTop: 32}}>
        <TextField
            labelTextStyle = {{fontFamily: 'fontBold' }}
            style={{fontFamily: 'fontBold'}}
            labelPadding={8}
            labelHeight={null}
            inputContainerPadding={16}
            fontSize={17}
            lineWidth={2}
            tintColor={props.color}
            textColor={props.color}
            baseColor={props.color}
            label={props.label}
            value={props.value}
            onChangeText={props.onChangeText}
        />
    </View>
    )
};

export default Input;

const styles = StyleSheet.create({
    inputContainer: {
        borderBottomWidth: 2,
        marginTop: 16,
    },
    inputView: {
        fontSize: 20,
        //padding: 16,
        paddingBottom: 16,
        paddingLeft: 15,
    },
});
