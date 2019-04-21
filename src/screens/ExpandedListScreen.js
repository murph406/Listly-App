import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Animated,
    StatusBar,
    Dimensions,

} from 'react-native';
import Header from '../components/header';
import { connect } from 'react-redux';
import * as UserActionTypes from '../action-types/user-action-types';

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
        let selectedNote = this.props.notes[this.props.selectedCatagory].notes[this.props.selectedNote]
        return (
            <ImageBackground
                source={require('../../assets/drawing.png')}
                style={styles.containerBackground}>
                <StatusBar  barStyle="light-content" />
                    <Header
                    color={WHITE}
                    goBack={() => this.props.navigation.navigate('listScreen')} />
                
                <View style={styles.container}>
                    <Text style={[Fonts.HeadlineText]}>{selectedNote.value}</Text>
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

var mapStateToProps = state => {
    return {
        notes: state.user.user.cards,
        selectedCatagory: state.selectedData.selctedCardIndex,
        selectedNote: state.selectedData.selctedNoteIndex
    }
}

export default connect(mapStateToProps)(ExpandedListScreen);