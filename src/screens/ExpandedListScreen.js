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

import * as Colors from '../theme/colors';
import AddNoteModal from '../modals/NewNoteModal';
import Header from '../components/header';
import SwipeCard from '../ui-elements/swipeable-card';
import ModalBox from 'react-native-modalbox';

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
    text: {
        color: 'black',
        fontSize: 54,
        fontFamily: 'fontBold'
    },
    font: {
        fontFamily: 'fontBold',
        fontWeight: 'bold',
        fontSize: 40,
        color: '#45286a'
    },
    icon: {
        height: 30,
        width: 30,
    }

});

export default ExpandedListScreen;