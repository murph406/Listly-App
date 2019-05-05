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
    AsyncStorage
} from 'react-native';
import { connect } from 'react-redux';
import * as UserActionTypes from '../action-types/user-action-types';
import * as SelectedDataActions from '../action-types/selected-data-action-types'

import AddNoteModal from '../modals/NewNoteModal';
import HomeScreenHeader from '../components/homescreen-header';
import SwipeCard from '../ui-elements/swipeable-card';
import ModalBox from '@murphyr6/swipe-modal';
import CircleButton from '../ui-elements/circle-button';
import { Backgrounds, Icons } from '../theme/constant-styles';

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
            closedIndices: [],
            scroll: true,
            isCheckAnimationEnabled: false,
            notes: null,
            shouldRedner: true
        }
    }

    componentWillMount() {
        this.animatedValue = new Animated.Value(1);
        //this.setNotes()
    }

    componentDidMount() {
        this.setNotes()
    }

    shouldComponentUpdate(prevProps, nextProps) {
        debugger
        if (!this.state.shouldRedner) {
            return false
        }
        return true
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
        this.saveDataLocal()
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
        //console.log('yuup',this.state.closedIndices.indexOf(index) === -1)
        //returns a boolin 
        return this.state.closedIndices.indexOf(index) === -1
    }

    saveDataLocal(noteIndex) {
        console.log(noteIndex)
        this.setState({ shouldRedner: false })
        this.props.dispatch({
            type: UserActionTypes.DELETE_NOTE,
            cardIndex: this.props.selectedCatagory,
            noteIndex: noteIndex
        })
        AsyncStorage.setItem('currentNotes', JSON.stringify(this.props.cards));
        this.setState({ shouldRender: true })
    }
    setNotes() {
        //sets notes to the local state
        //console.log(this.props.notes)
        this.setState({ notes: this.props.notes[this.props.selectedCatagory].notes })
    }

    render() {
        const animatedStyle = { opacity: this.animatedValue }
        return (
            <ImageBackground
                source={Backgrounds.SECONDARY}
                style={styles.containerBackground}>
                <Animated.View style={[styles.box, animatedStyle]}>
                    <HomeScreenHeader
                        color={'transparent'}
                        icon={Icons.BACK_PURP}
                        header={this.props.notes[this.props.selectedCatagory].catagory.toUpperCase()}
                        //addNote={() => this.onOpenNoteModal()}
                        leftButton={() => this.props.navigation.navigate('home')}
                        isCheckAnimationEnabled={this.state.isCheckAnimationEnabled} />
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        style={{ height: height, paddingTop: 108 }}
                        scrollEnabled={this.state.scroll}>
                        {(this.state.notes == null)
                            ? null
                            :
                            <View style={{ paddingBottom: 248 }}>
                                {this.state.notes.map((title, i) => this.shouldRender(i) &&
                                    <View
                                        key={i}>
                                        <SwipeCard
                                            value={title.value}
                                            info={title.info}
                                            time={title.time}
                                            shouldScroll={(value) => this.setState({ scroll: value })}
                                            onPress={() => this.selectedNote(i)}
                                            saveData={() => console.log('hello')}
                                            deleteCard={() => {
                                                LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
                                                Vibration.vibrate()
                                                this.setState({
                                                    isCheckAnimationEnabled: true,
                                                    closedIndices: [...this.state.closedIndices, i]
                                                })
                                                setTimeout(() => {
                                                    this.setState({ isCheckAnimationEnabled: false })
                                                    this.saveDataLocal(i)
                                                }, 1500)


                                            }} />
                                    </View>)}
                            </View>
                        }

                    </ScrollView>
                    <View style={styles.bottomButton}>
                        <CircleButton
                            color={'white'}
                            onPress={() => this.onOpenNoteModal()}
                            icon={Icons.CREATE} />
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
        left: (width / 2) - 35,
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
        selectedNote: state.selectedData.selctedNoteIndex,
        cards: state.user.user.cards,
    }
}

export default connect(mapStateToProps)(ListScreen);