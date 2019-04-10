import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions
} from 'react-native';
import PropTypes from 'prop-types';

import Input from '../ui-elements/login-input'
import DatePicker from '../ui-elements/date-picker';
import XButton from '../ui-elements/circle-button';

import { Fonts } from '../theme/constant-styles';
import { WHITE, PRIMARY } from '../theme/colors';

let { width, height } = Dimensions.get('window')

class AddNoteModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: null,
            info: null
        }

    }

    onDismiss() {
        var value = this.state.value
        var info = this.state.info
        console.log(value, info)

        this.props.onDismiss(value, info)
    }

    render() {
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
                    <Input
                        color={WHITE}
                        label={"DETAILS"}
                        onChangeText={(info) => this.setState({ info })}
                    />
                    <View>
                        <DatePicker
                        width={width - 32} />
                    </View>
                    <View style={{ alignItems: 'center', paddingTop: 120}}>
                        <XButton
                            onPress={() => this.onDismiss()}
                            icon={require('../../assets/icons/checkmark.png')}
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
})

export default AddNoteModal;
