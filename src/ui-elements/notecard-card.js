import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';

import { Fonts } from '../theme/constant-styles';
import { WHITE, PRIMARY, BLACK } from '../theme/colors';

let { width, height } = Dimensions.get('window')

const NoteCard = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.textContainer}
                onPress={props.onPress}>


                <Text style={[Fonts.label, {color: BLACK}]}>{props.headerText}</Text>


            </TouchableOpacity>
        </View>
    )
};

export default NoteCard;

const styles = StyleSheet.create({
    container: {
        paddingTop: 32,
        width: (width * .5) - 32,
        height: (height * (1 / 3)) - 48,
        backgroundColor: 'white',
        borderRadius: 12,
        shadowOpacity: 0.2,
        shadowColor: 'black',
        shadowRadius: 8,
        shadowOffset: { width: 2, height: 0 },
        justifyContent: 'center',
        marginRight: 8,
        marginLeft: 8,
    },
    textContainer: {
        flex: 1,
        //justifyContent: 'center',
        alignItems: 'center',
        //margin: 16,
    }
});
