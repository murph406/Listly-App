import React, { Component } from 'react';
import { LayoutAnimation, UIManager } from 'react-native';
import {
    StyleSheet,
    View,
    ScrollView,
    ImageBackground,
    Animated,
    Dimensions,

} from 'react-native';
import PropTypes from 'prop-types';


import { Fonts } from '../theme/constant-styles';
import { WHITE, PRIMARY, BLACK } from '../theme/colors';

import AddNoteModal from '../modals/NewNoteModal';
import HomeScreenHeader from '../components/homescreen-header';
import SwipeCard from '../ui-elements/swipeable-card';
import ModalBox from 'react-native-modalbox';

let { width, height } = Dimensions.get('window')

class HomeScreen extends Component {
    constructor(props) {
        super(props);

        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        this.shouldRender = this.shouldRender.bind(this);

        this.state = {
            notes: [
                { value: "Get Bananas", info: "Get em before there bad", index: 0 },
                { value: "NEED FOOD", info: "Right Now", index: 1 },
                { value: "EAT", info: "Something flame", index: 2 },
                { value: "SMOOKE", info: "and hit it", index: 3 },
            ],
            isModalPresented: false,
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

    }

    onOpenNoteModal() {
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

    onAddNote(value, info) {
        var noteIndex = this.state.notes.length + 1
        var newNote = this.state.notes.concat({ value: value, info: info, index: noteIndex })

        this.setState({ notes: newNote })

        Animated.timing(this.animatedValue, {
            toValue: 1,
            duration: 400,
        }).start()
        this.refs.modal1.close()
    }

    shouldRender(index) {
        return this.state.closedIndices.indexOf(index) === -1
    }

    render() {
        const animatedStyle = { opacity: this.animatedValue }
        return (
            <ImageBackground
                source={require('../../assets/drawing2.png')}
                style={styles.containerBackground}>
                <Animated.View style={[styles.box, animatedStyle]}>
                    <HomeScreenHeader
                        addNote={() => this.onOpenNoteModal()}
                        goProfile={() => this.props.navigation.navigate('profile')}
                        isCheckAnimationEnabled={this.state.isCheckAnimationEnabled} />

                    <ScrollView
                        style={{ height: height, paddingTop: 108 }}
                        scrollEnabled={this.state.scroll}>
                        {this.state.notes.map((title, i) => this.shouldRender(i) &&
                            <View
                                key={i}>                            
                                <SwipeCard
                                    value={title.value}
                                    info={title.info}
                                    shouldScroll={(value) => this.setState({scroll: value})}
                                    onPress={() => this.props.navigation.navigate('expandedList')}
                                    deleteCard={() => {
                                        this.setState({isCheckAnimationEnabled: true})
                                        if ([...new Array(this.state.notes.length)].slice(i + 1, this.state.notes.length).some(this.shouldRender)) {
                                            LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
                                        }
                                        this.setState({
                                            closedIndices: [...this.state.closedIndices, i]
                                        })
                                        setTimeout(() => {
                                            this.setState({isCheckAnimationEnabled: false})
                                        },1500)
                                    }
                                    } />
                            </View>)}
                    </ScrollView>

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
    }

});

export default HomeScreen;
