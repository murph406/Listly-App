import React, { Component } from 'react';
import { StyleSheet, Text, View, Image,ImageBackground, ScrollView, Animated, Easing, Modal } from 'react-native';

import Input from '../components/input';

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
                    <Text>Sign Up</Text>
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