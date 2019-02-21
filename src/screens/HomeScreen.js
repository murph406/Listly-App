import React, { Component } from 'react';
import { StyleSheet, Text, View, Image,ImageBackground, ScrollView, Animated, Easing, StatusBar } from 'react-native';

import Button from '../components/button';
import Input from '../components/input';
import Header from '../components/header';
import TextBox from '../components/text-box';

import * as Colors from '../theme/colors';

class HomeScreen extends Component {
    constructor(props) {
     super(props);
  
     this.state = {
         notes: [
         {value: "Get Bananas", info: "Get em before there bad", index: 0},
         {value: "Get Bananas", info: "Get em before there bad", index: 1},
         {value: "Get Bananas", info: "Get em before there bad", index: 2},
         {value: "Get Bananas", info: "Get em before there bad", index: 3},
     ]}
    }
    componentWillMount() {
        this.animatedValue = new Animated.Value(1);
    }
    componentDidMount() {
        Animated.timing(this.animatedValue, {
            toValue: 150,
            duration: 3000,
            easing: Easing.bounce
        }).start()
    }

    render() {
        const animatedStyle = { height: this.animatedValue}
        return (
            <ImageBackground
                source={require('../../assets/drawing2.png')}
                style={styles.containerBackground}
            >
            <Header
                title="Notes"
            />
            <View style={styles.container}>
            
                <ScrollView>
                 {(this.state.notes.map((data, index) => (
                     <View>
                         <TextBox
                            title={data.value}
                            text={data.info}
                         />

                     </View>
                 )))}
                </ScrollView>
                
            </View>
            
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
    container: {
        flex: 1,
        //padding: 20,
        paddingTop: 10,
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
    box: {
        height: 100, 
        width: 100, 
        backgroundColor: 'black'
    }
});

export default HomeScreen;