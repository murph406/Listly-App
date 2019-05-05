import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import Input from '../ui-elements/login-input'
import CircleButton from '../ui-elements/circle-button';

import { Fonts, Colors } from '../theme/constant-styles';

class AddCardModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            catagory: null,
            currentDate: [null, null, null, null, null],
        }
    }

    componentDidMount() {
        this.setCurentDate()
    }

    onDismiss() {
        this.setCurentDate()
        var catagory = this.state.catagory
        var card = {
            catagory: catagory,
            dateCreated: this.state.currentDate,
            notes: []
        }
        //console.log(card)
        this.props.onDismiss(card)
    }
    setCurentDate() {
        let currentDate = []
        let dateParse = String(thisDate = new Date())
        currentDate = dateParse.split(' ', 5)
        this.setState({ currentDate: currentDate })
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.modalContainer}>

                    <View style={{ alignItems: 'center', paddingBottom: 20 }}>
                        <Text style={[Fonts.HeadlineText, { color: Colors.PRIMARY }]}>ADD A CARD</Text>
                    </View>
                    <Input
                        color={Colors.PRIMARY}
                        label={"TITLE"}
                        onChangeText={(catagory) => this.setState({ catagory })}
                    />
                    <View style={{paddingTop: 16}}/>
                
                    <View style={{ alignItems: 'center', paddingTop: 40 }}>
                        <CircleButton
                            color={Colors.PRIMARY}
                            onPress={() => this.onDismiss()}
                            icon={require('../../assets/icons/checkmark-white.png')}
                        />
                    </View>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        padding: 16,
    },
    modalContainer: {
        marginTop: 200,
        height: 300,
        padding: 16,
        backgroundColor: Colors.WHITE,
        borderRadius: 16,

    },
})

export default AddCardModal;
