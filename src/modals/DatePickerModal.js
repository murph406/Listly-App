import React, { Component } from 'react';
import { StyleSheet, Text, View, DatePickerIOS, TouchableOpacity } from 'react-native';

import { Fonts, Colors } from '../theme/constant-styles';

class Input extends Component {
    constructor(props) {
        super(props);

        this.state = {
            datePicked: currentDate = new Date()
        }

    }
    onDateChange = (newDate) => {

        this.setState({ datePicked: newDate })
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={{ height: 260, justifyContent: 'center', backgroundColor: 'white', padding: 8 }}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableOpacity
                            onPress={() => this.props.onExit()}>
                            <Text style={[Fonts.label, { color: Colors.PRIMARY }]}>CANCLE</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.props.onConfirm(this.state.datePicked)}>
                            <Text style={[Fonts.label, { color: Colors.GREEN }]}>CONFIRM</Text>
                        </TouchableOpacity>
                    </View>
                    <DatePickerIOS
                        onDateChange={this.onDateChange}
                        date={this.state.datePicked}
                    />
                </View>


            </View>
        )
    }
};

export default Input;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'stretch',
    },
});