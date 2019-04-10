import React from 'react';
import { StyleSheet, Text, View, DatePickerIOS } from 'react-native';

import { Fonts } from '../theme/constant-styles';
import { WHITE, PRIMARY, BLACK } from '../theme/colors';

import DatePicker from 'react-native-datepicker'

let dateIcon = require('../../assets/icons/date-icon.png')

const Input = (props) => {
    return (

        <View style={styles.container}>
            {/* <DatePickerIOS
                date={}
                onDateChange={null}
            /> */}
        </View>
    )
};

export default Input;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
});


 // <DatePicker
            //     style={{ width: props.width }}
            //     date={null}
            //     mode="date"
            //     iconSource={dateIcon}
            //     placeholder="select date"
            //     format="YYYY-MM-DD"
            //     minDate="2016-05-01"
            //     maxDate="2016-06-01"
            //     confirmBtnText="Confirm"
            //     cancelBtnText="Cancel"
            //     //onDateChange={(date) => { this.setState({ date: date }) }}
            //     customStyles={{
            //         dateIcon: {
            //             position: 'absolute',
            //             left: 0,
            //             top: 4,
            //             marginLeft: 0
            //         },
            //         dateInput: {
            //             marginLeft: 36,
            //             color: BLACK

            //         },
            //         dateTouchBody: {

            //         }
            //     }
            //     }
            // />