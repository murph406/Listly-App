import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    ImageBackground,
    Animated,
    Image,
    Dimensions,

} from 'react-native';
import PropTypes from 'prop-types';

import { PRIMARY, BLACK } from '../theme/colors';
import { Fonts } from '../theme/constant-styles';

import AddNoteModal from '../modals/NewNoteModal';
import ModalBox from 'react-native-modalbox';
import UserActionButton from '../ui-elements/user-action-button';

let { width, height } = Dimensions.get('window')
let HeaderHeight = (height * .2) - 45
let HeaderWidth = (width * .5) - 45

let ProfileImage = require('../../assets/icons/default-user-pic.png');

class ProfileScreen extends Component {
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
                style={styles.containerBackground}
            >

                <View style={{ position: 'absolute', top: HeaderHeight, right: HeaderWidth, zIndex: 1000, }}>
                    <View style={styles.photoContainer}>
                        <Image source={ProfileImage} style={styles.profileImg} />
                    </View>
                </View>

                <View style={styles.profileContainer}>
                    <Text style={[Fonts.headerText, { color: BLACK }]}>RYAN MURPHY</Text>


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
            padding: 20,
            paddingTop: 50,
            alignItems: 'center',
            justifyContent: 'center'
        },
    profileContainer: {
        height: height * .6,
        width: width * .9,
        backgroundColor: 'white',
        borderRadius: 16,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        padding: 16,
        paddingTop: 61
    },
    photoContainer: {
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        borderRadius: 96 / 2,
        padding: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 8,
    },
    profileImg: {
        width: 90,
        height: 90,
    },
    icon: {
        height: 30,
        width: 30,
    }

});

export default ProfileScreen;