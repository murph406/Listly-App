import React from 'react';
import { StyleSheet, View } from 'react-native';

import Check from '../ui-elements/check'


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
  }
})
