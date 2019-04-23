import React, { Component } from 'react';
import { LayoutAnimation, UIManager } from 'react-native';
import {
    StyleSheet,
    View,
    ScrollView,
    ImageBackground,
    Animated,
    Dimensions,
    Vibration,
} from 'react-native';
import { connect } from 'react-redux';
import * as UserActionTypes from '../action-types/user-action-types';
import * as SelectedDataActions from '../action-types/selected-data-action-types'

import AddNoteModal from '../modals/NewNoteModal';
import HomeScreenHeader from '../components/homescreen-header';
import SwipeCard from '../ui-elements/swipeable-card';
import ModalBox from '@murphyr6/swipe-modal';
import CircleButton from '../ui-elements/circle-button';

let { height, width } = Dimensions.get('window')

class ListScreen extends Component {
    constructor(props) {
        super(props);

        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        this.shouldRender = this.shouldRender.bind(this);

        this.state = {
            selectedCatagory: [],
            isModalPresented: false,
            isCardSelected: false,
            noteInfo: null,
            noteValue: null,
            closedIndices: [],
            scroll: true,
            isCheckAnimationEnabled: false
        }
    }

    componentWillMount() {
        this.animatedValue = new Animated.Value(1);
    }

    componentDidMount() {
        console.log(this.props.selectedCatagory)
    }

    onOpenNoteModal() {
        console.log(this.props.selectedCatagory.notes)
        Animated.timing(this.animatedValue, {
            toValue: 0,
            duration: 300,
        }).start()
        this.refs.modal1.open()
    }

    onDismissModal() {
        Animated.timing(this.animatedValue, {
            toValue: 1,
            duration: 400,
        }).start()
        this.refs.modal1.close()
    }

    onAddNote(note) {
        this.props.dispatch({
            type: UserActionTypes.SET_NOTES,
            note: note,
            index: this.props.selectedCatagory
        })
        console.log(this.props.notes)
        this.setState({ state: this.state })
        Animated.timing(this.animatedValue, {
            toValue: 1,
            duration: 400,
        }).start()
        this.refs.modal1.close()
    }

    selectedNote(index) {
        console.log(index)
        this.props.dispatch({
            type: SelectedDataActions.SET_SELECTED_NOTE,
            selctedNoteIndex: index
        })
        this.props.navigation.navigate('expandedList')
    }

    shouldRender(index) {
        return this.state.closedIndices.indexOf(index) === -1
    }

    render() {
        const animatedStyle = { opacity: this.animatedValue }
        return (
            <ImageBackground
                source={require('../../assets/drawing5.png')}
                style={styles.containerBackground}>
                <Animated.View style={[styles.box, animatedStyle]}>
                    <HomeScreenHeader
                        color={'transparent'}
                        icon={require('../../assets/icons/back-icon.png')}
                        header={this.props.notes[this.props.selectedCatagory].catagory.toUpperCase()}
                        //addNote={() => this.onOpenNoteModal()}
                        leftButton={() => this.props.navigation.navigate('home')}
                        isCheckAnimationEnabled={this.state.isCheckAnimationEnabled} />
                    <ScrollView
                        style={{ height: height, paddingTop: 108 }}
                        scrollEnabled={this.state.scroll}>
                        {this.props.notes[this.props.selectedCatagory].notes.map((title, i) => this.shouldRender(i) &&
                            <View
                                key={i}>
                                <SwipeCard
                                    value={title.value}
                                    info={title.info}
                                    time={title.time}
                                    shouldScroll={(value) => this.setState({ scroll: value })}
                                    onPress={() => this.selectedNote(i)}
                                    deleteCard={() => {
                                        this.setState({ isCheckAnimationEnabled: true })
                                        if ([...new Array(this.props.notes.length)].slice(i + 1, this.props.notes.length).some(this.shouldRender)) {
                                            LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
                                        }
                                        Vibration.vibrate()
                                        this.setState({
                                            closedIndices: [...this.state.closedIndices, i]
                                        })
                                        setTimeout(() => {
                                            this.setState({ isCheckAnimationEnabled: false })
                                        }, 1500)
                                    }
                                    } />
                            </View>)}
                    </ScrollView>
                    <View style={styles.bottomButton}>
                        <CircleButton
                            color={'white'}
                            onPress={() => this.onOpenNoteModal()}
                            icon={require('../../assets/icons/AddFinished.png')}/>
                    </View>
                </Animated.View>
                <ModalBox
                    backdropOpacity={.2}
                    swipeToClose={true}
                    onClosed={() => this.onDismissModal()}
                    ref={"modal1"}>
                    <AddNoteModal
                        onDismiss={(note) => this.onAddNote(note)} />
                </ModalBox>
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
    },
    bottomButton: {
        position: "absolute", 
        bottom: 32, 
        left: (width / 2) -35,    
        shadowOpacity: 0.2,
        shadowColor: 'black',
        shadowRadius: 8,
        shadowOffset: { width: 2, height: 0 },
    }

});

var mapStateToProps = state => {
    return {
        notes: state.user.user.cards,
        selectedCatagory: state.selectedData.selctedCardIndex,
        selectedNote: state.selectedData.selctedNoteIndex
    }
}

export default connect(mapStateToProps)(ListScreen);