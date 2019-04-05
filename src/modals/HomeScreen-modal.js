import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    ScrollView,
    Animated,
    Modal,
    TouchableOpacity,
} from 'react-native';
import SwipeOut from 'react-native-swipeout';

import Button from '../components/button';
import Input from '../components/input';
import Header from '../components/header';
import TextBox from '../components/text-box';
import XButton from '../ui-elements/ex';

import * as Colors from '../theme/colors';

class AddNoteModal extends Component {
    constructor(props) {
        super(props);

        this.state = {}

    }

    render() {
        return (
            <View style={{ flex: 1, paddingRight: 20, paddingLeft: 20, justifyContent: 'center' }}>
                <View style={styles.modalBox}>
                    <View styles={{ flex: 1, alignItems: 'center', }}>

                        <View style={{ alignItems: 'center', paddingBottom: 20 }}>
                            <Text style={styles.modalBigText}>Lets Add a Note</Text>
                        </View>

                        <Input
                            label="Your New Note"
                            secureTextEntry={false}
                            Color={Colors.PRIMARYPURP}
                        />
                        <Input
                            label="Description"
                            secureTextEntry={false}
                            Color={Colors.PRIMARYPURP}
                        />
                    </View>
                </View>

                <XButton
                    onPress={() => this.props.onDismiss()}
                    icon={require('../../assets/icons/checkmark.png')}
                />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    modalBox: {
        height: 400,
        backgroundColor: 'white',
        borderRadius: 40,
        shadowOpacity: 0.2,
        shadowColor: 'black',
        shadowRadius: 8,
        shadowOffset: { width: 2, height: 0 },
        padding: 20,
    },
    modalBigText: {
        fontFamily: 'fontBold',
        fontSize: 32,
        color: Colors.PRIMARYPURP,
    },
})

export default AddNoteModal;
