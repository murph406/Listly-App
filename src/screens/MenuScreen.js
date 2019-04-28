import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Animated } from 'react-native';
import ListlyText from '../ui-elements/listly-text';

import { PRIMARY, RED, WHITE, GREY, GREEN } from '../theme/colors';
import { Fonts } from '../theme/constant-styles';


let { width, height } = Dimensions.get('window')
let ScreenWidth = width * .6
let AnimationDuration = 300

class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            flag: false,
            isLogoutSelected: false,
            isSettingsSelected: false,
            selectedColor: RED,
            animatedValue: new Animated.Value(1),
            selectedAnimatedValue: new Animated.Value(0)
        }
    }

    componentWillMount() {
    }
    goHome() {
        this.props.navigation.navigate('home');
        this.props.navigation.closeDrawer();
    }
    goDisclamer() {
        this.props.navigation.navigate('disclaimer');
        this.props.navigation.closeDrawer();
    }

    onSelected(color, selectedOption) {
        if(selectedOption === 'logout') {
            this.setState({selectedColor: color, isLogoutSelected: true })
        } else {
            this.setState({selectedColor: color, isSettingsSelected: true })
        }
        Animated.timing(this.state.animatedValue, {
            toValue: 0,
            duration: AnimationDuration,
        }).start()
        setTimeout(() => {
            this.setState({ flag: true })
            Animated.timing(this.state.selectedAnimatedValue, {
                toValue: 1,
                duration: AnimationDuration,
            }).start()
        }, AnimationDuration)
    }

    onMenuGoBack() {
        Animated.timing(this.state.selectedAnimatedValue, {
            toValue: 0,
            duration: AnimationDuration,
        }).start()
        setTimeout(() => {
            this.setState({ flag: false, isLogoutSelected: false, isSettingsSelected: false })
            Animated.timing(this.state.animatedValue, {
                toValue: 1,
                duration: AnimationDuration,
            }).start()
        }, AnimationDuration)
        //setTimeout(() => {this.setState({ flag: false, isLogoutSelected: false })},AnimationDuration)
    }

    textFactory() {
        if (this.state.isLogoutSelected) {
            return (
                <View style={styles.selectedStyles}>
                    <View style={{ paddingBottom: 32, alignItems: 'center' }}>
                        <Text style={[Fonts.label, { color: WHITE, }]}>LOGOUT</Text>
                    </View>
                    <Text style={[Fonts.smallText, { color: WHITE }]}>Are you sure you want to logout?</Text>
                    <View style={{ paddingTop: 32, flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <TouchableOpacity
                            onPress={() => this.onMenuGoBack()}>
                            <Text style={[Fonts.label, { color: WHITE }]}>NO</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={[Fonts.label, { color: WHITE }]}>YES</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        } else {
            return (
            <View style={styles.selectedStyles}>
                  <View style={{ paddingBottom: 32, alignItems: 'center' }}>
                        <Text style={[Fonts.label, { color: WHITE, }]}>SETTINGS</Text>
                    </View>
                    <Text style={[Fonts.smallText, { color: WHITE }]}></Text>
                    <View style={{ paddingTop: 32, flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <TouchableOpacity
                            onPress={() => this.onMenuGoBack()}>
                            <Text style={[Fonts.label, { color: WHITE }]}>NO</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={[Fonts.label, { color: WHITE }]}>YES</Text>
                        </TouchableOpacity>
                    </View>
            </View>
            )
        }
    }

    render() {
        const animatedOpacity = { opacity: this.state.animatedValue }
        const selectedAnimatedOpacity = { opacity: this.state.selectedAnimatedValue }
        const animateColor = this.state.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [this.state.selectedColor, PRIMARY]
        })
        const animatedBackgroundColor = {
            backgroundColor: animateColor
        }
        return (
            <Animated.View style={[styles.container, animatedBackgroundColor]} >
                <View style={{ alignItems: 'center', height: height - 200 }}>
                    {(!this.state.flag)
                        ?
                        <Animated.View style={[styles.box, animatedOpacity]}>
                            <TouchableOpacity
                                onPress={() => this.goHome()}
                                style={{ paddingBottom: 32 }}>
                                <Text style={[Fonts.label, { color: WHITE }]}>PROFILE</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => this.onSelected(GREEN, 'settings')}
                                style={{ paddingBottom: 32 }}>
                                <Text style={[Fonts.label, { color: WHITE }]}>SETTINGS</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => this.onSelected(RED, 'logout')}
                                style={{ paddingBottom: 32 }}>
                                <Text style={[Fonts.label, { color: WHITE }]}>LOGOUT</Text>
                            </TouchableOpacity>
                        </Animated.View>
                        :
                        <Animated.View style={[styles.box, selectedAnimatedOpacity]}>
                            {this.textFactory()}
                        </Animated.View>
                    }
                    <View style={{ position: 'absolute', bottom: 48, alignItems: 'center' }}>
                        <ListlyText />
                        <TouchableOpacity
                            onPress={() => this.goDisclamer()}
                            style={{ borderBottomWidth: 1, borderColor: WHITE }}>
                            <Text style={[Fonts.smallText, { color: WHITE }]}>Disclamer</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Animated.View >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: height * .25,
    },
    box: {

    },
    selectedStyles: {
        paddingHorizontal: 16,

    }
})

export default Menu;