import React, { Component } from 'react';
import { StyleSheet, Text, View, DatePickerIOS, TouchableOpacity } from 'react-native';

import { Fonts } from '../theme/constant-styles';
import { WHITE, PRIMARY, BLACK, GREEN } from '../theme/colors';

import DatePicker from 'react-native-picker-module'

let dateIcon = require('../../assets/icons/date-icon.png')



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
                            <Text style={[Fonts.label, { color: PRIMARY }]}>CANCLE</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.props.onConfirm(this.state.datePicked)}>
                            <Text style={[Fonts.label, { color: GREEN }]}>CONFIRM</Text>
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


//  <DatePicker
//                 style={{ width: props.width }}
//                 date={null}
//                 mode="date"
//                 iconSource={dateIcon}
//                 placeholder="select date"
//                 format="YYYY-MM-DD"
//                 minDate="2016-05-01"
//                 maxDate="2016-06-01"
//                 confirmBtnText="Confirm"
//                 cancelBtnText="Cancel"
//                 //onDateChange={(date) => { this.setState({ date: date }) }}
//                 customStyles={{
//                     dateIcon: {
//                         position: 'absolute',
//                         left: 0,
//                         top: 4,
//                         marginLeft: 0
//                     },
//                     dateInput: {
//                         marginLeft: 36,
//                         color: BLACK

//                     },
//                     dateTouchBody: {

//                     }
//                 }
//                 }
//             />