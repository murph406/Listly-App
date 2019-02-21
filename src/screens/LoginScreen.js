import React, { Component } from 'react';
import { StyleSheet, Text, View, Image,ImageBackground,TouchableOpacity, Animated, Modal, StatusBar } from 'react-native';


import Button from '../components/button';
import Input from '../components/input';
import Check from '../ui-elements/check';
import XButton from '../ui-elements/ex';

import * as Colors from '../theme/colors';


class LoginScreen extends Component {
    constructor(props) {
     super(props);
  
     this.state = {
        isModalPresented: false,
        isNameEntered: false,
        isPasswordEntered: false,
     }
    }

    componentWillMount() {
        this.animatedValue = new Animated.Value(0);
    }
    componentDidMount() {
        Animated.timing(this.animatedValue, {
            toValue: 1,
            duration: 4000,
        }).start()
    }

    onSignUpPress() {
        Animated.timing(this.animatedValue, {
            toValue: 0,
            duration: 300,
        }).start()
       this.setState({ isModalPresented: true})
    }

    onSignUpExit() {
        Animated.timing(this.animatedValue, {
            toValue: 1,
            duration: 500,
        }).start()
        this.setState({ isModalPresented: false})
        this.setState({ isNameEntered: false})
    }
    goHomeScreen() {
        this.props.navigation.navigate('home')
    }



    render() {
        const animatedStyle = { opacity: this.animatedValue}
        return (
        <ImageBackground
            source={require('../../assets/drawing.png')}
            style={styles.container}
        >
        <View>
        <StatusBar  barStyle="light-content" />
        <Animated.View
            style={[styles.box, animatedStyle]}
        >
            <View style={{alignItems: 'center'}}>
                <Text style={styles.headerText}>Listly</Text>
                <Check/>
            </View>
            
                <Input
                    label="Enter Email"
                    placeholder=" example@whatever.com"
                    Color={"white"}
                />
                <Input
                    label="Enter Password"
                    secureTextEntry={true}
                    placeholder=" password"
                    Color={"white"}
                />

                <View style={styles.signInButton}>
                    <Button
                        label="Sign In"
                        onPress={() => this.goHomeScreen()}
                    />
                </View>
                
                <View style={styles.textCountainer}>
                    <Text style={styles.smallText}>Dont have an Account?</Text>
                    <TouchableOpacity
                        style={styles.signUpButton}
                        onPress={() => this.onSignUpPress()}
                    > 
                        <Text style={styles.smallText}>Sign Up!</Text>
                    </TouchableOpacity>
                </View>

            </Animated.View>

           
        </View>
            <Modal
                visible={this.state.isModalPresented}
                animationType={'slide'}
                transparent={true}>
                <View style={{flex: 1,paddingRight: 20, paddingLeft: 20, justifyContent: 'center'}}>
                    <View style={styles.modalBox}>
                    <View styles={{flex: 1, alignItems: 'center',}}>
                    
                    {(this.state.isNameEntered)
                        ?   <View>
                                <View style={{alignItems: 'center', paddingBottom: 20}}>
                                    <Text style={styles.modalBigText}>Enter Password</Text>
                                </View>
                                <Input
                                label="Enter Email"
                                secureTextEntry={false}
                                Color={Colors.PRIMARYPURP}
                                
                                />
                                <Input
                                    label="Enter Password"
                                    secureTextEntry={true}
                                    Color={Colors.PRIMARYPURP}
                                    
                                />
                                <TouchableOpacity
                                    style={{alignItems: 'center', paddingTop: 50}}
                                    onPress={() => this.goHomeScreen()} 
                                >
                                <Image
                                    source={require('../../assets/icons/RightArrow-purp.png')}
                                    style={styles.modalIcon}
                                />
                                </TouchableOpacity>
                            </View>
                       
                   
                        : <View>
                            <View style={{alignItems: 'center', paddingBottom: 20}}>
                                <Text style={styles.modalBigText}>Lets Get Started!</Text>
                            </View>
                            
                            <Input
                                label="Enter First Name"
                                secureTextEntry={false}
                                Color={Colors.PRIMARYPURP}
                                
                            />
                            <Input
                                label="Enter Last Name"
                                secureTextEntry={false}
                                Color={Colors.PRIMARYPURP}
                                
                            />
                            <TouchableOpacity
                                style={{alignItems: 'center', paddingTop: 50}}
                                onPress={() => this.setState({ isNameEntered: true})} 
                            >
                                <Image
                                    source={require('../../assets/icons/RightArrow-purp.png')}
                                    style={styles.modalIcon}
                                />
                            </TouchableOpacity>
                        </View>
                    }
                    </View>
                    </View>
                    
                    <XButton
                        onPress={() => this.onSignUpExit()}
                    />
               
                </View>

            </Modal>
       </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: undefined,
        height: undefined,
        backgroundColor: 'transparent',
        padding: 20,
        paddingTop: 50,
    },
    headerText: {
        color: 'white',
        fontSize: 54,
        fontFamily: 'fontBold',
        paddingBottom: 20,
    },
    signInButton: {
        paddingTop: 30,
        paddingBottom: 260,
    },
    textCountainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    signUpButton: {
        borderBottomWidth: 2,
        borderColor: 'white',
    },
    medText: {
        fontFamily: 'fontReg',
        fontSize: 24,
        color: 'white',
    }, 
    smallText: {
        fontFamily: 'fontReg',
        fontSize: 20,
        color: 'white',
    }, 
    modalBox: {
        height: 400, 
        backgroundColor: 'white',
        borderRadius: 40,
        shadowOpacity: 0.2,
        shadowColor: 'white',
        shadowRadius: 8,
        shadowOffset:{ width: 2, height: 0 },
        padding: 20,
    }, 
    modalBigText: {
        fontFamily: 'fontBold',
        fontSize: 32,
        color: Colors.PRIMARYPURP,
    },
});

export default LoginScreen;