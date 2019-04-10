import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import ListlyText from '../ui-elements/listly-text';

import { PRIMARY, BLACK, WHITE, GREY } from '../theme/colors';
import { Fonts } from '../theme/constant-styles';

let { width, height } = Dimensions.get('window')
let ScreenWidth = width * .6
class Menu extends Component {

    goHome() {
        this.props.navigation.navigate('home');
        this.props.navigation.closeDrawer();
    }
    goDisclamer() {
        this.props.navigation.navigate('disclaimer');
        this.props.navigation.closeDrawer(); 
    }

    render() {
        return (
            <View style={styles.container} >
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={() => this.goHome()}
                        style={{ paddingBottom: 32 }}>
                        <Text style={[Fonts.label, { color: WHITE }]}>PROFILE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => alert('SETTINGS ARE COMMING')}
                        style={{ paddingBottom: 32 }}>
                        <Text style={[Fonts.label, { color: WHITE }]}>SETTINGS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                     onPress={() => alert('LOGOUT IS COMMING')}
                    style={{ paddingBottom: 32 }}>
                        <Text style={[Fonts.label, { color: WHITE }]}>LOGOUT</Text>
                    </TouchableOpacity>
                    <View style={{paddingTop: 300,paddingBottom: 16, flexDirection: 'row'}}>
                       <ListlyText/>
                    </View>
                    <TouchableOpacity 
                    onPress={() => this.goDisclamer()}
                    style={{  borderBottomWidth: 1, borderColor: WHITE}}>
                        <Text style={[Fonts.smallText, { color: WHITE }]}>Disclamer</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: PRIMARY,
        paddingTop: height * .25,
    },
})

export default Menu;