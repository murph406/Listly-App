import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ImageBackground,
    Animated,
    Dimensions,
} from 'react-native';
import { connect } from 'react-redux';
import * as SelectedDataActions from '../action-types/selected-data-action-types'
import { FlatGrid } from 'react-native-super-grid';
import * as UserActionTypes from '../action-types/user-action-types';

import HomeScreenHeader from '../components/homescreen-header';
import CircleButton from '../ui-elements/circle-button';
import NoteCard from '../ui-elements/notecard-card';
import ModalBox from '@murphyr6/swipe-modal';
import AddCardModal from '../modals/NewCardModal';

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
        console.log(this.props.cards)
    }

    onDismissModal() {
        Animated.timing(this.animatedValue, {
            toValue: 1,
            duration: 200,
        }).start()
        this.refs.CardModal.close()
    }

    cardSelected = (index) => {
        this.props.dispatch({
            type: SelectedDataActions.SET_CATAGORY,
            selectedCatagory: index
        })
        this.props.navigation.navigate('listScreen')
    }

    createCardModalSelected() {
        //console.log(this.props.selectedCatagory.notes)
        Animated.timing(this.animatedValue, {
            toValue: 0,
            duration: 300,
        }).start()
        this.refs.CardModal.open()
    }

    onAddCard(catagory) {
        console.log(catagory)
        this.props.dispatch({
            type: UserActionTypes.SET_CARD,
            cards: catagory
        })
        this.setState(this.state)
        Animated.timing(this.animatedValue, {
            toValue: 0,
            duration: 300,
        }).start()
        this.refs.CardModal.close()
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
                        //leftButton={}
                        rightButton={() => this.props.navigation.navigate('profile')}
                        isCheckAnimationEnabled={this.state.isCheckAnimationEnabled} />
                    <View style={{paddingRight: 8, paddingLeft: 8}}>
                        <FlatGrid
                            //itemDimension={130}
                            items={this.props.cards}
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
                        <CircleButton
                            color={"white"}
                            onPress={() => this.createCardModalSelected()}
                            icon={require('../../assets/icons/AddFinished.png')}
                        />
                    </View>
                </Animated.View>
                <ModalBox
                    backdropOpacity={.2}
                    swipeToClose={true}
                    onClosed={() => this.onDismissModal()}
                    ref={"CardModal"}>
                    <AddCardModal
                        onDismiss={(catagory) => this.onAddCard(catagory)} />
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
        cards: state.user.user.cards,
        //selectedCatagory: state.selectedData.selectedCatagory
    }
}

export default connect(mapStateToProps)(HomeScreen);
