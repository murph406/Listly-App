import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';
import PropTypes from 'prop-types';
import SwipeOut from 'react-native-swipeout';

import Button from '../components/button';
import Input from '../components/input';
import Header from '../components/header';
import TextBox from '../components/text-box';
import XButton from '../ui-elements/ex';

import * as Colors from '../theme/colors';

class SignUpModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNameEntered: false,
            isPasswordEntered: false,
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

                        {(this.state.isNameEntered)
                            ? <View>
                                <View style={{ alignItems: 'center', paddingBottom: 20 }}>
                                    <Text style={styles.modalBigText}>Enter Password</Text>
                                </View>
                                <Input
                                    label="Enter Email"
                                    secureTextEntry={false}
                                    Color={Colors.PRIMARYPURP}

                                />
                                <Input
                                    label="Enter Password"
                                    secureTextEntry={true}
                                    Color={Colors.PRIMARYPURP}

                                />
                                <TouchableOpacity
                                    style={{ alignItems: 'center', paddingTop: 50 }}
                                    onPress={this.props.onExit}
                                >
                                    <Image
                                        source={require('../../assets/icons/RightArrow-purp.png')}
                                        style={styles.modalIcon}
                                    />
                                </TouchableOpacity>
                            </View>


                            : <View>
                                <View style={{ alignItems: 'center', paddingBottom: 20 }}>
                                    <Text style={styles.modalBigText}>Lets Get Started!</Text>
                                </View>

                                <Input
                                    label="Enter First Name"
                                    secureTextEntry={false}
                                    Color={Colors.PRIMARYPURP}

                                />
                                <Input
                                    label="Enter Last Name"
                                    secureTextEntry={false}
                                    Color={Colors.PRIMARYPURP}

                                />
                                <TouchableOpacity
                                    style={{ alignItems: 'center', paddingTop: 50 }}
                                    onPress={() => this.setState({ isNameEntered: true })}
                                >
                                    <View style={{ justifyContent: 'row' }}>

                                        <Image
                                            source={require('../../assets/icons/RightArrow-purp.png')}
                                            style={styles.modalIcon}
                                        />
                                    </View>

                                </TouchableOpacity>
                            </View>
                        }
                    </View>
                </View>

                <XButton
                    onPress={this.props.onExit}
                    icon={require('../../assets/icons/DeleteFinal.png')}
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

export default SignUpModal;
