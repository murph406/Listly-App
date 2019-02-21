import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator  } from 'react-native';

const Spinner = (props) => {
  return (
    <View style={styles.spinner}>
      <ActivityIndicator
        size={props.size || 'large'}
        color= '#a094b7'
      />
    </View>
  )
};

export default Spinner;

const styles = StyleSheet.create({
  spinner: {

  }
})
