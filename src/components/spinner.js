import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

import Check from '../ui-elements/check'

import * as Colors from '../theme/colors';

const Spinner = (props) => {
  return (
    <View>
      <Check
        height={100}
        width={100} />
    </View>
  )
};

export default Spinner;

const styles = StyleSheet.create({
  spinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.PRIMARYPURP
  }
})
