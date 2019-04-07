import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { Fonts } from '../theme/constant-styles';
import { BLACK, PRIMARY } from '../theme/colors';

const TextBox = (props) => (

  <View 
    style={styles.container}>
    <View
      onPress={() => { props.onPress() }}
      style={{ flex: 1 }}>
      <View style={styles.textContainer} >
        <Text style={[Fonts.label, { color: BLACK }]}>{props.title}</Text>
        <Text style={[Fonts.medText, { color: BLACK }]}>{props.text}</Text>
      </View>

    </View>
  </View>
)
export default TextBox;

const styles = StyleSheet.create({
  container: {
    height: 100,
    borderRadius: 12,
    shadowOpacity: 0.2,
    shadowColor: 'black',
    shadowRadius: 8,
    shadowOffset: { width: 2, height: 0 },
    justifyContent: 'center',
    marginTop: 8,
    marginBottom: 8,
    marginRight: 20,
    marginLeft: 20,
    padding: 8,
    backgroundColor: 'white',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    margin: 16,
  },
});
