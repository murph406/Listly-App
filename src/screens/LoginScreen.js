import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    Animated,
    Modal,
    StatusBar
} from 'react-native';


import Button from '../components/button';
import Input from '../components/input';
import Check from '../ui-elements/check';
import XButton from '../ui-elements/ex';

import * as Colors from '../theme/colors';
import SignUpModal from '../modals/SignUpModal';


class LoginScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalPresented: false,

        }
    }

    componentWillMount() {
        this.animatedValue = new Animated.Value(0);
    }
    componentDidMount() {
        Animated.timing(this.animatedValue, {
            toValue: 1,
            duration: 4000,
        }).start()
    }

    onSignUpPress() {
        Animated.timing(this.animatedValue, {
            toValue: 0,
            duration: 300,
        }).start()
        this.setState({ isModalPresented: true })
    }

    onSignUpExit() {
        Animated.timing(this.animatedValue, {
            toValue: 1,
            duration: 500,
        }).start()
        this.setState({ isModalPresented: false })
        this.setState({ isNameEntered: false })
    }
    goHomeScreen() {
        this.props.navigation.navigate('home')
    }

    render() {
        const animatedStyle = { opacity: this.animatedValue }
        return (
            <ImageBackground
                source={require('../../assets/drawing.png')}
                style={styles.container}
            >
                <View>
                    <StatusBar barStyle="light-content" />
                    <Animated.View
                        style={[styles.box, animatedStyle]}
                    >
                        <View style={{ alignItems: 'center' }}>
                            <Text style={styles.headerText}>Listly</Text>
                            <Check
                                height={100}
                                width={100} />
                        </View>

                        <Input
                            label="EMAIL"
                            placeholder=" example@whatever.com"
                            Color={"white"}
                        />
                        <Input
                            label="PASSWORD"
                            secureTextEntry={true}
                            placeholder=" password"
                            Color={"white"}
                        />

                        <View style={styles.signInButton}>
                            <Button
                                label="SIGN IN"
                                onPress={() => this.goHomeScreen()}
                            />
                        </View>

                        <View style={styles.textCountainer}>
                            <Text style={styles.smallText}>Dont have an Account?</Text>
                            <TouchableOpacity
                                style={styles.signUpButton}
                                onPress={() => this.onSignUpPress()}
                            >
                                <Text style={styles.smallText}>Sign Up!</Text>
                            </TouchableOpacity>
                        </View>

                    </Animated.View>


                </View>
                <Modal
                    visible={this.state.isModalPresented}
                    animationType={'slide'}
                    transparent={true}>
                    <SignUpModal
                        onExit={() => this.onSignUpExit()} />
                </Modal>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: undefined,
        height: undefined,
        backgroundColor: 'transparent',
        padding: 20,
        paddingTop: 50,
    },
    headerText: {
        color: 'white',
        fontSize: 54,
        fontFamily: 'fontBold',
        paddingBottom: 20,
    },
    signInButton: {
        paddingTop: 30,
        paddingBottom: 190,
    },
    textCountainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    signUpButton: {
        borderBottomWidth: 2,
        borderColor: 'white',
    },
    medText: {
        fontFamily: 'fontReg',
        fontSize: 24,
        color: 'white',
    },
    smallText: {
        fontFamily: 'fontReg',
        fontSize: 16,
        color: 'white',
    },

});

export default LoginScreen;