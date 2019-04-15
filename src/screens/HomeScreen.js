import React, { Component } from 'react';
import { LayoutAnimation, UIManager } from 'react-native';
import {
    StyleSheet,
    View,
    ScrollView,
    ImageBackground,
    Animated,
    Dimensions,
    Vibration
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as UserActionTypes from '../action-types/user-action-types';

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
                {
                         "index": 0,
                         "info": "MSN’s",
                         "time": [
                           "Sun",
                           "Apr",
                           "14",
                           "2019",
                           "23:25:05",
                         ],
                         "value": "Nan’s d",
                       },
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
        //console.log(this.props.notes)
    }

    onOpenNoteModal() {
        Animated.timing(this.animatedValue, {
            toValue: 0,
            duration: 300,
        }).start()
        this.refs.modal1.open()
        //Vibration.vibrate()
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
        //debugger
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
                        addNote={() => this.onOpenNoteModal()}
                        goProfile={() => this.props.navigation.navigate('profile')}
                        isCheckAnimationEnabled={this.state.isCheckAnimationEnabled} />

                    <ScrollView
                        style={{ height: height, paddingTop: 108 }}
                        scrollEnabled={this.state.scroll}>
                        {this.props.notes.map((title, i) => this.shouldRender(i) &&
                            <View
                                key={i}>
                                <SwipeCard
                                    value={title.value}
                                    info={title.info}
                                    time={title.time}
                                    shouldScroll={(value) => this.setState({ scroll: value })}
                                    onPress={() => this.props.navigation.navigate('expandedList')}
                                    deleteCard={() => {
                                        this.setState({ isCheckAnimationEnabled: true })
                                        if ([...new Array(this.state.notes.length)].slice(i + 1, this.state.notes.length).some(this.shouldRender)) {
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

var mapStateToProps = state => {
    return {
      notes: state.user.user.notes
    }
  }

export default connect(mapStateToProps)(HomeScreen);
