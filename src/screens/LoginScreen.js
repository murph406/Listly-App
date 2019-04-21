import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    Animated,
    StatusBar
} from 'react-native';
import Modal from 'react-native-modalbox';

import { Fonts } from '../theme/constant-styles';
import { WHITE, PRIMARY } from '../theme/colors';

import Button from '../components/button';
import Input from '../components/input';
import LoginInput from '../ui-elements/login-input';
import Check from '../ui-elements/check';


class LoginScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalPresented: false,
            isLoginSelected: false

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
        this.props.navigation.navigate('signUp')
    }

    onSignUpExit() {
        Animated.timing(this.animatedValue, {
            toValue: 1,
            duration: 500,
        }).start()
        this.refs.modal1.close()
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
                            <Text style={[Fonts.displayText, { color: WHITE }]}>Listly</Text>
                            <View style={{ paddingBottom: 30 }} />
                            <Check
                                height={100}
                                width={100} />
                        </View>

                        {(this.state.isLoginSelected === true)

                            ? <View>
                                <View style={{ paddingTop: 40 }}>
                                    <LoginInput
                                        color={WHITE}
                                        label={"EMAIL"}
                                    />
                                    <LoginInput
                                        color={WHITE}
                                        label={"PASSWORD"}
                                    />
                                </View>


                                <View style={styles.button}>
                                    <Button
                                        label="SIGN IN"
                                        onPress={() => this.goHomeScreen()}
                                    />
                                </View>

                                <View style={styles.textCountainer}>
                                    <Text style={[Fonts.smallText, { color: WHITE }]}>Dont have an Account ?</Text>
                                    <TouchableOpacity
                                        style={styles.signUpText}
                                        onPress={() => this.onSignUpPress()}
                                    >
                                        <Text style={[Fonts.smallText, { color: WHITE }]}>Sign Up !</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            : <View style={ { paddingTop: 180 }}>
                                <View style={styles.button}>
                                    <Button
                                        label="Connect Account"
                                        onPress={() => this.setState({ isLoginSelected: true })}
                                    />
                                </View>
                                <View style={{ alignItems: 'center', paddingTop: 16 }}>
                                    <TouchableOpacity
                                        style={styles.signUpText}
                                        onPress={() => this.props.navigation.navigate('home')}>
                                        <Text style={[Fonts.smallText, { color: WHITE }]}>I'd Rather Not</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                        }

                    </Animated.View>


                </View>
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
        padding: 16,
        paddingTop: 90,
    },
    button: {
        paddingTop: 160,
        paddingBottom: 24,
    },
    textCountainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    signUpText: {
        borderBottomWidth: 1,
        borderColor: 'white',
    },
});

export default LoginScreen;