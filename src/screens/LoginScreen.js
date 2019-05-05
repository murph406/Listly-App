import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    ImageBackground,
    TouchableOpacity,
    Animated,
    StatusBar
} from 'react-native';
import fire from '../api/firebase';

import { Fonts, Colors, Backgrounds, Icons } from '../theme/constant-styles';
import UserActionButton from '../ui-elements/user-action-button';
import Button from '../components/button';
import LoginInput from '../ui-elements/login-input';
import Check from '../ui-elements/check';

class LoginScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalPresented: false,
            isLoginSelected: false,
            isSignUpSelected: false,
            authenticating: false,
            email: '',
            password: ''
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

    onSignInPress() {
        this.setState({ authenticating: true })
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((user) => {
            console.log(user)
        }).catch((error) => {
            this.setState({ authenticating: false })
            console.log(error)
        })
    }
    

    onCreateAccount() {
        this.setState({ authenticating: true })
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((user) => {   
            console.log(user)
        })
        .catch((error) => {
            console.log(error)
            this.setState({authenticating: false})
        })
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
                source={Backgrounds.PRIMARY}
                style={styles.container}>
                {(!this.state.isLoginSelected)
                    ? <View style={styles.button}>
                        <View >
                            <Button
                                label="Connect Account"
                                onPress={() => this.setState({ isLoginSelected: true })} />
                        </View>
                        <View style={{ alignItems: 'center', paddingTop: 16 }}>
                            <TouchableOpacity
                                style={styles.signUpText}
                                onPress={() => this.props.navigation.navigate('home')}>
                                <Text style={[Fonts.smallText, { color: Colors.WHITE }]}>I'd Rather Not</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    :
                    <View style={{ position: 'absolute', top: 46, left: 16 }}>
                        <UserActionButton
                            onPress={() => this.setState({ isLoginSelected: false, isSignUpSelected: false, authenticating: false })}
                            color={Colors.WHITE}
                            icon={Icons.BACK_PURP} />
                    </View>
                }
                {(!this.state.isLoginSelected)
                    ? null
                    : <View style={styles.button}>
                        {(this.state.isSignUpSelected === false)
                            ?
                            <View >
                                <View>
                                    <Button
                                        label="SIGN IN"
                                        onPress={() => this.onSignInPress()} />
                                </View>
                                <View style={{ alignItems: 'center', paddingTop: 16 }}>
                                    <Text style={[Fonts.smallText, { color: Colors.WHITE }]}>Dont have an Account ?</Text>
                                    <TouchableOpacity
                                        style={styles.signUpText}
                                        onPress={() => this.setState({ isSignUpSelected: true })}>
                                        <Text style={[Fonts.smallText, { color: Colors.WHITE }]}>Sign Up !</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            : <View>
                                <Button
                                    label="CREATE ACCOUNT"
                                    onPress={() => this.onCreateAccount()} />
                            </View>
                        }
                    </View>
                }
                <View>
                    <StatusBar barStyle="light-content" />
                    <Animated.View
                        style={[styles.box, animatedStyle]}>

                        <View style={{ alignItems: 'center' }}>
                            <Text style={[Fonts.displayText, { color: Colors.WHITE }]}>Listly</Text>
                            <View style={{ paddingBottom: 30 }} />
                            <Check
                                height={100}
                                width={100} />
                        </View>

                        {(this.state.isLoginSelected === true)
                            ? <View>
                                {(!this.state.authenticating)
                                    ?
                                    <View style={{ paddingTop: 40 }}>
                                        <LoginInput
                                            color={Colors.WHITE}
                                            label={"EMAIL"}
                                            onChangeText={(text) => this.setState({ email: text })}
                                        />
                                        <LoginInput
                                            color={Colors.WHITE}
                                            label={"PASSWORD"}
                                            onChangeText={(text) => this.setState({ password: text })}
                                        />
                                    </View>

                                    : <View style={{ paddingTop: 150 }}>
                                        <ActivityIndicator
                                            color={'white'}
                                            size={'large'} />
                                    </View>
                                }
                            </View>
                            : null
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
        position: 'absolute',
        bottom: 52,
        left: 16,
        right: 16
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