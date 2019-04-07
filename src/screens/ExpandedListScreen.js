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
    icon: {
        height: 30,
        width: 30,
    }

});

export default ExpandedListScreen;