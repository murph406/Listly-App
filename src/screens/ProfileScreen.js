import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Image,
    Dimensions,

} from 'react-native';
import PropTypes from 'prop-types';

import { Fonts, Colors, Backgrounds, Icons } from '../theme/constant-styles';

import Header from '../components/header';

let { width, height } = Dimensions.get('window')
let HeaderHeight = (height * .2) - 45
let HeaderWidth = (width * .5) - 45

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
                source={Backgrounds.PRIMARY}
                style={styles.containerBackground}
            >
                <Header
                    color={Colors.WHITE}
                    goBack={() => this.props.navigation.navigate('home')} />

                <View style={{ position: 'absolute', top: HeaderHeight, right: HeaderWidth, zIndex: 1000, }}>
                    <View style={styles.photoContainer}>
                        <Image source={Icons.DEFUALT_USER_PIC} style={styles.profileImg} />
                    </View>
                </View>

                <View style={styles.profileContainer}>
                    <Text style={[Fonts.HeadlineText, { color: Colors.BLACK }]}>RYAN MURPHY</Text>


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
        paddingTop: height * .2
    },
    profileContainer: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        padding: 16,
        paddingTop: 60
    },
    photoContainer: {
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        borderRadius: 96 / 2,
        padding: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
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