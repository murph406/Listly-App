import React, { Component } from 'react';
import { StyleSheet, Text, View, Image,ImageBackground, ScrollView, Animated, Easing, Modal } from 'react-native';

import Button from '../components/button';
import Input from '../components/input';
import Header from '../components/header';
import TextBox from '../components/text-box';

class SignUpScreen extends Component {
    constructor(props) {
     super(props);
  
     this.state = {
     }
    }
    componentWillMount() {
      
    }
    componentDidMount() {
   
    }

    render() {
        const animatedStyle = { height: this.animatedValue}
        return (
            <ImageBackground
                source={require('../../assets/drawing2.png')}
                style={styles.containerBackground}
            >
            <View style={styles.container}>
                <View style={{alignItems: 'center', marginTop: 30 }}>
                    <Text style={{fontFamily: 'fontBold', fontSize: 54, color: '#45286a'}}>Sign Up</Text>
                </View>
                
                <View style={{justifyContent: 'center', flex: 1}}>
                    <View
                        style={styles.box}
                    >
                        <Input/>
                    </View>
                </View> 
               
                
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
        paddingTop: 10,
        paddingRight: 20,
        paddingLeft: 20, 
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
        height: 400, 
        backgroundColor: 'white',
        borderRadius: 40,
        shadowOpacity: 0.2,
        shadowColor: 'black',
        shadowRadius: 8,
        shadowOffset:{ width: 2, height: 0 },
    }
});

export default SignUpScreen;