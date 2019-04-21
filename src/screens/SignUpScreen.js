import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, StatusBar, Easing } from 'react-native';

import LoginInput from '../ui-elements/login-input';
import { Fonts } from '../theme/constant-styles';
import { WHITE, PRIMARY, GREEN } from '../theme/colors';
import ListlyText from '../ui-elements/listly-text';
import ButtonIcon from '../ui-elements/button_icon';

class SignUpScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }
    componentWillMount() {

    }
    componentDidMount() {

    }

    render() {
        const animatedStyle = { height: this.animatedValue }
        return (
            <ImageBackground
                source={require('../../assets/drawing3.png')}
                style={styles.containerBackground}>
                <StatusBar barStyle="light-content" />
                <View style={styles.container}>
                    <View style={{ alignItems: 'center', marginTop: 60 }}>
                        {/* <ListlyText />
                        <View style={{ paddingTop: 60 }} /> */}
                        <Text style={[Fonts.displayText, { color: WHITE }]}>Sign Up</Text>
                    </View>
                    <View style={{ paddingTop: 40 }}>
                        <LoginInput
                            color={WHITE}
                            label={"EMAIL"}
                        />
                        <LoginInput
                            color={WHITE}
                            label={"PASSWORD"}
                        />
                        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                            <ButtonIcon
                                color={WHITE}
                                dementions={24}
                                icon={require('../../assets/icons/snapchat-icon.png')}
                                label={"CONNECT"}
                            />
                            <ButtonIcon
                                color={WHITE}
                                dementions={24}
                                icon={require('../../assets/icons/facebook-icon.png')}
                                label={"CONNECT"}
                            />
                        </View>

                    </View>

                </View>

            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    containerBackground: {
        flex: 1,
        width: undefined,
        height: undefined,
        backgroundColor: 'transparent',
    },
    container: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 20,
        paddingLeft: 20,
        paddingTop: 30,
    },
});

export default SignUpScreen;