import React, { Component } from 'react';
import { LayoutAnimation, UIManager } from 'react-native';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    ImageBackground,
    FlatList,
    Animated,
    Modal,
    Dimensions,

} from 'react-native';
import PropTypes from 'prop-types';

import * as Colors from '../theme/colors';
import AddNoteModal from '../modals/HomeScreen-modal';

import Button from '../components/button';
import Input from '../components/input';
import Header from '../components/header';
import XButton from '../ui-elements/ex';
import SwipeCard from '../ui-elements/swipeable-card';

let { width, height } = Dimensions.get('window')

class HomeScreen extends Component {
    constructor(props) {
        super(props);

        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        this.shouldRender = this.shouldRender.bind(this);

        this.state = {
            notes: [
                { value: "Get Bananas", info: "Get em before there bad", index: 0 },
                { value: "Find a bitch", info: "Get em before there gone", index: 1 },
                { value: "EAT", info: "Something flame", index: 2 },
                { value: "SMOOKE", info: "and hit it", index: 3 },
            ],
            isModalPresented: false,
            noteInfo: null,
            noteValue: null,
            closedIndices: [],
            scroll: true
        }
    }

    componentWillMount() {
        this.animatedValue = new Animated.Value(1);
    }

    componentDidMount() {

    }

    addNote() {
        Animated.timing(this.animatedValue, {
            toValue: 0,
            duration: 300,
        }).start()
        this.setState({ isModalPresented: true })
    }

    onDismissModal(value, info) {
        var noteIndex = this.state.notes.length + 1
        var newNote = this.state.notes.concat({ value: value, info: info, index: noteIndex })

        this.setState({ notes: newNote })

        Animated.timing(this.animatedValue, {
            toValue: 1,
            duration: 400,
        }).start()
        this.setState({ isModalPresented: false })
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
                    <Header
                        addNote={() => this.addNote()} />

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
                                    deleteCard={() => {
                                        if ([...new Array(this.state.notes.length)].slice(i + 1, this.state.notes.length).some(this.shouldRender)) {
                                            LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
                                        }
                                        this.setState({
                                            closedIndices: [...this.state.closedIndices, i]
                                        })
                                    }
                                    } />
                            </View>)}
                    </ScrollView>

                </Animated.View>
                <Modal
                    animationType={'slide'}
                    transparent={true}
                    visible={this.state.isModalPresented}>
                    <AddNoteModal
                        onDismiss={(value, info) => this.onDismissModal(value, info)} />
                </Modal>
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
    text: {
        color: 'black',
        fontSize: 54,
        fontFamily: 'fontBold'
    },
    font: {
        fontFamily: 'fontBold',
        fontWeight: 'bold',
        fontSize: 40,
        color: '#45286a'
    },
    icon: {
        height: 30,
        width: 30,
    }

});

export default HomeScreen;

/* OMMGGGGGGGGGG

{(this.state.notes.map((model, index) => (
                            <View>
                                <TextBox
                                title={model.value}
                                text={model.info}
                                />

                            </View>
                        )))}
 dataSource={this.ds.cloneWithRows(this.state.listViewData)}
*/
