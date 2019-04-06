import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, PanResponder, Animated } from 'react-native';

class SwipeableCard extends Component {
    translateX = new Animated.Value(0);
    constructor(props) {
        super(props);

        this.state = {

        }
        this._panResponder = PanResponder.create({
            //onStartShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponderCapture: (evt, { vx, dx, vy, dy }) => {
                //console.log(vx)
                if (dx < 55 && dx > -55) {
                    return false
                } else {
                    this.props.shouldScroll(false)
                    return true
                }
            },
            onPanResponderGrant: (evt, gestureState) => this.props.shouldScroll(false),
            onPanResponderMove: Animated.event([null, { dx: this.translateX }]),
            onPanResponderRelease: (e, { vx, dx, vy, dy }) => {
                const screenWidth = Dimensions.get('window').width
                if (dx > 0.6 * screenWidth) {
                    Animated.timing(this.translateX, {
                        toValue: dx > 0 ? screenWidth : -screenWidth,
                        duration: 200
                    }).start(this.props.deleteCard);
                    setTimeout(() => {
                        this.props.shouldScroll(true)
                    }, 210)

                } else {
                    Animated.spring(this.translateX, {
                        toValue: 0,
                        bounciness: 10
                    }).start();
                    setTimeout(() => {
                        this.props.shouldScroll(true)
                    }, 210)
                }

            }
        })
    }

    render() {
        return (
            <Animated.View
                style={{ marginTop: 8, marginBottom: 8, transform: [{ translateX: this.translateX }], height: 80 }}
                {...this._panResponder.panHandlers}>

                <TouchableOpacity
                    style={styles.noteContainer}
                    activeOpacity={.95}
                    onPress={() => console.log("I PRESSED IT")}>
                    <View
                        onPress={() => { props.onPress() }}
                        style={{ flex: 1 }}>
                        <View style={styles.textContainer} >
                            <Text style={styles.bigText}>{this.props.value}</Text>
                            <Text style={styles.smallText2}>{this.props.info}</Text>
                        </View>

                    </View>
                </TouchableOpacity>
            </Animated.View >
        )
    }
};

export default SwipeableCard;

const styles = StyleSheet.create({
    noteContainer: {
        height: 80,
        borderRadius: 12,
        shadowOpacity: 0.2,
        shadowColor: 'black',
        shadowRadius: 8,
        shadowOffset: { width: 2, height: 0 },
        justifyContent: 'center',
        marginRight: 16,
        marginLeft: 16,
        padding: 8,
        backgroundColor: 'white',
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        margin: 16,
    },
    bigText: {
        fontFamily: 'fontBold',
        fontSize: 24,
        color: 'black',
        marginBottom: 8
    },
    smallText: {
        fontFamily: 'fontReg',
        fontSize: 24,
        color: 'white',
    },
});
