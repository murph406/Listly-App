import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ImageBackground,
    Animated,
    Dimensions,
    FlatList
} from 'react-native';
import { connect } from 'react-redux';
import * as SelectedDataActions from '../action-types/selected-data-action-types'
import { FlatGrid } from 'react-native-super-grid';

import AddNoteModal from '../modals/NewNoteModal';
import HomeScreenHeader from '../components/homescreen-header';
import XButton from '../ui-elements/circle-button';
import NoteCard from '../ui-elements/notecard-card';
import ModalBox from 'react-native-modalbox';

let { height, width } = Dimensions.get('window')

class HomeScreen extends Component {
    constructor(props) {
        super(props);

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

    cardSelected = (index) => {
        this.props.dispatch({
            type: SelectedDataActions.SET_CATAGORY,
            selectedCatagory: this.props.notes[index].notes
        })
        this.props.navigation.navigate('listScreen')
    }
    addCard() {
        console.log("Add Card")
    }

    render() {
        const animatedStyle = { opacity: this.animatedValue }
        return (
            <ImageBackground
                source={require('../../assets/drawing.png')}
                style={styles.containerBackground}>
                <Animated.View style={[styles.box, animatedStyle]}>
                    <HomeScreenHeader
                        header={"YOUR NOTES"}
                        //leftButton={}
                        rightButton={() => this.props.navigation.navigate('profile')}
                        isCheckAnimationEnabled={this.state.isCheckAnimationEnabled} />
                    <View style={{paddingRight: 8, paddingLeft: 8}}>
                        <FlatGrid
                            //itemDimension={130}
                            items={this.props.notes}
                            style={{ height: height, paddingTop: 116 }}
                            renderItem={({ item, index }) => (
                                <View>
                                    <NoteCard
                                        headerText={item.catagory}
                                        onPress={() => this.cardSelected(index)}
                                    />
                                </View>
                            )}
                        />

                    </View>
                    <View style={styles.bottomButton}>
                        <XButton
                            onPress={() => this.addCard()}
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
        alignItems: 'center'
    },
    bottomButton: {
        position: "absolute",
        bottom: 32,
        left: (width / 2) - 35,
        shadowOpacity: 0.2,
        shadowColor: 'black',
        shadowRadius: 8,
        shadowOffset: { width: 2, height: 0 },
    },
});

var mapStateToProps = state => {
    return {
        notes: state.user.user.notes,
        selectedCatagory: state.selectedData.selectedCatagory
    }
}

export default connect(mapStateToProps)(HomeScreen);
