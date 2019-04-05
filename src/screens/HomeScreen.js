import React, { Component } from 'react';
import { BlurView } from 'expo';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    FlatList,
    Animated,
    Modal,
    Dimensions,
    PanResponder
} from 'react-native';
import PropTypes from 'prop-types';

import * as Colors from '../theme/colors';
import AddNoteModal from '../modals/HomeScreen-modal';

import Button from '../components/button';
import Input from '../components/input';
import Header from '../components/header';
import XButton from '../ui-elements/ex';

let { width, height } = Dimensions.get('window')

class HomeScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: [
                { value: "Get Bananas", info: "Get em before there bad", index: 0 },
                { value: "Find a bitch", info: "Get em before there gone", index: 1 },
                { value: "EAT", info: "Something flame", index: 2 },
                { value: "SMOOKE", info: "and hit it", index: 3 },
            ],
            isModalPresented: false,
            noteInfo: null,
            noteValue: null
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

    onDismissModal() {
        var noteIndex = this.state.notes.length
        var noteInfo = null
        var noteValue = null
        var newNote = this.state.notes.concat({ value: "Hello", info: "DID I", index: noteIndex })

        this.setState({ notes: newNote })

        Animated.timing(this.animatedValue, {
            toValue: 1,
            duration: 400,
        }).start()
        this.setState({ isModalPresented: false })
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
                    <FlatList
                        style={{ paddingTop: 116, height: height }}
                        data={this.state.notes}
                        renderItem={({ item }) => (
                            <View style={styles.noteContainer}>
                                <View
                                    onPress={() => { props.onPress() }}
                                    style={{ flex: 1 }}>
                                    <View style={styles.textContainer} >
                                        <Text style={styles.bigText}>{item.value}</Text>
                                        <Text style={styles.smallText2}>{item.info}</Text>
                                    </View>

                                </View>
                            </View>
                        )} />
                </Animated.View>
                <Modal
                    animationType={'slide'}
                    transparent={true}
                    visible={this.state.isModalPresented}>
                    <AddNoteModal
                        onDismiss={() => this.onDismissModal()} />
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
        //paddingTop: 90,
    },
    container: {

        //padding: 20,

    },
    text: {
        color: 'black',
        fontSize: 54,
        fontFamily: 'fontBold'
    },
    smallText: {
        fontFamily: 'fontReg',
        fontSize: 24,
        color: 'white',
    },
    noteContainer: {
        height: 100,
        borderRadius: 12,
        shadowOpacity: 0.2,
        shadowColor: 'black',
        shadowRadius: 8,
        shadowOffset: { width: 2, height: 0 },
        justifyContent: 'center',
        marginTop: 8,
        marginBottom: 8,
        marginRight: 20,
        marginLeft: 20,
        padding: 8,
        backgroundColor: 'white',
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        margin: 16,
    },
    smallText2: {
        fontSize: 18,
        color: 'black',
        fontFamily: 'fontReg',
    },
    bigText: {
        fontFamily: 'fontReg',
        fontSize: 24,
        color: 'black',
        marginBottom: 8
    },
    header: {
        paddingTop: 90,
        //backgroundColor: "transparent",
        justifyContent: 'center',
        //shadowOffset: { width: 0, height: 30 },
        //shadowRadius: 0.1,
        //shadowOpacity: 0.5,
        //shadowColor: 'white'
        //zIndex: 1000,
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


lskdnf;lkansc ka ckla vpka svk alkv ;akjvkajdv

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
