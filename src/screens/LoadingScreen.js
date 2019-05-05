import React, { Component } from 'react';
import {
    StyleSheet,
    ImageBackground,
    AsyncStorage
} from 'react-native';
import { connect } from 'react-redux';
import Spinner from '../components/spinner';
import * as firebase from 'firebase';
import * as UserActionTypes from '../action-types/user-action-types';
import fire from '../api/firebase'
import { Backgrounds } from '../theme/constant-styles';
import { store } from '../../App';

//store.getState()
//store.subscribe(listener) 

class LoadScreen extends Component {
        constructor(props) {
            super(props);

            this.state = {
                user: null
            }
        }

        componentDidMount() {
            this._authListener()
            //console.log(storeState)
        }


        _authListener() {
            fire.auth().onAuthStateChanged(async (user) => {
                console.log(user)
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
        //selectedCatagory: state.selectedData.selectedCatagory
    }
}

export default connect(mapStateToProps)(LoadScreen);