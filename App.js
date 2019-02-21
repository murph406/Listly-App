import React, { Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Font } from 'expo';

import AppNavigator from './src/screens/app-navigator';
import Spinner from './src/components/spinner';

export default class App extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = { 
      fontLoaded: false 
    };
  }
  
  async componentDidMount() {
      await Font.loadAsync({
        'fontReg': require('./assets/font/RobotoCondensed-Regular.ttf'),
        'fontBold': require('./assets/font/RobotoCondensed-Bold.ttf'),
        'fontLight': require('./assets/font/RobotoCondensed-Light.ttf'),
      });
      this.setState({ fontLoaded: true });
      console.log('fonts are loaded');
    }  

  render() {
   
      if (this.state.fontLoaded) {
        return ( 
          <AppNavigator/>
        );
      }
      return (
        <View>
          <Spinner/>
        </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
