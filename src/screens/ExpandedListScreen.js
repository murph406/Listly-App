import React, { Component } from 'react';
import { LayoutAnimation, UIManager } from 'react-native';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    ImageBackground,
    Animated,
    Modal,
    Dimensions,

} from 'react-native';
import PropTypes from 'prop-types';
import Header from '../components/header';

import { WHITE, BLACK } from '../theme/colors';
import { Fonts } from '../theme/constant-styles';

let { width, height } = Dimensions.get('window')

class ExpandedListScreen extends Component {
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
        return (
            <ImageBackground
                source={require('../../assets/drawing.png')}
                style={styles.containerBackground}>
                    <Header
                    color={WHITE}
                    goBack={() => this.props.navigation.navigate('home')} />
                
                <View style={styles.container}>
                    <Text style={[Fonts.HeadlineText]}>NOTE TITLE</Text>
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
        paddingLeft: 16,
        paddingRight: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        height: height * .75,
        width: width * .9,
        borderRadius: 20, 
        backgroundColor: WHITE,
        alignItems: 'center',
        padding: 16
    },
    icon: {
        height: 30,
        width: 30,
    }

});

export default ExpandedListScreen;