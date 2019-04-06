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
            onMoveShouldSetPanResponderCapture: () => true,
            onPanResponderGrant: (evt, gestureState) => this.props.shouldScroll(false),
            onPanResponderMove: Animated.event([null, { dx: this.translateX }]),
            onPanResponderRelease: (e, { vx, dx, vy, dy }) => {
                const screenWidth = Dimensions.get('window').width
                if (vx > 0.5 && vy < .5 || dx > 0.5 * screenWidth) {
                    Animated.timing(this.translateX, {
                        toValue: dx > 0 ? screenWidth : -screenWidth,
                        duration: 200
                    }).start(this.props.deleteCard);
                    
                        this.props.shouldScroll(true)
                  

                } else {
                    Animated.spring(this.translateX, {
                        toValue: 0,
                        bounciness: 10
                    }).start();
                    
                        this.props.shouldScroll(true)
                 
                }
                
            }
        })
    }

    render() {
        return (
            <Animated.View
                style={{ marginTop: 8, marginBottom: 8, transform: [{ translateX: this.translateX }], height: 100 }}
                {...this._panResponder.panHandlers}>

                <View style={styles.noteContainer}>
                    <View
                        onPress={() => { props.onPress() }}
                        style={{ flex: 1 }}>
                        <View style={styles.textContainer} >
                            <Text style={styles.bigText}>{this.props.value}</Text>
                            <Text style={styles.smallText2}>{this.props.info}</Text>
                        </View>

                    </View>
                </View>
            </Animated.View >
        )
    }
};

export default SwipeableCard;

const styles = StyleSheet.create({
    noteContainer: {
        height: 100,
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
        fontFamily: 'fontReg',
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
