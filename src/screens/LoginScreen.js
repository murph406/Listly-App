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
import Check from '../ui-elements/check';
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
        this.refs.modal1.open()
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
                        <View style={{paddingTop: 60}}>
                            <Input
                                //label="EMAIL"
                                placeholder=" EXAMPE@WHATEVER.COM"
                                Color={WHITE}
                            />
                            <Input
                                //label="PASSWORD"
                                secureTextEntry={true}
                                placeholder=" PASSWORD"
                                Color={WHITE}
                            />
                        </View>


                        <View style={styles.button}>
                            <Button
                                label="SIGN IN"
                                onPress={() => this.goHomeScreen()}
                            />
                        </View>

                        <View style={styles.textCountainer}>
                            <Text style={[Fonts.smallText, { color: WHITE }]}>Dont have an Account?</Text>
                            <TouchableOpacity
                                style={styles.signUpText}
                                onPress={() => this.onSignUpPress()}
                            >
                                <Text style={[Fonts.smallText, { color: WHITE }]}>Sign Up!</Text>
                            </TouchableOpacity>
                        </View>

                    </Animated.View>


                </View>
                <Modal
                    visible={this.state.isModalPresented}
                    backdropOpacity={.2}
                    swipeToClose={true}
                    onClosed={() => this.onSignUpExit()}
                    ref={"modal1"}>
                    <SignUpModal />
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
        padding: 16,
        paddingTop: 90,
    },
    button: {
        paddingTop: 180,
        paddingBottom: 16,
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