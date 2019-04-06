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
import PropTypes from 'prop-types';
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

        this.state = {
            value: null,
            info: null
        }

    }

    onDismiss() {
        var value = this.state.value
        var info = this.state.info
        console.log(value, info)
        
        this.props.onDismiss(value, info)
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
                            onChangeText={(value) => this.setState({value})}
                        />
                        <Input
                            label="Description"
                            secureTextEntry={false}
                            Color={Colors.PRIMARYPURP}
                            onChangeText={(info) => this.setState({info})}
                        />
                    </View>
                </View>

                <XButton
                    onPress={() => this.onDismiss()}
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
