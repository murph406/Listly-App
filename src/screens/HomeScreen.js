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
    FlatList
} from 'react-native';
import { connect } from 'react-redux';
import * as UserActionTypes from '../action-types/user-action-types';
import * as SelectedDataActions from '../action-types/selected-data-action-types'

import AddNoteModal from '../modals/NewNoteModal';
import HomeScreenHeader from '../components/homescreen-header';
import XButton from '../ui-elements/circle-button';
import NoteCard from '../ui-elements/notecard-card';
import ModalBox from 'react-native-modalbox';

let { height, width } = Dimensions.get('window')

class HomeScreen extends Component {
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
        //console.log(this.state.selectedCatagory)
        console.log(this.props.notes)
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
            note: note
        })
        console.log(this.props.notes)
        this.setState({ state: this.state })
        Animated.timing(this.animatedValue, {
            toValue: 1,
            duration: 400,
        }).start()
        this.refs.modal1.close()
    }

    shouldRender(index) {
        return this.state.closedIndices.indexOf(index) === -1
    }

    cardSelected = (index) => {
       
        // catagory = this.state.selectedCatagory.push(this.props.notes[index].notes)
         //console.log(this.props.notes[index].notes)
        this.props.dispatch({
            type: SelectedDataActions.SET_CATAGORY,
            selectedCatagory: this.props.notes[index].notes
        })
        this.props.navigation.navigate('listScreen')
    }

    render() {
        const animatedStyle = { opacity: this.animatedValue }
        return (
            <ImageBackground
                source={require('../../assets/drawing5.png')}
                style={styles.containerBackground}>
                <Animated.View style={[styles.box, animatedStyle]}>
                    <HomeScreenHeader
                        header={"YOUR NOTES"}
                        addNote={() => this.onOpenNoteModal()}
                        goProfile={() => this.props.navigation.navigate('profile')}
                        isCheckAnimationEnabled={this.state.isCheckAnimationEnabled} />
                    <View>
                        <FlatList
                            style={{ height: height, paddingTop: 108 }}
                            data={this.props.notes}
                            renderItem={({ item, index }) => (
                                <View style={styles.row}>
                                    <NoteCard
                                        headerText={item.catagory}
                                        onPress={() => this.cardSelected(index)}
                                    />
                                </View>
                            )} />
                    </View>
                    <View style={{position: "absolute", bottom: 32, left: (width / 2) -35 }}>
                        <XButton
                            //onPress={() => this.onDismiss()}
                            icon={require('../../assets/icons/AddFinished.png')}
                        />
                    </View>
                </Animated.View>
                <ModalBox
                    backdropOpacity={.2}
                    swipeToClose={true}
                    onClosed={() => this.onDismissModal()}
                    ref={"modal1"}>
                    <AddNoteModal
                        onDismiss={(value, info) => this.onAddNote(value, info)} />
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
    row: {
        //flex: 1,
        //flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between'

    },

});

var mapStateToProps = state => {
    return {
        notes: state.user.user.notes,
        selectedCatagory: state.selectedData.selectedCatagory
    }
}

export default connect(mapStateToProps)(HomeScreen);
