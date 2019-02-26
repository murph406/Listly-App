import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';


import * as Colors from '../theme/colors';

class LoadScreen extends Component {
  constructor() {
    super();

    this.state = {

    }
  }
  render() {
    return(
      <View style={styles.container} >
        <ActivityIndicator size="large" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: Colors.BACKGROUND_DARK_LIGHTGREY, 
    justifyContent: 'center', alignItems: 'center'
  }
});

export default LoadScreen;
