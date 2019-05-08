import React, { Component } from 'react';
import {
    StyleSheet,
    ImageBackground,
    AsyncStorage
} from 'react-native';
import { connect } from 'react-redux';
import Spinner from '../components/spinner';
import { Asset } from 'expo';
import * as UserActionTypes from '../action-types/user-action-types';
import { fire, fireDB } from '../api/firebase'
import { Backgrounds, Icons } from '../theme/constant-styles';
import storeProvider from '../api/redux-store';

class LoadScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        }
    }

    async componentDidMount() {
        await this._cacheResourcesAsync()
        this._authListener()
    }

     _authListener() {
        //console.log('DARKMODE',this.reduxState.user.darkModeEnabled)
         fire.auth().onAuthStateChanged(async (user) => {
            console.log("USER", user)
            if (user) {
                await Promise.all([
                    this.getCurrentNotes(),
                    this.setState({ user: user })
                ])
                this.props.navigation.navigate('home')
            } else {
                this.setState({ user: null })
                this.props.navigation.navigate('login')
            }
        })
    }

    async _cacheResourcesAsync() {
        const images = [
            Backgrounds.PRIMARY,
            Backgrounds.SECONDARY,
            Backgrounds.GREEN,
            Backgrounds.BUBBLES,
            Backgrounds.BUBBLES_2,
            Icons.RIGHT_ARROW,
            Icons.CREATE,
            Icons.EXIT,
            Icons.DEFUALT_USER_PIC,
            Icons.CHECKMARK_PURP,
            Icons.CHECKMARK_WHITE,
            Icons.BACK_PURP,
            Icons.BACK_WHITE,
            Icons.LISTLY_CHECK,
            Icons.LISTLY_CHECK_ANIMATED,
        ];
        // Asset.loadAsync takes an array and this way we can load the images in parallel
        await Asset.loadAsync(images);
    }

    getCurrentNotes = async () => {
        //gets current Notes from local device storage
        try {
            const currentNotes = await AsyncStorage.getItem('currentNotes');
            if (currentNotes !== null) {
                let parsedData = JSON.parse(currentNotes)
                parsedData.map(card => {
                    this.props.dispatch({
                        type: UserActionTypes.SET_CARD,
                        cards: card
                    })
                })
            }
            else {
                console.log('Current No Data Saved')
            }
        } catch (error) {
            // Error retrieving data
            console.log(error.message);
        }
    }

    render() {
        const animatedStyle = { opacity: this.animatedValue }
        return (
            <ImageBackground
                source={Backgrounds.PRIMARY}
                style={styles.container}>
                <Spinner />
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
});
var mapStateToProps = state => {
    return {
        cards: state.user.user.cards,
    }
}

export default connect(mapStateToProps)(LoadScreen);