import React, { Component } from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    Image, 
    ImageBackground, 
    ScrollView, 
    Animated, 
    Modal,
    TouchableOpacity,
} from 'react-native';

import Button from '../components/button';
import Input from '../components/input';
import Header from '../components/header';
import TextBox from '../components/text-box';
import XButton from '../ui-elements/ex';

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
        ],
        isModalPresented: false,
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
        this.setState({ isModalPresented: true})
    }

    onDismissModal() {
        Animated.timing(this.animatedValue, {
            toValue: 1,
            duration: 400,
        }).start()
        this.setState({ isModalPresented: false})
    }

    render() {
        const animatedStyle = { opacity: this.animatedValue}
        return (
            <ImageBackground
                source={require('../../assets/drawing2.png')}
                style={styles.containerBackground}
            >
            <Header
                title="Notes"
                onPress={() =>  this.addNote()}
            />
             
            <View style={styles.container}>
                <Animated.ScrollView 
                    style={[styles.box1, animatedStyle]}
                >  
                        {(this.state.notes.map((data, index) => (
                            <View>
                                <TextBox
                                    title={data.value}
                                    text={data.info}
                                />

                            </View>
                        )))}
                    
                </Animated.ScrollView>                  
            </View>
            <Modal
                visible={this.state.isModalPresented}
                animationType={'slide'}
                transparent={true}>
                <View style={{flex: 1,paddingRight: 20, paddingLeft: 20, justifyContent: 'center'}}>
                    <View style={styles.modalBox}>
                    <View styles={{flex: 1, alignItems: 'center',}}>
                        
                        <View style={{alignItems: 'center', paddingBottom: 20}}>
                             <Text style={styles.modalBigText}>Lets Add a Note</Text>
                        </View>

                        <Input
                        label="Your New Note"
                        secureTextEntry={false}
                        Color={Colors.PRIMARYPURP}
                        />
                        <Input
                        label="Description"
                        secureTextEntry={false}
                        Color={Colors.PRIMARYPURP}
                        />
                    </View>
                    </View>
                    
                    <XButton
                        onPress={() => this.onDismissModal()}
                        icon={require('../../assets/icons/checkmark.png')}
                    />
               
                </View>

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
    },
    modalBox: {
        height: 400, 
        backgroundColor: 'white',
        borderRadius: 40,
        shadowOpacity: 0.2,
        shadowColor: 'black',
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

export default HomeScreen;