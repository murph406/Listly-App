import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import ModalBox from 'react-native-modalbox';

import Input from '../ui-elements/login-input'
import DatePicker from './DatePickerModal';
import XButton from '../ui-elements/circle-button';

import { Fonts } from '../theme/constant-styles';
import { WHITE, PRIMARY } from '../theme/colors';

let { width, height } = Dimensions.get('window')

class AddNoteModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: null,
            info: null,
            dueDate: [null, null, null, null, null]
        }

    }

    onDismiss() {
        var value = this.state.value
        var info = this.state.info
        var time = this.state.dueDate
        var note = {
            value: value,
            info: info,
            time: time
        }
        //console.log(note)

        this.props.onDismiss(note)
    }
    onDateConfirm(date) {
        let dueDate = []
        let dateParse = String(date)
        //const [dayName, month, date, year, time] = this.state.dueDate.split(' ', 5)
        dueDate = dateParse.split(' ', 5)
        //console.log(dueDate)
        this.setState({ dueDate: dueDate })
        this.refs.modal2.close()
    }
    render() {

        //const [dayName, month, date, year, time] = this.state.dueDate.split(' ', 5)
        return (
            <View style={styles.container}>
                <View style={styles.modalContainer}>

                    <View style={{ alignItems: 'center', paddingBottom: 20 }}>
                        <Text style={[Fonts.HeadlineText, { color: WHITE }]}>ADD A NOTE</Text>
                    </View>
                    <Input
                        color={WHITE}
                        label={"TITLE"}
                        onChangeText={(value) => this.setState({ value })}
                    />
                    <View style={{paddingTop: 16}}/>
                    <Input
                        color={WHITE}
                        label={"DETAILS"}
                        onChangeText={(info) => this.setState({ info })}
                    />
                    <View style={{paddingTop: 16}}/>
                    <View style={styles.dateText}>
                        <TouchableOpacity
                            onPress={() => this.refs.modal2.open()}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={[Fonts.label, { color: WHITE }]}>DUE DATE</Text>
                                {(this.state.dueDate[0] != null)
                                    ? <Text style={[Fonts.label, { color: WHITE }]}>{this.state.dueDate[0]} {this.state.dueDate[1]} {this.state.dueDate[2]}, {this.state.dueDate[3]}</Text>
                                    : null
                                }
                            </View>
                        </TouchableOpacity>

                    </View>
                    <View style={{ alignItems: 'center', paddingTop: 260 }}>
                        <XButton
                            onPress={() => this.onDismiss()}
                            icon={require('../../assets/icons/checkmark.png')}
                        />
                    </View>

                </View>
                <ModalBox
                    backdropOpacity={0}
                    coverScreen={false}
                    animationDuration={0}
                    swipeToClose={false}
                    ref={"modal2"}>
                    <DatePicker
                        onConfirm={(date) => this.onDateConfirm(date)}
                        onExit={() => this.refs.modal2.close()}
                    />
                </ModalBox>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent'
    },
    modalContainer: {
        flex: 1,
        marginTop: 110,
        padding: 16,
        backgroundColor: PRIMARY,
        borderRadius: 16,

    },
    icon: {
        height: 20,
        width: 40,
    },
    dateText: {
        borderBottomColor: WHITE,
        borderBottomWidth: 2,
        paddingBottom: 16,
        paddingTop: 32
    }
})

export default AddNoteModal;
